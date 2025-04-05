import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginIcon from "@mui/icons-material/Login";

export default function NavBar() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    setIsLogin(true);
  }, []);

  return (
    <nav className="NavBar-container" dir="rtl">
      <div className="NavBar-right">
        <div className="NavBar-img-container">
          <img src="./Img/logo.jpg" alt="logo" />
        </div>
        <ul className="NavBar-menu">
          <li className="NavBar-list-item">
            <Link className="NavBar-links" to="/">
              صفحه اصلی
            </Link>
          </li>
          <li className="NavBar-list-item">
            <Link className="NavBar-links" to="/product">
              محصولات
            </Link>
          </li>
          <li className="NavBar-list-item">
            <Link className="NavBar-links" to="/usage">
              آموزش
            </Link>
          </li>
          {isLogin && (
            <li className="NavBar-list-item">
              <Link className="NavBar-links" to="/onlinePlanner">
                برنامه
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="NavBar-left">
        <Link to="/signUp" className="NavBar-links NavBar-signup">
          <span>ثبت نام</span>
          <LoginIcon
            style={{ fontSize: "30px" }}
            className="NavBar-login-icon"
          />
        </Link>
      </div>
    </nav>
  );
}
