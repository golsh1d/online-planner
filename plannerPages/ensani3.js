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
let isStudent = document.querySelector("#isStudent");
let score = document.querySelector("#score");
let math3StartPage = document.querySelector("#math-3-start-page");
let math3EndPage = document.querySelector("#math-3-end-page");
let math3Title = document.querySelector("#math-3-title");
let math3Module = document.querySelector("#math-3-module");
let mathBaseStartPage = document.querySelector("#math-base-start-page");
let mathBaseEndPage = document.querySelector("#math-base-end-page");
let mathBaseTitle = document.querySelector("#math-base-title");
let mathBaseModule = document.querySelector("#math-base-module");
let adabiat3StartPage = document.querySelector("#adabiat-3-start-page");
let adabiat3EndPage = document.querySelector("#adabiat-3-end-page");
let adabiat3Title = document.querySelector("#adabiat-3-title");
let adabiat3Module = document.querySelector("#adabiat-3-module");
let adabiatBaseStartPage = document.querySelector("#adabiat-base-start-page");
let adabiatBaseEndPage = document.querySelector("#adabiat-base-end-page");
let adabiatBaseTitle = document.querySelector("#adabiat-base-title");
let adabiatBaseModule = document.querySelector("#adabiat-base-module");
let jameShenasi3StartPage = document.querySelector(
  "#jame-shenasi-3-start-page"
);
let jameShenasi3EndPage = document.querySelector("#jame-shenasi-3-end-page");
let jameShenasi3Title = document.querySelector("#jame-shenasi-3-title");
let jameShenasi3Module = document.querySelector("#jame-shenasi-3-module");
let jameShenasi2StartPage = document.querySelector(
  "#jame-shenasi-2-start-page"
);
let jameShenasi2EndPage = document.querySelector("#jame-shenasi-2-end-page");
let jameShenasi2Title = document.querySelector("#jame-shenasi-2-title");
let jameShenasi2Module = document.querySelector("#jame-shenasi-2-module");
let jameShenasi1StartPage = document.querySelector(
  "#jame-shenasi-1-start-page"
);
let jameShenasi1EndPage = document.querySelector("#jame-shenasi-1-end-page");
let jameShenasi1Title = document.querySelector("#jame-shenasi-1-title");
let jameShenasi1Module = document.querySelector("#jame-shenasi-1-module");
let arabi3startPage = document.querySelector("#arabi-3-start-page");
let arabi3EndPage = document.querySelector("#arabi-3-end-page");
let arabi3Title = document.querySelector("#arabi-3-title");
let arabi3Module = document.querySelector("#arabi-3-module");
let arabiBasestartPage = document.querySelector("#arabi-base-start-page");
let arabiBaseEndPage = document.querySelector("#arabi-base-end-page");
let arabiBaseTitle = document.querySelector("#arabi-base-title");
let arabiBaseModule = document.querySelector("#arabi-base-module");
let tarikh3StartPage = document.querySelector("#tarikh-3-start-page");
let tarikh3EndPage = document.querySelector("#tarikh-3-end-page");
let tarikh3Title = document.querySelector("#tarikh-3-title");
let tarikh3Module = document.querySelector("#tarikh-3-module");
let tarikh2StartPage = document.querySelector("#tarikh-2-start-page");
let tarikh2EndPage = document.querySelector("#tarikh-2-end-page");
let tarikh2Title = document.querySelector("#tarikh-2-title");
let tarikh2Module = document.querySelector("#tarikh-2-module");
let tarikh1StartPage = document.querySelector("#tarikh-1-start-page");
let tarikh1EndPage = document.querySelector("#tarikh-1-end-page");
let tarikh1Title = document.querySelector("#tarikh-1-title");
let tarikh1Module = document.querySelector("#tarikh-1-module");
let joghrafi3StartPage = document.querySelector("#joghrafi-3-start-page");
let joghrafi3EndPage = document.querySelector("#joghrafi-3-end-page");
let joghrafi3Title = document.querySelector("#joghrafi-3-title");
let joghrafi3Module = document.querySelector("#joghrafi-3-module");
let joghrafi2StartPage = document.querySelector("#joghrafi-2-start-page");
let joghrafi2EndPage = document.querySelector("#joghrafi-2-end-page");
let joghrafi2Title = document.querySelector("#joghrafi-2-title");
let joghrafi2Module = document.querySelector("#joghrafi-2-module");
let joghrafi1StartPage = document.querySelector("#joghrafi-1-start-page");
let joghrafi1EndPage = document.querySelector("#joghrafi-1-end-page");
let joghrafi1Title = document.querySelector("#joghrafi-1-title");
let joghrafi1Module = document.querySelector("#joghrafi-1-module");
let falsafe3StartPage = document.querySelector("#falsafe-3-start-page");
let falsafe3EndPage = document.querySelector("#falsafe-3-end-page");
let falsafe3Title = document.querySelector("#falsafe-3-title");
let falsafe3Module = document.querySelector("#falsafe-3-module");
let falsafe2StartPage = document.querySelector("#falsafe-2-start-page");
let falsafe2EndPage = document.querySelector("#falsafe-2-end-page");
let falsafe2Title = document.querySelector("#falsafe-2-title");
let falsafe2Module = document.querySelector("#falsafe-2-module");
let manteghStartPage = document.querySelector("#mantegh-start-page");
let manteghEndPage = document.querySelector("#mantegh-end-page");
let manteghTitle = document.querySelector("#mantegh-title");
let manteghModule = document.querySelector("#mantegh-module");
let eghtesadStartPage = document.querySelector("#eghtesad-start-page");
let eghtesadEndPage = document.querySelector("#eghtesad-end-page");
let eghtesadTitle = document.querySelector("#eghtesad-title");
let eghtesadModule = document.querySelector("#eghtesad-module");
let ravanShenasiStartPage = document.querySelector("#ravan-shenasi-start-page");
let ravanShenasiEndPage = document.querySelector("#ravan-shenasi-end-page");
let ravanShenasiTitle = document.querySelector("#ravan-shenasi-title");
let ravanShenasiModule = document.querySelector("#ravan-shenasi-module");
//clear btn
let clearBtn = document.querySelector(".clear-btn");

// functions
let arabi3PageCounterReturnedData = function arabi3PageCounter() {
  let arabi3EndPageNumbered = Number(arabi3EndPage.value);
  let arabi3startPageNumbered = Number(arabi3startPage.value);
  pageNumber = arabi3EndPageNumbered - arabi3startPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyArabiReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `عربی زبان قرآن 3 (${
        arabi3Title.value
      }) از صفحه ${arabi3startPageNumbered} تا سر صفحه ${
        arabi3startPageNumbered + dailyArabiReading
      }`,
      secondPart: `عربی زبان قرآن 3 (${arabi3Title.value}) از صفحه ${
        arabi3startPageNumbered + dailyArabiReading
      } تا صفحه ${arabi3startPageNumbered + dailyArabiReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyArabiReadingFloor = Math.ceil(pageNumber / 2);
    let dailyArabiReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `عربی زبان قرآن 3 (${
        arabi3Title.value
      }) از صفحه ${arabi3startPageNumbered} تا سر صفحه ${
        arabi3startPageNumbered + dailyArabiReadingFloor
      }`,
      secondPart: `عربی زبان قرآن 3 (${arabi3Title.value}) از صفحه ${
        arabi3startPageNumbered + dailyArabiReadingFloor
      } تا صفحه ${
        arabi3startPageNumbered + dailyArabiReadingFloor + dailyArabiReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let arabiBasePageCounterReturnedData = function arabiBasePageCounter() {
  let arabiBaseEndPageNumbered = Number(arabiBaseEndPage.value);
  let arabiBasestartPageNumbered = Number(arabiBasestartPage.value);
  pageNumber = arabiBaseEndPageNumbered - arabiBasestartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyArabiReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `عربی زبان قرآن پایه (${
        arabiBaseTitle.value
      }) از صفحه ${arabiBasestartPageNumbered} تا سر صفحه ${
        arabiBasestartPageNumbered + dailyArabiReading
      }`,
      secondPart: `عربی زبان قرآن پایه (${arabiBaseTitle.value}) از صفحه ${
        arabiBasestartPageNumbered + dailyArabiReading
      } تا صفحه ${arabiBasestartPageNumbered + dailyArabiReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyArabiReadingFloor = Math.ceil(pageNumber / 2);
    let dailyArabiReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `عربی زبان قرآن پایه (${
        arabiBaseTitle.value
      }) از صفحه ${arabiBasestartPageNumbered} تا سر صفحه ${
        arabiBasestartPageNumbered + dailyArabiReadingFloor
      }`,
      secondPart: `عربی زبان قرآن پایه (${arabiBaseTitle.value}) از صفحه ${
        arabiBasestartPageNumbered + dailyArabiReadingFloor
      } تا صفحه ${
        arabiBasestartPageNumbered +
        dailyArabiReadingFloor +
        dailyArabiReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let eghtesadPageCounterReturnedData = function eghtesadPageCounter() {
  let eghtesadEndPageNumbered = Number(eghtesadEndPage.value);
  let eghtesadStartPageNumbered = Number(eghtesadStartPage.value);
  pageNumber = eghtesadEndPageNumbered - eghtesadStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyEghtesadReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `اقتصاد (${
        eghtesadTitle.value
      }) از صفحه ${eghtesadStartPageNumbered} تا سر صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReading
      }`,
      secondPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReading
      } تا صفحه ${eghtesadStartPageNumbered + dailyEghtesadReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyEghtesadReadingFloor = Math.ceil(pageNumber / 2);
    let dailyEghtesadReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `اقتصاد (${
        eghtesadTitle.value
      }) از صفحه ${eghtesadStartPageNumbered} تا سر صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReadingFloor
      }`,
      secondPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReadingFloor
      } تا صفحه ${
        eghtesadStartPageNumbered +
        dailyEghtesadReadingFloor +
        dailyEghtesadReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let eghtesadPageCounterDevideBY4ReturnedData = function eghtesadPageCounter() {
  let eghtesadEndPageNumbered = Number(eghtesadEndPage.value);
  let eghtesadStartPageNumbered = Number(eghtesadStartPage.value);
  pageNumber = eghtesadEndPageNumbered - eghtesadStartPageNumbered;
  if (pageNumber % 4 === 0) {
    let dailyEghtesadReading = pageNumber / 4;
    let pagePartsObj = {
      firstPart: `اقتصاد (${
        eghtesadTitle.value
      }) از صفحه ${eghtesadStartPageNumbered} تا سر صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReading
      }`,
      secondPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReading
      } تا سر صفحه ${eghtesadStartPageNumbered + dailyEghtesadReading * 2}`,
      thirdPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReading * 2
      } تا سر صفحه ${eghtesadStartPageNumbered + dailyEghtesadReading * 3}`,
      forthPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
        eghtesadStartPageNumbered + dailyEghtesadReading * 3
      } تا صفحه ${eghtesadStartPageNumbered + dailyEghtesadReading * 4}`,
    };
    return pagePartsObj;
  } else {
    let dailyEghtesadReadingCeil = Math.ceil(pageNumber / 4);
    let dailyEghtesadReadingFloor = Math.floor(pageNumber / 4);
    if (
      dailyEghtesadReadingFloor * 3 + dailyEghtesadReadingCeil ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `اقتصاد (${
          eghtesadTitle.value
        }) از صفحه ${eghtesadStartPageNumbered} تا سر صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingFloor
        }`,
        secondPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingFloor
        } تا سر صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingFloor * 2
        }`,
        thirdPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingFloor * 2
        } تا سر صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor * 2 +
          dailyEghtesadReadingCeil
        }`,
        forthPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor * 2 +
          dailyEghtesadReadingCeil
        } تا صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor * 3 +
          dailyEghtesadReadingCeil
        }`,
      };
      return pagePartsObj;
    } else if (
      dailyEghtesadReadingFloor * 2 + dailyEghtesadReadingCeil * 2 ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `اقتصاد (${
          eghtesadTitle.value
        }) از صفحه ${eghtesadStartPageNumbered} تا سر صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingFloor
        }`,
        secondPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingFloor
        } تا سر صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor +
          dailyEghtesadReadingCeil
        }`,
        thirdPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor +
          dailyEghtesadReadingCeil
        } تا سر صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor +
          dailyEghtesadReadingCeil * 2
        }`,
        forthPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor +
          dailyEghtesadReadingCeil * 2
        } تا صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingFloor * 2 +
          dailyEghtesadReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `اقتصاد (${
          eghtesadTitle.value
        }) از صفحه ${eghtesadStartPageNumbered} تا سر صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingCeil
        }`,
        secondPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingCeil
        } تا سر صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingCeil * 2
        }`,
        thirdPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingCeil * 2
        } تا سر صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingCeil * 3
        }`,
        forthPart: `اقتصاد (${eghtesadTitle.value}) از صفحه ${
          eghtesadStartPageNumbered + dailyEghtesadReadingCeil * 3
        } تا صفحه ${
          eghtesadStartPageNumbered +
          dailyEghtesadReadingCeil * 3 +
          dailyEghtesadReadingFloor
        }`,
      };
      return pagePartsObj;
    }
  }
};

