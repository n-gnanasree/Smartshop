import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("shopsmartUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("shopsmartUser");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👤 User Profile</h2>

      {user ? (
        <>
          <h3>Name: {user.name || "User"}</h3>
          <h3>Email: {user.email}</h3>

          <button style={btn} onClick={handleLogout}>
            🔒 Logout
          </button>
        </>
      ) : (
        <h3>No User Logged In</h3>
      )}
    </div>
  );
}

const btn = {
  padding: "10px 20px",
  background: "red",
  color: "white",
  border: "none",
  marginTop: "20px"
};

export default Profile;
