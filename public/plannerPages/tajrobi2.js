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
//
let score = document.querySelector("#score");
let biologyStartPage = document.querySelector("#biology-start-page");
let biologyEndPage = document.querySelector("#biology-end-page");
let biologyTitle = document.querySelector("#biology-title");
let biologyModule = document.querySelector("#biology-module");
let biologyCommon = document.querySelector("#biology-common");
let chemistryStartPage = document.querySelector("#chemistry-start-page");
let chemistryEndPage = document.querySelector("#chemistry-end-page");
let chemistryTitle = document.querySelector("#chemistry-title");
let chemistryModule = document.querySelector("#chemistry-module");
let chemistryCommon = document.querySelector("#chemistry-common");
let physicStartPage = document.querySelector("#physic-start-page");
let physicEndPage = document.querySelector("#physic-end-page");
let physicTitle = document.querySelector("#physic-title");
let physicModule = document.querySelector("#physic-module");
let physicCommon = document.querySelector("#physic-common");
let mathStartPage = document.querySelector("#math-start-page");
let mathEndPage = document.querySelector("#math-end-page");
let mathTitle = document.querySelector("#math-title");
let mathModule = document.querySelector("#math-module");
let mathCommon = document.querySelector("#math-common");
let geologyStartPage = document.querySelector("#geology-start-page");
let geologyEndPage = document.querySelector("#geology-end-page");
let geologyTitle = document.querySelector("#geology-title");
let geologyModule = document.querySelector("#geology-module");
//clear btn
let clearBtn = document.querySelector(".clear-btn");