let ravanShenasiPageCounterReturnedData = function ravanShenasiPageCounter() {
  let ravanShenasiEndPageNumbered = Number(ravanShenasiEndPage.value);
  let ravanShenasiStartPageNumbered = Number(ravanShenasiStartPage.value);
  pageNumber = ravanShenasiEndPageNumbered - ravanShenasiStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyRavanShenasiReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `روان شناسی (${
        ravanShenasiTitle.value
      }) از صفحه ${ravanShenasiStartPageNumbered} تا سر صفحه ${
        ravanShenasiStartPageNumbered + dailyRavanShenasiReading
      }`,
      secondPart: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${
        ravanShenasiStartPageNumbered + dailyRavanShenasiReading
      } تا صفحه ${
        ravanShenasiStartPageNumbered + dailyRavanShenasiReading * 2
      }`,
    };
    return pagePartsObj;
  } else {
    let dailyRavanShenasiReadingFloor = Math.ceil(pageNumber / 2);
    let dailyRavanShenasiReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `روان شناسی (${
        ravanShenasiTitle.value
      }) از صفحه ${ravanShenasiStartPageNumbered} تا سر صفحه ${
        ravanShenasiStartPageNumbered + dailyRavanShenasiReadingFloor
      }`,
      secondPart: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${
        ravanShenasiStartPageNumbered + dailyRavanShenasiReadingFloor
      } تا صفحه ${
        ravanShenasiStartPageNumbered +
        dailyRavanShenasiReadingFloor +
        dailyRavanShenasiReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let math3PageCounterReturnedData = function math3PageCounter() {
  let math3EndPageNumbered = Number(math3EndPage.value);
  let math3StartPageNumbered = Number(math3StartPage.value);
  pageNumber = math3EndPageNumbered - math3StartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyMath3Reading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `ریاضی و آمار 3 (${
        math3Title.value
      }) از صفحه ${math3StartPageNumbered} تا سر صفحه ${
        math3StartPageNumbered + dailyMath3Reading
      }`,
      secondPart: `ریاضی و آمار 3 (${math3Title.value}) از صفحه ${
        math3StartPageNumbered + dailyMath3Reading
      } تا صفحه ${math3StartPageNumbered + dailyMath3Reading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyMath3ReadingFloor = Math.ceil(pageNumber / 2);
    let dailyMath3ReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `ریاضی و آمار 3 (${
        math3Title.value
      }) از صفحه ${math3StartPageNumbered} تا سر صفحه ${
        math3StartPageNumbered + dailyMath3ReadingFloor
      }`,
      secondPart: `ریاضی و آمار 3 (${math3Title.value}) از صفحه ${
        math3StartPageNumbered + dailyMath3ReadingFloor
      } تا صفحه ${
        math3StartPageNumbered + dailyMath3ReadingFloor + dailyMath3ReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let mathBasePageCounterReturnedData = function mathBasePageCounter() {
  let mathBaseEndPageNumbered = Number(mathBaseEndPage.value);
  let mathBaseStartPageNumbered = Number(mathBaseStartPage.value);
  pageNumber = mathBaseEndPageNumbered - mathBaseStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyMathBaseReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `ریاضی و آمار پایه (${
        mathBaseTitle.value
      }) از صفحه ${mathBaseStartPageNumbered} تا سر صفحه ${
        mathBaseStartPageNumbered + dailyMathBaseReading
      }`,
      secondPart: `ریاضی و آمار پایه (${mathBaseTitle.value}) از صفحه ${
        mathBaseStartPageNumbered + dailyMathBaseReading
      } تا صفحه ${mathBaseStartPageNumbered + dailyMathBaseReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyMathBaseReadingFloor = Math.ceil(pageNumber / 2);
    let dailyMathBaseReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `ریاضی و آمار پایه (${
        mathBaseTitle.value
      }) از صفحه ${mathBaseStartPageNumbered} تا سر صفحه ${
        mathBaseStartPageNumbered + dailyMathBaseReadingFloor
      }`,
      secondPart: `ریاضی و آمار پایه (${mathBaseTitle.value}) از صفحه ${
        mathBaseStartPageNumbered + dailyMathBaseReadingFloor
      } تا صفحه ${
        mathBaseStartPageNumbered +
        dailyMathBaseReadingFloor +
        dailyMathBaseReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let adabiat3PageCounterReturnedData = function adabiat3PageCounter() {
  let adabiat3EndPageNumbered = Number(adabiat3EndPage.value);
  let adabiat3StartPageNumbered = Number(adabiat3StartPage.value);
  pageNumber = adabiat3EndPageNumbered - adabiat3StartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyAdabiatReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `علوم و فنون ادبی 3 (${
        adabiat3Title.value
      }) از صفحه ${adabiat3StartPageNumbered} تا سر صفحه ${
        adabiat3StartPageNumbered + dailyAdabiatReading
      }`,
      secondPart: `علوم و فنون ادبی 3 (${adabiat3Title.value}) از صفحه ${
        adabiat3StartPageNumbered + dailyAdabiatReading
      } تا صفحه ${adabiat3StartPageNumbered + dailyAdabiatReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyAdabiatReadingFloor = Math.ceil(pageNumber / 2);
    let dailyAdabiatReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `علوم و فنون ادبی 3 (${
        adabiat3Title.value
      }) از صفحه ${adabiat3StartPageNumbered} تا سر صفحه ${
        adabiat3StartPageNumbered + dailyAdabiatReadingFloor
      }`,
      secondPart: `علوم و فنون ادبی 3 (${adabiat3Title.value}) از صفحه ${
        adabiat3StartPageNumbered + dailyAdabiatReadingFloor
      } تا صفحه ${
        adabiat3StartPageNumbered +
        dailyAdabiatReadingFloor +
        dailyAdabiatReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let adabiatBasePageCounterReturnedData = function adabiatBasePageCounter() {
  let adabiatBaseEndPageNumbered = Number(adabiatBaseEndPage.value);
  let adabiatBaseStartPageNumbered = Number(adabiatBaseStartPage.value);
  pageNumber = adabiatBaseEndPageNumbered - adabiatBaseStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyAdabiatReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `علوم و فنون ادبی پایه (${
        adabiatBaseTitle.value
      }) از صفحه ${adabiatBaseStartPageNumbered} تا سر صفحه ${
        adabiatBaseStartPageNumbered + dailyAdabiatReading
      }`,
      secondPart: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) از صفحه ${
        adabiatBaseStartPageNumbered + dailyAdabiatReading
      } تا صفحه ${adabiatBaseStartPageNumbered + dailyAdabiatReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyAdabiatReadingFloor = Math.ceil(pageNumber / 2);
    let dailyAdabiatReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `علوم و فنون ادبی پایه (${
        adabiatBaseTitle.value
      }) از صفحه ${adabiatBaseStartPageNumbered} تا سر صفحه ${
        adabiatBaseStartPageNumbered + dailyAdabiatReadingFloor
      }`,
      secondPart: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) از صفحه ${
        adabiatBaseStartPageNumbered + dailyAdabiatReadingFloor
      } تا صفحه ${
        adabiatBaseStartPageNumbered +
        dailyAdabiatReadingFloor +
        dailyAdabiatReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let jameShenasi3PageCounterReturnedData = function jameShenasi3PageCounter() {
  let jameShenasi3EndPageNumbered = Number(jameShenasi3EndPage.value);
  let jameShenasi3StartPageNumbered = Number(jameShenasi3StartPage.value);
  pageNumber = jameShenasi3EndPageNumbered - jameShenasi3StartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyJameShenasiReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `جامعه شناسی 3 (${
        jameShenasi3Title.value
      }) از صفحه ${jameShenasi3StartPageNumbered} تا سر صفحه ${
        jameShenasi3StartPageNumbered + dailyJameShenasiReading
      }`,
      secondPart: `جامعه شناسی 3 (${jameShenasi3Title.value}) از صفحه ${
        jameShenasi3StartPageNumbered + dailyJameShenasiReading
      } تا صفحه ${jameShenasi3StartPageNumbered + dailyJameShenasiReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyJameShenasiReadingFloor = Math.ceil(pageNumber / 2);
    let dailyJameShenasiReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `جامعه شناسی 3 (${
        jameShenasi3Title.value
      }) از صفحه ${jameShenasi3StartPageNumbered} تا سر صفحه ${
        jameShenasi3StartPageNumbered + dailyJameShenasiReadingFloor
      }`,
      secondPart: `جامعه شناسی 3 (${jameShenasi3Title.value}) از صفحه ${
        jameShenasi3StartPageNumbered + dailyJameShenasiReadingFloor
      } تا صفحه ${
        jameShenasi3StartPageNumbered +
        dailyJameShenasiReadingFloor +
        dailyJameShenasiReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let tarikh3PageCounterReturnedData = function tarikh3PageCounter() {
  let tarikh3EndPageNumbered = Number(tarikh3EndPage.value);
  let tarikh3StartPageNumbered = Number(tarikh3StartPage.value);
  pageNumber = tarikh3EndPageNumbered - tarikh3StartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyTarikhReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `تاریخ 3 (${
        tarikh3Title.value
      }) از صفحه ${tarikh3StartPageNumbered} تا سر صفحه ${
        tarikh3StartPageNumbered + dailyTarikhReading
      }`,
      secondPart: `تاریخ 3 (${tarikh3Title.value}) از صفحه ${
        tarikh3StartPageNumbered + dailyTarikhReading
      } تا صفحه ${tarikh3StartPageNumbered + dailyTarikhReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyTarikhReadingFloor = Math.ceil(pageNumber / 2);
    let dailyTarikhReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `تاریخ 3 (${
        tarikh3Title.value
      }) از صفحه ${tarikh3StartPageNumbered} تا سر صفحه ${
        tarikh3StartPageNumbered + dailyTarikhReadingFloor
      }`,
      secondPart: `تاریخ 3 (${tarikh3Title.value}) از صفحه ${
        tarikh3StartPageNumbered + dailyTarikhReadingFloor
      } تا صفحه ${
        tarikh3StartPageNumbered +
        dailyTarikhReadingFloor +
        dailyTarikhReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let joghrafi3PageCounterReturnedData = function joghrafi3PageCounter() {
  let joghrafi3EndPageNumbered = Number(joghrafi3EndPage.value);
  let joghrafi3StartPageNumbered = Number(joghrafi3StartPage.value);
  pageNumber = joghrafi3EndPageNumbered - joghrafi3StartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyJoghrafiReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `جغرافیای 3 (${
        joghrafi3Title.value
      }) از صفحه ${joghrafi3StartPageNumbered} تا سر صفحه ${
        joghrafi3StartPageNumbered + dailyJoghrafiReading
      }`,
      secondPart: `جغرافیای 3 (${joghrafi3Title.value}) از صفحه ${
        joghrafi3StartPageNumbered + dailyJoghrafiReading
      } تا صفحه ${joghrafi3StartPageNumbered + dailyJoghrafiReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyJoghrafiReadingFloor = Math.ceil(pageNumber / 2);
    let dailyJoghrafiReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `جغرافیای 3 (${
        joghrafi3Title.value
      }) از صفحه ${joghrafi3StartPageNumbered} تا سر صفحه ${
        joghrafi3StartPageNumbered + dailyJoghrafiReadingFloor
      }`,
      secondPart: `جغرافیای 3 (${joghrafi3Title.value}) از صفحه ${
        joghrafi3StartPageNumbered + dailyJoghrafiReadingFloor
      } تا صفحه ${
        joghrafi3StartPageNumbered +
        dailyJoghrafiReadingFloor +
        dailyJoghrafiReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let falsafe3PageCounterReturnedData = function falsafe3PageCounter() {
  let falsafe3EndPageNumbered = Number(falsafe3EndPage.value);
  let falsafe3StartPageNumbered = Number(falsafe3StartPage.value);
  pageNumber = falsafe3EndPageNumbered - falsafe3StartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyFalsafeReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `فلسفه دوازدهم (${
        falsafe3Title.value
      }) از صفحه ${falsafe3StartPageNumbered} تا سر صفحه ${
        falsafe3StartPageNumbered + dailyFalsafeReading
      }`,
      secondPart: `فلسفه دوازدهم (${falsafe3Title.value}) از صفحه ${
        falsafe3StartPageNumbered + dailyFalsafeReading
      } تا صفحه ${falsafe3StartPageNumbered + dailyFalsafeReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyFalsafeReadingFloor = Math.ceil(pageNumber / 2);
    let dailyFalsafeReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `فلسفه دوازدهم (${
        falsafe3Title.value
      }) از صفحه ${falsafe3StartPageNumbered} تا سر صفحه ${
        falsafe3StartPageNumbered + dailyFalsafeReadingFloor
      }`,
      secondPart: `فلسفه دوازدهم (${falsafe3Title.value}) از صفحه ${
        falsafe3StartPageNumbered + dailyFalsafeReadingFloor
      } تا صفحه ${
        falsafe3StartPageNumbered +
        dailyFalsafeReadingFloor +
        dailyFalsafeReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let falsafe2PageCounterReturnedData = function falsafe2PageCounter() {
  let falsafe2EndPageNumbered = Number(falsafe2EndPage.value);
  let falsafe2StartPageNumbered = Number(falsafe2StartPage.value);
  pageNumber = falsafe2EndPageNumbered - falsafe2StartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyFalsafeReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `فلسفه یازدهم (${
        falsafe2Title.value
      }) از صفحه ${falsafe2StartPageNumbered} تا سر صفحه ${
        falsafe2StartPageNumbered + dailyFalsafeReading
      }`,
      secondPart: `فلسفه یازدهم (${falsafe2Title.value}) از صفحه ${
        falsafe2StartPageNumbered + dailyFalsafeReading
      } تا صفحه ${falsafe2StartPageNumbered + dailyFalsafeReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyFalsafeReadingFloor = Math.ceil(pageNumber / 2);
    let dailyFalsafeReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `فلسفه یازدهم (${
        falsafe2Title.value
      }) از صفحه ${falsafe2StartPageNumbered} تا سر صفحه ${
        falsafe2StartPageNumbered + dailyFalsafeReadingFloor
      }`,
      secondPart: `فلسفه یازدهم (${falsafe2Title.value}) از صفحه ${
        falsafe2StartPageNumbered + dailyFalsafeReadingFloor
      } تا صفحه ${
        falsafe2StartPageNumbered +
        dailyFalsafeReadingFloor +
        dailyFalsafeReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let manteghPageCounterReturnedData = function manteghPageCounter() {
  let manteghEndPageNumbered = Number(manteghEndPage.value);
  let manteghStartPageNumbered = Number(manteghStartPage.value);
  pageNumber = manteghEndPageNumbered - manteghStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyManteghReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `منطق (${
        manteghTitle.value
      }) از صفحه ${manteghStartPageNumbered} تا سر صفحه ${
        manteghStartPageNumbered + dailyManteghReading
      }`,
      secondPart: `منطق (${manteghTitle.value}) از صفحه ${
        manteghStartPageNumbered + dailyManteghReading
      } تا صفحه ${manteghStartPageNumbered + dailyManteghReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyManteghReadingFloor = Math.ceil(pageNumber / 2);
    let dailyManteghReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `منطق (${
        manteghTitle.value
      }) از صفحه ${manteghStartPageNumbered} تا سر صفحه ${
        manteghStartPageNumbered + dailyManteghReadingFloor
      }`,
      secondPart: `منطق (${manteghTitle.value}) از صفحه ${
        manteghStartPageNumbered + dailyManteghReadingFloor
      } تا صفحه ${
        manteghStartPageNumbered +
        dailyManteghReadingFloor +
        dailyManteghReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

function generateTable() {
  if (isStudent.value.trim() === "بله" && score.value.trim() < 5000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (30 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (45 دقیقه مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().firstPart
      } (30 دقیقه مطالعه)`,
      totalTime: `3:15`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (30 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().secondPart} (45 دقیقه مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().secondPart
      } (30 دقیقه مطالعه)`,
      totalTime: `3:15`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) از صفحه ${jameShenasi3StartPage.value} تا صفحه ${jameShenasi3EndPage.value} (1 ساعت مطالعه)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) از صفحه ${arabiBasestartPage.value} تا صفحه ${arabiBaseEndPage.value} (30 دقیقه مطالعه)`,
      ravanShenasi: `${
        ravanShenasiPageCounterReturnedData().firstPart
      } (30 دقیقه مطالعه)`,
      totalTime: `3:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 3 (${tarikh3Title.value}) از صفحه ${tarikh3StartPage.value} تا صفحه ${tarikh3EndPage.value} (1 ساعت مطالعه)`,
      joghrafi: `جغرافیای 3 (${joghrafi3Title.value}) از صفحه ${joghrafi3StartPage.value} تا صفحه ${joghrafi3EndPage.value} (1 ساعت مطالعه)`,
      totalTime: `3:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (30 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (30 دقیقه مطالعه)`,
      ravanShenasi: `${
        ravanShenasiPageCounterReturnedData().secondPart
      } (30 دقیقه مطالعه)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) از صفحه ${falsafe2StartPage.value} تا صفحه ${falsafe2EndPage.value} (30 دقیقه مطالعه)`,
      totalTime: `3:30`,
    };
    let panjShanbe1 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) از صفحه ${mathBaseStartPage.value} تا صفحه ${mathBaseEndPage.value} (1 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) از صفحه ${adabiat3StartPage.value} تا صفحه ${adabiat3EndPage.value} (3 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (30 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (30 دقیقه مطالعه)`,
      mantegh: `منطق (${manteghTitle.value}) از صفحه ${manteghStartPage.value} تا صفحه ${manteghEndPage.value} (2 ساعت مطالعه)`,
      totalTime: `7`,
    };
    let jome1 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) از صفحه ${math3StartPage.value} تا صفحه ${math3EndPage.value} (2 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) از صفحه ${adabiatBaseStartPage.value} تا صفحه ${adabiatBaseEndPage.value} (2 ساعت مطالعه)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) از صفحه ${falsafe3StartPage.value} تا صفحه ${falsafe3EndPage.value} (1:30 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `7`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (15 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (45 دقیقه حل تست)`,
      totalTime: `4`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (15 دقیقه حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (15 دقیقه حل تست)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (30 دقیقه حل تست)`,
      totalTime: `4`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (45 دقیقه حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (15 دقیقه حل تست)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (45 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (45 دقیقه حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (45 دقیقه حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (15 دقیقه حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (15 دقیقه حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (30 دقیقه حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (30 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (45 دقیقه حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (15 دقیقه حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (15 دقیقه حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (45 دقیقه حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (1:15 ساعت حل تست)`,
      totalTime: `5:15`,
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
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.eghtesad +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.ravanShenasi +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.tarikh +
      "<br>" +
      chaharShanbe1.joghrafi +
      "<br>" +
      chaharShanbe1.ravanShenasi +
      "<br>" +
      chaharShanbe1.falsafe +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.tarikh +
      "<br>" +
      panjShanbe1.joghrafi +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.falsafe +
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
      shanbe2.adabiat +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.falsafe +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.arabi +
      "<br>" +
      doShanbe2.falsafe +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi1 +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.eghtesad +
      "<br>" +
      seShanbe2.ravanShenasi +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.tarikh1 +
      "<br>" +
      chaharShanbe2.tarikh2 +
      "<br>" +
      chaharShanbe2.joghrafi3 +
      "<br>" +
      chaharShanbe2.mantegh +
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
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.eghtesad +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.ravanShenasi +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.tarikh +
        "<br>" +
        chaharShanbe1.joghrafi +
        "<br>" +
        chaharShanbe1.ravanShenasi +
        "<br>" +
        chaharShanbe1.falsafe +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.tarikh +
        "<br>" +
        panjShanbe1.joghrafi +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.falsafe +
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
        shanbe2.adabiat +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.falsafe +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.arabi +
        "<br>" +
        doShanbe2.falsafe +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi1 +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.eghtesad +
        "<br>" +
        seShanbe2.ravanShenasi +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.tarikh1 +
        "<br>" +
        chaharShanbe2.tarikh2 +
        "<br>" +
        chaharShanbe2.joghrafi3 +
        "<br>" +
        chaharShanbe2.mantegh +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (
    isStudent.value.trim() === "بله" &&
    score.value.trim() >= 5000 &&
    score.value.trim() < 6000
  ) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (30 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().firstPart
      } (30 دقیقه مطالعه)`,
      totalTime: `3:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (30 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().secondPart} (45 دقیقه مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      totalTime: `3:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) از صفحه ${jameShenasi3StartPage.value} تا صفحه ${jameShenasi3EndPage.value} (1:30 ساعت مطالعه)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) از صفحه ${arabiBasestartPage.value} تا صفحه ${arabiBaseEndPage.value} (45 دقیقه مطالعه)`,
      totalTime: `3:45`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 3 (${tarikh3Title.value}) از صفحه ${tarikh3StartPage.value} تا صفحه ${tarikh3EndPage.value} (1:30 ساعت مطالعه)`,
      joghrafi: `جغرافیای 3 (${joghrafi3Title.value}) از صفحه ${joghrafi3StartPage.value} تا صفحه ${joghrafi3EndPage.value} (1:30 ساعت مطالعه)`,
      totalTime: `4:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (30 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (30 دقیقه مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (1:15 دقیقه مطالعه)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) از صفحه ${falsafe2StartPage.value} تا صفحه ${falsafe2EndPage.value} (45 دقیقه مطالعه)`,
      totalTime: `4:30`,
    };
    let panjShanbe1 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) از صفحه ${mathBaseStartPage.value} تا صفحه ${mathBaseEndPage.value} (1:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) از صفحه ${adabiat3StartPage.value} تا صفحه ${adabiat3EndPage.value} (3:30 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (30 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (30 دقیقه مطالعه)`,
      mantegh: `منطق (${manteghTitle.value}) از صفحه ${manteghStartPage.value} تا صفحه ${manteghEndPage.value} (2:30 ساعت مطالعه)`,
      totalTime: `8:30`,
    };
    let jome1 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) از صفحه ${math3StartPage.value} تا صفحه ${math3EndPage.value} (2:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) از صفحه ${adabiatBaseStartPage.value} تا صفحه ${adabiatBaseEndPage.value} (2:30 ساعت مطالعه)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) از صفحه ${falsafe3StartPage.value} تا صفحه ${falsafe3EndPage.value} (1:45 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2 ساعت)`,
      totalTime: `8:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:15 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (15 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:15 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (15 دقیقه حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (30 دقیقه حل تست)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (30 دقیقه حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (1 ساعت حل تست)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (1 ساعت حل تست)`,
      totalTime: `5`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (1 ساعت حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (15 دقیقه حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (15 دقیقه حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (45 دقیقه حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `5:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1 ساعت حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (15 دقیقه حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (15 دقیقه حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (1 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (1:30 ساعت حل تست)`,
      totalTime: `6:15`,
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
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.eghtesad +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.tarikh +
      "<br>" +
      chaharShanbe1.joghrafi +
      "<br>" +
      chaharShanbe1.ravanShenasi +
      "<br>" +
      chaharShanbe1.falsafe +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.tarikh +
      "<br>" +
      panjShanbe1.joghrafi +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.falsafe +
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
      shanbe2.adabiat +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.ravanShenasi +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.falsafe +
      "<br>" +
      yekShanbe2.ravanShenasi +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.falsafe +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi1 +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.eghtesad +
      "<br>" +
      seShanbe2.ravanShenasi +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.tarikh1 +
      "<br>" +
      chaharShanbe2.tarikh2 +
      "<br>" +
      chaharShanbe2.joghrafi3 +
      "<br>" +
      chaharShanbe2.mantegh +
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
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.eghtesad +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.tarikh +
        "<br>" +
        chaharShanbe1.joghrafi +
        "<br>" +
        chaharShanbe1.ravanShenasi +
        "<br>" +
        chaharShanbe1.falsafe +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.tarikh +
        "<br>" +
        panjShanbe1.joghrafi +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.falsafe +
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
        shanbe2.adabiat +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.ravanShenasi +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.falsafe +
        "<br>" +
        yekShanbe2.ravanShenasi +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.falsafe +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi1 +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.eghtesad +
        "<br>" +
        seShanbe2.ravanShenasi +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.tarikh1 +
        "<br>" +
        chaharShanbe2.tarikh2 +
        "<br>" +
        chaharShanbe2.joghrafi3 +
        "<br>" +
        chaharShanbe2.mantegh +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (
    isStudent.value.trim() === "بله" &&
    score.value.trim() >= 6000 &&
    score.value.trim() < 7000
  ) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (45 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه)`,
      totalTime: `4:15`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (45 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().secondPart} (1 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      totalTime: `4:15`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) از صفحه ${jameShenasi3StartPage.value} تا صفحه ${jameShenasi3EndPage.value} (1:30 ساعت مطالعه)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) از صفحه ${arabiBasestartPage.value} تا صفحه ${arabiBaseEndPage.value} (1 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 3 (${tarikh3Title.value}) از صفحه ${tarikh3StartPage.value} تا صفحه ${tarikh3EndPage.value} (1:30 ساعت مطالعه)`,
      joghrafi: `جغرافیای 3 (${joghrafi3Title.value}) از صفحه ${joghrafi3StartPage.value} تا صفحه ${joghrafi3EndPage.value} (1:30 ساعت مطالعه)`,
      totalTime: `4:45`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (45 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (45 دقیقه مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (1:30 ساعت مطالعه)`,
      totalTime: `4:45`,
    };
    let panjShanbe1 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) از صفحه ${mathBaseStartPage.value} تا صفحه ${mathBaseEndPage.value} (2 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) از صفحه ${adabiat3StartPage.value} تا صفحه ${adabiat3EndPage.value} (4 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (45 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (45 دقیقه مطالعه)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) از صفحه ${falsafe2StartPage.value} تا صفحه ${falsafe2EndPage.value} (1 ساعت مطالعه)`,
      mantegh: `منطق (${manteghTitle.value}) از صفحه ${manteghStartPage.value} تا صفحه ${manteghEndPage.value} (3 ساعت مطالعه)`,
      totalTime: `11:30`,
    };
    let jome1 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) از صفحه ${math3StartPage.value} تا صفحه ${math3EndPage.value} (3 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) از صفحه ${adabiatBaseStartPage.value} تا صفحه ${adabiatBaseEndPage.value} (3 ساعت مطالعه)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) از صفحه ${falsafe3StartPage.value} تا صفحه ${falsafe3EndPage.value} (2 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2:15 ساعت)`,
      totalTime: `10:15`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:30 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (30 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:30 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (30 دقیقه حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (15 دقیقه حل تست)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (45 دقیقه حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1:15 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (45 دقیقه حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (30 دقیقه حل تست)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1:15 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (45 دقیقه حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (30 دقیقه حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (30 دقیقه حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (45 دقیقه حل تست)`,
      totalTime: `6:30`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1 ساعت حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (30 دقیقه حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (30 دقیقه حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (45 دقیقه حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (1:45 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let panjShanbe2 = {
      revising: `(8:15 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `8:15`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.eghtesad +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.tarikh +
      "<br>" +
      chaharShanbe1.joghrafi +
      "<br>" +
      chaharShanbe1.ravanShenasi +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.tarikh +
      "<br>" +
      panjShanbe1.joghrafi +
      "<br>" +
      panjShanbe1.falsafe +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.falsafe +
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
      shanbe2.adabiat +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.ravanShenasi +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.falsafe +
      "<br>" +
      yekShanbe2.ravanShenasi +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.arabi +
      "<br>" +
      doShanbe2.falsafe +
      "<br>" +
      doShanbe2.ravanShenasi +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi1 +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.eghtesad +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.tarikh1 +
      "<br>" +
      chaharShanbe2.tarikh2 +
      "<br>" +
      chaharShanbe2.joghrafi3 +
      "<br>" +
      chaharShanbe2.mantegh +
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
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.eghtesad +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.tarikh +
        "<br>" +
        chaharShanbe1.joghrafi +
        "<br>" +
        chaharShanbe1.ravanShenasi +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.tarikh +
        "<br>" +
        panjShanbe1.joghrafi +
        "<br>" +
        panjShanbe1.falsafe +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.falsafe +
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
        shanbe2.adabiat +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.ravanShenasi +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.falsafe +
        "<br>" +
        yekShanbe2.ravanShenasi +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.arabi +
        "<br>" +
        doShanbe2.falsafe +
        "<br>" +
        doShanbe2.ravanShenasi +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi1 +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.eghtesad +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.tarikh1 +
        "<br>" +
        chaharShanbe2.tarikh2 +
        "<br>" +
        chaharShanbe2.joghrafi3 +
        "<br>" +
        chaharShanbe2.mantegh +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (isStudent.value.trim() === "بله" && score.value.trim() >= 7000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (45 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (1:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه)`,
      totalTime: `4:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (45 دقیقه مطالعه)`,
      arabi: `${arabi3PageCounterReturnedData().secondPart} (1 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      totalTime: `4:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) از صفحه ${jameShenasi3StartPage.value} تا صفحه ${jameShenasi3EndPage.value} (2 ساعت مطالعه)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) از صفحه ${arabiBasestartPage.value} تا صفحه ${arabiBaseEndPage.value} (1:15 ساعت مطالعه)`,
      totalTime: `5`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 3 (${tarikh3Title.value}) از صفحه ${tarikh3StartPage.value} تا صفحه ${tarikh3EndPage.value} (2 ساعت مطالعه)`,
      joghrafi: `جغرافیای 3 (${joghrafi3Title.value}) از صفحه ${joghrafi3StartPage.value} تا صفحه ${joghrafi3EndPage.value} (2 ساعت مطالعه)`,
      totalTime: `5:45`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (45 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (45 دقیقه مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (1:45 ساعت مطالعه)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) از صفحه ${falsafe2StartPage.value} تا صفحه ${falsafe2EndPage.value} (1:15 ساعت مطالعه)`,
      totalTime: `6:15`,
    };
    let panjShanbe1 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) از صفحه ${mathBaseStartPage.value} تا صفحه ${mathBaseEndPage.value} (2:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) از صفحه ${adabiat3StartPage.value} تا صفحه ${adabiat3EndPage.value} (4:30 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (45 دقیقه مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (45 دقیقه مطالعه)`,
      mantegh: `منطق (${manteghTitle.value}) از صفحه ${manteghStartPage.value} تا صفحه ${manteghEndPage.value} (3:30 ساعت مطالعه)`,
      totalTime: `12`,
    };
    let jome1 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) از صفحه ${math3StartPage.value} تا صفحه ${math3EndPage.value} (3:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) از صفحه ${adabiatBaseStartPage.value} تا صفحه ${adabiatBaseEndPage.value} (3:30 ساعت مطالعه)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) از صفحه ${falsafe3StartPage.value} تا صفحه ${falsafe3EndPage.value} (2:15 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2:45 ساعت)`,
      totalTime: `12`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:45 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (30 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (1:15 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `6:30`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:45 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (30 دقیقه حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (30 دقیقه حل تست)`,
      falsafe: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (45 دقیقه حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (15 دقیقه حل تست)`,
      totalTime: `6:30`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1:30 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (1 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (15 دقیقه حل تست)`,
      falsafe: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (1:15 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (30 دقیقه حل تست)`,
      totalTime: `7:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:15 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1:30 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (1 ساعت حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (30 دقیقه حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (30 دقیقه حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1 ساعت حل تست)`,
      totalTime: `7:30`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:15 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1 ساعت حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (30 دقیقه حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (30 دقیقه حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (1 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (2 ساعت حل تست)`,
      totalTime: `8`,
    };
    let panjShanbe2 = {
      revising: `(9:15 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `9:15`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.eghtesad +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.tarikh +
      "<br>" +
      chaharShanbe1.joghrafi +
      "<br>" +
      chaharShanbe1.ravanShenasi +
      "<br>" +
      chaharShanbe1.falsafe +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.math +
      "<br>" +
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.tarikh +
      "<br>" +
      panjShanbe1.joghrafi +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.falsafe +
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
      shanbe2.adabiat +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.ravanShenasi +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.falsafe +
      "<br>" +
      yekShanbe2.ravanShenasi +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.arabi +
      "<br>" +
      doShanbe2.falsafe +
      "<br>" +
      doShanbe2.ravanShenasi +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi1 +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.eghtesad +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.tarikh1 +
      "<br>" +
      chaharShanbe2.tarikh2 +
      "<br>" +
      chaharShanbe2.joghrafi3 +
      "<br>" +
      chaharShanbe2.mantegh +
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
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.eghtesad +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.tarikh +
        "<br>" +
        chaharShanbe1.joghrafi +
        "<br>" +
        chaharShanbe1.ravanShenasi +
        "<br>" +
        chaharShanbe1.falsafe +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.math +
        "<br>" +
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.tarikh +
        "<br>" +
        panjShanbe1.joghrafi +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.falsafe +
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
        shanbe2.adabiat +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.ravanShenasi +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.falsafe +
        "<br>" +
        yekShanbe2.ravanShenasi +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.arabi +
        "<br>" +
        doShanbe2.falsafe +
        "<br>" +
        doShanbe2.ravanShenasi +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi1 +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.eghtesad +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.tarikh1 +
        "<br>" +
        chaharShanbe2.tarikh2 +
        "<br>" +
        chaharShanbe2.joghrafi3 +
        "<br>" +
        chaharShanbe2.mantegh +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (isStudent.value.trim() === "خیر" && score.value.trim() < 5000) {
    let shanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (2 ساعت مطالعه)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (1 ساعت مطالعه)`,
      tarikh: `${tarikh3PageCounterReturnedData().firstPart} (2 ساعت مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (1 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      totalTime: `9`,
    };
    let yekShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      arabi: `${arabiBasePageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (1 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      totalTime: `8`,
    };
    let doShanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().secondPart
      } (1:30 مطالعه و حل تمرین)`,
      arabi: `${
        arabi3PageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (1 ساعت مطالعه)`,
      tarikh: `${tarikh3PageCounterReturnedData().secondPart} (2 ساعت مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (1 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه)`,
      totalTime: `9`,
    };
    let seShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      arabi: `${arabiBasePageCounterReturnedData().secondPart} (1 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (1 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      totalTime: `8`,
    };
    let chaharShanbe1 = {
      math: `${
        math3PageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      mantegh: `${manteghPageCounterReturnedData().firstPart} (3 ساعت مطالعه)`,
      totalTime: `8:30`,
    };
    let panjShanbe1 = {
      adabiat: `${adabiat3PageCounterReturnedData().firstPart} (3 ساعت مطالعه)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      mantegh: `${manteghPageCounterReturnedData().secondPart} (3 ساعت مطالعه)`,
      totalTime: `9`,
    };
    let jome1 = {
      math: `${
        math3PageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiat3PageCounterReturnedData().secondPart
      } (3 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (3 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2 ساعت)`,
      totalTime: `10:30`,
    };
    let shanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1:45 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:45 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (45 دقیقه حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (1:45 ساعت حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (45 دقیقه حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (1:45 ساعت حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (30 دقیقه حل تست)`,
      totalTime: `10`,
    };
    let yekShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:15 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (1:45 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (45 دقیقه حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (1:45 ساعت حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (45 دقیقه حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `10`,
    };
    let doShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1:45 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (1:45 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (45 دقیقه حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (1:45 ساعت حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (45 دقیقه حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (1:45 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (30 دقیقه حل تست)`,
      totalTime: `10`,
    };
    let seShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:15 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (1:45 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (45 دقیقه حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (1:45 ساعت حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (45 دقیقه حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `10`,
    };
    let chaharShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (1:30 ساعت حل تست)`,
      falsafe2: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (1:30 ساعت حل تست)`,
      falsafe3: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (3:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (2:30 ساعت حل تست)`,
      totalTime: `10`,
    };
    let panjShanbe2 = {
      revising: `(8 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `8`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.math +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.tarikh +
      "<br>" +
      shanbe1.joghrafi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.adabiat +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.tarikh +
      "<br>" +
      yekShanbe1.joghrafi +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.math +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.tarikh +
      "<br>" +
      doShanbe1.joghrafi +
      "<br>" +
      doShanbe1.eghtesad +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.adabiat +
      "<br>" +
      seShanbe1.arabi +
      "<br>" +
      seShanbe1.jameShenasi +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.falsafe2 +
      "<br>" +
      chaharShanbe1.falsafe3 +
      "<br>" +
      chaharShanbe1.mantegh +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.falsafe2 +
      "<br>" +
      panjShanbe1.falsafe3 +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.ravanShenasi +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.math +
      "<br>" +
      shanbe2.adabiat +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.tarikh1 +
      "<br>" +
      shanbe2.joghrafi3 +
      "<br>" +
      shanbe2.eghtesad +
      "<br>" +
      shanbe2.mantegh +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.tarikh +
      "<br>" +
      yekShanbe2.joghrafi1 +
      "<br>" +
      yekShanbe2.eghtesad +
      "<br>" +
      yekShanbe2.mantegh +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.arabi +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.tarikh2 +
      "<br>" +
      doShanbe2.joghrafi3 +
      "<br>" +
      doShanbe2.ravanShenasi +
      "<br>" +
      doShanbe2.mantegh +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.arabi +
      "<br>" +
      seShanbe2.jameShenasi +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.ravanShenasi +
      "<br>" +
      seShanbe2.mantegh +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.falsafe2 +
      "<br>" +
      chaharShanbe2.falsafe3 +
      "<br>" +
      chaharShanbe2.mantegh +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.math +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.tarikh +
        "<br>" +
        shanbe1.joghrafi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.adabiat +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.tarikh +
        "<br>" +
        yekShanbe1.joghrafi +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.math +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.tarikh +
        "<br>" +
        doShanbe1.joghrafi +
        "<br>" +
        doShanbe1.eghtesad +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.adabiat +
        "<br>" +
        seShanbe1.arabi +
        "<br>" +
        seShanbe1.jameShenasi +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.falsafe2 +
        "<br>" +
        chaharShanbe1.falsafe3 +
        "<br>" +
        chaharShanbe1.mantegh +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.falsafe2 +
        "<br>" +
        panjShanbe1.falsafe3 +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.ravanShenasi +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.math +
        "<br>" +
        shanbe2.adabiat +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.tarikh1 +
        "<br>" +
        shanbe2.joghrafi3 +
        "<br>" +
        shanbe2.eghtesad +
        "<br>" +
        shanbe2.mantegh +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.tarikh +
        "<br>" +
        yekShanbe2.joghrafi1 +
        "<br>" +
        yekShanbe2.eghtesad +
        "<br>" +
        yekShanbe2.mantegh +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.arabi +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.tarikh2 +
        "<br>" +
        doShanbe2.joghrafi3 +
        "<br>" +
        doShanbe2.ravanShenasi +
        "<br>" +
        doShanbe2.mantegh +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.arabi +
        "<br>" +
        seShanbe2.jameShenasi +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.ravanShenasi +
        "<br>" +
        seShanbe2.mantegh +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.falsafe2 +
        "<br>" +
        chaharShanbe2.falsafe3 +
        "<br>" +
        chaharShanbe2.mantegh +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (
    isStudent.value.trim() === "خیر" &&
    score.value.trim() >= 5000 &&
    score.value.trim() < 6000
  ) {
    let shanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (2 ساعت مطالعه)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (1:15 ساعت مطالعه)`,
      tarikh: `${tarikh3PageCounterReturnedData().firstPart} (2 ساعت مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (1:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      totalTime: `9:15`,
    };
    let yekShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      arabi: `${arabiBasePageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      totalTime: `9:15`,
    };
    let doShanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().secondPart
      } (1:45 مطالعه و حل تمرین)`,
      arabi: `${arabi3PageCounterReturnedData().secondPart} (2:15 ساعت مطالعه)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (1:15 ساعت مطالعه)`,
      tarikh: `${tarikh3PageCounterReturnedData().secondPart} (2 ساعت مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (1:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      totalTime: `9:30`,
    };
    let seShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      arabi: `${
        arabiBasePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().forthPart
      } (45 دقیقه مطالعه)`,
      totalTime: `9:30`,
    };
    let chaharShanbe1 = {
      math: `${
        math3PageCounterReturnedData().firstPart
      } (2:45 ساعت مطالعه و حل تمرین)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      mantegh: `${
        manteghPageCounterReturnedData().firstPart
      } (3:15 ساعت مطالعه)`,
      totalTime: `9:30`,
    };
    let panjShanbe1 = {
      adabiat: `${
        adabiat3PageCounterReturnedData().firstPart
      } (3:15 ساعت مطالعه)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      mantegh: `${
        manteghPageCounterReturnedData().secondPart
      } (3:15 ساعت مطالعه)`,
      totalTime: `9:30`,
    };
    let jome1 = {
      math: `${
        math3PageCounterReturnedData().secondPart
      } (2:45 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiat3PageCounterReturnedData().secondPart
      } (3:15 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (3:30 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2 ساعت)`,
      totalTime: `11:30`,
    };
    let shanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1:45 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (2 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (1:45 ساعت حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (1 ساعت حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (1:45 ساعت حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1:15 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (30 دقیقه حل تست)`,
      totalTime: `11`,
    };
    let yekShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:30 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (2 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (1:45 ساعت حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (1 ساعت حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1:15 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (30 دقیقه حل تست)`,
      totalTime: `11`,
    };
    let doShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1:45 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (2 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (45 دقیقه حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (1:45 ساعت حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (1 ساعت حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (1:45 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:15 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `11`,
    };
    let seShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:30 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (1:45 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (1:45 ساعت حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:15 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `11`,
    };
    let chaharShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1:30 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2 ساعت حل تست)`,
      falsafe2: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (1:45 ساعت حل تست)`,
      falsafe3: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (3:45 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (3 ساعت حل تست)`,
      totalTime: `12`,
    };
    let panjShanbe2 = {
      revising: `(9 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `9`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.math +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.tarikh +
      "<br>" +
      shanbe1.joghrafi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.adabiat +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.tarikh +
      "<br>" +
      yekShanbe1.joghrafi +
      "<br>" +
      yekShanbe1.eghtesad +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.math +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.tarikh +
      "<br>" +
      doShanbe1.joghrafi +
      "<br>" +
      doShanbe1.eghtesad +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.adabiat +
      "<br>" +
      seShanbe1.arabi +
      "<br>" +
      seShanbe1.jameShenasi +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.eghtesad +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.falsafe2 +
      "<br>" +
      chaharShanbe1.falsafe3 +
      "<br>" +
      chaharShanbe1.mantegh +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.falsafe2 +
      "<br>" +
      panjShanbe1.falsafe3 +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.ravanShenasi +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.math +
      "<br>" +
      shanbe2.adabiat +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.tarikh1 +
      "<br>" +
      shanbe2.joghrafi3 +
      "<br>" +
      shanbe2.eghtesad +
      "<br>" +
      shanbe2.mantegh +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.tarikh +
      "<br>" +
      yekShanbe2.joghrafi1 +
      "<br>" +
      yekShanbe2.eghtesad +
      "<br>" +
      yekShanbe2.mantegh +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.arabi +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.tarikh2 +
      "<br>" +
      doShanbe2.joghrafi3 +
      "<br>" +
      doShanbe2.ravanShenasi +
      "<br>" +
      doShanbe2.mantegh +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.arabi +
      "<br>" +
      seShanbe2.jameShenasi +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.ravanShenasi +
      "<br>" +
      seShanbe2.mantegh +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.falsafe2 +
      "<br>" +
      chaharShanbe2.falsafe3 +
      "<br>" +
      chaharShanbe2.mantegh +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.math +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.tarikh +
        "<br>" +
        shanbe1.joghrafi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.adabiat +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.tarikh +
        "<br>" +
        yekShanbe1.joghrafi +
        "<br>" +
        yekShanbe1.eghtesad +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.math +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.tarikh +
        "<br>" +
        doShanbe1.joghrafi +
        "<br>" +
        doShanbe1.eghtesad +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.adabiat +
        "<br>" +
        seShanbe1.arabi +
        "<br>" +
        seShanbe1.jameShenasi +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.eghtesad +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.falsafe2 +
        "<br>" +
        chaharShanbe1.falsafe3 +
        "<br>" +
        chaharShanbe1.mantegh +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.falsafe2 +
        "<br>" +
        panjShanbe1.falsafe3 +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.ravanShenasi +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.math +
        "<br>" +
        shanbe2.adabiat +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.tarikh1 +
        "<br>" +
        shanbe2.joghrafi3 +
        "<br>" +
        shanbe2.eghtesad +
        "<br>" +
        shanbe2.mantegh +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.tarikh +
        "<br>" +
        yekShanbe2.joghrafi1 +
        "<br>" +
        yekShanbe2.eghtesad +
        "<br>" +
        yekShanbe2.mantegh +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.arabi +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.tarikh2 +
        "<br>" +
        doShanbe2.joghrafi3 +
        "<br>" +
        doShanbe2.ravanShenasi +
        "<br>" +
        doShanbe2.mantegh +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.arabi +
        "<br>" +
        seShanbe2.jameShenasi +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.ravanShenasi +
        "<br>" +
        seShanbe2.mantegh +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.falsafe2 +
        "<br>" +
        chaharShanbe2.falsafe3 +
        "<br>" +
        chaharShanbe2.mantegh +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (
    isStudent.value.trim() === "خیر" &&
    score.value.trim() >= 6000 &&
    score.value.trim() < 7000
  ) {
    let shanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (2:15 ساعت مطالعه)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (1:15 ساعت مطالعه)`,
      tarikh: `${
        tarikh3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (1:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      totalTime: `10`,
    };
    let yekShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه)`,
      arabi: `${
        arabiBasePageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      totalTime: `10:30`,
    };
    let doShanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().secondPart
      } (2 مطالعه و حل تمرین)`,
      arabi: `${
        arabi3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (1:15 ساعت مطالعه)`,
      tarikh: `${
        tarikh3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (1:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      totalTime: `10`,
    };
    let seShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه)`,
      arabi: `${
        arabiBasePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().forthPart
      } (1 ساعت مطالعه)`,
      totalTime: `10:30`,
    };
    let chaharShanbe1 = {
      math: `${
        math3PageCounterReturnedData().firstPart
      } (3 ساعت مطالعه و حل تمرین)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      mantegh: `${
        manteghPageCounterReturnedData().firstPart
      } (3:30 ساعت مطالعه)`,
      totalTime: `10`,
    };
    let panjShanbe1 = {
      adabiat: `${
        adabiat3PageCounterReturnedData().firstPart
      } (3:30 ساعت مطالعه)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      mantegh: `${
        manteghPageCounterReturnedData().secondPart
      } (3:30 ساعت مطالعه)`,
      totalTime: `10:30`,
    };
    let jome1 = {
      math: `${
        math3PageCounterReturnedData().secondPart
      } (3 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiat3PageCounterReturnedData().secondPart
      } (3:30 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (4 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2 ساعت)`,
      totalTime: `12:30`,
    };
    let shanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (2 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (2:15 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (2 ساعت حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (1 ساعت حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (2 ساعت حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (30 دقیقه حل تست)`,
      totalTime: `12:15`,
    };
    let yekShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:45 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2:15 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (2 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (2 ساعت حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (1 ساعت حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `12:15`,
    };
    let doShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (2 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (2:15 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (2 ساعت حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (1 ساعت حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (2 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (30 دقیقه حل تست)`,
      totalTime: `12:15`,
    };
    let seShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (1:45 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2:15 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (2 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (2 ساعت حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `12:15`,
    };
    let chaharShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (1:30 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2 ساعت حل تست)`,
      falsafe2: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (2 ساعت حل تست)`,
      falsafe3: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (4 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (3:30 ساعت حل تست)`,
      totalTime: `13`,
    };
    let panjShanbe2 = {
      revising: `(10 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `10`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.math +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.tarikh +
      "<br>" +
      shanbe1.joghrafi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.adabiat +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.tarikh +
      "<br>" +
      yekShanbe1.joghrafi +
      "<br>" +
      yekShanbe1.eghtesad +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.math +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.tarikh +
      "<br>" +
      doShanbe1.joghrafi +
      "<br>" +
      doShanbe1.eghtesad +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.adabiat +
      "<br>" +
      seShanbe1.arabi +
      "<br>" +
      seShanbe1.jameShenasi +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.eghtesad +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.falsafe2 +
      "<br>" +
      chaharShanbe1.falsafe3 +
      "<br>" +
      chaharShanbe1.mantegh +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.falsafe2 +
      "<br>" +
      panjShanbe1.falsafe3 +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.ravanShenasi +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.math +
      "<br>" +
      shanbe2.adabiat +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.tarikh1 +
      "<br>" +
      shanbe2.joghrafi3 +
      "<br>" +
      shanbe2.eghtesad +
      "<br>" +
      shanbe2.mantegh +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.tarikh +
      "<br>" +
      yekShanbe2.joghrafi1 +
      "<br>" +
      yekShanbe2.eghtesad +
      "<br>" +
      yekShanbe2.mantegh +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.arabi +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.tarikh2 +
      "<br>" +
      doShanbe2.joghrafi3 +
      "<br>" +
      doShanbe2.ravanShenasi +
      "<br>" +
      doShanbe2.mantegh +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.arabi +
      "<br>" +
      seShanbe2.jameShenasi +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.ravanShenasi +
      "<br>" +
      seShanbe2.mantegh +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.falsafe2 +
      "<br>" +
      chaharShanbe2.falsafe3 +
      "<br>" +
      chaharShanbe2.mantegh +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.math +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.tarikh +
        "<br>" +
        shanbe1.joghrafi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.adabiat +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.tarikh +
        "<br>" +
        yekShanbe1.joghrafi +
        "<br>" +
        yekShanbe1.eghtesad +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.math +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.tarikh +
        "<br>" +
        doShanbe1.joghrafi +
        "<br>" +
        doShanbe1.eghtesad +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.adabiat +
        "<br>" +
        seShanbe1.arabi +
        "<br>" +
        seShanbe1.jameShenasi +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.eghtesad +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.falsafe2 +
        "<br>" +
        chaharShanbe1.falsafe3 +
        "<br>" +
        chaharShanbe1.mantegh +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.falsafe2 +
        "<br>" +
        panjShanbe1.falsafe3 +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.ravanShenasi +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.math +
        "<br>" +
        shanbe2.adabiat +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.tarikh1 +
        "<br>" +
        shanbe2.joghrafi3 +
        "<br>" +
        shanbe2.eghtesad +
        "<br>" +
        shanbe2.mantegh +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.tarikh +
        "<br>" +
        yekShanbe2.joghrafi1 +
        "<br>" +
        yekShanbe2.eghtesad +
        "<br>" +
        yekShanbe2.mantegh +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.arabi +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.tarikh2 +
        "<br>" +
        doShanbe2.joghrafi3 +
        "<br>" +
        doShanbe2.ravanShenasi +
        "<br>" +
        doShanbe2.mantegh +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.arabi +
        "<br>" +
        seShanbe2.jameShenasi +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.ravanShenasi +
        "<br>" +
        seShanbe2.mantegh +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.falsafe2 +
        "<br>" +
        chaharShanbe2.falsafe3 +
        "<br>" +
        chaharShanbe2.mantegh +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (isStudent.value.trim() === "خیر" && score.value.trim() >= 7000) {
    let shanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      arabi: `${arabi3PageCounterReturnedData().firstPart} (2:30 ساعت مطالعه)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) از صفحه ${jameShenasi1StartPage.value} تا صفحه ${jameShenasi1EndPage.value} (1:30 ساعت مطالعه)`,
      tarikh: `${
        tarikh3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      joghrafi: `جغرافیای 1 (${joghrafi1Title.value}) از صفحه ${joghrafi1StartPage.value} تا صفحه ${joghrafi1EndPage.value} (1:30 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `11:15`,
    };
    let yekShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().firstPart
      } (2:45 ساعت مطالعه)`,
      arabi: `${
        arabiBasePageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      tarikh: `تاریخ 1 (${tarikh1Title.value}) از صفحه ${tarikh1StartPage.value} تا صفحه ${tarikh1EndPage.value} (1:30 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      totalTime: `11:15`,
    };
    let doShanbe1 = {
      math: `${
        mathBasePageCounterReturnedData().secondPart
      } (2:15 مطالعه و حل تمرین)`,
      arabi: `${
        arabi3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) از صفحه ${jameShenasi2StartPage.value} تا صفحه ${jameShenasi2EndPage.value} (1:30 ساعت مطالعه)`,
      tarikh: `${
        tarikh3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      joghrafi: `جغرافیای 2 (${joghrafi2Title.value}) از صفحه ${joghrafi2StartPage.value} تا صفحه ${joghrafi2EndPage.value} (1:30 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().thirdPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `11`,
    };
    let seShanbe1 = {
      adabiat: `${
        adabiatBasePageCounterReturnedData().secondPart
      } (2:45 ساعت مطالعه)`,
      arabi: `${
        arabiBasePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      jameShenasi: `${
        jameShenasi3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      tarikh: `تاریخ 2 (${tarikh2Title.value}) از صفحه ${tarikh2StartPage.value} تا صفحه ${tarikh2EndPage.value} (1:30 ساعت مطالعه)`,
      joghrafi: `${
        joghrafi3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      eghtesad: `${
        eghtesadPageCounterDevideBY4ReturnedData().forthPart
      } (1 ساعت مطالعه)`,
      totalTime: `11`,
    };
    let chaharShanbe1 = {
      math: `${
        math3PageCounterReturnedData().firstPart
      } (3:15 ساعت مطالعه و حل تمرین)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه)`,
      mantegh: `${
        manteghPageCounterReturnedData().firstPart
      } (3:45 ساعت مطالعه)`,
      totalTime: `11`,
    };
    let panjShanbe1 = {
      adabiat: `${
        adabiat3PageCounterReturnedData().firstPart
      } (3:45 ساعت مطالعه)`,
      falsafe2: `${
        falsafe2PageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      falsafe3: `${
        falsafe3PageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      mantegh: `${
        manteghPageCounterReturnedData().secondPart
      } (3:45 ساعت مطالعه)`,
      totalTime: `11`,
    };
    let jome1 = {
      math: `${
        math3PageCounterReturnedData().secondPart
      } (3:15 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiat3PageCounterReturnedData().secondPart
      } (3:45 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (4:30 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2 ساعت)`,
      totalTime: `13:30`,
    };
    let shanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (2 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (2:30 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (2 ساعت حل تست)`,
      tarikh1: `تاریخ 1 (${tarikh1Title.value}) ${tarikh1Module.value} (1 ساعت حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (2 ساعت حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `12:45`,
    };
    let yekShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (2 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2:30 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (2 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 1 (${jameShenasi1Title.value}) ${jameShenasi1Module.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (2 ساعت حل تست)`,
      joghrafi1: `جغرافیای 1 (${joghrafi1Title.value}) ${joghrafi1Module.value} (1 ساعت حل تست)`,
      eghtesad: `اقتصاد (${eghtesadTitle.value}) ${eghtesadModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `12:45`,
    };
    let doShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (2 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی پایه (${adabiatBaseTitle.value}) ${adabiatBaseModule.value} (2:30 ساعت حل تست)`,
      arabi: `عربی پایه (${arabiBaseTitle.value}) ${arabiBaseModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 3 (${jameShenasi3Title.value}) ${jameShenasi3Module.value} (2 ساعت حل تست)`,
      tarikh2: `تاریخ 2 (${tarikh2Title.value}) ${tarikh2Module.value} (1 ساعت حل تست)`,
      joghrafi3: `جغرافیای 3 (${joghrafi3Title.value}) ${joghrafi3Module.value} (2 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `12:45`,
    };
    let seShanbe2 = {
      math: `ریاضی و آمار پایه (${mathBaseTitle.value}) ${mathBaseModule.value} (2 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2:30 ساعت حل تست)`,
      arabi: `عربی زبان قرآن 3 (${arabi3Title.value}) ${arabi3Module.value} (2 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی 2 (${jameShenasi2Title.value}) ${jameShenasi2Module.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ 3 (${tarikh3Title.value}) ${tarikh3Module.value} (2 ساعت حل تست)`,
      joghrafi2: `جغرافیای 2 (${joghrafi2Title.value}) ${joghrafi2Module.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:30 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (45 دقیقه حل تست)`,
      totalTime: `12:45`,
    };
    let chaharShanbe2 = {
      math: `ریاضی و آمار 3 (${math3Title.value}) ${math3Module.value} (2 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی 3 (${adabiat3Title.value}) ${adabiat3Module.value} (2 ساعت حل تست)`,
      falsafe2: `فلسفه یازدهم (${falsafe2Title.value}) ${falsafe2Module.value} (2 ساعت حل تست)`,
      falsafe3: `فلسفه دوازدهم (${falsafe3Title.value}) ${falsafe3Module.value} (4 ساعت حل تست)`,
      mantegh: `منطق (${manteghTitle.value}) ${manteghModule.value} (3 ساعت حل تست)`,
      totalTime: `13`,
    };
    let panjShanbe2 = {
      revising: `(11 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `11`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };

    shanbe1day.innerHTML =
      shanbe1.math +
      "<br>" +
      shanbe1.arabi +
      "<br>" +
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.tarikh +
      "<br>" +
      shanbe1.joghrafi +
      "<br>" +
      shanbe1.eghtesad +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.adabiat +
      "<br>" +
      yekShanbe1.arabi +
      "<br>" +
      yekShanbe1.jameShenasi +
      "<br>" +
      yekShanbe1.tarikh +
      "<br>" +
      yekShanbe1.joghrafi +
      "<br>" +
      yekShanbe1.eghtesad +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.math +
      "<br>" +
      doShanbe1.arabi +
      "<br>" +
      doShanbe1.jameShenasi +
      "<br>" +
      doShanbe1.tarikh +
      "<br>" +
      doShanbe1.joghrafi +
      "<br>" +
      doShanbe1.eghtesad +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.adabiat +
      "<br>" +
      seShanbe1.arabi +
      "<br>" +
      seShanbe1.jameShenasi +
      "<br>" +
      seShanbe1.tarikh +
      "<br>" +
      seShanbe1.joghrafi +
      "<br>" +
      seShanbe1.eghtesad +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.math +
      "<br>" +
      chaharShanbe1.falsafe2 +
      "<br>" +
      chaharShanbe1.falsafe3 +
      "<br>" +
      chaharShanbe1.mantegh +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.adabiat +
      "<br>" +
      panjShanbe1.falsafe2 +
      "<br>" +
      panjShanbe1.falsafe3 +
      "<br>" +
      panjShanbe1.mantegh +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.math +
      "<br>" +
      jome1.adabiat +
      "<br>" +
      jome1.ravanShenasi +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;

    shanbe2day.innerHTML =
      shanbe2.math +
      "<br>" +
      shanbe2.adabiat +
      "<br>" +
      shanbe2.arabi +
      "<br>" +
      shanbe2.jameShenasi +
      "<br>" +
      shanbe2.tarikh1 +
      "<br>" +
      shanbe2.joghrafi3 +
      "<br>" +
      shanbe2.eghtesad +
      "<br>" +
      shanbe2.mantegh +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.math +
      "<br>" +
      yekShanbe2.adabiat +
      "<br>" +
      yekShanbe2.arabi +
      "<br>" +
      yekShanbe2.jameShenasi +
      "<br>" +
      yekShanbe2.tarikh +
      "<br>" +
      yekShanbe2.joghrafi1 +
      "<br>" +
      yekShanbe2.eghtesad +
      "<br>" +
      yekShanbe2.mantegh +
      "<br>" +
      yekShanbe2.totalTime;

    doShanbe2day.innerHTML =
      doShanbe2.math +
      "<br>" +
      doShanbe2.adabiat +
      "<br>" +
      doShanbe2.arabi +
      "<br>" +
      doShanbe2.jameShenasi +
      "<br>" +
      doShanbe2.tarikh2 +
      "<br>" +
      doShanbe2.joghrafi3 +
      "<br>" +
      doShanbe2.ravanShenasi +
      "<br>" +
      doShanbe2.mantegh +
      "<br>" +
      doShanbe2.totalTime;

    seShanbe2day.innerHTML =
      seShanbe2.math +
      "<br>" +
      seShanbe2.adabiat +
      "<br>" +
      seShanbe2.arabi +
      "<br>" +
      seShanbe2.jameShenasi +
      "<br>" +
      seShanbe2.tarikh +
      "<br>" +
      seShanbe2.joghrafi2 +
      "<br>" +
      seShanbe2.ravanShenasi +
      "<br>" +
      seShanbe2.mantegh +
      "<br>" +
      seShanbe2.totalTime;

    chaharShanbe2day.innerHTML =
      chaharShanbe2.math +
      "<br>" +
      chaharShanbe2.adabiat +
      "<br>" +
      chaharShanbe2.falsafe2 +
      "<br>" +
      chaharShanbe2.falsafe3 +
      "<br>" +
      chaharShanbe2.mantegh +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.math +
        "<br>" +
        shanbe1.arabi +
        "<br>" +
        shanbe1.jameShenasi +
        "<br>" +
        shanbe1.tarikh +
        "<br>" +
        shanbe1.joghrafi +
        "<br>" +
        shanbe1.eghtesad +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.adabiat +
        "<br>" +
        yekShanbe1.arabi +
        "<br>" +
        yekShanbe1.jameShenasi +
        "<br>" +
        yekShanbe1.tarikh +
        "<br>" +
        yekShanbe1.joghrafi +
        "<br>" +
        yekShanbe1.eghtesad +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.math +
        "<br>" +
        doShanbe1.arabi +
        "<br>" +
        doShanbe1.jameShenasi +
        "<br>" +
        doShanbe1.tarikh +
        "<br>" +
        doShanbe1.joghrafi +
        "<br>" +
        doShanbe1.eghtesad +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.adabiat +
        "<br>" +
        seShanbe1.arabi +
        "<br>" +
        seShanbe1.jameShenasi +
        "<br>" +
        seShanbe1.tarikh +
        "<br>" +
        seShanbe1.joghrafi +
        "<br>" +
        seShanbe1.eghtesad +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.math +
        "<br>" +
        chaharShanbe1.falsafe2 +
        "<br>" +
        chaharShanbe1.falsafe3 +
        "<br>" +
        chaharShanbe1.mantegh +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.adabiat +
        "<br>" +
        panjShanbe1.falsafe2 +
        "<br>" +
        panjShanbe1.falsafe3 +
        "<br>" +
        panjShanbe1.mantegh +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.math +
        "<br>" +
        jome1.adabiat +
        "<br>" +
        jome1.ravanShenasi +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.math +
        "<br>" +
        shanbe2.adabiat +
        "<br>" +
        shanbe2.arabi +
        "<br>" +
        shanbe2.jameShenasi +
        "<br>" +
        shanbe2.tarikh1 +
        "<br>" +
        shanbe2.joghrafi3 +
        "<br>" +
        shanbe2.eghtesad +
        "<br>" +
        shanbe2.mantegh +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.math +
        "<br>" +
        yekShanbe2.adabiat +
        "<br>" +
        yekShanbe2.arabi +
        "<br>" +
        yekShanbe2.jameShenasi +
        "<br>" +
        yekShanbe2.tarikh +
        "<br>" +
        yekShanbe2.joghrafi1 +
        "<br>" +
        yekShanbe2.eghtesad +
        "<br>" +
        yekShanbe2.mantegh +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.math +
        "<br>" +
        doShanbe2.adabiat +
        "<br>" +
        doShanbe2.arabi +
        "<br>" +
        doShanbe2.jameShenasi +
        "<br>" +
        doShanbe2.tarikh2 +
        "<br>" +
        doShanbe2.joghrafi3 +
        "<br>" +
        doShanbe2.ravanShenasi +
        "<br>" +
        doShanbe2.mantegh +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.math +
        "<br>" +
        seShanbe2.adabiat +
        "<br>" +
        seShanbe2.arabi +
        "<br>" +
        seShanbe2.jameShenasi +
        "<br>" +
        seShanbe2.tarikh +
        "<br>" +
        seShanbe2.joghrafi2 +
        "<br>" +
        seShanbe2.ravanShenasi +
        "<br>" +
        seShanbe2.mantegh +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.math +
        "<br>" +
        chaharShanbe2.adabiat +
        "<br>" +
        chaharShanbe2.falsafe2 +
        "<br>" +
        chaharShanbe2.falsafe3 +
        "<br>" +
        chaharShanbe2.mantegh +
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
