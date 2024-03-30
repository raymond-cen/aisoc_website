import { useRef, useEffect } from "react";
import * as THREE from "three";

const DraggableSphere = () => {
  const renderer = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const sphere = useRef(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    // Renderer setup
    renderer.current = new THREE.WebGLRenderer();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.current.domElement);

    // Camera setup
    camera.current = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.current.position.set(0, 0, 100);
    camera.current.lookAt(0, 0, 0);

    // Scene setup
    scene.current = new THREE.Scene();

    // Sphere setup
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const materialYellow = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const materialBlue = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const half1 = new THREE.Mesh(geometry, materialYellow);
    const half2 = new THREE.Mesh(geometry, materialBlue);
    half1.position.x = -7.5;
    half2.position.x = 7.5;

    sphere.current = [half1, half2];
    scene.current.add(half1);
    scene.current.add(half2);

    // Event listeners
    const onMouseDown = (event) => {
      event.preventDefault();
      const intersects = getIntersects(event.clientX, event.clientY);
      if (intersects.length > 0) {
        const { object } = intersects[0];
        object.userData.dragging = true;
        const intersection = intersects[0].point;
        const offset = intersection.sub(object.position);
        object.userData.offset = offset;
      }
    };

    const onMouseMove = (event) => {
      event.preventDefault();
      const intersects = getIntersects(event.clientX, event.clientY);
      if (intersects.length > 0) {
        const { object } = intersects[0];
        if (object.userData.dragging === true) {
          const intersection = intersects[0].point;
          const newPosition = intersection.sub(object.userData.offset);
          object.position.copy(newPosition);
          renderer.current.render(scene.current, camera.current);
        }
      }
    };

    const onMouseUp = (event) => {
      event.preventDefault();
      sphere.current.forEach((s) => {
        if (s.userData.dragging === true) {
          s.userData.dragging = false;
        }
      });
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    // Clean up function
    return () => {
      document.body.removeChild(renderer.current.domElement);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const getIntersects = (clientX, clientY) => {
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    mouse.current.set(x, y);
    raycaster.current.setFromCamera(mouse.current, camera.current);
    return raycaster.current.intersectObjects(sphere.current, true);
  };

  return null;
};
export default DraggableSphere;
