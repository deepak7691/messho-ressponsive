import React, { useContext } from "react";
import { MyAppContext } from "./App";
import "../Styles/profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(MyAppContext);

  const handleSignUp = () => {
    setLogin(false);
    const profileDetails = document.getElementById("user");
    profileDetails.classList.add("user");
    navigate("/register");
  };

  const handleblur = () =>{
    const profileDetails = document.getElementById("user");
    profileDetails.classList.remove("user");
  }

  const handleLogout = () => {
    setLogin(false);
    navigate("/login");
  };
  return (
    <>
      {login ? (
        <div className="profiles" onBlur={handleblur}>
          <h4 className="prop">{localStorage.getItem("name")}</h4>
          <p className="prop ptag">{localStorage.getItem("phone")}</p>
          <button className="prop btnA" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="profiles">
          <h4 className="prop">Hello User</h4>
          <p className="prop ptag">To access your Meesho account</p>
          <button className="prop btnA" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      )}
    </>
  );
}

export default Profile;
