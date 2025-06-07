let score = document.querySelector("#score");
let mathStartPage = document.querySelector("#math-start-page");
let mathEndPage = document.querySelector("#math-end-page");
let mathTitle = document.querySelector("#math-title");
let mathModule = document.querySelector("#math-module");
let mathCommon = document.querySelector("#math-common");
let geometryStartPage = document.querySelector("#geometry-start-page");
let geometryEndPage = document.querySelector("#geometry-end-page");
let geometryTitle = document.querySelector("#geometry-title");
let geometryModule = document.querySelector("#geometry-module");
let geometryCommon = document.querySelector("#geometry-common");
let physicStartPage = document.querySelector("#physic-start-page");
let physicEndPage = document.querySelector("#physic-end-page");
let physicTitle = document.querySelector("#physic-title");
let physicModule = document.querySelector("#physic-module");
let physicCommon = document.querySelector("#physic-common");
let chemistryStartPage = document.querySelector("#chemistry-start-page");
let chemistryEndPage = document.querySelector("#chemistry-end-page");
let chemistryTitle = document.querySelector("#chemistry-title");
let chemistryModule = document.querySelector("#chemistry-module");
let chemistryCommon = document.querySelector("#chemistry-common");
//
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

// functions
let mathPageCounterReturnedData = function mathPageCounter() {
  let mathStartPageNumbered = Number(mathStartPage.value);
  let mathEndPageNumbered = Number(mathEndPage.value);
  let pageNumber = mathEndPageNumbered - mathStartPageNumbered;
  if (pageNumber % 4 === 0) {
    let dailymathReading = pageNumber / 4;
    let pagePartsObj = {
      firstPart: `ریاضی (${
        mathTitle.value
      }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
        mathStartPageNumbered + dailymathReading
      }`,
      secondPart: `ریاضی (${mathTitle.value}) از صفحه ${
        mathStartPageNumbered + dailymathReading
      } تا سر صفحه ${mathStartPageNumbered + dailymathReading * 2}`,
      thirdPart: `ریاضی (${mathTitle.value}) از صفحه ${
        mathStartPageNumbered + dailymathReading * 2
      } تا سر صفحه ${mathStartPageNumbered + dailymathReading * 3}`,
      forthPart: `ریاضی (${mathTitle.value}) از صفحه ${
        mathStartPageNumbered + dailymathReading * 3
      } تا صفحه ${mathStartPageNumbered + dailymathReading * 4}`,
    };
    return pagePartsObj;
  } else {
    let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
    let dailyMathReadingFloor = Math.floor(pageNumber / 4);
    if (dailyMathReadingFloor * 3 + dailyMathReadingCeil === pageNumber) {
      let pagePartsObj = {
        firstPart: `ریاضی (${
          mathTitle.value
        }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
          mathStartPageNumbered + dailyMathReadingFloor
        }`,
        secondPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered + dailyMathReadingFloor
        } تا سر صفحه ${mathStartPageNumbered + dailyMathReadingFloor * 2}`,
        thirdPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered + dailyMathReadingFloor * 2
        } تا سر صفحه ${
          mathStartPageNumbered +
          dailyMathReadingFloor * 2 +
          dailyMathReadingCeil
        }`,
        forthPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered +
          dailyMathReadingFloor * 2 +
          dailyMathReadingCeil
        } تا صفحه ${
          mathStartPageNumbered +
          dailyMathReadingFloor * 3 +
          dailyMathReadingCeil
        }`,
      };
      return pagePartsObj;
    } else if (
      dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `ریاضی (${
          mathTitle.value
        }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
          mathStartPageNumbered + dailyMathReadingFloor
        }`,
        secondPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered + dailyMathReadingFloor
        } تا سر صفحه ${
          mathStartPageNumbered + dailyMathReadingFloor + dailyMathReadingCeil
        }`,
        thirdPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered + dailyMathReadingFloor + dailyMathReadingCeil
        } تا سر صفحه ${
          mathStartPageNumbered +
          dailyMathReadingFloor +
          dailyMathReadingCeil * 2
        }`,
        forthPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered +
          dailyMathReadingFloor +
          dailyMathReadingCeil * 2
        } تا صفحه ${
          mathStartPageNumbered +
          dailyMathReadingFloor * 2 +
          dailyMathReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `ریاضی (${
          mathTitle.value
        }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
          mathStartPageNumbered + dailyMathReadingCeil
        }`,
        secondPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered + dailyMathReadingCeil
        } تا سر صفحه ${mathStartPageNumbered + dailyMathReadingCeil * 2}`,
        thirdPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered + dailyMathReadingCeil * 2
        } تا سر صفحه ${mathStartPageNumbered + dailyMathReadingCeil * 3}`,
        forthPart: `ریاضی (${mathTitle.value}) از صفحه ${
          mathStartPageNumbered + dailyMathReadingCeil * 3
        } تا صفحه ${
          mathStartPageNumbered +
          dailyMathReadingCeil * 3 +
          dailyMathReadingFloor
        }`,
      };
      return pagePartsObj;
    }
  }
};

let physicPageCounterReturnedData = function physicPageCounter() {
  let physicEndPageNumbered = Number(physicEndPage.value);
  let physicStartPageNumbered = Number(physicStartPage.value);
  let pageNumber = physicEndPageNumbered - physicStartPageNumbered;
  if (pageNumber % 3 === 0) {
    let dailyPhysicReading = pageNumber / 3;
    let pagePartsObj = {
      firstPart: `فیزیک (${
        physicTitle.value
      }) از صفحه ${physicStartPageNumbered} تا سر صفحه ${
        physicStartPageNumbered + dailyPhysicReading
      }`,
      secondPart: `فیزیک (${physicTitle.value}) از صفحه ${
        physicStartPageNumbered + dailyPhysicReading
      } تا سر صفحه ${physicStartPageNumbered + dailyPhysicReading * 2}`,
      thirdPart: `فیزیک (${physicTitle.value}) از صفحه ${
        physicStartPageNumbered + dailyPhysicReading * 2
      } تا صفحه ${physicStartPageNumbered + dailyPhysicReading * 3}`,
    };
    return pagePartsObj;
  } else {
    let dailyPhysicReadingCeil = Math.ceil(pageNumber / 3);
    let dailyPhysicReadingFloor = Math.floor(pageNumber / 3);
    if (dailyPhysicReadingFloor * 2 + dailyPhysicReadingCeil === pageNumber) {
      let pagePartsObj = {
        firstPart: `فیزیک (${
          physicTitle.value
        }) از صفحه ${physicStartPageNumbered} تا سر صفحه ${
          physicStartPageNumbered + dailyPhysicReadingFloor
        }`,
        secondPart: `فیزیک (${physicTitle.value}) از صفحه ${
          physicStartPageNumbered + dailyPhysicReadingFloor
        } تا سر صفحه ${
          physicStartPageNumbered + dailyPhysicReadingFloor * 2 + 1
        }`,
        thirdPart: `فیزیک (${physicTitle.value}) از صفحه ${
          physicStartPageNumbered + dailyPhysicReadingFloor * 2 + 1
        } تا صفحه ${
          physicStartPageNumbered +
          dailyPhysicReadingFloor * 2 +
          dailyPhysicReadingCeil
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `فیزیک (${
          physicTitle.value
        }) از صفحه ${physicStartPageNumbered} تا سر صفحه ${
          physicStartPageNumbered + dailyPhysicReadingFloor + 1
        }`,
        secondPart: `فیزیک (${physicTitle.value}) از صفحه ${
          physicStartPageNumbered + dailyPhysicReadingFloor + 1
        } تا سر صفحه ${
          physicStartPageNumbered +
          dailyPhysicReadingFloor +
          dailyPhysicReadingCeil +
          1
        }`,
        thirdPart: `فیزیک (${physicTitle.value}) از صفحه ${
          physicStartPageNumbered +
          dailyPhysicReadingFloor +
          dailyPhysicReadingCeil +
          1
        } تا صفحه ${
          physicStartPageNumbered +
          dailyPhysicReadingFloor +
          dailyPhysicReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    }
  }
};

let geometryPageCounterReturnedData = function geometryPageCounter() {
  let geometryEndPageNumbered = Number(geometryEndPage.value);
  let geometryStartPageNumbered = Number(geometryStartPage.value);
  let pageNumber = geometryEndPageNumbered - geometryStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyGeometryReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `هندسه (${
        geometryTitle.value
      }) از صفحه ${geometryStartPageNumbered} تا سر صفحه ${
        geometryStartPageNumbered + dailyGeometryReading
      }`,
      secondPart: `هندسه (${geometryTitle.value}) از صفحه ${
        geometryStartPageNumbered + dailyGeometryReading
      } تا صفحه ${geometryStartPageNumbered + dailyGeometryReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyGeometryReadingFloor = Math.ceil(pageNumber / 2);
    let dailyGeometryReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `هندسه (${
        geometryTitle.value
      }) از صفحه ${geometryStartPageNumbered} تا سر صفحه ${
        geometryStartPageNumbered + dailyGeometryReadingFloor
      }`,
      secondPart: `هندسه (${geometryTitle.value}) از صفحه ${
        geometryStartPageNumbered + dailyGeometryReadingFloor
      } تا صفحه ${
        geometryStartPageNumbered +
        dailyGeometryReadingFloor +
        dailyGeometryReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let chemistryPageCounterReturnedData = function chemistryPageCounter() {
  let chemistryEndPageNumbered = Number(chemistryEndPage.value);
  let chemistryStartPageNumbered = Number(chemistryStartPage.value);
  pageNumber = chemistryEndPageNumbered - chemistryStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyChemistryReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `شیمی (${
        chemistryTitle.value
      }) از صفحه ${chemistryStartPageNumbered} تا سر صفحه ${
        chemistryStartPageNumbered + dailyChemistryReading
      }`,
      secondPart: `شیمی (${chemistryTitle.value}) از صفحه ${
        chemistryStartPageNumbered + dailyChemistryReading
      } تا صفحه ${chemistryStartPageNumbered + dailyChemistryReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
    let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `شیمی (${
        chemistryTitle.value
      }) از صفحه ${chemistryStartPageNumbered} تا سر صفحه ${
        chemistryStartPageNumbered + dailyChemistryReadingFloor
      }`,
      secondPart: `شیمی (${chemistryTitle.value}) از صفحه ${
        chemistryStartPageNumbered + dailyChemistryReadingFloor
      } تا صفحه ${
        chemistryStartPageNumbered +
        dailyChemistryReadingFloor +
        dailyChemistryReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

function generateTable() {
  if (score.value.trim() < 5000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let panjShanbe1 = {
      physic: `${
        physicPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      totalTime: `6`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().forthPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `7:30`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:45`,
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
      shanbe1.math +
      "<br>" +
      shanbe1.mathCommonQuestions +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.physic +
      "<br>" +
      yekShanbe1.physicCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.math +
      "<br>" +
      doShanbe1.mathCommonQuestions +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.physic +
      "<br>" +
      seShanbe1.physicCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.mathCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.geometry +
      "<br>" +
      jome1.geometryCommonQuestions +
      "<br>" +
      jome1.chemistry +
      "<br>" +
      jome1.chemistryCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.chemistry +
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
        shanbe1.math +
        "<br>" +
        shanbe1.mathCommonQuestions +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.physic +
        "<br>" +
        yekShanbe1.physicCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.math +
        "<br>" +
        doShanbe1.mathCommonQuestions +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.physic +
        "<br>" +
        seShanbe1.physicCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.mathCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.geometry +
        "<br>" +
        jome1.geometryCommonQuestions +
        "<br>" +
        jome1.chemistry +
        "<br>" +
        jome1.chemistryCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() < 6000 && score.value.trim() >= 5000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (45 دقیقه)`,
      totalTime: `4`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      totalTime: `4`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (45 دقیقه)`,
      totalTime: `4`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().thirdPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      totalTime: `4`,
    };
    let panjShanbe1 = {
      physic: `${
        physicPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (45 دقیقه)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      totalTime: `7`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().forthPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (45 دقیقه)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `8:30`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let panjShanbe2 = {
      revising: `(7 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `7`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.math +
      "<br>" +
      shanbe1.mathCommonQuestions +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.physic +
      "<br>" +
      yekShanbe1.physicCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.math +
      "<br>" +
      doShanbe1.mathCommonQuestions +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.physic +
      "<br>" +
      seShanbe1.physicCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.mathCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.geometry +
      "<br>" +
      jome1.geometryCommonQuestions +
      "<br>" +
      jome1.chemistry +
      "<br>" +
      jome1.chemistryCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.chemistry +
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
        shanbe1.math +
        "<br>" +
        shanbe1.mathCommonQuestions +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.physic +
        "<br>" +
        yekShanbe1.physicCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.math +
        "<br>" +
        doShanbe1.mathCommonQuestions +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.physic +
        "<br>" +
        seShanbe1.physicCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.mathCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.geometry +
        "<br>" +
        jome1.geometryCommonQuestions +
        "<br>" +
        jome1.chemistry +
        "<br>" +
        jome1.chemistryCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() < 7000 && score.value.trim() >= 6000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().thirdPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let panjShanbe1 = {
      physic: `${
        physicPageCounterReturnedData().thirdPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (1 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      totalTime: `9`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().forthPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (1 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      revising: `مرور و جمع بندی مطالب (2:15 ساعت)`,
      totalTime: `10:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `6:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `6:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `6:15`,
    };
    let panjShanbe2 = {
      revising: `(8 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `8`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.math +
      "<br>" +
      shanbe1.mathCommonQuestions +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.physic +
      "<br>" +
      yekShanbe1.physicCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.math +
      "<br>" +
      doShanbe1.mathCommonQuestions +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.physic +
      "<br>" +
      seShanbe1.physicCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.mathCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.geometry +
      "<br>" +
      jome1.geometryCommonQuestions +
      "<br>" +
      jome1.chemistry +
      "<br>" +
      jome1.chemistryCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.chemistry +
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
        shanbe1.math +
        "<br>" +
        shanbe1.mathCommonQuestions +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.physic +
        "<br>" +
        yekShanbe1.physicCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.math +
        "<br>" +
        doShanbe1.mathCommonQuestions +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.physic +
        "<br>" +
        seShanbe1.physicCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.mathCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.geometry +
        "<br>" +
        jome1.geometryCommonQuestions +
        "<br>" +
        jome1.chemistry +
        "<br>" +
        jome1.chemistryCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() >= 7000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (1 ساعت)`,
      totalTime: `4:45`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      totalTime: `4:45`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (1 ساعت)`,
      totalTime: `4:45`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      totalTime: `4:45`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `${
        mathPageCounterReturnedData().thirdPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let panjShanbe1 = {
      physic: `${
        physicPageCounterReturnedData().thirdPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (1:15 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1:15 ساعت)`,
      totalTime: `10`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().forthPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (1:15 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1:15 ساعت)`,
      revising: `مرور و جمع بندی مطالب (3:15 ساعت)`,
      totalTime: `12:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `6:45`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:30 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `7`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:30 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `7`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:30 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `7`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (2 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:30 ساعت حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let panjShanbe2 = {
      revising: `(9 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `9`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.math +
      "<br>" +
      shanbe1.mathCommonQuestions +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.physic +
      "<br>" +
      yekShanbe1.physicCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.math +
      "<br>" +
      doShanbe1.mathCommonQuestions +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.physic +
      "<br>" +
      seShanbe1.physicCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.mathCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.geometry +
      "<br>" +
      jome1.geometryCommonQuestions +
      "<br>" +
      jome1.chemistry +
      "<br>" +
      jome1.chemistryCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.chemistry +
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
        shanbe1.math +
        "<br>" +
        shanbe1.mathCommonQuestions +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.physic +
        "<br>" +
        yekShanbe1.physicCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.math +
        "<br>" +
        doShanbe1.mathCommonQuestions +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.physic +
        "<br>" +
        seShanbe1.physicCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.mathCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.geometry +
        "<br>" +
        jome1.geometryCommonQuestions +
        "<br>" +
        jome1.chemistry +
        "<br>" +
        jome1.chemistryCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  }
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

//events
btn.addEventListener("click", generateTable);
clearBtn.addEventListener("click", clearTable);
window.addEventListener("load", getDataFromLocalStorage);
