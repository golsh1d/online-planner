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
    setIsLogin(false);
  }, []);

  return (
    <nav
      className="NavBar-container NavBar-container-max-768 NavBar-container-min-768"
      dir="rtl"
    >
      <div className="NavBar-right">
        <div className="NavBar-img-container NavBar-img-container-min-768 NavBar-img-container-min-1024 NavBar-img-container-min-1280 NavBar-img-container-min-1920">
          <img src="./Img/logo.jpg" alt="logo" />
        </div>
        <ul className="NavBar-menu">
          <li className="NavBar-list-item-min-1920 NavBar-list-item-min-1280 NavBar-list-item-min-1024 NavBar-list-item-min-768">
            <Link
              className="NavBar-links NavBar-links-min-1920 NavBar-links-min-1280 NavBar-links-min-1024 NavBar-links-min-768"
              to="/"
            >
              صفحه اصلی
            </Link>
          </li>
          <li className="NavBar-list-item-min-1920 NavBar-list-item-min-1280 NavBar-list-item-min-1024 NavBar-list-item-min-768">
            <Link
              className="NavBar-links NavBar-links-min-1920 NavBar-links-min-1280 NavBar-links-min-1024 NavBar-links-min-768"
              to="/product"
            >
              محصولات
            </Link>
          </li>
          <li className="NavBar-list-item-min-1920 NavBar-list-item-min-1280 NavBar-list-item-min-1024 NavBar-list-item-min-768">
            <Link
              className="NavBar-links NavBar-links-min-1920 NavBar-links-min-1280 NavBar-links-min-1024 NavBar-links-min-768"
              to="/usage"
            >
              آموزش
            </Link>
          </li>
          {isLogin && (
            <li className="NavBar-list-item-min-1920 NavBar-list-item-min-1280 NavBar-list-item-min-1024 NavBar-list-item-min-768">
              <Link
                className="NavBar-links NavBar-links-min-1920 NavBar-links-min-1280 NavBar-links-min-1024 NavBar-links-min-768"
                to="/onlinePlanner"
              >
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
              <PersonIcon className="NavBar-user-icon NavBar-user-icon-min-1280 NavBar-user-icon-min-768" />
              <div className="NavBar-logout NavBar-logout-min-1280 NavBar-logout-min-768">
                <LogoutIcon className="NavBar-logout-icon NavBar-logout-icon-min-1280 NavBar-logout-icon-min-768" />
                <span>خروج</span>
              </div>
            </div>
          </>
        ) : (
          <Link
            to="/signUp"
            className="NavBar-links NavBar-links-min-1920 NavBar-links-min-1280 NavBar-links-min-1024 NavBar-links-min-768 NavBar-signup-container"
          >
            <span>ثبت نام</span>
            <LoginIcon className="NavBar-login-icon NavBar-login-icon-min-1920 NavBar-login-icon-min-1280 NavBar-login-icon-min-1024 NavBar-login-icon-min-768" />
          </Link>
        )}
      </div>
    </nav>
  );
}
