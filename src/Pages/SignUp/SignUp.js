import React from "react";
import { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  function clickBtn() {
    let userData = {
      userName: userName,
      passWord: passWord,
    };

    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          console.log("found");
        } else {
          console.log("not found");
        }
      });
  }

  return (
    <div className="SignUp-container">
      <div className="SignUp-wrapper SignUp-wrapper-max-768 SignUp-wrapper-min-768">
        <div className="SignUp-title SignUp-title-max-768 SignUp-title-min-768">
          ثبت نام
        </div>
        <div className="SignUp-input-wrapper">
          <input
            type="text"
            className="SignUp-input SignUp-input-max-768 SignUp-input-min-768 SignUp-input-user"
            placeholder="نام کاربری"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="SignUp-input-wrapper">
          <input
            type="text"
            className="SignUp-input SignUp-input-max-768 SignUp-input-min-768 SignUp-input-pass"
            placeholder="رمز عبور"
            value={passWord}
            onChange={(event) => setPassWord(event.target.value)}
          />
        </div>
        <button
          className="SignUp-button SignUp-button-max-768 SignUp-button-min-768"
          onClick={clickBtn}
        >
          ثبت نام
        </button>
      </div>
    </div>
  );
}
