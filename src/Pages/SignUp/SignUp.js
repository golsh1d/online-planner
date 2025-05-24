import React from "react";
import "./SignUp.css";

export default function SignUp() {
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
          />
        </div>
        <div className="SignUp-input-wrapper">
          <input
            type="text"
            className="SignUp-input SignUp-input-max-768 SignUp-input-min-768 SignUp-input-pass"
            placeholder="رمز عبور"
          />
        </div>
        <button className="SignUp-button SignUp-button-max-768 SignUp-button-min-768">
          ثبت نام
        </button>
      </div>
    </div>
  );
}