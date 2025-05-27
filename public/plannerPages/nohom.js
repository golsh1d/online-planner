let mathStartPage = document.querySelector("#math-start-page");
let mathEndPage = document.querySelector("#math-end-page");
let mathTitle = document.querySelector("#math-title");
let mathModule = document.querySelector("#math-module");
let oloomStartPage = document.querySelector("#oloom-start-page");
let oloomEndPage = document.querySelector("#oloom-end-page");
let oloomTitle = document.querySelector("#oloom-title");
let oloomModule = document.querySelector("#oloom-module");
let farsiStartPage = document.querySelector("#farsi-start-page");
let farsiEndPage = document.querySelector("#farsi-end-page");
let farsiTitle = document.querySelector("#farsi-title");
let farsiModule = document.querySelector("#farsi-module");
let negareshStartPage = document.querySelector("#negaresh-start-page");
let negareshEndPage = document.querySelector("#negaresh-end-page");
let negareshIncluded = document.querySelector("#negaresh-included");
let arabiStartPage = document.querySelector("#arabi-start-page");
let arabiEndPage = document.querySelector("#arabi-end-page");
let arabiTitle = document.querySelector("#arabi-title");
let arabiModule = document.querySelector("#arabi-module");
let payamStartPage = document.querySelector("#payam-start-page");
let payamEndPage = document.querySelector("#payam-end-page");
let payamTitle = document.querySelector("#payam-title");
let payamModule = document.querySelector("#payam-module");
let motaleatStartPage = document.querySelector("#motaleat-start-page");
let motaleatEndPage = document.querySelector("#motaleat-end-page");
let motaleatTitle = document.querySelector("#motaleat-title");
let motaleatModule = document.querySelector("#motaleat-module");
let zabanStartPage = document.querySelector("#zaban-start-page");
let zabanEndPage = document.querySelector("#zaban-end-page");
let zabanTitle = document.querySelector("#zaban-title");
let zabanModule = document.querySelector("#zaban-module");
let btn = document.querySelector(".form-btn");
let shanbe1day = document.querySelector(".shanbe1");
let yekShanbe1day = document.querySelector(".yek-shanbe1");
let doShanbe1day = document.querySelector(".do-shanbe1");
let seShanbe1day = document.querySelector(".se-shanbe1");
let chaharShanbe1day = document.querySelector(".chahar-shanbe1");
let panjShanbe1day = document.querySelector(".panj-shanbe1");
let jome1day = document.querySelector(".jome1");
let shanbe2day = document.querySelector(".shanbe2");
let yekShanbe2day = document.querySelector(".yek-shanbe2");
let doShanbe2day = document.querySelector(".do-shanbe2");
let seShanbe2day = document.querySelector(".se-shanbe2");
let chaharShanbe2day = document.querySelector(".chahar-shanbe2");
let panjShanbe2day = document.querySelector(".panj-shanbe2");
let jome2day = document.querySelector(".jome2");
//clear btn
let clearBtn = document.querySelector(".clear-btn");

