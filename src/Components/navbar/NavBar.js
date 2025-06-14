import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
// icons
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import EditCalendarRoundedIcon from "@mui/icons-material/EditCalendarRounded";

export default function NavBar() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    let studentData = {
      userName: "userName",
      grade: "12taj",
    };

    localStorage.setItem("studentData", JSON.stringify(studentData));

    setIsLogin(true);

    // let studentData = JSON.parse(localStorage.getItem("studentData"));

    // if (studentData) {
    //   setIsLogin(true);
    // } else {
    //   setIsLogin(false);
    // }
  }, []);

  let sideNav = useRef();
  let overLay = useRef();

  function showSideNav() {
    sideNav.current.style.transform = "translateX(0)";
    overLay.current.style.display = "block";
  }

  function hideSideNav() {
    sideNav.current.style.transform = "translateX(-300px)";
    overLay.current.style.display = "none";
  }

  function logOut() {
    localStorage.clear();
    setIsLogin(false);
  }

  function getThePlan() {
    let studentData = JSON.parse(localStorage.getItem("studentData"));

    if (studentData.grade === "12taj") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/tajrobi3.html`,
        "_blank"
      );
    } else if (studentData.grade === "11taj") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/tajrobi2.html`,
        "_blank"
      );
    } else if (studentData.grade === "10taj") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/tajrobi1.html`,
        "_blank"
      );
    } else if (studentData.grade === "12ens") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/ensani3.html`,
        "_blank"
      );
    } else if (studentData.grade === "11ens") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/ensani2.html`,
        "_blank"
      );
    } else if (studentData.grade === "10ens") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/ensani1.html`,
        "_blank"
      );
    } else if (studentData.grade === "12riazi") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/riazi3.html`,
        "_blank"
      );
    } else if (studentData.grade === "11riazi") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/riazi2.html`,
        "_blank"
      );
    } else if (studentData.grade === "10riazi") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/riazi1.html`,
        "_blank"
      );
    } else if (studentData.grade === "nohom") {
      window.open(
        `${process.env.PUBLIC_URL}/plannerPages/nohom.html`,
        "_blank"
      );
    }
  }

  return (
    <>
      <nav
        className="NavBar-container NavBar-container-max-768 NavBar-container-min-768"
        dir="rtl"
      >
        <div className="NavBar-right">
          <div className="NavBar-img-container NavBar-img-container-min-768 NavBar-img-container-min-1024 NavBar-img-container-min-1280 NavBar-img-container-min-1920">
            <img src={`${process.env.PUBLIC_URL}/Img/logo.jpg`} alt="logo" />
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
                <span
                  className="NavBar-links NavBar-links-min-1920 NavBar-links-min-1280 NavBar-links-min-1024 NavBar-links-min-768"
                  onClick={getThePlan}
                >
                  برنامه
                </span>
              </li>
            )}
          </ul>
        </div>
        <div className="NavBar-left">
          {isLogin ? (
            <>
              <div className="NavBar-logout-container">
                <PersonIcon className="NavBar-user-icon NavBar-user-icon-min-1280 NavBar-user-icon-min-768" />
                <div
                  className="NavBar-logout NavBar-logout-min-1280 NavBar-logout-min-768"
                  onClick={logOut}
                >
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
      <nav
        className="NavBar-sm-container NavBar-sm-container-max-768 NavBar-sm-container-min-768"
        dir="rtl"
      >
        <div className="NavBar-sm-img-container">
          <img src={`${process.env.PUBLIC_URL}/Img/logo.jpg`} alt="logo" />
        </div>
        <MenuIcon className="NavBar-sm-menu-icon" onClick={showSideNav} />
        <div ref={sideNav} className="NavBar-side-container">
          <div className="NavBar-side-logo-container">
            <div className="NavBar-side-img-container">
              <img src={`${process.env.PUBLIC_URL}/Img/logo.jpg`} alt="logo" />
            </div>
          </div>
          <ul className="NavBar-side-menu-container">
            <li className="NavBar-side-list-item">
              <Link to="/" className="NavBar-side-links">
                <HomeRoundedIcon className="NavBar-side-icon" />
                <span>صفحه اصلی</span>
              </Link>
            </li>
            <li className="NavBar-side-list-item">
              <Link to="/product" className="NavBar-side-links">
                <LocalGroceryStoreRoundedIcon className="NavBar-side-icon" />
                <span>محصولات</span>
              </Link>
            </li>
            <li className="NavBar-side-list-item">
              <Link to="/usage" className="NavBar-side-links">
                <PictureAsPdfRoundedIcon className="NavBar-side-icon" />
                <span>آموزش</span>
              </Link>
            </li>
            {isLogin && (
              <li className="NavBar-side-list-item">
                <span onClick={getThePlan} className="NavBar-side-links">
                  <EditCalendarRoundedIcon className="NavBar-side-icon" />
                  <span>برنامه</span>
                </span>
              </li>
            )}
          </ul>
          {isLogin ? (
            <div className="NavBar-side-logout-container" onClick={logOut}>
              <LogoutIcon className="NavBar-side-icon" />
              <span>خروج</span>
            </div>
          ) : (
            <div className="NavBar-side-login-container">
              <Link to="/signUp" className="NavBar-side-links">
                <LoginIcon className="NavBar-side-icon" />
                <span>ثبت نام</span>
              </Link>
            </div>
          )}
        </div>
        <div ref={overLay} className="overLay" onClick={hideSideNav}></div>
      </nav>
    </>
  );
}
