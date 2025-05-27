let score = document.querySelector("#score");
let hesabanStartPage = document.querySelector("#hesaban-start-page");
let hesabanEndPage = document.querySelector("#hesaban-end-page");
let hesabanTitle = document.querySelector("#hesaban-title");
let hesabanModule = document.querySelector("#hesaban-module");
let hesabanCommon = document.querySelector("#hesaban-common");
let amarStartPage = document.querySelector("#amar-start-page");
let amarEndPage = document.querySelector("#amar-end-page");
let amarTitle = document.querySelector("#amar-title");
let amarModule = document.querySelector("#amar-module");
let amarCommon = document.querySelector("#amar-common");
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
let hesabanPageCounterReturnedData = function hesabanPageCounter() {
  let hesabanEndPageNumbered = Number(hesabanEndPage.value);
  let hesabanStartPageNumbered = Number(hesabanStartPage.value);
  let pageNumber = hesabanEndPageNumbered - hesabanStartPageNumbered;
  if (pageNumber % 4 === 0) {
    let dailyHesabanReading = pageNumber / 4;
    let pagePartsObj = {
      firstPart: `حسابان (${
        hesabanTitle.value
      }) از صفحه ${hesabanStartPageNumbered} تا سر صفحه ${
        hesabanStartPageNumbered + dailyHesabanReading
      }`,
      secondPart: `حسابان (${hesabanTitle.value}) از صفحه ${
        hesabanStartPageNumbered + dailyHesabanReading
      } تا سر صفحه ${hesabanStartPageNumbered + dailyHesabanReading * 2}`,
      thirdPart: `حسابان (${hesabanTitle.value}) از صفحه ${
        hesabanStartPageNumbered + dailyHesabanReading * 2
      } تا سر صفحه ${hesabanStartPageNumbered + dailyHesabanReading * 3}`,
      forthPart: `حسابان (${hesabanTitle.value}) از صفحه ${
        hesabanStartPageNumbered + dailyHesabanReading * 3
      } تا صفحه ${hesabanStartPageNumbered + dailyHesabanReading * 4}`,
    };
    return pagePartsObj;
  } else {
    let dailyHesabanReadingCeil = Math.ceil(pageNumber / 4);
    let dailyHesabanReadingFloor = Math.floor(pageNumber / 4);
    if (dailyHesabanReadingFloor * 3 + dailyHesabanReadingCeil === pageNumber) {
      let pagePartsObj = {
        firstPart: `حسابان (${
          hesabanTitle.value
        }) از صفحه ${hesabanStartPageNumbered} تا سر صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingFloor
        }`,
        secondPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingFloor
        } تا سر صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingFloor * 2
        }`,
        thirdPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingFloor * 2
        } تا سر صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor * 2 +
          dailyHesabanReadingCeil
        }`,
        forthPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor * 2 +
          dailyHesabanReadingCeil
        } تا صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor * 3 +
          dailyHesabanReadingCeil
        }`,
      };
      return pagePartsObj;
    } else if (
      dailyHesabanReadingFloor * 2 + dailyHesabanReadingCeil * 2 ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `حسابان (${
          hesabanTitle.value
        }) از صفحه ${hesabanStartPageNumbered} تا سر صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingFloor
        }`,
        secondPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingFloor
        } تا سر صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor +
          dailyHesabanReadingCeil
        }`,
        thirdPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor +
          dailyHesabanReadingCeil
        } تا سر صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor +
          dailyHesabanReadingCeil * 2
        }`,
        forthPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor +
          dailyHesabanReadingCeil * 2
        } تا صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingFloor * 2 +
          dailyHesabanReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `حسابان (${
          hesabanTitle.value
        }) از صفحه ${hesabanStartPageNumbered} تا سر صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingCeil
        }`,
        secondPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingCeil
        } تا سر صفحه ${hesabanStartPageNumbered + dailyHesabanReadingCeil * 2}`,
        thirdPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingCeil * 2
        } تا سر صفحه ${hesabanStartPageNumbered + dailyHesabanReadingCeil * 3}`,
        forthPart: `حسابان (${hesabanTitle.value}) از صفحه ${
          hesabanStartPageNumbered + dailyHesabanReadingCeil * 3
        } تا صفحه ${
          hesabanStartPageNumbered +
          dailyHesabanReadingCeil * 3 +
          dailyHesabanReadingFloor
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
  if (pageNumber % 3 === 0) {
    let dailyGeometryReading = pageNumber / 3;
    let pagePartsObj = {
      firstPart: `هندسه (${
        geometryTitle.value
      }) از صفحه ${geometryStartPageNumbered} تا سر صفحه ${
        geometryStartPageNumbered + dailyGeometryReading
      }`,
      secondPart: `هندسه (${geometryTitle.value}) از صفحه ${
        geometryStartPageNumbered + dailyGeometryReading
      } تا سر صفحه ${geometryStartPageNumbered + dailyGeometryReading * 2}`,
      thirdPart: `هندسه (${geometryTitle.value}) از صفحه ${
        geometryStartPageNumbered + dailyGeometryReading * 2
      } تا صفحه ${geometryStartPageNumbered + dailyGeometryReading * 3}`,
    };
    return pagePartsObj;
  } else {
    let dailyGeometryReadingCeil = Math.ceil(pageNumber / 3);
    let dailyGeometryReadingFloor = Math.floor(pageNumber / 3);
    if (
      dailyGeometryReadingFloor * 2 + dailyGeometryReadingCeil ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `هندسه (${
          geometryTitle.value
        }) از صفحه ${geometryStartPageNumbered} تا سر صفحه ${
          geometryStartPageNumbered + dailyGeometryReadingFloor
        }`,
        secondPart: `هندسه (${geometryTitle.value}) از صفحه ${
          geometryStartPageNumbered + dailyGeometryReadingFloor
        } تا سر صفحه ${
          geometryStartPageNumbered + dailyGeometryReadingFloor * 2 + 1
        }`,
        thirdPart: `هندسه (${geometryTitle.value}) از صفحه ${
          geometryStartPageNumbered + dailyGeometryReadingFloor * 2 + 1
        } تا صفحه ${
          geometryStartPageNumbered +
          dailyGeometryReadingFloor * 2 +
          dailyGeometryReadingCeil
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `هندسه (${
          geometryTitle.value
        }) از صفحه ${geometryStartPageNumbered} تا سر صفحه ${
          geometryStartPageNumbered + dailyGeometryReadingFloor + 1
        }`,
        secondPart: `هندسه (${geometryTitle.value}) از صفحه ${
          geometryStartPageNumbered + dailyGeometryReadingFloor + 1
        } تا سر صفحه ${
          geometryStartPageNumbered +
          dailyGeometryReadingFloor +
          dailyGeometryReadingCeil +
          1
        }`,
        thirdPart: `هندسه (${geometryTitle.value}) از صفحه ${
          geometryStartPageNumbered +
          dailyGeometryReadingFloor +
          dailyGeometryReadingCeil +
          1
        } تا صفحه ${
          geometryStartPageNumbered +
          dailyGeometryReadingFloor +
          dailyGeometryReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    }
  }
};

let amarPageCounterReturnedData = function amarPageCounter() {
  let amarEndPageNumbered = Number(amarEndPage.value);
  let amarStartPageNumbered = Number(amarStartPage.value);
  let pageNumber = amarEndPageNumbered - amarStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyAmarReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `آمار و احتمال (${
        amarTitle.value
      }) از صفحه ${amarStartPageNumbered} تا سر صفحه ${
        amarStartPageNumbered + dailyAmarReading
      }`,
      secondPart: `آمار و احتمال (${amarTitle.value}) از صفحه ${
        amarStartPageNumbered + dailyAmarReading
      } تا صفحه ${amarStartPageNumbered + dailyAmarReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyAmarReadingFloor = Math.ceil(pageNumber / 2);
    let dailyAmarReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `آمار و احتمال (${
        amarTitle.value
      }) از صفحه ${amarStartPageNumbered} تا سر صفحه ${
        amarStartPageNumbered + dailyAmarReadingFloor
      }`,
      secondPart: `آمار و احتمال (${amarTitle.value}) از صفحه ${
        amarStartPageNumbered + dailyAmarReadingFloor
      } تا صفحه ${
        amarStartPageNumbered + dailyAmarReadingFloor + dailyAmarReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let physicPageCounterReturnedData = function physicPageCounter() {
  let physicEndPageNumbered = Number(physicEndPage.value);
  let physicStartPageNumbered = Number(physicStartPage.value);
  let pageNumber = physicEndPageNumbered - physicStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyPhysicReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `فیزیک (${
        physicTitle.value
      }) از صفحه ${physicStartPageNumbered} تا سر صفحه ${
        physicStartPageNumbered + dailyPhysicReading
      }`,
      secondPart: `فیزیک (${physicTitle.value}) از صفحه ${
        physicStartPageNumbered + dailyPhysicReading
      } تا صفحه ${physicStartPageNumbered + dailyPhysicReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyPhysicReadingFloor = Math.ceil(pageNumber / 2);
    let dailyPhysicReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `فیزیک (${
        physicTitle.value
      }) از صفحه ${physicStartPageNumbered} تا سر صفحه ${
        physicStartPageNumbered + dailyPhysicReadingFloor
      }`,
      secondPart: `فیزیک (${physicTitle.value}) از صفحه ${
        physicStartPageNumbered + dailyPhysicReadingFloor
      } تا صفحه ${
        physicStartPageNumbered +
        dailyPhysicReadingFloor +
        dailyPhysicReadingCeil
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
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (30 دقیقه مطالعه و حل تمرین)`,
      totalTime: `3:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (30 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (15 دقیقه)`,
      totalTime: `3:15`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      totalTime: `3:45`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (30 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (15 دقیقه)`,
      totalTime: `3:15`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().thirdPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      totalTime: `3:45`,
    };
    let panjShanbe1 = {
      hesaban: `${
        hesabanPageCounterReturnedData().forthPart
      } (1 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `7`,
    };
    let jome1 = {
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `6:30`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (45 دقیقه حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (15 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (45 دقیقه حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (45 دقیقه حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (45 دقیقه حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (15 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
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
      shanbe1.hesaban +
      "<br>" +
      shanbe1.hesabanCommonQuestions +
      "<br>" +
      shanbe1.geometry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.amar +
      "<br>" +
      yekShanbe1.amarCommonQuestions +
      "<br>" +
      yekShanbe1.geometryCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.hesabanCommonQuestions +
      "<br>" +
      doShanbe1.geometry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.amar +
      "<br>" +
      seShanbe1.amarCommonQuestions +
      "<br>" +
      seShanbe1.geometryCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.hesabanCommonQuestions +
      "<br>" +
      chaharShanbe1.geometry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.hesaban +
      "<br>" +
      panjShanbe1.hesabanCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
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
      shanbe2.hesaban +
      "<br>" +
      shanbe2.amar +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
      "<br>" +
      yekShanbe2.amar +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.hesaban +
      "<br>" +
      doShanbe2.amar +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.hesaban +
      "<br>" +
      seShanbe2.amar +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.hesaban +
      "<br>" +
      chaharShanbe2.amar +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
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
        shanbe1.hesaban +
        "<br>" +
        shanbe1.hesabanCommonQuestions +
        "<br>" +
        shanbe1.geometry +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.amar +
        "<br>" +
        yekShanbe1.amarCommonQuestions +
        "<br>" +
        yekShanbe1.geometryCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.hesabanCommonQuestions +
        "<br>" +
        doShanbe1.geometry +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.amar +
        "<br>" +
        seShanbe1.amarCommonQuestions +
        "<br>" +
        seShanbe1.geometryCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.hesabanCommonQuestions +
        "<br>" +
        chaharShanbe1.geometry +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.hesaban +
        "<br>" +
        panjShanbe1.hesabanCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
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
        shanbe2.hesaban +
        "<br>" +
        shanbe2.amar +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
        "<br>" +
        yekShanbe2.amar +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.hesaban +
        "<br>" +
        doShanbe2.amar +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.hesaban +
        "<br>" +
        seShanbe2.amar +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.hesaban +
        "<br>" +
        chaharShanbe2.amar +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() >= 5000 && score.value.trim() < 6000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      totalTime: `4`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (30 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (15 دقیقه)`,
      totalTime: `3:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      totalTime: `4`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (30 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `3:45`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().thirdPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      totalTime: `4`,
    };
    let panjShanbe1 = {
      hesaban: `${
        hesabanPageCounterReturnedData().forthPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (30 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `8:15`,
    };
    let jome1 = {
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      revising: `مرور و جمع بندی مطالب (2:30 ساعت)`,
      totalTime: `8:30`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
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
      shanbe1.hesaban +
      "<br>" +
      shanbe1.hesabanCommonQuestions +
      "<br>" +
      shanbe1.geometry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.amar +
      "<br>" +
      yekShanbe1.amarCommonQuestions +
      "<br>" +
      yekShanbe1.geometryCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.hesabanCommonQuestions +
      "<br>" +
      doShanbe1.geometry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.amar +
      "<br>" +
      seShanbe1.amarCommonQuestions +
      "<br>" +
      seShanbe1.geometryCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.hesabanCommonQuestions +
      "<br>" +
      chaharShanbe1.geometry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.hesaban +
      "<br>" +
      panjShanbe1.hesabanCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
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
      shanbe2.hesaban +
      "<br>" +
      shanbe2.amar +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
      "<br>" +
      yekShanbe2.amar +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.hesaban +
      "<br>" +
      doShanbe2.amar +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.hesaban +
      "<br>" +
      seShanbe2.amar +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.hesaban +
      "<br>" +
      chaharShanbe2.amar +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
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
        shanbe1.hesaban +
        "<br>" +
        shanbe1.hesabanCommonQuestions +
        "<br>" +
        shanbe1.geometry +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.amar +
        "<br>" +
        yekShanbe1.amarCommonQuestions +
        "<br>" +
        yekShanbe1.geometryCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.hesabanCommonQuestions +
        "<br>" +
        doShanbe1.geometry +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.amar +
        "<br>" +
        seShanbe1.amarCommonQuestions +
        "<br>" +
        seShanbe1.geometryCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.hesabanCommonQuestions +
        "<br>" +
        chaharShanbe1.geometry +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.hesaban +
        "<br>" +
        panjShanbe1.hesabanCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
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
        shanbe2.hesaban +
        "<br>" +
        shanbe2.amar +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
        "<br>" +
        yekShanbe2.amar +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.hesaban +
        "<br>" +
        doShanbe2.amar +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.hesaban +
        "<br>" +
        seShanbe2.amar +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.hesaban +
        "<br>" +
        chaharShanbe2.amar +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() >= 6000 && score.value.trim() < 7000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      totalTime: `4:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (45 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `4:15`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      totalTime: `4:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (45 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `4:15`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه و حل تمرین)`,
      totalTime: `4:45`,
    };
    let panjShanbe1 = {
      hesaban: `${
        hesabanPageCounterReturnedData().forthPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (3 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1:15 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `10`,
    };
    let jome1 = {
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (3 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1:15 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      revising: `مرور و جمع بندی مطالب (3:15 ساعت)`,
      totalTime: `10:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:15 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:15 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:15 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:15 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
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
      shanbe1.hesaban +
      "<br>" +
      shanbe1.hesabanCommonQuestions +
      "<br>" +
      shanbe1.geometry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.amar +
      "<br>" +
      yekShanbe1.amarCommonQuestions +
      "<br>" +
      yekShanbe1.geometryCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.hesabanCommonQuestions +
      "<br>" +
      doShanbe1.geometry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.amar +
      "<br>" +
      seShanbe1.amarCommonQuestions +
      "<br>" +
      seShanbe1.geometryCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.hesabanCommonQuestions +
      "<br>" +
      chaharShanbe1.geometry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.hesaban +
      "<br>" +
      panjShanbe1.hesabanCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
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
      shanbe2.hesaban +
      "<br>" +
      shanbe2.amar +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
      "<br>" +
      yekShanbe2.amar +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.hesaban +
      "<br>" +
      doShanbe2.amar +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.hesaban +
      "<br>" +
      seShanbe2.amar +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.hesaban +
      "<br>" +
      chaharShanbe2.amar +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
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
        shanbe1.hesaban +
        "<br>" +
        shanbe1.hesabanCommonQuestions +
        "<br>" +
        shanbe1.geometry +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.amar +
        "<br>" +
        yekShanbe1.amarCommonQuestions +
        "<br>" +
        yekShanbe1.geometryCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.hesabanCommonQuestions +
        "<br>" +
        doShanbe1.geometry +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.amar +
        "<br>" +
        seShanbe1.amarCommonQuestions +
        "<br>" +
        seShanbe1.geometryCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.hesabanCommonQuestions +
        "<br>" +
        chaharShanbe1.geometry +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.hesaban +
        "<br>" +
        panjShanbe1.hesabanCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
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
        shanbe2.hesaban +
        "<br>" +
        shanbe2.amar +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
        "<br>" +
        yekShanbe2.amar +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.hesaban +
        "<br>" +
        doShanbe2.amar +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.hesaban +
        "<br>" +
        seShanbe2.amar +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.hesaban +
        "<br>" +
        chaharShanbe2.amar +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
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
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      totalTime: `5`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (45 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `4:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      totalTime: `5`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      amar: `${
        amarPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      amarCommonQuestions: `حل تمرین از کتاب پرتکرار آمار ${amarCommon.value} (45 دقیقه)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `4:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      geometry: `${
        geometryPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه و حل تمرین)`,
      totalTime: `5`,
    };
    let panjShanbe1 = {
      hesaban: `${
        hesabanPageCounterReturnedData().forthPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      hesabanCommonQuestions: `حل تمرین از کتاب پرتکرار حسابان ${hesabanCommon.value} (45 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (3:15 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1:30 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1:15 ساعت)`,
      geometryCommonQuestions: `حل تمرین از کتاب پرتکرار هندسه ${geometryCommon.value} (30 دقیقه)`,
      totalTime: `11:15`,
    };
    let jome1 = {
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (3:15 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1:30 ساعت)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1:15 ساعت)`,
      revising: `مرور و جمع بندی مطالب (3:15 ساعت)`,
      totalTime: `11:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:15 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:15 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:30 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `7`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:30 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (45 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `7`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان (${hesabanTitle.value}) ${hesabanModule.value} (1:30 ساعت حل تست)`,
      amar: `آمار (${amarTitle.value}) ${amarModule.value} (30 دقیقه حل تست)`,
      geometry: `هندسه (${geometryTitle.value}) ${geometryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      totalTime: `7`,
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
      shanbe1.hesaban +
      "<br>" +
      shanbe1.hesabanCommonQuestions +
      "<br>" +
      shanbe1.geometry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.amar +
      "<br>" +
      yekShanbe1.amarCommonQuestions +
      "<br>" +
      yekShanbe1.geometryCommonQuestions +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.hesabanCommonQuestions +
      "<br>" +
      doShanbe1.geometry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.amar +
      "<br>" +
      seShanbe1.amarCommonQuestions +
      "<br>" +
      seShanbe1.geometryCommonQuestions +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.hesabanCommonQuestions +
      "<br>" +
      chaharShanbe1.geometry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.hesaban +
      "<br>" +
      panjShanbe1.hesabanCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.geometryCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
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
      shanbe2.hesaban +
      "<br>" +
      shanbe2.amar +
      "<br>" +
      shanbe2.geometry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
      "<br>" +
      yekShanbe2.amar +
      "<br>" +
      yekShanbe2.geometry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.hesaban +
      "<br>" +
      doShanbe2.amar +
      "<br>" +
      doShanbe2.geometry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.hesaban +
      "<br>" +
      seShanbe2.amar +
      "<br>" +
      seShanbe2.geometry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.hesaban +
      "<br>" +
      chaharShanbe2.amar +
      "<br>" +
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
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
        shanbe1.hesaban +
        "<br>" +
        shanbe1.hesabanCommonQuestions +
        "<br>" +
        shanbe1.geometry +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.amar +
        "<br>" +
        yekShanbe1.amarCommonQuestions +
        "<br>" +
        yekShanbe1.geometryCommonQuestions +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.hesabanCommonQuestions +
        "<br>" +
        doShanbe1.geometry +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.amar +
        "<br>" +
        seShanbe1.amarCommonQuestions +
        "<br>" +
        seShanbe1.geometryCommonQuestions +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.hesabanCommonQuestions +
        "<br>" +
        chaharShanbe1.geometry +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.hesaban +
        "<br>" +
        panjShanbe1.hesabanCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.geometryCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
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
        shanbe2.hesaban +
        "<br>" +
        shanbe2.amar +
        "<br>" +
        shanbe2.geometry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
        "<br>" +
        yekShanbe2.amar +
        "<br>" +
        yekShanbe2.geometry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.hesaban +
        "<br>" +
        doShanbe2.amar +
        "<br>" +
        doShanbe2.geometry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.hesaban +
        "<br>" +
        seShanbe2.amar +
        "<br>" +
        seShanbe2.geometry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.hesaban +
        "<br>" +
        chaharShanbe2.amar +
        "<br>" +
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
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
