import React, { useEffect, useState, useRef } from "react";
import "./meet_us.css";
import Profile from "../components/profile";

const MeetUs = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Meet the Team</h2>
            <div style={styles.profiles}>
                <Profile
                    imageUrl={
                        "https://cdn.discordapp.com/emojis/1210125145101041685.gif?size=96&quality=lossless"
                    }
                    description={"this is capoo 1"}
                />
                <Profile
                    imageUrl={
                        "https://cdn.discordapp.com/emojis/1154952884119670844.gif?size=128&quality=lossless"
                    }
                    description={"this is capoo2"}
                />
                <Profile
                    imageUrl={
                        "https://cdn.discordapp.com/emojis/876294478640594974.gif?size=512"
                    }
                    description={"this is capoo3"}
                />
                <Profile
                    imageUrl={
                        "https://cdn.discordapp.com/emojis/1142664037910454283.gif?size=96&quality=lossless"
                    }
                    description={"this is capoo3"}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Set container height to full viewport height
    },
    header: {
        fontSize: "24px",
        marginBottom: "20px",
        position: "absolute",
    },
    // profiles: {
    //     display: "flex",
    //     flexWrap: "wrap",
    //     justifyContent: "center",
    //     gap: "20px",
    // },
};

export default MeetUs;

//  DRAGGING COMPONENTS STUFF <- SCRAPPED FOR NOW
//   const containerRef = useRef(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(null);
//   const [startY, setStartY] = useState(null);
//   const [translateX, setTranslateX] = useState(0);
//   const [translateY, setTranslateY] = useState(0);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const [containerHeight, setContainerHeight] = useState(0);
//   const handleMouseDown = (event) => {
//     setIsDragging(true);
//     setStartX(event.clientX);
//     setStartY(event.clientY);
//   };
//   const handleMouseMove = (event) => {
//     if (!isDragging) return;
//     const deltaX = event.clientX - startX;
//     const deltaY = event.clientY - startY;
//     setTranslateX((prevTranslateX) => prevTranslateX + deltaX);
//     setTranslateY((prevTranslateY) => prevTranslateY + deltaY);
//     setStartX(event.clientX);
//     setStartY(event.clientY);
//   };
//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };
//   const handleResize = () => {
//     const { clientWidth, clientHeight } = containerRef.current;
//     setContainerWidth(clientWidth);
//     setContainerHeight(clientHeight);
//   };
//   // Listen to resize events to update container dimensions
//   React.useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   // Looping effect for X axis
//   React.useEffect(() => {
//     const loopX = () => {
//       if (containerWidth !== 0) {
//         if (translateX > containerWidth) {
//           console.log(containerWidth);
//           setTranslateX(0);
//         } else if (translateX < 0) {
//           setTranslateX(containerWidth - 70);
//         }
//       }
//     };
//     const interval = setInterval(loopX, 100);
//     return () => clearInterval(interval);
//   }, [containerWidth, translateX]);
//   // Looping effect for Y axis
//   React.useEffect(() => {
//     const loopY = () => {
//       if (containerHeight !== 0) {
//         if (translateY > containerHeight) {
//           setTranslateY(0);
//         } else if (translateY < 0) {
//           setTranslateY(containerHeight - 40);
//         }
//       }
//     };
//     const interval = setInterval(loopY, 100);
//     return () => clearInterval(interval);
//   }, [containerHeight, translateY]);
//   return (
//     <div
//       ref={containerRef}
//       style={{
//         width: "99vw",
//         height: "99vh",
//         margin: "2px",
//         border: "2px solid black",
//         overflow: "hidden",
//         position: "relative",
//       }}
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       <div
//         style={{
//           width: "fit-content",
//           height: "fit-content",
//           display: "flex",
//           flexDirection: "column",
//           transform: `translate(${translateX}px, ${translateY}px)`,
//           //   transition: "transform 0.1s ease-out",
//           position: "absolute",
//         }}
//       >
//         <div style={{ margin: "10px", backgroundColor: "lightblue" }}>
//           Item 1
//         </div>
//       </div>
//     </div>
//   );
