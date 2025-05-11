import React from "react";
import "./Usage.css";
import { useState } from "react";
import NavBar from "../../Components/navbar/NavBar";
import Footer from "../../Components/footer/Footer";

export default function Usage() {
  const [cardInfo, setCardInfo] = useState([
    {
      id: 1,
      title: "PDF آموزشی نهم متوسطه",
      bgColor: "#a9b284",
      link: "./pdfs/9.pdf",
    },
    {
      id: 2,
      title: "PDF آموزشی دهم انسانی",
      bgColor: "#ebcbb1",
      link: "./pdfs/10ens.pdf",
    },
    {
      id: 3,
      title: "PDF آموزشی یازدهم انسانی",
      bgColor: "#a9b284",
      link: "./pdfs/11ens.pdf",
    },
    {
      id: 4,
      title: "PDF آموزشی دوازدهم انسانی",
      bgColor: "#d1aa65",
      link: "./pdfs/12ens.pdf",
    },
    {
      id: 5,
      title: "PDF آموزشی دهم ریاضی",
      bgColor: "#ebcbb1",
      link: "./pdfs/10riazi.pdf",
    },
    {
      id: 6,
      title: "PDF آموزشی یازدهم ریاضی",
      bgColor: "#a9b284",
      link: "./pdfs/11riazi.pdf",
    },
    {
      id: 7,
      title: "PDF آموزشی دوازدهم ریاضی",
      bgColor: "#d1aa65",
      link: "./pdfs/12riazi.pdf",
    },
    {
      id: 8,
      title: "PDF آموزشی دهم تجربی",
      bgColor: "#ebcbb1",
      link: "./pdfs/10taj.pdf",
    },
    {
      id: 9,
      title: "PDF آموزشی یازدهم تجربی",
      bgColor: "#a9b284",
      link: "./pdfs/11taj.pdf",
    },
    {
      id: 10,
      title: "PDF آموزشی دوازدهم تجربی",
      bgColor: "#d1aa65",
      link: "./pdfs/12taj.pdf",
    },
  ]);

  return (
    <>
      <NavBar />
      <section className="container" dir="rtl">
        <div className="Usage-container Usage-container-max-768 Usage-container-min-768 Usage-container-min-1024 Usage-container-min-1280 Usage-container-min-1920">
          {cardInfo.map((info) => (
            <div className="Usage-card" key={info.id}>
              <div
                className="Usage-card-title Usage-card-title-max-768 Usage-card-title-min-768"
                style={{ backgroundColor: info.bgColor }}
              >
                {info.title}
              </div>
              <div className="Usage-btn-container Usage-btn-container-max-768 Usage-btn-container-min-768">
                <a
                  href={info.link}
                  download
                  className="Usage-btn Usage-btn-max-768 Usage-btn-min-768"
                >
                  دانلود
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}