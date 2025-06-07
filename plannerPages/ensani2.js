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
//math
let mathStartPage = document.querySelector("#math-start-page");
let mathEndPage = document.querySelector("#math-end-page");
let mathTitle = document.querySelector("#math-title");
let mathModule = document.querySelector("#math-module");
//adaiat
let adabiatStartPage = document.querySelector("#adabiat-start-page");
let adabiatEndPage = document.querySelector("#adabiat-end-page");
let adabiatTitle = document.querySelector("#adabiat-title");
let adabiatModule = document.querySelector("#adabiat-module");
//jame shenasi
let jameShenasiStartPage = document.querySelector("#jame-shenasi-start-page");
let jameShenasiEndPage = document.querySelector("#jame-shenasi-end-page");
let jameShenasiTitle = document.querySelector("#jame-shenasi-title");
let jameShenasiModule = document.querySelector("#jame-shenasi-module");
//arabi
let arabiStartPage = document.querySelector("#arabi-start-page");
let arabiEndPage = document.querySelector("#arabi-end-page");
let arabiTitle = document.querySelector("#arabi-title");
let arabiModule = document.querySelector("#arabi-module");
//tarikh
let tarikhStartPage = document.querySelector("#tarikh-start-page");
let tarikhEndPage = document.querySelector("#tarikh-end-page");
let tarikhTitle = document.querySelector("#tarikh-title");
let tarikhModule = document.querySelector("#tarikh-module");
//joghrafi
let joghrafiStartPage = document.querySelector("#joghrafi-start-page");
let joghrafiEndPage = document.querySelector("#joghrafi-end-page");
let joghrafiTitle = document.querySelector("#joghrafi-title");
let joghrafiModule = document.querySelector("#joghrafi-module");
//falsafe
let falsafeStartPage = document.querySelector("#falsafe-start-page");
let falsafeEndPage = document.querySelector("#falsafe-end-page");
let falsafeTitle = document.querySelector("#falsafe-title");
let falsafeModule = document.querySelector("#falsafe-module");
//eghtesad
let ravanShenasiStartPage = document.querySelector("#ravan-shenasi-start-page");
let ravanShenasiEndPage = document.querySelector("#ravan-shenasi-end-page");
let ravanShenasiTitle = document.querySelector("#ravan-shenasi-title");
let ravanShenasiModule = document.querySelector("#ravan-shenasi-module");
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
      firstPart: `ریاضی و آمار (${
        mathTitle.value
      }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
        mathStartPageNumbered + dailyMathReading
      }`,
      secondPart: `ریاضی و آمار (${mathTitle.value}) از صفحه ${
        mathStartPageNumbered + dailyMathReading
      } تا صفحه ${mathStartPageNumbered + dailyMathReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyMathReadingFloor = Math.ceil(pageNumber / 2);
    let dailyMathReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `ریاضی و آمار (${
        mathTitle.value
      }) از صفحه ${mathStartPageNumbered} تا سر صفحه ${
        mathStartPageNumbered + dailyMathReadingFloor
      }`,
      secondPart: `ریاضی و آمار (${mathTitle.value}) از صفحه ${
        mathStartPageNumbered + dailyMathReadingFloor
      } تا صفحه ${
        mathStartPageNumbered + dailyMathReadingFloor + dailyMathReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let adabiatPageCounterReturnedData = function adabiatPageCounter() {
  let adabiatEndPageNumbered = Number(adabiatEndPage.value);
  let adabiatStartPageNumbered = Number(adabiatStartPage.value);
  pageNumber = adabiatEndPageNumbered - adabiatStartPageNumbered;
  if (pageNumber % 2 === 0) {
    let dailyAdabiatReading = pageNumber / 2;
    let pagePartsObj = {
      firstPart: `علوم و فنون ادبی (${
        adabiatTitle.value
      }) از صفحه ${adabiatStartPageNumbered} تا سر صفحه ${
        adabiatStartPageNumbered + dailyAdabiatReading
      }`,
      secondPart: `علوم و فنون ادبی (${adabiatTitle.value}) از صفحه ${
        adabiatStartPageNumbered + dailyAdabiatReading
      } تا صفحه ${adabiatStartPageNumbered + dailyAdabiatReading * 2}`,
    };
    return pagePartsObj;
  } else {
    let dailyAdabiatReadingFloor = Math.ceil(pageNumber / 2);
    let dailyAdabiatReadingCeil = Math.floor(pageNumber / 2);
    let pagePartsObj = {
      firstPart: `علوم و فنون ادبی (${
        adabiatTitle.value
      }) از صفحه ${adabiatStartPageNumbered} تا سر صفحه ${
        adabiatStartPageNumbered + dailyAdabiatReadingFloor
      }`,
      secondPart: `علوم و فنون ادبی (${adabiatTitle.value}) از صفحه ${
        adabiatStartPageNumbered + dailyAdabiatReadingFloor
      } تا صفحه ${
        adabiatStartPageNumbered +
        dailyAdabiatReadingFloor +
        dailyAdabiatReadingCeil
      }`,
    };
    return pagePartsObj;
  }
};

let jameShenasiPageCounterReturnedData = function jameShenasiPageCounter() {
  let jameShenasiEndPageNumbered = Number(jameShenasiEndPage.value);
  let jameShenasiStartPageNumbered = Number(jameShenasiStartPage.value);
  let pageNumber = jameShenasiEndPageNumbered - jameShenasiStartPageNumbered;
  if (pageNumber % 3 === 0) {
    let dailyJameShenasiReading = pageNumber / 3;
    let pagePartsObj = {
      firstPart: `جامعه شناسی (${
        jameShenasiTitle.value
      }) از صفحه ${jameShenasiStartPageNumbered} تا سر صفحه ${
        jameShenasiStartPageNumbered + dailyJameShenasiReading
      }`,
      secondPart: `جامعه شناسی (${jameShenasiTitle.value}) از صفحه ${
        jameShenasiStartPageNumbered + dailyJameShenasiReading
      } تا سر صفحه ${
        jameShenasiStartPageNumbered + dailyJameShenasiReading * 2
      }`,
      thirdPart: `جامعه شناسی (${jameShenasiTitle.value}) از صفحه ${
        jameShenasiStartPageNumbered + dailyJameShenasiReading * 2
      } تا صفحه ${jameShenasiStartPageNumbered + dailyJameShenasiReading * 3}`,
    };
    return pagePartsObj;
  } else {
    let dailyJameShenasiReadingCeil = Math.ceil(pageNumber / 3);
    let dailyJameShenasiReadingFloor = Math.floor(pageNumber / 3);
    if (
      dailyJameShenasiReadingFloor * 2 + dailyJameShenasiReadingCeil ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `جامعه شناسی (${
          jameShenasiTitle.value
        }) از صفحه ${jameShenasiStartPageNumbered} تا سر صفحه ${
          jameShenasiStartPageNumbered + dailyJameShenasiReadingFloor
        }`,
        secondPart: `جامعه شناسی (${jameShenasiTitle.value}) از صفحه ${
          jameShenasiStartPageNumbered + dailyJameShenasiReadingFloor
        } تا سر صفحه ${
          jameShenasiStartPageNumbered + dailyJameShenasiReadingFloor * 2 + 1
        }`,
        thirdPart: `جامعه شناسی (${jameShenasiTitle.value}) از صفحه ${
          jameShenasiStartPageNumbered + dailyJameShenasiReadingFloor * 2 + 1
        } تا صفحه ${
          jameShenasiStartPageNumbered +
          dailyJameShenasiReadingFloor * 2 +
          dailyJameShenasiReadingCeil
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `جامعه شناسی (${
          jameShenasiTitle.value
        }) از صفحه ${jameShenasiStartPageNumbered} تا سر صفحه ${
          jameShenasiStartPageNumbered + dailyJameShenasiReadingFloor + 1
        }`,
        secondPart: `جامعه شناسی (${jameShenasiTitle.value}) از صفحه ${
          jameShenasiStartPageNumbered + dailyJameShenasiReadingFloor + 1
        } تا سر صفحه ${
          jameShenasiStartPageNumbered +
          dailyJameShenasiReadingFloor +
          dailyJameShenasiReadingCeil +
          1
        }`,
        thirdPart: `جامعه شناسی (${jameShenasiTitle.value}) از صفحه ${
          jameShenasiStartPageNumbered +
          dailyJameShenasiReadingFloor +
          dailyJameShenasiReadingCeil +
          1
        } تا صفحه ${
          jameShenasiStartPageNumbered +
          dailyJameShenasiReadingFloor +
          dailyJameShenasiReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    }
  }
};

let arabiPageCounterReturnedData = function arabiPageCounter() {
  let arabiEndPageNumbered = Number(arabiEndPage.value);
  let arabiStartPageNumbered = Number(arabiStartPage.value);
  let pageNumber = arabiEndPageNumbered - arabiStartPageNumbered;
  if (pageNumber % 3 === 0) {
    let dailyArabiReading = pageNumber / 3;
    let pagePartsObj = {
      firstPart: `عربی زبان قرآن (${
        arabiTitle.value
      }) از صفحه ${arabiStartPageNumbered} تا سر صفحه ${
        arabiStartPageNumbered + dailyArabiReading
      }`,
      secondPart: `عربی زبان قرآن (${arabiTitle.value}) از صفحه ${
        arabiStartPageNumbered + dailyArabiReading
      } تا سر صفحه ${arabiStartPageNumbered + dailyArabiReading * 2}`,
      thirdPart: `عربی زبان قرآن (${arabiTitle.value}) از صفحه ${
        arabiStartPageNumbered + dailyArabiReading * 2
      } تا صفحه ${arabiStartPageNumbered + dailyArabiReading * 3}`,
    };
    return pagePartsObj;
  } else {
    let dailyArabiReadingCeil = Math.ceil(pageNumber / 3);
    let dailyArabiReadingFloor = Math.floor(pageNumber / 3);
    if (dailyArabiReadingFloor * 2 + dailyArabiReadingCeil === pageNumber) {
      let pagePartsObj = {
        firstPart: `عربی زبان قرآن (${
          arabiTitle.value
        }) از صفحه ${arabiStartPageNumbered} تا سر صفحه ${
          arabiStartPageNumbered + dailyArabiReadingFloor
        }`,
        secondPart: `عربی زبان قرآن (${arabiTitle.value}) از صفحه ${
          arabiStartPageNumbered + dailyArabiReadingFloor
        } تا سر صفحه ${
          arabiStartPageNumbered + dailyArabiReadingFloor * 2 + 1
        }`,
        thirdPart: `عربی زبان قرآن (${arabiTitle.value}) از صفحه ${
          arabiStartPageNumbered + dailyArabiReadingFloor * 2 + 1
        } تا صفحه ${
          arabiStartPageNumbered +
          dailyArabiReadingFloor * 2 +
          dailyArabiReadingCeil
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `عربی زبان قرآن (${
          arabiTitle.value
        }) از صفحه ${arabiStartPageNumbered} تا سر صفحه ${
          arabiStartPageNumbered + dailyArabiReadingFloor + 1
        }`,
        secondPart: `عربی زبان قرآن (${arabiTitle.value}) از صفحه ${
          arabiStartPageNumbered + dailyArabiReadingFloor + 1
        } تا سر صفحه ${
          arabiStartPageNumbered +
          dailyArabiReadingFloor +
          dailyArabiReadingCeil +
          1
        }`,
        thirdPart: `عربی زبان قرآن (${arabiTitle.value}) از صفحه ${
          arabiStartPageNumbered +
          dailyArabiReadingFloor +
          dailyArabiReadingCeil +
          1
        } تا صفحه ${
          arabiStartPageNumbered +
          dailyArabiReadingFloor +
          dailyArabiReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    }
  }
};

let tarikhPageCounterReturnedData = function tarikhPageCounter() {
  let tarikhEndPageNumbered = Number(tarikhEndPage.value);
  let tarikhStartPageNumbered = Number(tarikhStartPage.value);
  let pageNumber = tarikhEndPageNumbered - tarikhStartPageNumbered;
  if (pageNumber % 3 === 0) {
    let dailyTarikhReading = pageNumber / 3;
    let pagePartsObj = {
      firstPart: `تاریخ (${
        tarikhTitle.value
      }) از صفحه ${tarikhStartPageNumbered} تا سر صفحه ${
        tarikhStartPageNumbered + dailyTarikhReading
      }`,
      secondPart: `تاریخ (${tarikhTitle.value}) از صفحه ${
        tarikhStartPageNumbered + dailyTarikhReading
      } تا سر صفحه ${tarikhStartPageNumbered + dailyTarikhReading * 2}`,
      thirdPart: `تاریخ (${tarikhTitle.value}) از صفحه ${
        tarikhStartPageNumbered + dailyTarikhReading * 2
      } تا صفحه ${tarikhStartPageNumbered + dailyTarikhReading * 3}`,
    };
    return pagePartsObj;
  } else {
    let dailyTarikhReadingCeil = Math.ceil(pageNumber / 3);
    let dailyTarikhReadingFloor = Math.floor(pageNumber / 3);
    if (dailyTarikhReadingFloor * 2 + dailyTarikhReadingCeil === pageNumber) {
      let pagePartsObj = {
        firstPart: `تاریخ (${
          tarikhTitle.value
        }) از صفحه ${tarikhStartPageNumbered} تا سر صفحه ${
          tarikhStartPageNumbered + dailyTarikhReadingFloor
        }`,
        secondPart: `تاریخ (${tarikhTitle.value}) از صفحه ${
          tarikhStartPageNumbered + dailyTarikhReadingFloor
        } تا سر صفحه ${
          tarikhStartPageNumbered + dailyTarikhReadingFloor * 2 + 1
        }`,
        thirdPart: `تاریخ (${tarikhTitle.value}) از صفحه ${
          tarikhStartPageNumbered + dailyTarikhReadingFloor * 2 + 1
        } تا صفحه ${
          tarikhStartPageNumbered +
          dailyTarikhReadingFloor * 2 +
          dailyTarikhReadingCeil
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `تاریخ (${
          tarikhTitle.value
        }) از صفحه ${tarikhStartPageNumbered} تا سر صفحه ${
          tarikhStartPageNumbered + dailyTarikhReadingFloor + 1
        }`,
        secondPart: `تاریخ (${tarikhTitle.value}) از صفحه ${
          tarikhStartPageNumbered + dailyTarikhReadingFloor + 1
        } تا سر صفحه ${
          tarikhStartPageNumbered +
          dailyTarikhReadingFloor +
          dailyTarikhReadingCeil +
          1
        }`,
        thirdPart: `تاریخ (${tarikhTitle.value}) از صفحه ${
          tarikhStartPageNumbered +
          dailyTarikhReadingFloor +
          dailyTarikhReadingCeil +
          1
        } تا صفحه ${
          tarikhStartPageNumbered +
          dailyTarikhReadingFloor +
          dailyTarikhReadingCeil * 2
        }`,
      };
      return pagePartsObj;
    }
  }
};

let joghrafiPageCounterReturnedData = function joghrafiPageCounter() {
  let joghrafiEndPageNumbered = Number(joghrafiEndPage.value);
  let joghrafiStartPageNumbered = Number(joghrafiStartPage.value);
  let pageNumber = joghrafiEndPageNumbered - joghrafiStartPageNumbered;
  if (pageNumber % 3 === 0) {
    let dailyJoghrafiReading = pageNumber / 3;
    let pagePartsObj = {
      firstPart: `جغرافیا (${
        joghrafiTitle.value
      }) از صفحه ${joghrafiStartPageNumbered} تا سر صفحه ${
        joghrafiStartPageNumbered + dailyJoghrafiReading
      }`,
      secondPart: `جغرافیا (${joghrafiTitle.value}) از صفحه ${
        joghrafiStartPageNumbered + dailyJoghrafiReading
      } تا سر صفحه ${joghrafiStartPageNumbered + dailyJoghrafiReading * 2}`,
      thirdPart: `جغرافیا (${joghrafiTitle.value}) از صفحه ${
        joghrafiStartPageNumbered + dailyJoghrafiReading * 2
      } تا صفحه ${joghrafiStartPageNumbered + dailyJoghrafiReading * 3}`,
    };
    return pagePartsObj;
  } else {
    let dailyJoghrafiReadingCeil = Math.ceil(pageNumber / 3);
    let dailyJoghrafiReadingFloor = Math.floor(pageNumber / 3);
    if (
      dailyJoghrafiReadingFloor * 2 + dailyJoghrafiReadingCeil ===
      pageNumber
    ) {
      let pagePartsObj = {
        firstPart: `جغرافیا (${
          joghrafiTitle.value
        }) از صفحه ${joghrafiStartPageNumbered} تا سر صفحه ${
          joghrafiStartPageNumbered + dailyJoghrafiReadingFloor
        }`,
        secondPart: `جغرافیا (${joghrafiTitle.value}) از صفحه ${
          joghrafiStartPageNumbered + dailyJoghrafiReadingFloor
        } تا سر صفحه ${
          joghrafiStartPageNumbered + dailyJoghrafiReadingFloor * 2 + 1
        }`,
        thirdPart: `جغرافیا (${joghrafiTitle.value}) از صفحه ${
          joghrafiStartPageNumbered + dailyJoghrafiReadingFloor * 2 + 1
        } تا صفحه ${
          joghrafiStartPageNumbered +
          dailyJoghrafiReadingFloor * 2 +
          dailyJoghrafiReadingCeil
        }`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `جغرافیا (${
          joghrafiTitle.value
        }) از صفحه ${joghrafiStartPageNumbered} تا سر صفحه ${
          joghrafiStartPageNumbered + dailyJoghrafiReadingFloor + 1
        }`,
        secondPart: `جغرافیا (${joghrafiTitle.value}) از صفحه ${
          joghrafiStartPageNumbered + dailyJoghrafiReadingFloor + 1
        } تا سر صفحه ${
          joghrafiStartPageNumbered +
          dailyJoghrafiReadingFloor +
          dailyJoghrafiReadingCeil +
          1
        }`,
        thirdPart: `جغرافیا (${joghrafiTitle.value}) از صفحه ${
          joghrafiStartPageNumbered +
          dailyJoghrafiReadingFloor +
          dailyJoghrafiReadingCeil +
          1
        } تا صفحه ${
          joghrafiStartPageNumbered +
          dailyJoghrafiReadingFloor +
          dailyJoghrafiReadingCeil * 2
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
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().firstPart} (45 دقیقه مطالعه)`,
      totalTime: `3`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().secondPart} (45 دقیقه مطالعه)`,
      totalTime: `3`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().thirdPart} (1 ساعت مطالعه)`,
      totalTime: `3:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${tarikhPageCounterReturnedData().firstPart} (45 دقیقه مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه)`,
      totalTime: `3`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${tarikhPageCounterReturnedData().secondPart} (45 دقیقه مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      totalTime: `3`,
    };
    let panjShanbe1 = {
      math: `${
        mathPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiatPageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه)`,
      tarikh: `${tarikhPageCounterReturnedData().thirdPart} (1 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (1:30 ساعت مطالعه)`,
      totalTime: `7:30`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiatPageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه)`,
      falsafe: `فلسفه (${falsafeTitle.value}) از صفحه ${falsafeStartPage.value} تا صفحه ${falsafeEndPage.value} (2:30 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `8`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (45 دقیقه حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (45 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:15`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (45 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (45 دقیقه حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (45 دقیقه حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (45 دقیقه حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1 ساعت حل تست)`,
      falsafe: `فلسفه (${falsafeTitle.value}) ${falsafeModule.value} (1:30 ساعت حل تست)`,
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
      panjShanbe1.ravanShenasi +
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
      doShanbe2.tarikh +
      "<br>" +
      doShanbe2.joghrafi +
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
      seShanbe2.joghrafi +
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
      chaharShanbe2.ravanShenasi +
      "<br>" +
      chaharShanbe2.falsafe +
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
        panjShanbe1.ravanShenasi +
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
        doShanbe2.tarikh +
        "<br>" +
        doShanbe2.joghrafi +
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
        seShanbe2.joghrafi +
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
        chaharShanbe2.ravanShenasi +
        "<br>" +
        chaharShanbe2.falsafe +
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
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
      totalTime: `3:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().secondPart} (1 ساعت مطالعه)`,
      totalTime: `3:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().thirdPart} (1 ساعت مطالعه)`,
      totalTime: `3:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${tarikhPageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      totalTime: `3:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${tarikhPageCounterReturnedData().secondPart} (1 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      totalTime: `3:30`,
    };
    let panjShanbe1 = {
      math: `${
        mathPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      adabiat: `${adabiatPageCounterReturnedData().firstPart} (3 ساعت مطالعه)`,
      tarikh: `${tarikhPageCounterReturnedData().thirdPart} (1 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (2 ساعت مطالعه)`,
      totalTime: `9`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      adabiat: `${adabiatPageCounterReturnedData().secondPart} (3 ساعت مطالعه)`,
      falsafe: `فلسفه (${falsafeTitle.value}) از صفحه ${falsafeStartPage.value} تا صفحه ${falsafeEndPage.value} (3 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `9:30`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (45 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (45 دقیقه حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (45 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:15 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (45 دقیقه حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (45 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (45 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:15 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (45 دقیقه حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (45 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1 ساعت حل تست)`,
      falsafe: `فلسفه (${falsafeTitle.value}) ${falsafeModule.value} (1:30 ساعت حل تست)`,
      totalTime: `5:30`,
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
      panjShanbe1.ravanShenasi +
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
      doShanbe2.tarikh +
      "<br>" +
      doShanbe2.joghrafi +
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
      seShanbe2.joghrafi +
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
      chaharShanbe2.ravanShenasi +
      "<br>" +
      chaharShanbe2.falsafe +
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
        panjShanbe1.ravanShenasi +
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
        doShanbe2.tarikh +
        "<br>" +
        doShanbe2.joghrafi +
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
        seShanbe2.joghrafi +
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
        chaharShanbe2.ravanShenasi +
        "<br>" +
        chaharShanbe2.falsafe +
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
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().firstPart} (1 ساعت مطالعه)`,
      totalTime: `3:45`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().secondPart} (1:15 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().thirdPart} (1:15 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${tarikhPageCounterReturnedData().firstPart} (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${
        tarikhPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let panjShanbe1 = {
      math: `${
        mathPageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiatPageCounterReturnedData().firstPart
      } (3:30 ساعت مطالعه)`,
      tarikh: `${tarikhPageCounterReturnedData().thirdPart} (1 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (2:30 ساعت مطالعه)`,
      totalTime: `10:30`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      adabiat: `${
        adabiatPageCounterReturnedData().secondPart
      } (3:30 ساعت مطالعه)`,
      falsafe: `فلسفه (${falsafeTitle.value}) از صفحه ${falsafeStartPage.value} تا صفحه ${falsafeEndPage.value} (3:30 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2:15 ساعت)`,
      totalTime: `11:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (1 ساعت حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (1 ساعت حل تست)`,
      totalTime: `5:45`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:30 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (1 ساعت حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:30 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (1 ساعت حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:30 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (1 ساعت حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (30 دقیقه حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:15 ساعت حل تست)`,
      falsafe: `فلسفه (${falsafeTitle.value}) ${falsafeModule.value} (2 ساعت حل تست)`,
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
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.arabi +
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
      panjShanbe1.ravanShenasi +
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
      doShanbe2.tarikh +
      "<br>" +
      doShanbe2.joghrafi +
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
      seShanbe2.joghrafi +
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
      chaharShanbe2.ravanShenasi +
      "<br>" +
      chaharShanbe2.falsafe +
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
        panjShanbe1.ravanShenasi +
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
        doShanbe2.tarikh +
        "<br>" +
        doShanbe2.joghrafi +
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
        seShanbe2.joghrafi +
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
        chaharShanbe2.ravanShenasi +
        "<br>" +
        chaharShanbe2.falsafe +
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
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().firstPart} (1:15 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().secondPart} (1:15 ساعت مطالعه)`,
      totalTime: `4:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      jameShenasi: `${
        jameShenasiPageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه)`,
      arabi: `${arabiPageCounterReturnedData().thirdPart} (1:30 ساعت مطالعه)`,
      totalTime: `4:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${tarikhPageCounterReturnedData().firstPart} (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه)`,
      totalTime: `4:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      tarikh: `${
        tarikhPageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `4:30`,
    };
    let panjShanbe1 = {
      math: `${
        mathPageCounterReturnedData().firstPart
      } (3 ساعت مطالعه و حل تمرین)`,
      adabiat: `${adabiatPageCounterReturnedData().firstPart} (4 ساعت مطالعه)`,
      tarikh: `${tarikhPageCounterReturnedData().thirdPart} (1:15 ساعت مطالعه)`,
      joghrafi: `${
        joghrafiPageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) از صفحه ${ravanShenasiStartPage.value} تا صفحه ${ravanShenasiEndPage.value} (3 ساعت مطالعه)`,
      totalTime: `12:30`,
    };
    let jome1 = {
      math: `${
        mathPageCounterReturnedData().secondPart
      } (3 ساعت مطالعه و حل تمرین)`,
      adabiat: `${adabiatPageCounterReturnedData().secondPart} (4 ساعت مطالعه)`,
      falsafe: `فلسفه (${falsafeTitle.value}) از صفحه ${falsafeStartPage.value} تا صفحه ${falsafeEndPage.value} (4 ساعت مطالعه)`,
      revising: `مرور و جمع بندی مطالب (2:15 ساعت)`,
      totalTime: `13:15`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:30 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (1:15 ساعت حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (1:15 ساعت حل تست)`,
      totalTime: `6:45`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:30 ساعت حل تست)`,
      jameShenasi: `جامعه شناسی (${jameShenasiTitle.value}) ${jameShenasiModule.value} (1:15 ساعت حل تست)`,
      arabi: `عربی زبان قرآن (${arabiTitle.value}) ${arabiModule.value} (1:15 ساعت حل تست)`,
      totalTime: `6:45`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:45 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (1:15 ساعت حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1:15 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1:45 ساعت حل تست)`,
      tarikh: `تاریخ (${tarikhTitle.value}) ${tarikhModule.value} (1:15 ساعت حل تست)`,
      joghrafi: `جغرافیا (${joghrafiTitle.value}) ${joghrafiModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      math: `ریاضی و آمار (${mathTitle.value}) ${mathModule.value} (1 ساعت حل تست)`,
      adabiat: `علوم و فنون ادبی (${adabiatTitle.value}) ${adabiatModule.value} (1 ساعت حل تست)`,
      ravanShenasi: `روان شناسی (${ravanShenasiTitle.value}) ${ravanShenasiModule.value} (1:45 ساعت حل تست)`,
      falsafe: `فلسفه (${falsafeTitle.value}) ${falsafeModule.value} (2:30 ساعت حل تست)`,
      totalTime: `8`,
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
      shanbe1.jameShenasi +
      "<br>" +
      shanbe1.arabi +
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
      panjShanbe1.ravanShenasi +
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
      doShanbe2.tarikh +
      "<br>" +
      doShanbe2.joghrafi +
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
      seShanbe2.joghrafi +
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
      chaharShanbe2.ravanShenasi +
      "<br>" +
      chaharShanbe2.falsafe +
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
        panjShanbe1.ravanShenasi +
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
        doShanbe2.tarikh +
        "<br>" +
        doShanbe2.joghrafi +
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
        seShanbe2.joghrafi +
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
        chaharShanbe2.ravanShenasi +
        "<br>" +
        chaharShanbe2.falsafe +
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
//event
btn.addEventListener("click", generateTable);
clearBtn.addEventListener("click", clearTable);
window.addEventListener("load", getDataFromLocalStorage);
