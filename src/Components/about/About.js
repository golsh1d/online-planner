import React from "react";
import "./About.css";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const [firstAboutSectionIsVisible, setFirstAboutSectionIsVisible] =
    useState(false);
  const [secondAboutSectionIsVisible, setSecondAboutSectionIsVisible] =
    useState(false);
  const [thirdAboutSectionIsVisible, setThirdAboutSectionIsVisible] =
    useState(false);
  const [forthAboutSectionIsVisible, setForthAboutSectionIsVisible] =
    useState(false);

  let firstAboutSection = useRef();
  let secondAboutSection = useRef();
  let thirdAboutSection = useRef();
  let forthAboutSection = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const firstAboutSectionTop =
        firstAboutSection.current.getBoundingClientRect().top;
      const secondAboutSectionTop =
        secondAboutSection.current.getBoundingClientRect().top;
      const thirdAboutSectionTop =
        thirdAboutSection.current.getBoundingClientRect().top;
      const forthAboutSectionTop =
        forthAboutSection.current.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (firstAboutSectionTop < height && firstAboutSectionTop > 0) {
        setFirstAboutSectionIsVisible(true);
      } else {
        setFirstAboutSectionIsVisible(false);
      }

      if (secondAboutSectionTop < height && secondAboutSectionTop > 0) {
        setSecondAboutSectionIsVisible(true);
      } else {
        setSecondAboutSectionIsVisible(false);
      }

      if (thirdAboutSectionTop < height && thirdAboutSectionTop > 0) {
        setThirdAboutSectionIsVisible(true);
      } else {
        setThirdAboutSectionIsVisible(false);
      }

      if (forthAboutSectionTop < height && forthAboutSectionTop > 0) {
        setForthAboutSectionIsVisible(true);
      } else {
        setForthAboutSectionIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container">
      <div
        className="About-container About-container-max-768 About-container-min-768"
        dir="rtl"
      >
        <div className="About-title About-title-max-768 About-title-min-768 About-title-min-1024 About-title-min-1280 About-title-min-1920">
          داستان ما
        </div>
        <div
          ref={firstAboutSection}
          className="About-section About-section-first About-section-max-768 About-section-min-768"
        >
          <div className="About-section-text About-section-text-max-768 About-section-text-min-768">
            <div className="About-section-text-title About-section-text-title-max-768 About-section-text-title-min-768">
              چطور به ایده ی برنامه ریز آنلاین رسیدیم؟
            </div>
            <div className="About-section-text-des About-section-text-des-max-768 About-section-text-des-min-768">
              ما و همکارانمون همیشه این دغدغه رو داشتیم که چطور دانش‌آموزان
              می‌تونن توی کمترین زمان، یک برنامه درسی استاندارد و اصولی داشته
              باشن. خیلی از دانش‌آموزا ساعت‌ها وقت می‌ذارن تا یه برنامه مناسب
              بنویسن، اما یا زمان‌بندی‌شون دقیق نیست یا نمی‌دونن چطور درس‌ها رو
              متعادل پخش کنن. همین شد که به این فکر افتادیم یه راه‌حل هوشمند
              طراحی کنیم؛ جایی که دانش‌آموز فقط اطلاعاتش رو وارد کنه و در کمترین
              زمان، یه برنامه کاملاً استاندارد و شخصی‌سازی‌شده بگیره!
            </div>
          </div>
          <div
            className={`About-section-img About-section-img-max-768 About-section-img-min-768 ${
              firstAboutSectionIsVisible && "slide-right"
            }`}
          >
            <img src={`${process.env.PUBLIC_URL}/Img/finalOpenBook.png`} alt="" />
          </div>
        </div>
        <div
          ref={secondAboutSection}
          className="About-section About-section-second About-section-max-768 About-section-min-768"
        >
          <div
            className={`About-section-img About-section-img-max-768 About-section-img-min-768 ${
              secondAboutSectionIsVisible && "slide-left"
            }`}
          >
            <img src={`${process.env.PUBLIC_URL}/Img/finalHandWriting2.png`} alt="" />
          </div>
          <div className="About-section-text About-section-text-max-768 About-section-text-min-768">
            <div className="About-section-text-title About-section-text-title-max-768 About-section-text-title-min-768">
              برنامه‌ریزی درسی، دقیق و بدون دردسر!
            </div>
            <div className="About-section-text-des About-section-text-des-max-768 About-section-text-des-min-768">
              برنامه‌ریز آنلاین ما بر اساس برنامه راهبردی آزمون‌های کانون فرهنگی
              آموزشی قلم‌چی طراحی شده. یعنی دانش‌آموزایی که توی این آزمون‌ها
              شرکت می‌کنن، می‌تونن مطمئن باشن که دقیقاً طبق مباحث آزمون‌های
              پیشِ‌رو پیش می‌رن. این یعنی دیگه نیازی نیست خودشون رو درگیر چیدن
              جدول‌های پیچیده کنن یا نگران این باشن که آیا همه مطالب رو پوشش
              دادن یا نه!
            </div>
          </div>
        </div>
        <div className="About-img-between-section-container About-img-between-section-container-max-768 About-img-between-section-container-min-768">
          <img src={`${process.env.PUBLIC_URL}/Img/lamp.png`} alt="lamp" />
        </div>
        <div
          ref={thirdAboutSection}
          className="About-section About-section-third About-section-max-768 About-section-min-768"
        >
          <div className="About-section-text About-section-text-max-768 About-section-text-min-768">
            <div className="About-section-text-title About-section-text-title-max-768 About-section-text-title-min-768">
              چند کلیک ساده تا یه برنامه حرفه‌ای!
            </div>
            <div className="About-section-text-des About-section-text-des-max-768 About-section-text-des-min-768">
              یکی از بزرگ‌ترین مزیت‌های این ابزار اینه که دانش‌آموز بدون نیاز به
              ساعت‌ها وقت گذاشتن، فقط با چند کلیک و وارد کردن یه سری اطلاعات
              اولیه، برنامه درسی دو هفته آینده‌ش رو دریافت می‌کنه. دیگه خبری از
              استرسِ "حالا چی بخونم؟" یا "چقدر برای هر درس وقت بذارم؟" نیست، چون
              برنامه‌ریز آنلاین همه اینا رو برات حساب می‌کنه.
            </div>
          </div>
          <div
            className={`About-section-img About-section-img-max-768 About-section-img-min-768 ${
              thirdAboutSectionIsVisible && "slide-right"
            }`}
          >
            <img src={`${process.env.PUBLIC_URL}/Img/finalOnlineStuding.png`} alt="" />
          </div>
        </div>
        <div
          ref={forthAboutSection}
          className="About-section About-section-forth About-section-max-768 About-section-min-768"
        >
          <div
            className={`About-section-img About-section-img-max-768 About-section-img-min-768 ${
              forthAboutSectionIsVisible && "slide-left"
            }`}
          >
            <img src={`${process.env.PUBLIC_URL}/Img/finalTeacher2.png`} alt="" />
          </div>
          <div className="About-section-text About-section-text-max-768 About-section-text-min-768">
            <div className="About-section-text-title About-section-text-title-max-768 About-section-text-title-min-768">
              تجربه‌ی مشاوران برتر، در اختیار همه
            </div>
            <div className="About-section-text-des About-section-text-des-max-768 About-section-text-des-min-768">
              ما توی طراحی این برنامه از تجربه‌ی مشاورین حرفه‌ای کنکور استفاده
              کردیم تا مطمئن بشیم برنامه‌ای که به دست دانش‌آموز می‌رسه، کاملاً
              اصولی و استاندارده. در واقع، هر برنامه‌ای که دریافت می‌کنی، بر
              پایه دانش و تجربه‌ی متخصص‌های این حوزه طراحی شده، تا تو فقط روی
              درس خوندن تمرکز کنی و نتیجه بگیری. این برنامه برای این ساخته شده
              که مسیر درس خوندنت راحت‌تر، منظم‌تر و بدون استرس بشه. وقتشه که تو
              هم امتحانش کنی.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}