// functions
let biologyPageCounterReturnedData = function biologyPageCounter() {
  let biologyStartPageNumbered = Number(biologyStartPage.value);
  let biologyEndPageNumbered = Number(biologyEndPage.value);
  let pageNumber = biologyEndPageNumbered - biologyStartPageNumbered;
  if (pageNumber % 4 === 0) {
    let dailyBiologyReading = pageNumber / 4;
    let pagePartsObj = {
      firstPart: `زیست (${
        biologyTitle.value
      }) از صفحه ${biologyStartPageNumbered} تا سر صفحه ${
        biologyStartPageNumbered + dailyBiologyReading
      }`,
      secondPart: `زیست (${biologyTitle.value}) از صفحه ${
        biologyStartPageNumbered + dailyBiologyReading
      } تا سر صفحه ${biologyStartPageNumbered + dailyBiologyReading * 2}`,
      thirdPart: `زیست (${biologyTitle.value}) از صفحه ${
        biologyStartPageNumbered + dailyBiologyReading * 2
      } تا سر صفحه ${biologyStartPageNumbered + dailyBiologyReading * 3}`,
      forthPart: `زیست (${biologyTitle.value}) از صفحه ${
        biologyStartPageNumbered + dailyBiologyReading * 3
      } تا صفحه ${biologyStartPageNumbered + dailyBiologyReading * 4}`,
    };
    return pagePartsObj;
  } else {
    let dailyBiologyReadingCeil = Math.ceil(pageNumber / 4);
    let dailyBiologyReadingFloor = Math.floor(pageNumber / 4);
    if (dailyBiologyReadingFloor * 3 + dailyBiologyReadingCeil === pageNumber) {
      let pagePartsObj = {
        firstPart: `زیست (${
          biologyTitle.value
        }) از صفحه ${biologyStartPageNumbered} تا سر صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingFloor
        }`,
        secondPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingFloor
        } تا سر صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingFloor * 2
        }`,
        thirdPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingFloor * 2
        } تا سر صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor * 2 +
          dailyBiologyReadingCeil
        }`,
        forthPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor * 2 +
          dailyBiologyReadingCeil
        } تا صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor * 3 +
          dailyBiologyReadingCeil
        }`,
      };
      return pagePartsObj;
    } else if (
      dailyBiologyReadingFloor * 2 + dailyBiologyReadingCeil * 2 ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `زیست (${
          biologyTitle.value
        }) از صفحه ${biologyStartPageNumbered} تا سر صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingFloor
        }`,
        secondPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingFloor
        } تا سر صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor +
          dailyBiologyReadingCeil
        }`,
        thirdPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor +
          dailyBiologyReadingCeil
        } تا سر صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor +
          dailyBiologyReadingCeil * 2
        }`,
        forthPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor +
          dailyBiologyReadingCeil * 2
        } تا صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingFloor * 2 +
          dailyBiologyReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `زیست (${
          biologyTitle.value
        }) از صفحه ${biologyStartPageNumbered} تا سر صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingCeil
        }`,
        secondPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingCeil
        } تا سر صفحه ${biologyStartPageNumbered + dailyBiologyReadingCeil * 2}`,
        thirdPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingCeil * 2
        } تا سر صفحه ${biologyStartPageNumbered + dailyBiologyReadingCeil * 3}`,
        forthPart: `زیست (${biologyTitle.value}) از صفحه ${
          biologyStartPageNumbered + dailyBiologyReadingCeil * 3
        } تا صفحه ${
          biologyStartPageNumbered +
          dailyBiologyReadingCeil * 3 +
          dailyBiologyReadingFloor
        }`,
      };
      return pagePartsObj;
    }
  }
};

let chemistryPageCounterReturnedData = function chemistryPageCounter() {
  let chemistryEndPageNumbered = Number(chemistryEndPage.value);
  let chemistryStartPageNumbered = Number(chemistryStartPage.value);
  let pageNumber = chemistryEndPageNumbered - chemistryStartPageNumbered;
  if (pageNumber % 3 === 0) {
    let dailyChemistryReading = pageNumber / 3;
    let pagePartsObj = {
      firstPart: `شیمی (${
        chemistryTitle.value
      }) از صفحه ${chemistryStartPageNumbered} تا سر صفحه ${
        chemistryStartPageNumbered + dailyChemistryReading
      }`,
      secondPart: `شیمی (${chemistryTitle.value}) از صفحه ${
        chemistryStartPageNumbered + dailyChemistryReading
      } تا سر صفحه ${chemistryStartPageNumbered + dailyChemistryReading * 2}`,
      thirdPart: `شیمی (${chemistryTitle.value}) از صفحه ${
        chemistryStartPageNumbered + dailyChemistryReading * 2
      } تا صفحه ${chemistryStartPageNumbered + dailyChemistryReading * 3}`,
    };
    return pagePartsObj;
  } else {
    let dailyChemistryReadingCeil = Math.ceil(pageNumber / 3);
    let dailyChemistryReadingFloor = Math.floor(pageNumber / 3);
    if (
      dailyChemistryReadingFloor * 2 + dailyChemistryReadingCeil ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `شیمی (${
          chemistryTitle.value
        }) از صفحه ${chemistryStartPageNumbered} تا سر صفحه ${
          chemistryStartPageNumbered + dailyChemistryReadingFloor
        }`,
        secondPart: `شیمی (${chemistryTitle.value}) از صفحه ${
          chemistryStartPageNumbered + dailyChemistryReadingFloor
        } تا سر صفحه ${
          chemistryStartPageNumbered + dailyChemistryReadingFloor * 2 + 1
        }`,
        thirdPart: `شیمی (${chemistryTitle.value}) از صفحه ${
          chemistryStartPageNumbered + dailyChemistryReadingFloor * 2 + 1
        } تا صفحه ${
          chemistryStartPageNumbered +
          dailyChemistryReadingFloor * 2 +
          dailyChemistryReadingCeil
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `شیمی (${
          chemistryTitle.value
        }) از صفحه ${chemistryStartPageNumbered} تا سر صفحه ${
          chemistryStartPageNumbered + dailyChemistryReadingFloor + 1
        }`,
        secondPart: `شیمی (${chemistryTitle.value}) از صفحه ${
          chemistryStartPageNumbered + dailyChemistryReadingFloor + 1
        } تا سر صفحه ${
          chemistryStartPageNumbered +
          dailyChemistryReadingFloor +
          dailyChemistryReadingCeil +
          1
        }`,
        thirdPart: `شیمی (${chemistryTitle.value}) از صفحه ${
          chemistryStartPageNumbered +
          dailyChemistryReadingFloor +
          dailyChemistryReadingCeil +
          1
        } تا صفحه ${
          chemistryStartPageNumbered +
          dailyChemistryReadingFloor +
          dailyChemistryReadingCeil * 2
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

let geologyPageCounterReturnedData = function geologyPageCounter() {
  let geologyStartPageNumbered = Number(geologyStartPage.value);
  let geologyEndPageNumbered = Number(geologyEndPage.value);
  pageNumber = geologyEndPageNumbered - geologyStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailygeologyReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `زمین شناسی (${
        geologyTitle.value
      }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
        geologyStartPageNumbered + dailygeologyReading
      }`,
      secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
        geologyStartPageNumbered + dailygeologyReading
      } تا صفحه ${geologyStartPageNumbered + dailygeologyReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailygeologyReadingFloor = Math.ceil(pageNumber / 2);
    let dailygeologyReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `زمین شناسی (${
        geologyTitle.value
      }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
        geologyStartPageNumbered + dailygeologyReadingFloor
      }`,
      secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
        geologyStartPageNumbered + dailygeologyReadingFloor
      } تا صفحه ${
        geologyStartPageNumbered +
        dailygeologyReadingFloor +
        dailygeologyReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let geologyPageCounterDevideBy4ReturnedData = function geologyPageCounter() {
  let geologyStartPageNumbered = Number(geologyStartPage.value);
  let geologyEndPageNumbered = Number(geologyEndPage.value);
  let pageNumber = geologyEndPageNumbered - geologyStartPageNumbered;
  if (pageNumber % 4 === 0) {
    let dailyGeologyReading = pageNumber / 4;
    let pagePartsObj = {
      firstPart: `زمین شناسی (${
        geologyTitle.value
      }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
        geologyStartPageNumbered + dailyGeologyReading
      }`,
      secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
        geologyStartPageNumbered + dailyGeologyReading
      } تا سر صفحه ${geologyStartPageNumbered + dailyGeologyReading * 2}`,
      thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
        geologyStartPageNumbered + dailyGeologyReading * 2
      } تا سر صفحه ${geologyStartPageNumbered + dailyGeologyReading * 3}`,
      forthPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
        geologyStartPageNumbered + dailyGeologyReading * 3
      } تا صفحه ${geologyStartPageNumbered + dailyGeologyReading * 4}`,
    };
    return pagePartsObj;
  } else {
    let dailyGeologyReadingCeil = Math.ceil(pageNumber / 4);
    let dailyGeologyReadingFloor = Math.floor(pageNumber / 4);
    if (dailyGeologyReadingFloor * 3 + dailyGeologyReadingCeil === pageNumber) {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${
          geologyTitle.value
        }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingFloor
        }`,
        secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingFloor
        } تا سر صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingFloor * 2
        }`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingFloor * 2
        } تا سر صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor * 2 +
          dailyGeologyReadingCeil
        }`,
        forthPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor * 2 +
          dailyGeologyReadingCeil
        } تا صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor * 3 +
          dailyGeologyReadingCeil
        }`,
      };
      return pagePartsObj;
    } else if (
      dailyGeologyReadingFloor * 2 + dailyGeologyReadingCeil * 2 ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${
          geologyTitle.value
        }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingFloor
        }`,
        secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingFloor
        } تا سر صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor +
          dailyGeologyReadingCeil
        }`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor +
          dailyGeologyReadingCeil
        } تا سر صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor +
          dailyGeologyReadingCeil * 2
        }`,
        forthPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor +
          dailyGeologyReadingCeil * 2
        } تا صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingFloor * 2 +
          dailyGeologyReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${
          geologyTitle.value
        }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingCeil
        }`,
        secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingCeil
        } تا سر صفحه ${geologyStartPageNumbered + dailyGeologyReadingCeil * 2}`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingCeil * 2
        } تا سر صفحه ${geologyStartPageNumbered + dailyGeologyReadingCeil * 3}`,
        forthPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
          geologyStartPageNumbered + dailyGeologyReadingCeil * 3
        } تا صفحه ${
          geologyStartPageNumbered +
          dailyGeologyReadingCeil * 3 +
          dailyGeologyReadingFloor
        }`,
      };
      return pagePartsObj;
    }
  }
};

//generator
function generateTable() {
  if (score.value.trim() < 5000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      geology: `${
        geologyPageCounterReturnedData().firstPart
      } (30 دقیقه مطالعه)`,
      totalTime: `4`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      geology: `${
        geologyPageCounterReturnedData().secondPart
      } (30 دقیقه مطالعه)`,
      totalTime: `4`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (30 دقیقه)`,
      totalTime: `3:30`,
    };
    let panjShanbe1 = {
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (30 دقیقه)`,
      math: `${
        mathPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      totalTime: `6`,
    };
    let jome1 = {
      biology: `${
        biologyPageCounterReturnedData().forthPart
      } (1:30 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (30 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (30 دقیقه)`,
      math: `${
        mathPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (30 دقیقه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `7:30`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (30 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      geology: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1 ساعت حل تست)`,
      totalTime: `5`,
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
      shanbe1.biology +
      "<br>" +
      shanbe1.biologyCommonQuestions +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.chemistry +
      "<br>" +
      yekShanbe1.chemistryCommonQuestions +
      "<br>" +
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biology +
      "<br>" +
      doShanbe1.biologyCommonQuestions +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.chemistry +
      "<br>" +
      seShanbe1.chemistryCommonQuestions +
      "<br>" +
      seShanbe1.geology +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biology +
      "<br>" +
      chaharShanbe1.biologyCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.mathCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.biology +
      "<br>" +
      jome1.biologyCommonQuestions +
      "<br>" +
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
      "<br>" +
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biology +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biology +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biology +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biology +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biology +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.geology +
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
        shanbe1.biology +
        "<br>" +
        shanbe1.biologyCommonQuestions +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.chemistry +
        "<br>" +
        yekShanbe1.chemistryCommonQuestions +
        "<br>" +
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biology +
        "<br>" +
        doShanbe1.biologyCommonQuestions +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.chemistry +
        "<br>" +
        seShanbe1.chemistryCommonQuestions +
        "<br>" +
        seShanbe1.geology +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biology +
        "<br>" +
        chaharShanbe1.biologyCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.mathCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biology +
        "<br>" +
        jome1.biologyCommonQuestions +
        "<br>" +
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
        "<br>" +
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biology +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biology +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biology +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biology +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biology +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.geology +
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
      biology: `${
        biologyPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (30 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().firstPart
      } (30 دقیقه مطالعه)`,
      totalTime: `4:15`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().secondPart
      } (30 دقیقه مطالعه)`,
      totalTime: `4:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (30 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().thirdPart
      } (30 دقیقه مطالعه)`,
      totalTime: `4:15`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().forthPart
      } (30 دقیقه مطالعه)`,
      totalTime: `4:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      totalTime: `3:45`,
    };
    let panjShanbe1 = {
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (30 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (45 دقیقه)`,
      math: `${
        mathPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      totalTime: `7`,
    };
    let jome1 = {
      biology: `${
        biologyPageCounterReturnedData().forthPart
      } (1:30 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (45 دقیقه)`,
      math: `${
        mathPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (45 دقیقه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `8:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (45 دقیقه حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (30 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      geology: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1 ساعت حل تست)`,
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
      shanbe1.biology +
      "<br>" +
      shanbe1.biologyCommonQuestions +
      "<br>" +
      shanbe1.geology +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.chemistry +
      "<br>" +
      yekShanbe1.chemistryCommonQuestions +
      "<br>" +
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biology +
      "<br>" +
      doShanbe1.biologyCommonQuestions +
      "<br>" +
      doShanbe1.geology +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.chemistry +
      "<br>" +
      seShanbe1.chemistryCommonQuestions +
      "<br>" +
      seShanbe1.geology +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biology +
      "<br>" +
      chaharShanbe1.biologyCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.mathCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.biology +
      "<br>" +
      jome1.biologyCommonQuestions +
      "<br>" +
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
      "<br>" +
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biology +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biology +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biology +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biology +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biology +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.geology +
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
        shanbe1.biology +
        "<br>" +
        shanbe1.biologyCommonQuestions +
        "<br>" +
        shanbe1.geology +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.chemistry +
        "<br>" +
        yekShanbe1.chemistryCommonQuestions +
        "<br>" +
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biology +
        "<br>" +
        doShanbe1.biologyCommonQuestions +
        "<br>" +
        doShanbe1.geology +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.chemistry +
        "<br>" +
        seShanbe1.chemistryCommonQuestions +
        "<br>" +
        seShanbe1.geology +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biology +
        "<br>" +
        chaharShanbe1.biologyCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.mathCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biology +
        "<br>" +
        jome1.biologyCommonQuestions +
        "<br>" +
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
        "<br>" +
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biology +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biology +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biology +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biology +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biology +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.geology +
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
      biology: `${
        biologyPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().firstPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().thirdPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (45 دقیقه)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().forthPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().thirdPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let panjShanbe1 = {
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (2 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      math: `${
        mathPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (1 ساعت)`,
      totalTime: `9`,
    };
    let jome1 = {
      biology: `${
        biologyPageCounterReturnedData().forthPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1 ساعت)`,
      math: `${
        mathPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (1 ساعت)`,
      revising: `مرور و جمع بندی مطالب (2:15 ساعت)`,
      totalTime: `10:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:30`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      totalTime: `6`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (45 دقیقه حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      geology: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
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
      shanbe1.biology +
      "<br>" +
      shanbe1.biologyCommonQuestions +
      "<br>" +
      shanbe1.geology +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.chemistry +
      "<br>" +
      yekShanbe1.chemistryCommonQuestions +
      "<br>" +
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biology +
      "<br>" +
      doShanbe1.biologyCommonQuestions +
      "<br>" +
      doShanbe1.geology +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.chemistry +
      "<br>" +
      seShanbe1.chemistryCommonQuestions +
      "<br>" +
      seShanbe1.geology +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biology +
      "<br>" +
      chaharShanbe1.biologyCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.mathCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.biology +
      "<br>" +
      jome1.biologyCommonQuestions +
      "<br>" +
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
      "<br>" +
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biology +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biology +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biology +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biology +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biology +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.geology +
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
        shanbe1.biology +
        "<br>" +
        shanbe1.biologyCommonQuestions +
        "<br>" +
        shanbe1.geology +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.chemistry +
        "<br>" +
        yekShanbe1.chemistryCommonQuestions +
        "<br>" +
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biology +
        "<br>" +
        doShanbe1.biologyCommonQuestions +
        "<br>" +
        doShanbe1.geology +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.chemistry +
        "<br>" +
        seShanbe1.chemistryCommonQuestions +
        "<br>" +
        seShanbe1.geology +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biology +
        "<br>" +
        chaharShanbe1.biologyCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.mathCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biology +
        "<br>" +
        jome1.biologyCommonQuestions +
        "<br>" +
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
        "<br>" +
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biology +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biology +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biology +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biology +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biology +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.geology +
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
      biology: `${biologyPageCounterReturnedData().firstPart} (2 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (1 ساعت)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().firstPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${biologyPageCounterReturnedData().secondPart} (2 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (1 ساعت)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().thirdPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      geology: `${
        geologyPageCounterDevideBy4ReturnedData().forthPart
      } (45 دقیقه مطالعه)`,
      totalTime: `5:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `${
        biologyPageCounterReturnedData().thirdPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      totalTime: `4:15`,
    };
    let panjShanbe1 = {
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (2 ساعت مطالعه)`,
      chemistryCommonQuestions: `حل تمرین از کتاب پرتکرار شیمی ${chemistryCommon.value} (1 ساعت)`,
      physic: `${
        physicPageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1:15 ساعت)`,
      math: `${
        mathPageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (1:15 ساعت)`,
      totalTime: `10`,
    };
    let jome1 = {
      biology: `${
        biologyPageCounterReturnedData().forthPart
      } (1:45 ساعت مطالعه)`,
      biologyCommonQuestions: `حل تمرین از کتاب پرتکرار زیست ${biologyCommon.value} (45 دقیقه)`,
      physic: `${
        physicPageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      physicCommonQuestions: `حل تمرین از کتاب پرتکرار فیزیک ${physicCommon.value} (1:15 ساعت)`,
      math: `${
        mathPageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      mathCommonQuestions: `حل تمرین از کتاب پرتکرار ریاضی ${mathCommon.value} (1:15 ساعت)`,
      revising: `مرور و جمع بندی مطالب (3:15 ساعت)`,
      totalTime: `12:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (2 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      totalTime: `7:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:45 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1:15 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7:30`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biology: `زیست (${biologyTitle.value}) ${biologyModule.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی (${chemistryTitle.value}) ${chemistryModule.value} (1:15 ساعت حل تست)`,
      physic: `فیزیک (${physicTitle.value}) ${physicModule.value} (1 ساعت حل تست)`,
      math: `ریاضی (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      geology: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1 ساعت حل تست)`,
      totalTime: `7:30`,
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
      shanbe1.biology +
      "<br>" +
      shanbe1.biologyCommonQuestions +
      "<br>" +
      shanbe1.geology +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.chemistry +
      "<br>" +
      yekShanbe1.chemistryCommonQuestions +
      "<br>" +
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biology +
      "<br>" +
      doShanbe1.biologyCommonQuestions +
      "<br>" +
      doShanbe1.geology +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.chemistry +
      "<br>" +
      seShanbe1.chemistryCommonQuestions +
      "<br>" +
      seShanbe1.geology +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biology +
      "<br>" +
      chaharShanbe1.biologyCommonQuestions +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.chemistry +
      "<br>" +
      panjShanbe1.chemistryCommonQuestions +
      "<br>" +
      panjShanbe1.physic +
      "<br>" +
      panjShanbe1.physicCommonQuestions +
      "<br>" +
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.mathCommonQuestions +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.biology +
      "<br>" +
      jome1.biologyCommonQuestions +
      "<br>" +
      jome1.physic +
      "<br>" +
      jome1.physicCommonQuestions +
      "<br>" +
      jome1.math +
      "<br>" +
      jome1.mathCommonQuestions +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biology +
      "<br>" +
      shanbe2.chemistry +
      "<br>" +
      shanbe2.physic +
      "<br>" +
      shanbe2.math +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biology +
      "<br>" +
      yekShanbe2.chemistry +
      "<br>" +
      yekShanbe2.physic +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biology +
      "<br>" +
      doShanbe2.chemistry +
      "<br>" +
      doShanbe2.physic +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biology +
      "<br>" +
      seShanbe2.chemistry +
      "<br>" +
      seShanbe2.physic +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biology +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.geology +
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
        shanbe1.biology +
        "<br>" +
        shanbe1.biologyCommonQuestions +
        "<br>" +
        shanbe1.geology +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.chemistry +
        "<br>" +
        yekShanbe1.chemistryCommonQuestions +
        "<br>" +
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biology +
        "<br>" +
        doShanbe1.biologyCommonQuestions +
        "<br>" +
        doShanbe1.geology +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.chemistry +
        "<br>" +
        seShanbe1.chemistryCommonQuestions +
        "<br>" +
        seShanbe1.geology +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biology +
        "<br>" +
        chaharShanbe1.biologyCommonQuestions +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.chemistry +
        "<br>" +
        panjShanbe1.chemistryCommonQuestions +
        "<br>" +
        panjShanbe1.physic +
        "<br>" +
        panjShanbe1.physicCommonQuestions +
        "<br>" +
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.mathCommonQuestions +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biology +
        "<br>" +
        jome1.biologyCommonQuestions +
        "<br>" +
        jome1.physic +
        "<br>" +
        jome1.physicCommonQuestions +
        "<br>" +
        jome1.math +
        "<br>" +
        jome1.mathCommonQuestions +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biology +
        "<br>" +
        shanbe2.chemistry +
        "<br>" +
        shanbe2.physic +
        "<br>" +
        shanbe2.math +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biology +
        "<br>" +
        yekShanbe2.chemistry +
        "<br>" +
        yekShanbe2.physic +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biology +
        "<br>" +
        doShanbe2.chemistry +
        "<br>" +
        doShanbe2.physic +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biology +
        "<br>" +
        seShanbe2.chemistry +
        "<br>" +
        seShanbe2.physic +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biology +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.geology +
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

// event
btn.addEventListener("click", generateTable);
clearBtn.addEventListener("click", clearTable);
window.addEventListener("load", getDataFromLocalStorage);
