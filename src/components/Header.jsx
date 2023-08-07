import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import meeshoLogo from "../Images/meeshoLogo.png";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "../Styles/header.css";
import { MyAppContext } from "./App";
import Profile from "./Profile";

function Header() {
  const navigate = useNavigate();
  const { inputValue, setInputValue, count } = useContext(MyAppContext);

  const handleNavigate = (category) => {
    navigate(`/homeReplace/${category}`);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const handleInputChange = (e) => {
    navigate("/");
    setInputValue(e.target.value);
  };

  const showProfile = () => {
    const profileDetails = document.getElementById("user");
    profileDetails.classList.remove("user");
  };

  const hideProfile = () => {
    const profileDetails = document.getElementById("user");
    profileDetails.classList.add("user");
  };

  return (
    <>
    <div className="containermain">
      <header className="header">
        <div className="left">
          <img src={meeshoLogo} onClick={navigateHome} alt="logo"  className="logo"/>
          <input
            className="input-search"
            type="text"
            placeholder="Try Saree, Kurti or Search by Product Code"
            value={inputValue}
            onChange={handleInputChange}
          
          />
        </div>
        <div className="right-side">
          <div className="profilepart" onClick={showProfile}>
            <div className="profileicon">
              <Person2OutlinedIcon fontSize="medium"  />
            </div>
            <div className="profile">Profile</div>
          </div>
          <div className="profilepart">
            <div className="cartIcon">
              <AddShoppingCartOutlinedIcon
                fontSize="medium"
                onClick={goToCart}
              />
              {count > 0 && <span className="counter">{count}</span>}{" "}
            </div>
            <div className="cart">Cart</div>
          </div>
        </div>
      </header>

      <header className="header2">
        <ul className="items">
          <li className="li" onClick={() => handleNavigate("women-ethnic")}>Women Ethnic</li>
          <li className="li"onClick={() => handleNavigate("women-western")}>Women Western</li>
          <li className="li"onClick={() => handleNavigate("men")}>Men</li>
          <li className="li"onClick={() => handleNavigate("kids")}>Kids</li>
          <li className="li"onClick={() => handleNavigate("home")}>Home & Kitchen</li>
          <li className="li"onClick={() => handleNavigate("beauty")}>Beauty & Health</li>
          <li className="li"onClick={() => handleNavigate("jewellery")}> Jewellery & Accessories</li>
          <li className="li"onClick={() => handleNavigate("bags")}>Bags & Footwear</li>
          <li className="li"onClick={() => handleNavigate("electronics")}>Electronics</li>
        </ul>
      </header>

      <div id="user" className="user" onMouseLeave={hideProfile}>
        <Profile />
      </div>
      </div>
    </>
  );
}

export default Header;
