import React from "react";
import { useState } from "react";
import "./SignUp.css";
import Modal from "../../Components/modal/Modal";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState();
  const [showFaildModal, setShowFaildModal] = useState();
  const [successModalData, setSuccessModalData] = useState({
    display: "block",
    bgColor: "#a9b284",
  });
  const [failedModalData, setFailedModalData] = useState({
    display: "block",
    bgColor: "#820000",
  });
  const navigate = useNavigate();

  function setLocalStorage(studentGrade) {
    let studentData = {
      userName: userName,
      grade: studentGrade,
    };
    localStorage.setItem("studentData", JSON.stringify(studentData));
  }

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
          let studentGrade = data[0].grade;
          setLocalStorage(studentGrade);
          setShowSuccessModal(true);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setShowFaildModal(true);
        }
      });
  }

  return (
    <div className="SignUp-container">
      {showSuccessModal && (
        <Modal {...successModalData}>شما با موفقیت وارد شدید</Modal>
      )}
      {showFaildModal && (
        <Modal {...failedModalData}>اطلاعات وارد شده صحیح نمی باشد</Modal>
      )}
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