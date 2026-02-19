import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    if (isSignup && !user.name) {
      alert("Enter name");
      return;
    }

    // Save user in localStorage
    localStorage.setItem("shopsmartUser", JSON.stringify(user));

    alert(isSignup ? "Signup Successful 🎉" : "Login Successful ✅");

    navigate("/home");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>{isSignup ? "Signup" : "Login"} Page</h2>

      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            style={input}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          style={input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          style={input}
        />

        <br />
        <button style={btn}>
          {isSignup ? "Signup" : "Login"}
        </button>
      </form>

      <p onClick={() => setIsSignup(!isSignup)} style={{ cursor: "pointer" }}>
        {isSignup
          ? "Already have account? Login"
          : "New user? Signup"}
      </p>
    </div>
  );
}

const input = {
  display: "block",
  margin: "10px",
  padding: "10px",
  width: "250px"
};

const btn = {
  padding: "10px 20px",
  background: "green",
  color: "white",
  border: "none"
};

export default Login;

