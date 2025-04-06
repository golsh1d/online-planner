import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// icons
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

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
        {isLogin ? (
          <>
            <div className="NavBar-logout-container">
              <PersonIcon
                style={{ fontSize: "40px" }}
                className="NavBar-user-icon"
              />
              <div className="NavBar-logout">
                <LogoutIcon
                  style={{ fontSize: "20px" }}
                  className="NavBar-logout-icon"
                />
                <span>خروج</span>
              </div>
            </div>
          </>
        ) : (
          <Link to="/signUp" className="NavBar-links NavBar-signup-container">
            <span>ثبت نام</span>
            <LoginIcon
              style={{ fontSize: "30px" }}
              className="NavBar-login-icon"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}