//functions
let mathPageCounterReturnedData = function mathPageCounter() {
  let mathEndPageNumbered = Number(mathEndPage.value);
  let mathStartPageNumbered = Number(mathStartPage.value);
  pageNumber = mathEndPageNumbered - mathStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyMathReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `ریاضی (${
        mathTitle.value
      }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
        mathStartPageNumbered + dailyMathReading
      }`,
      secondPart: `ریاضی (${mathTitle.value}) از صفحه ${
        mathStartPageNumbered + dailyMathReading
      } تا صفحه ${mathStartPageNumbered + dailyMathReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyMathReadingFloor = Math.ceil(pageNumber / 2);
    let dailyMathReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `ریاضی (${
        mathTitle.value
      }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
        mathStartPageNumbered + dailyMathReadingFloor
      }`,
      secondPart: `ریاضی (${mathTitle.value}) از صفحه ${
        mathStartPageNumbered + dailyMathReadingFloor
      } تا صفحه ${
        mathStartPageNumbered + dailyMathReadingFloor + dailyMathReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let oloomPageCounterReturnedData = function oloomPageCounter() {
  let oloomEndPageNumbered = Number(oloomEndPage.value);
  let oloomStartPageNumbered = Number(oloomStartPage.value);
  pageNumber = oloomEndPageNumbered - oloomStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyOloomReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `علوم (${
        oloomTitle.value
      }) از صفحه ${oloomStartPageNumbered} تا سر صفحه ${
        oloomStartPageNumbered + dailyOloomReading
      }`,
      secondPart: `علوم (${oloomTitle.value}) از صفحه ${
        oloomStartPageNumbered + dailyOloomReading
      } تا صفحه ${oloomStartPageNumbered + dailyOloomReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyOloomReadingFloor = Math.ceil(pageNumber / 2);
    let dailyOloomReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `علوم (${
        oloomTitle.value
      }) از صفحه ${oloomStartPageNumbered} تا سر صفحه ${
        oloomStartPageNumbered + dailyOloomReadingFloor
      }`,
      secondPart: `علوم (${oloomTitle.value}) از صفحه ${
        oloomStartPageNumbered + dailyOloomReadingFloor
      } تا صفحه ${
        oloomStartPageNumbered + dailyOloomReadingFloor + dailyOloomReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let farsiPageCounterReturnedData = function farsiPageCounter() {
  if (negareshIncluded.value.trim() === "بله") {
    let pagePartsObj = {
      firstPart: `فارسی (${farsiTitle.value}) از صفحه ${farsiStartPage.value} تا صفحه ${farsiEndPage.value}`,
      secondPart: `نگارش از صفحه ${negareshStartPage.value} تا صفحه ${negareshEndPage.value}`,
    };
    return pagePartsObj;
  } else if (negareshIncluded.value.trim() === "خیر") {
    let farsiEndPageNumbered = Number(farsiEndPage.value);
    let farsiStartPageNumbered = Number(farsiStartPage.value);
    pageNumber = farsiEndPageNumbered - farsiStartPageNumbered;
    if (pageNumber % 2 === 0) {
      let dailyFarsiReading = pageNumber / 2;
      let pagePartsObj = {
        firstPart: `فارسی (${
          farsiTitle.value
        }) از صفحه ${farsiStartPageNumbered} تا سر صفحه ${
          farsiStartPageNumbered + dailyFarsiReading
        }`,
        secondPart: `فارسی (${farsiTitle.value}) از صفحه ${
          farsiStartPageNumbered + dailyFarsiReading
        } تا صفحه ${farsiStartPageNumbered + dailyFarsiReading * 2}`,
      };
      return pagePartsObj;
    } else {
      let dailyFarsiReadingFloor = Math.ceil(pageNumber / 2);
      let dailyFarsiReadingCeil = Math.floor(pageNumber / 2);
      let pagePartsObj = {
        firstPart: `فارسی (${
          farsiTitle.value
        }) از صفحه ${farsiStartPageNumbered} تا سر صفحه ${
          farsiStartPageNumbered + dailyFarsiReadingFloor
        }`,
        secondPart: `فارسی (${farsiTitle.value}) از صفحه ${
          farsiStartPageNumbered + dailyFarsiReadingFloor
        } تا صفحه ${
          farsiStartPageNumbered +
          dailyFarsiReadingFloor +
          dailyFarsiReadingCeil
        }`,
      };
      return pagePartsObj;
    }
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به فارسی را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به فارسی را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let arabiPageCounterReturnedData = function arabiPageCounter() {
  let arabiEndPageNumbered = Number(arabiEndPage.value);
  let arabiStartPageNumbered = Number(arabiStartPage.value);
  pageNumber = arabiEndPageNumbered - arabiStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyArabiReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `عربی (${
        arabiTitle.value
      }) از صفحه ${arabiStartPageNumbered} تا سر صفحه ${
        arabiStartPageNumbered + dailyArabiReading
      }`,
      secondPart: `عربی (${arabiTitle.value}) از صفحه ${
        arabiStartPageNumbered + dailyArabiReading
      } تا صفحه ${arabiStartPageNumbered + dailyArabiReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyArabiReadingFloor = Math.ceil(pageNumber / 2);
    let dailyArabiReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `عربی (${
        arabiTitle.value
      }) از صفحه ${arabiStartPageNumbered} تا سر صفحه ${
        arabiStartPageNumbered + dailyArabiReadingFloor
      }`,
      secondPart: `عربی (${arabiTitle.value}) از صفحه ${
        arabiStartPageNumbered + dailyArabiReadingFloor
      } تا صفحه ${
        arabiStartPageNumbered + dailyArabiReadingFloor + dailyArabiReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let payamPageCounterReturnedData = function payamPageCounter() {
  let payamEndPageNumbered = Number(payamEndPage.value);
  let payamStartPageNumbered = Number(payamStartPage.value);
  pageNumber = payamEndPageNumbered - payamStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyPayamReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `پیام های آسمان (${
        payamTitle.value
      }) از صفحه ${payamStartPageNumbered} تا سر صفحه ${
        payamStartPageNumbered + dailyPayamReading
      }`,
      secondPart: `پیام های آسمان (${payamTitle.value}) از صفحه ${
        payamStartPageNumbered + dailyPayamReading
      } تا صفحه ${payamStartPageNumbered + dailyPayamReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyPayamReadingFloor = Math.ceil(pageNumber / 2);
    let dailyPayamReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `پیام های آسمان (${
        payamTitle.value
      }) از صفحه ${payamStartPageNumbered} تا سر صفحه ${
        payamStartPageNumbered + dailyPayamReadingFloor
      }`,
      secondPart: `پیام های آسمان (${payamTitle.value}) از صفحه ${
        payamStartPageNumbered + dailyPayamReadingFloor
      } تا صفحه ${
        payamStartPageNumbered + dailyPayamReadingFloor + dailyPayamReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let motaleatPageCounterReturnedData = function motaleatPageCounter() {
  let motaleatEndPageNumbered = Number(motaleatEndPage.value);
  let motaleatStartPageNumbered = Number(motaleatStartPage.value);
  pageNumber = motaleatEndPageNumbered - motaleatStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyMotaleatReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `مطالعات اجتماعی (${
        motaleatTitle.value
      }) از صفحه ${motaleatStartPageNumbered} تا سر صفحه ${
        motaleatStartPageNumbered + dailyMotaleatReading
      }`,
      secondPart: `مطالعات اجتماعی (${motaleatTitle.value}) از صفحه ${
        motaleatStartPageNumbered + dailyMotaleatReading
      } تا صفحه ${motaleatStartPageNumbered + dailyMotaleatReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyMotaleatReadingFloor = Math.ceil(pageNumber / 2);
    let dailyMotaleatReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `مطالعات اجتماعی (${
        motaleatTitle.value
      }) از صفحه ${motaleatStartPageNumbered} تا سر صفحه ${
        motaleatStartPageNumbered + dailyMotaleatReadingFloor
      }`,
      secondPart: `مطالعات اجتماعی (${motaleatTitle.value}) از صفحه ${
        motaleatStartPageNumbered + dailyMotaleatReadingFloor
      } تا صفحه ${
        motaleatStartPageNumbered +
        dailyMotaleatReadingFloor +
        dailyMotaleatReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

//generator
function generateTable() {
  let shanbe1 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    arabi: `${arabiPageCounterReturnedData().firstPart} (1:30 ساعت مطالعه)`,
    totalTime: `3`,
  };
  let yekShanbe1 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    arabi: `${arabiPageCounterReturnedData().secondPart} (1:30 ساعت مطالعه)`,
    totalTime: `3`,
  };
  let doShanbe1 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    zaban: `زبان انگلیسی (${zabanTitle.value}) از صفحه ${zabanStartPage.value} تا صفحه ${zabanEndPage.value} (2 ساعت مطالعه)`,
    totalTime: `3:30`,
  };
  let seShanbe1 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    payam: `${payamPageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
    motaleat: `${motaleatPageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
    totalTime: `3:30`,
  };
  let chaharShanbe1 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    payam: `${payamPageCounterReturnedData().secondPart} (1 ساعت مطالعه)`,
    motaleat: `${motaleatPageCounterReturnedData().secondPart} (1 ساعت مطالعه)`,
    totalTime: `3:30`,
  };
  let panjShanbe1 = {
    math: `${
      mathPageCounterReturnedData().firstPart
    } (2:15 ساعت مطالعه و حل تمرین)`,
    oloom: `${oloomPageCounterReturnedData().firstPart} (2:15 ساعت مطالعه)`,
    farsi: `${farsiPageCounterReturnedData().firstPart} (1:30 ساعت مطالعه)`,
    totalTime: `6`,
  };
  let jome1 = {
    math: `${
      mathPageCounterReturnedData().secondPart
    } (2:15 ساعت مطالعه و حل تمرین)`,
    oloom: `${oloomPageCounterReturnedData().secondPart} (2:15 ساعت مطالعه)`,
    farsi: `${farsiPageCounterReturnedData().secondPart} (1:30 ساعت مطالعه)`,
    revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
    totalTime: `7:30`,
  };
  let shanbe2 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    farsi: `فارسی (${farsiTitle.value}) ${farsiModule.value} (1 ساعت حل تست)`,
    arabi: `عربی (${arabiTitle.value}) ${arabiModule.value} (45 دقیقه حل تست)`,
    totalTime: `3:15`,
  };
  let yekShanbe2 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    farsi: `فارسی (${farsiTitle.value}) ${farsiModule.value} (45 دقیقه حل تست)`,
    arabi: `عربی (${arabiTitle.value}) ${arabiModule.value} (1 ساعت حل تست)`,
    totalTime: `3:15`,
  };
  let doShanbe2 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    payam: `پیام های آسمان (${payamTitle.value}) ${payamModule.value} (1 ساعت حل تست)`,
    motaleat: `مطالعات اجتماعی (${motaleatTitle.value}) ${motaleatModule.value} (1 ساعت حل تست)`,
    zaban: `زبان انگلیسی (${zabanTitle.value}) ${zabanModule.value} (1 ساعت حل تست)`,
    totalTime: `4:30`,
  };
  let seShanbe2 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
    oloom: `علوم (${oloomTitle.value}) ${oloomModule.value} (1:30 ساعت حل تست)`,
    totalTime: `4:30`,
  };
  let chaharShanbe2 = {
    dailyReading: "روزخوانی (1 ساعت)",
    PreReading: "پیش خوانی (30 دقیقه)",
    math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
    oloom: `علوم (${oloomTitle.value}) ${oloomModule.value} (1:30 ساعت حل تست)`,
    totalTime: `4:30`,
  };
  let panjShanbe2 = {
    revising: `(6 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
    totalTime: `6`,
  };
  let jome2 = {
    revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
  };

  shanbe1day.innerHTML =
    shanbe1.dailyReading +
    "<br>" +
    shanbe1.PreReading +
    "<br>" +
    shanbe1.arabi +
    "<br>" +
    shanbe1.totalTime;

  yekShanbe1day.innerHTML =
    yekShanbe1.dailyReading +
    "<br>" +
    yekShanbe1.PreReading +
    "<br>" +
    yekShanbe1.arabi +
    "<br>" +
    yekShanbe1.totalTime;

  doShanbe1day.innerHTML =
    doShanbe1.dailyReading +
    "<br>" +
    doShanbe1.PreReading +
    "<br>" +
    doShanbe1.zaban +
    "<br>" +
    doShanbe1.totalTime;

  seShanbe1day.innerHTML =
    seShanbe1.dailyReading +
    "<br>" +
    seShanbe1.PreReading +
    "<br>" +
    seShanbe1.payam +
    "<br>" +
    seShanbe1.motaleat +
    "<br>" +
    seShanbe1.totalTime;

  chaharShanbe1day.innerHTML =
    chaharShanbe1.dailyReading +
    "<br>" +
    chaharShanbe1.PreReading +
    "<br>" +
    chaharShanbe1.payam +
    "<br>" +
    chaharShanbe1.motaleat +
    "<br>" +
    chaharShanbe1.totalTime;

  panjShanbe1day.innerHTML =
    panjShanbe1.math +
    "<br>" +
    panjShanbe1.oloom +
    "<br>" +
    panjShanbe1.farsi +
    "<br>" +
    panjShanbe1.totalTime;

  jome1day.innerHTML =
    jome1.math +
    "<br>" +
    jome1.oloom +
    "<br>" +
    jome1.farsi +
    "<br>" +
    jome1.revising +
    "<br>" +
    jome1.totalTime;

  shanbe2day.innerHTML =
    shanbe2.dailyReading +
    "<br>" +
    shanbe2.PreReading +
    "<br>" +
    shanbe2.farsi +
    "<br>" +
    shanbe2.arabi +
    "<br>" +
    shanbe2.totalTime;

  yekShanbe2day.innerHTML =
    yekShanbe2.dailyReading +
    "<br>" +
    yekShanbe2.PreReading +
    "<br>" +
    yekShanbe2.farsi +
    "<br>" +
    yekShanbe2.arabi +
    "<br>" +
    yekShanbe2.totalTime;

  doShanbe2day.innerHTML =
    doShanbe2.dailyReading +
    "<br>" +
    doShanbe2.PreReading +
    "<br>" +
    doShanbe2.payam +
    "<br>" +
    doShanbe2.motaleat +
    "<br>" +
    doShanbe2.zaban +
    "<br>" +
    doShanbe2.totalTime;

  seShanbe2day.innerHTML =
    seShanbe2.dailyReading +
    "<br>" +
    seShanbe2.PreReading +
    "<br>" +
    seShanbe2.math +
    "<br>" +
    seShanbe2.oloom +
    "<br>" +
    seShanbe2.totalTime;

  chaharShanbe2day.innerHTML =
    chaharShanbe2.dailyReading +
    "<br>" +
    chaharShanbe2.PreReading +
    "<br>" +
    chaharShanbe2.math +
    "<br>" +
    chaharShanbe2.oloom +
    "<br>" +
    chaharShanbe2.totalTime;

  panjShanbe2day.innerHTML =
    panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;

  jome2day.innerHTML = jome2.revising;

  let localStorageData = {
    shanbe1day:
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.totalTime,
    yekShanbe1day:
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.totalTime,
    doShanbe1day:
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.zaban +
      "<br>" +
      doShanbe1.totalTime,
    seShanbe1day:
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.payam +
      "<br>" +
      seShanbe1.motaleat +
      "<br>" +
      seShanbe1.totalTime,
    chaharShanbe1day:
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.payam +
      "<br>" +
      chaharShanbe1.motaleat +
      "<br>" +
      chaharShanbe1.totalTime,
    panjShanbe1day:
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.oloom +
      "<br>" +
      panjShanbe1.farsi +
      "<br>" +
      panjShanbe1.totalTime,
    jome1day:
      jome1.math +
      "<br>" +
      jome1.oloom +
      "<br>" +
      jome1.farsi +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime,
    shanbe2day:
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.farsi +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.totalTime,
    yekShanbe2day:
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.farsi +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.totalTime,
    doShanbe2day:
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.payam +
      "<br>" +
      doShanbe2.motaleat +
      "<br>" +
      doShanbe2.zaban +
      "<br>" +
      doShanbe2.totalTime,
    seShanbe2day:
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.oloom +
      "<br>" +
      seShanbe2.totalTime,
    chaharShanbe2day:
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.oloom +
      "<br>" +
      chaharShanbe2.totalTime,
    panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
    jome2day: jome2.revising,
  };

  localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
}

function clearTable() {
  shanbe1day.innerHTML = "";
  yekShanbe1day.innerHTML = "";
  doShanbe1day.innerHTML = "";
  seShanbe1day.innerHTML = "";
  chaharShanbe1day.innerHTML = "";
  panjShanbe1day.innerHTML = "";
  jome1day.innerHTML = "";
  shanbe2day.innerHTML = "";
  yekShanbe2day.innerHTML = "";
  doShanbe2day.innerHTML = "";
  seShanbe2day.innerHTML = "";
  chaharShanbe2day.innerHTML = "";
  panjShanbe2day.innerHTML = "";
  jome2day.innerHTML = "";

  localStorage.setItem("localStorageObj", "");
}

function getDataFromLocalStorage() {
  let localStorageObj = JSON.parse(localStorage.getItem("localStorageObj"));
  shanbe1day.innerHTML = localStorageObj.shanbe1day;
  yekShanbe1day.innerHTML = localStorageObj.yekShanbe1day;
  doShanbe1day.innerHTML = localStorageObj.doShanbe1day;
  seShanbe1day.innerHTML = localStorageObj.seShanbe1day;
  chaharShanbe1day.innerHTML = localStorageObj.chaharShanbe1day;
  panjShanbe1day.innerHTML = localStorageObj.panjShanbe1day;
  jome1day.innerHTML = localStorageObj.jome1day;
  shanbe2day.innerHTML = localStorageObj.shanbe2day;
  yekShanbe2day.innerHTML = localStorageObj.yekShanbe2day;
  doShanbe2day.innerHTML = localStorageObj.doShanbe2day;
  seShanbe2day.innerHTML = localStorageObj.seShanbe2day;
  chaharShanbe2day.innerHTML = localStorageObj.chaharShanbe2day;
  panjShanbe2day.innerHTML = localStorageObj.panjShanbe2day;
  jome2day.innerHTML = localStorageObj.jome2day;
}

//event
btn.addEventListener("click", generateTable);
clearBtn.addEventListener("click", clearTable);
window.addEventListener("load", getDataFromLocalStorage);
