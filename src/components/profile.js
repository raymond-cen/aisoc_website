import React from "react";

function Profile({ imageUrl, description }) {
    return (
        <div style={styles.container}>
            <img src={imageUrl} alt="Description" style={styles.image} />
            <div style={styles.description}>{description}</div>
        </div>
    );
}

const styles = {
    container: {
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        // objectFit: "cover",
    },
    image: {
        width: "100%",
        height: "auto",
        borderRadius: "8px",
        marginBottom: "10px",
    },
    description: {
        fontSize: "16px",
        color: "#333",
    },
};

export default Profile;
