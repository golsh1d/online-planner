let score = document.querySelector("#score");
let hesaban2StartPage = document.querySelector("#hesaban-2-start-page");
let hesaban2Title = document.querySelector("#hesaban-2-title");
let hesaban2Module = document.querySelector("#hesaban-2-module");
let hesaban1StartPage = document.querySelector("#hesaban-1-start-page");
let hesabanMathStartPage = document.querySelector("#hesaban-math-start-page");
let hesaban1Included = document.querySelector("#hesaban-1-included");
let hesabanMathIncluded = document.querySelector("#hesaban-math-included");
let geometry3StartPage = document.querySelector("#geometry-3-start-page");
let geometry3Title = document.querySelector("#geometry-3-title");
let geometry3Module = document.querySelector("#geometry-3-module");
let geometry2StartPage = document.querySelector("#geometry-2-start-page");
let geometry2Title = document.querySelector("#geometry-2-title");
let geometry2Module = document.querySelector("#geometry-2-module");
let amarMath2StartPage = document.querySelector("#amar-math-2-start-page");
let amarMath2Title = document.querySelector("#amar-math-2-title");
let geometry2Included = document.querySelector("#geometry-2-included");
let amar2Included = document.querySelector("#amar-2-included");
let amarMath2Included = document.querySelector("#amar-math-2-included");
let geometry1StartPage = document.querySelector("#geometry-1-start-page");
let geometry1Title = document.querySelector("#geometry-1-title");
let geometry1Module = document.querySelector("#geometry-1-module");
let amarMath1StartPage = document.querySelector("#amar-math-1-start-page");
let amarMath1Title = document.querySelector("#amar-math-1-title");
let geometry1Included = document.querySelector("#geometry-1-included");
let amar1Included = document.querySelector("#amar-1-included");
let amarMath1Included = document.querySelector("#amar-math-1-included");
let gosasteStartPage = document.querySelector("#gosaste-start-page");
let gosasteTitle = document.querySelector("#gosaste-title");
let gosasteModule = document.querySelector("#gosaste-module");
let gosasteMath1StartPage = document.querySelector(
  "#gosaste-math-1-start-page"
);
let gosasteMath1Title = document.querySelector("#gosaste-math-1-title");
let gosasteMath1Included = document.querySelector("#gosaste-math-1-included");
let physic3StartPage = document.querySelector("#physic-3-start-page");
let physic3Title = document.querySelector("#physic-3-title");
let physic3Module = document.querySelector("#physic-3-module");
let physic2StartPage = document.querySelector("#physic-2-start-page");
let physic2Title = document.querySelector("#physic-2-title");
let physic2Module = document.querySelector("#physic-2-module");
let physic1StartPage = document.querySelector("#physic-1-start-page");
let physic1Title = document.querySelector("#physic-1-title");
let physic1Module = document.querySelector("#physic-1-module");
let chemistry3StartPage = document.querySelector("#chemistry-3-start-page");
let chemistry3Title = document.querySelector("#chemistry-3-title");
let chemistry3Module = document.querySelector("#chemistry-3-module");
let chemistry32StartPage = document.querySelector("#chemistry-3-2-start-page");
let chemistry31StartPage = document.querySelector("#chemistry-3-1-start-page");
let chemistry32Included = document.querySelector("#chemistry-3-2-included");
let chemistry31Included = document.querySelector("#chemistry-3-1-included");
let chemistry2StartPage = document.querySelector("#chemistry-2-start-page");
let chemistry2Title = document.querySelector("#chemistry-2-title");
let chemistry2Module = document.querySelector("#chemistry-2-module");
let chemistry1StartPage = document.querySelector("#chemistry-1-start-page");
let chemistry1Title = document.querySelector("#chemistry-1-title");
let chemistry1Module = document.querySelector("#chemistry-1-module");
let mathBaseStartPage = document.querySelector("#math-base-start-page");
let mathBaseTitle = document.querySelector("#math-base-title");
let mathBaseModule = document.querySelector("#math-base-module");
let mathBaseHesabanStartPage = document.querySelector(
  "#math-base-hesaban-start-page"
);
let mathBaseHesabanTitle = document.querySelector("#math-base-hesaban-title");
let mathBaseIncluded = document.querySelector("#math-base-included");
let mathBaseHesabanIncluded = document.querySelector(
  "#math-base-hesaban-included"
);
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
  if (
    hesaban1Included.value.trim() === "بله" &&
    hesabanMathIncluded.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `حسابان 2 (${hesaban2Title.value}) (ریاضی 1) ${hesabanMathStartPage.value}`,
      secondPart: `حسابان 2 (${hesaban2Title.value}) (حسابان 1) ${hesaban1StartPage.value}`,
      thirdPart: `حسابان 2 (${hesaban2Title.value}) ${hesaban2StartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    hesaban1Included.value.trim() === "بله" &&
    hesabanMathIncluded.value.trim() === "خیر"
  ) {
    let numArray = hesaban2StartPage.value.trim().match(/\d+/g);
    if (numArray) {
      let hesaban2EndPageNumbered = Number(numArray[1]);
      let hesaban2StartPageNumbered = Number(numArray[0]);
      let pageNumber = hesaban2EndPageNumbered - hesaban2StartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyHesabanReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `حسابان 2 (${hesaban2Title.value}) (حسابان 1) ${hesaban1StartPage.value}`,
          secondPart: `حسابان 2 (${
            hesaban2Title.value
          }) از صفحه ${hesaban2StartPageNumbered} تا سر صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReading
          }`,
          thirdPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReading
          } تا صفحه ${hesaban2StartPageNumbered + dailyHesabanReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyHesabanReadingFloor = Math.ceil(pageNumber / 2);
        let dailyHesabanReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `حسابان 2 (${hesaban2Title.value}) (حسابان 1) ${hesaban1StartPage.value}`,
          secondPart: `حسابان 2 (${
            hesaban2Title.value
          }) از صفحه ${hesaban2StartPageNumbered} تا سر صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReadingFloor
          }`,
          thirdPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReadingFloor
          } تا صفحه ${
            hesaban2StartPageNumbered +
            dailyHesabanReadingFloor +
            dailyHesabanReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `حسابان 2 (${hesaban2Title.value}) (حسابان 1) ${hesaban1StartPage.value}`,
        secondPart: `حسابان 2 (${hesaban2Title.value})`,
        thirdPart: `حسابان 2 (${hesaban2Title.value})`,
      };
      return pagePartsObj;
    }
  } else if (
    hesaban1Included.value.trim() === "خیر" &&
    hesabanMathIncluded.value.trim() === "بله"
  ) {
    let numArray = hesaban2StartPage.value.trim().match(/\d+/g);
    if (numArray) {
      let hesaban2EndPageNumbered = Number(numArray[1]);
      let hesaban2StartPageNumbered = Number(numArray[0]);
      let pageNumber = hesaban2EndPageNumbered - hesaban2StartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyHesabanReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `حسابان 2 (${hesaban2Title.value}) (ریاضی 1) ${hesabanMathStartPage.value}`,
          secondPart: `حسابان 2 (${
            hesaban2Title.value
          }) از صفحه ${hesaban2StartPageNumbered} تا سر صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReading
          }`,
          thirdPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReading
          } تا صفحه ${hesaban2StartPageNumbered + dailyHesabanReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyHesabanReadingFloor = Math.ceil(pageNumber / 2);
        let dailyHesabanReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `حسابان 2 (${hesaban2Title.value}) (ریاضی 1) ${hesabanMathStartPage.value}`,
          secondPart: `حسابان 2 (${
            hesaban2Title.value
          }) از صفحه ${hesaban2StartPageNumbered} تا سر صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReadingFloor
          }`,
          thirdPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReadingFloor
          } تا صفحه ${
            hesaban2StartPageNumbered +
            dailyHesabanReadingFloor +
            dailyHesabanReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `حسابان 2 (${hesaban2Title.value}) (ریاضی 1) ${hesabanMathStartPage.value}`,
        secondPart: `حسابان 2 (${hesaban2Title.value})`,
        thirdPart: `حسابان 2 (${hesaban2Title.value})`,
      };
      return pagePartsObj;
    }
  } else if (
    hesaban1Included.value.trim() === "خیر" &&
    hesabanMathIncluded.value.trim() === "خیر"
  ) {
    let numArray = hesaban2StartPage.value.trim().match(/\d+/g);
    if (numArray) {
      let hesaban2EndPageNumbered = Number(numArray[1]);
      let hesaban2StartPageNumbered = Number(numArray[0]);
      let pageNumber = hesaban2EndPageNumbered - hesaban2StartPageNumbered;
      if (pageNumber % 3 === 0) {
        let dailyHesabanReading = pageNumber / 3;
        let pagePartsObj = {
          firstPart: `حسابان 2 (${
            hesaban2Title.value
          }) از صفحه ${hesaban2StartPageNumbered} تا سر صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReading
          }`,
          secondPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReading
          } تا سر صفحه ${hesaban2StartPageNumbered + dailyHesabanReading * 2}`,
          thirdPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
            hesaban2StartPageNumbered + dailyHesabanReading * 2
          } تا صفحه ${hesaban2StartPageNumbered + dailyHesabanReading * 3}`,
        };
        return pagePartsObj;
      } else {
        let dailyHesabanReadingCeil = Math.ceil(pageNumber / 3);
        let dailyHesabanReadingFloor = Math.floor(pageNumber / 3);
        if (
          dailyHesabanReadingFloor * 2 + dailyHesabanReadingCeil ===
          pageNumber
        ) {
          let pagePartsObj = {
            firstPart: `حسابان 2 (${
              hesaban2Title.value
            }) از صفحه ${hesaban2StartPageNumbered} تا سر صفحه ${
              hesaban2StartPageNumbered + dailyHesabanReadingFloor
            }`,
            secondPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
              hesaban2StartPageNumbered + dailyHesabanReadingFloor
            } تا سر صفحه ${
              hesaban2StartPageNumbered + dailyHesabanReadingFloor * 2 + 1
            }`,
            thirdPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
              hesaban2StartPageNumbered + dailyHesabanReadingFloor * 2 + 1
            } تا صفحه ${
              hesaban2StartPageNumbered +
              dailyHesabanReadingFloor * 2 +
              dailyHesabanReadingCeil
            }`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `حسابان 2 (${
              hesaban2Title.value
            }) از صفحه ${hesaban2StartPageNumbered} تا سر صفحه ${
              hesaban2StartPageNumbered + dailyHesabanReadingFloor + 1
            }`,
            secondPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
              hesaban2StartPageNumbered + dailyHesabanReadingFloor + 1
            } تا سر صفحه ${
              hesaban2StartPageNumbered +
              dailyHesabanReadingFloor +
              dailyHesabanReadingCeil +
              1
            }`,
            thirdPart: `حسابان 2 (${hesaban2Title.value}) از صفحه ${
              hesaban2StartPageNumbered +
              dailyHesabanReadingFloor +
              dailyHesabanReadingCeil +
              1
            } تا صفحه ${
              hesaban2StartPageNumbered +
              dailyHesabanReadingFloor +
              dailyHesabanReadingCeil * 2
            }`,
          };
          return pagePartsObj;
        }
      }
    } else {
      let pagePartsObj = {
        firstPart: `حسابان 2 (${hesaban2Title.value}) `,
        secondPart: `حسابان 2 (${hesaban2Title.value}) `,
        thirdPart: `حسابان 2 (${hesaban2Title.value}) `,
      };
      return pagePartsObj;
    }
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به حسابان را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به حسابان را درست وارد کنید.`,
      thirdPart: `لطفا اطلاعات مربوط به حسابان را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let geometry2PageCounterReturnedData = function geometry2PageCounter() {
  if (
    geometry2Included.value.trim() === "بله" &&
    amar2Included.value.trim() === "خیر" &&
    amarMath2Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 2 و آمار و احتمال (هندسه 2) (${geometry2Title.value}) ${geometry2StartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry2Included.value.trim() === "خیر" &&
    amar2Included.value.trim() === "بله" &&
    amarMath2Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 2 و آمار و احتمال (آمار و احتمال) (${geometry2Title.value}) ${geometry2StartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry2Included.value.trim() === "خیر" &&
    amar2Included.value.trim() === "بله" &&
    amarMath2Included.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 2 و آمار و احتمال (آمار و احتمال) (${geometry2Title.value}) ${geometry2StartPage.value} و (ریاضی 1) (${amarMath2Title.value}) ${amarMath2StartPage.value}`,
    };
    return pagePartsObj;
  } else {
    let pagePartsObj = {
      firstPart: ` لطفا اطلاعات مربوط به هندسه 2 و آمار و احتمال را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let geometry2TestCounterReturnedData = function geometry2TestCounter() {
  if (
    geometry2Included.value.trim() === "بله" &&
    amar2Included.value.trim() === "خیر" &&
    amarMath2Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 2 و آمار و احتمال (هندسه 2) (${geometry2Title.value}) ${geometry2Module.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry2Included.value.trim() === "خیر" &&
    amar2Included.value.trim() === "بله" &&
    amarMath2Included.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 2 و آمار و احتمال (آمار و احتمال) (${geometry2Title.value}) و (ریاضی 1) (${amarMath2Title.value}) ${geometry2Module.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry2Included.value.trim() === "خیر" &&
    amar2Included.value.trim() === "بله" &&
    amarMath2Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 2 و آمار و احتمال (آمار و احتمال) (${geometry2Title.value}) ${geometry2Module.value}`,
    };
    return pagePartsObj;
  } else {
    let pagePartsObj = {
      firstPart: ` لطفا اطلاعات مربوط به هندسه 2 و آمار و احتمال را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let geometry1PageCounterReturnedData = function geometry1PageCounter() {
  if (
    geometry1Included.value.trim() === "بله" &&
    amar1Included.value.trim() === "خیر" &&
    amarMath1Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 1 و آمار و احتمال (هندسه 1) (${geometry1Title.value}) ${geometry1StartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry1Included.value.trim() === "خیر" &&
    amar1Included.value.trim() === "بله" &&
    amarMath1Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 1 و آمار و احتمال (آمار و احتمال) (${geometry1Title.value}) ${geometry1StartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry1Included.value.trim() === "خیر" &&
    amar1Included.value.trim() === "بله" &&
    amarMath1Included.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 1 و آمار و احتمال (آمار و احتمال) (${geometry1Title.value}) ${geometry1StartPage.value} و (ریاضی 1) (${amarMath1Title.value}) ${amarMath1StartPage.value}`,
    };
    return pagePartsObj;
  } else {
    let pagePartsObj = {
      firstPart: ` لطفا اطلاعات مربوط به هندسه 1 و آمار و احتمال را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let geometry1TestCounterReturnedData = function geometry1TestCounter() {
  if (
    geometry1Included.value.trim() === "بله" &&
    amar1Included.value.trim() === "خیر" &&
    amarMath1Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 1 و آمار و احتمال (هندسه 1) (${geometry1Title.value}) ${geometry1Module.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry1Included.value.trim() === "خیر" &&
    amar1Included.value.trim() === "بله" &&
    amarMath1Included.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 1 و آمار و احتمال (آمار و احتمال) (${geometry1Title.value}) و (ریاضی 1) (${amarMath1Title.value}) ${geometry1Module.value}`,
    };
    return pagePartsObj;
  } else if (
    geometry1Included.value.trim() === "خیر" &&
    amar1Included.value.trim() === "بله" &&
    amarMath1Included.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `هندسه 1 و آمار و احتمال (آمار و احتمال) (${geometry1Title.value}) ${geometry1Module.value}`,
    };
    return pagePartsObj;
  } else {
    let pagePartsObj = {
      firstPart: ` لطفا اطلاعات مربوط به هندسه 1 و آمار و احتمال را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let gosastePageCounterReturnedData = function gosastePageCounter() {
  if (gosasteMath1Included.value.trim() === "بله") {
    let pagePartsObj = {
      firstPart: `گسسته (ریاضی 1) (${gosasteMath1Title.value}) ${gosasteMath1StartPage.value}`,
      secondPart: `گسسته (${gosasteTitle.value}) ${gosasteStartPage.value}`,
    };
    return pagePartsObj;
  } else if (gosasteMath1Included.value.trim() === "خیر") {
    let numArray = gosasteStartPage.value.trim().match(/\d+/g);
    if (numArray) {
      let gosasteEndPageNumbered = Number(numArray[1]);
      let gosasteStartPageNumbered = Number(numArray[0]);
      pageNumber = gosasteEndPageNumbered - gosasteStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyGosasteReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `گسسته (${
            gosasteTitle.value
          }) از صفحه ${gosasteStartPageNumbered} تا سر صفحه ${
            gosasteStartPageNumbered + dailyGosasteReading
          }`,
          secondPart: `گسسته (${gosasteTitle.value}) از صفحه ${
            gosasteStartPageNumbered + dailyGosasteReading
          } تا صفحه ${gosasteStartPageNumbered + dailyGosasteReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyGosasteReadingFloor = Math.ceil(pageNumber / 2);
        let dailyGosasteReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `گسسته (${
            gosasteTitle.value
          }) از صفحه ${gosasteStartPageNumbered} تا سر صفحه ${
            gosasteStartPageNumbered + dailyGosasteReadingFloor
          }`,
          secondPart: `گسسته (${gosasteTitle.value}) از صفحه ${
            gosasteStartPageNumbered + dailyGosasteReadingFloor
          } تا صفحه ${
            gosasteStartPageNumbered +
            dailyGosasteReadingFloor +
            dailyGosasteReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `گسسته (${gosasteTitle.value})`,
        secondPart: `گسسته (${gosasteTitle.value})`,
      };
      return pagePartsObj;
    }
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به گسسته را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به گسسته را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let chemistryPageCounterReturnedData = function chemistryPageCounter() {
  if (
    chemistry31Included.value.trim() === "بله" &&
    chemistry32Included.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 1) ${chemistry31StartPage.value}`,
      secondPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 2) ${chemistry32StartPage.value}`,
      thirdPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    chemistry31Included.value.trim() === "خیر" &&
    chemistry32Included.value.trim() === "بله"
  ) {
    let numArray = chemistry3StartPage.value.trim().match(/\d+/g);
    if (numArray.length === 2) {
      let chemistry3EndPageNumbered = Number(numArray[1]);
      let chemistry3StartPageNumbered = Number(numArray[0]);
      let pageNumber = chemistry3EndPageNumbered - chemistry3StartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyChemistryReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 2) ${chemistry32StartPage.value}`,
          secondPart: `شیمی 3 (${
            chemistry3Title.value
          }) از صفحه ${chemistry3StartPageNumbered} تا سر صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading
          }`,
          thirdPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading
          } تا صفحه ${chemistry3StartPageNumbered + dailyChemistryReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
        let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 2) ${chemistry32StartPage.value}`,
          secondPart: `شیمی 3 (${
            chemistry3Title.value
          }) از صفحه ${chemistry3StartPageNumbered} تا سر صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReadingFloor
          }`,
          thirdPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReadingFloor
          } تا صفحه ${
            chemistry3StartPageNumbered +
            dailyChemistryReadingFloor +
            dailyChemistryReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else if (numArray.length > 2) {
      let pagePartsObj = {
        firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 2) ${chemistry32StartPage.value}`,
        secondPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
        thirdPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 2) ${chemistry32StartPage.value}`,
        secondPart: `شیمی 3 (${chemistry3Title.value})`,
        thirdPart: `شیمی 3 (${chemistry3Title.value})`,
      };
      return pagePartsObj;
    }
  } else if (
    chemistry31Included.value.trim() === "بله" &&
    chemistry32Included.value.trim() === "خیر"
  ) {
    let numArray = chemistry3StartPage.value.trim().match(/\d+/g);
    if (numArray.length === 2) {
      let chemistry3EndPageNumbered = Number(numArray[1]);
      let chemistry3StartPageNumbered = Number(numArray[0]);
      let pageNumber = chemistry3EndPageNumbered - chemistry3StartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyChemistryReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 1) ${chemistry31StartPage.value}`,
          secondPart: `شیمی 3 (${
            chemistry3Title.value
          }) از صفحه ${chemistry3StartPageNumbered} تا سر صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading
          }`,
          thirdPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading
          } تا صفحه ${chemistry3StartPageNumbered + dailyChemistryReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
        let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 1) ${chemistry31StartPage.value}`,
          secondPart: `شیمی 3 (${
            chemistry3Title.value
          }) از صفحه ${chemistry3StartPageNumbered} تا سر صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReadingFloor
          }`,
          thirdPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReadingFloor
          } تا صفحه ${
            chemistry3StartPageNumbered +
            dailyChemistryReadingFloor +
            dailyChemistryReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else if (numArray.length > 2) {
      let pagePartsObj = {
        firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 1) ${chemistry31StartPage.value}`,
        secondPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
        thirdPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `شیمی 3 (${chemistry3Title.value}) (شیمی 1) ${chemistry31StartPage.value}`,
        secondPart: `شیمی 3 (${chemistry3Title.value})`,
        thirdPart: `شیمی 3 (${chemistry3Title.value})`,
      };
      return pagePartsObj;
    }
  } else if (
    chemistry31Included.value.trim() === "خیر" &&
    chemistry32Included.value.trim() === "خیر"
  ) {
    let numArray = chemistry3StartPage.value.trim().match(/\d+/g);
    if (numArray.length === 2) {
      let chemistry3EndPageNumbered = Number(numArray[1]);
      let chemistry3StartPageNumbered = Number(numArray[0]);
      let pageNumber = chemistry3EndPageNumbered - chemistry3StartPageNumbered;
      if (pageNumber % 3 === 0) {
        let dailyChemistryReading = pageNumber / 3;
        let pagePartsObj = {
          firstPart: `شیمی 3 (${
            chemistry3Title.value
          }) از صفحه ${chemistry3StartPageNumbered} تا سر صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading
          }`,
          secondPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading
          } تا سر صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading * 2
          }`,
          thirdPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
            chemistry3StartPageNumbered + dailyChemistryReading * 2
          } تا صفحه ${chemistry3StartPageNumbered + dailyChemistryReading * 3}`,
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
            firstPart: `شیمی 3 (${
              chemistry3Title.value
            }) از صفحه ${chemistry3StartPageNumbered} تا سر صفحه ${
              chemistry3StartPageNumbered + dailyChemistryReadingFloor
            }`,
            secondPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
              chemistry3StartPageNumbered + dailyChemistryReadingFloor
            } تا سر صفحه ${
              chemistry3StartPageNumbered + dailyChemistryReadingFloor * 2 + 1
            }`,
            thirdPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
              chemistry3StartPageNumbered + dailyChemistryReadingFloor * 2 + 1
            } تا صفحه ${
              chemistry3StartPageNumbered +
              dailyChemistryReadingFloor * 2 +
              dailyChemistryReadingCeil
            }`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `شیمی 3 (${
              chemistry3Title.value
            }) از صفحه ${chemistry3StartPageNumbered} تا سر صفحه ${
              chemistry3StartPageNumbered + dailyChemistryReadingFloor + 1
            }`,
            secondPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
              chemistry3StartPageNumbered + dailyChemistryReadingFloor + 1
            } تا سر صفحه ${
              chemistry3StartPageNumbered +
              dailyChemistryReadingFloor +
              dailyChemistryReadingCeil +
              1
            }`,
            thirdPart: `شیمی 3 (${chemistry3Title.value}) از صفحه ${
              chemistry3StartPageNumbered +
              dailyChemistryReadingFloor +
              dailyChemistryReadingCeil +
              1
            } تا صفحه ${
              chemistry3StartPageNumbered +
              dailyChemistryReadingFloor +
              dailyChemistryReadingCeil * 2
            }`,
          };
          return pagePartsObj;
        }
      }
    } else if (numArray.length > 2) {
      let pagePartsObj = {
        firstPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
        secondPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
        thirdPart: `شیمی 3 (${chemistry3Title.value}) ${chemistry3StartPage.value}`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `شیمی 3 (${chemistry3Title.value})`,
        secondPart: `شیمی 3 (${chemistry3Title.value})`,
        thirdPart: `شیمی 3 (${chemistry3Title.value})`,
      };
      return pagePartsObj;
    }
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به شیمی 3 را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به شیمی 3 را درست وارد کنید.`,
      thirdPart: `لطفا اطلاعات مربوط به شیمی 3 را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let mathBasePageCounterReturnedData = function mathBasePageCounter() {
  if (score.value.trim() < 6000) {
    if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) ${mathBaseStartPage.value} و (حسابان 1) (${mathBaseHesabanTitle.value}) ${mathBaseHesabanStartPage.value} (1 ساعت مطالعه و حل تمرین)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) ${mathBaseStartPage.value} (1 ساعت مطالعه و حل تمرین)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "خیر" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: ` لطفا اطلاعات مربوط به مباحث مستقل ریاضی پایه را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  } else if (score.value.trim() >= 6000) {
    if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) ${mathBaseStartPage.value} و (حسابان 1) (${mathBaseHesabanTitle.value}) ${mathBaseHesabanStartPage.value} (2 ساعت مطالعه و حل تمرین)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) ${mathBaseStartPage.value} (2 ساعت مطالعه و حل تمرین)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "خیر" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: ` لطفا اطلاعات مربوط به مباحث مستقل ریاضی پایه را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  }
};

let mathBaseTestCounterReturnedData = function mathBaseTestCounter() {
  if (score.value.trim() < 6000) {
    if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) ${mathBaseModule.value} (1 ساعت حل تست)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) و (حسابان 1) (${mathBaseHesabanTitle.value}) ${mathBaseModule.value} (1 ساعت حل تست)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "خیر" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: ` لطفا اطلاعات مربوط به مباحث مستقل ریاضی پایه را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  } else if (score.value.trim() >= 6000) {
    if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) ${mathBaseModule.value} (2 ساعت حل تست)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "بله" &&
      mathBaseHesabanIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathBaseTitle.value}) و (حسابان 1) (${mathBaseHesabanTitle.value}) ${mathBaseModule.value} (2 ساعت حل تست)`,
      };
      return pagePartsObj;
    } else if (
      mathBaseIncluded.value.trim() === "خیر" &&
      mathBaseHesabanIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: ` لطفا اطلاعات مربوط به مباحث مستقل ریاضی پایه را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  }
};

function totalTimeJome14000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "7:30";
  } else {
    return "6:30";
  }
}

function totalTimePanjShanbe24000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "7";
  } else {
    return "6";
  }
}

function totalTimeJome15000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "8:30";
  } else {
    return "7:30";
  }
}

function totalTimePanjShanbe25000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "8";
  } else {
    return "7";
  }
}

function totalTimePanjShanbe16000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "11:30";
  } else {
    return "9:30";
  }
}

function totalTimePanjShanbe26000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "10";
  } else {
    return "8";
  }
}

function totalTimeJome17000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "13:15";
  } else {
    return "11:15";
  }
}

function totalTimePanjShanbe27000() {
  if (
    mathBaseIncluded.value.trim() === "بله" ||
    mathBaseHesabanIncluded.value.trim() === "بله"
  ) {
    return "11";
  } else {
    return "9";
  }
}

function generateTable() {
  if (score.value.trim() < 5000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه)`,
      totalTime: `3:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      totalTime: `3:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه)`,
      totalTime: `3:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      totalTime: `3:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      totalTime: `4`,
    };
    let panjShanbe1 = {
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3StartPage.value} (2:30 ساعت مطالعه و حل تمرین)`,
      physic1: `فیزیک 1 (${physic1Title.value}) ${physic1StartPage.value} (1:15 ساعت مطالعه و حل تمرین)`,
      physic2: `فیزیک 2 (${physic2Title.value}) ${physic2StartPage.value} (1:15 ساعت مطالعه و حل تمرین)`,
      chemistry1: `شیمی 1 (${chemistry1Title.value}) ${chemistry1StartPage.value} (45 دقیقه مطالعه)`,
      chemistry2: `شیمی 2 (${chemistry2Title.value}) ${chemistry2StartPage.value} (45 دقیقه مطالعه)`,
      totalTime: `6:30`,
    };
    let jome1 = {
      geometry2: `${
        geometry2PageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      geometry1: `${
        geometry1PageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      physic3: `فیزیک 3 (${physic3Title.value}) ${physic3StartPage.value} (3:30 ساعت مطالعه و حل تمرین)`,
      mathbase: `${mathBasePageCounterReturnedData().firstPart}`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `${totalTimeJome14000()}`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (1:30 ساعت حل تست)`,
      geometry1: `${
        geometry1TestCounterReturnedData().firstPart
      } (45 دقیقه حل تست)`,
      geometry2: `${
        geometry2TestCounterReturnedData().firstPart
      } (45 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک 1 (${physic1Title.value}) ${physic1Module.value} (1 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک 2 (${physic2Title.value}) ${physic2Module.value} (1 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (30 دقیقه حل تست)`,
      totalTime: `4:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (1 ساعت حل تست)`,
      chemistry: `شیمی 1 (${chemistry1Title.value}) ${chemistry1Module.value} (45 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3Module.value} (1:30 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (1 ساعت حل تست)`,
      chemistry: `شیمی 2 (${chemistry2Title.value}) ${chemistry2Module.value} (45 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let panjShanbe2 = {
      mathBase: `${mathBaseTestCounterReturnedData().firstPart}`,
      revising: `(6 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `${totalTimePanjShanbe24000()}`,
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
      shanbe1.chemistry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.gosaste +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.chemistry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.gosaste +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.chemistry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.physic1 +
      "<br>" +
      panjShanbe1.physic2 +
      "<br>" +
      panjShanbe1.chemistry1 +
      "<br>" +
      panjShanbe1.chemistry2 +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.mathbase +
      "<br>" +
      jome1.geometry2 +
      "<br>" +
      jome1.geometry1 +
      "<br>" +
      jome1.physic3 +
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
      shanbe2.geometry1 +
      "<br>" +
      shanbe2.geometry2 +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
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
      doShanbe2.gosaste +
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
      seShanbe2.gosaste +
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
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.mathBase +
      "<br>" +
      panjShanbe2.revising +
      "<br>" +
      panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.dailyReading +
        "<br>" +
        shanbe1.PreReading +
        "<br>" +
        shanbe1.hesaban +
        "<br>" +
        shanbe1.chemistry +
        "<br>" +
        shanbe1.totalTime,

      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.gosaste +
        "<br>" +
        yekShanbe1.totalTime,

      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.chemistry +
        "<br>" +
        doShanbe1.totalTime,

      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.gosaste +
        "<br>" +
        seShanbe1.totalTime,

      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.chemistry +
        "<br>" +
        chaharShanbe1.totalTime,

      panjShanbe1day:
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.physic1 +
        "<br>" +
        panjShanbe1.physic2 +
        "<br>" +
        panjShanbe1.chemistry1 +
        "<br>" +
        panjShanbe1.chemistry2 +
        "<br>" +
        panjShanbe1.totalTime,

      jome1day:
        jome1.mathbase +
        "<br>" +
        jome1.geometry2 +
        "<br>" +
        jome1.geometry1 +
        "<br>" +
        jome1.physic3 +
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
        shanbe2.geometry1 +
        "<br>" +
        shanbe2.geometry2 +
        "<br>" +
        shanbe2.totalTime,

      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
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
        doShanbe2.gosaste +
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
        seShanbe2.gosaste +
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
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,

      panjShanbe2day:
        panjShanbe2.mathBase +
        "<br>" +
        panjShanbe2.revising +
        "<br>" +
        panjShanbe2.totalTime,

      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() >= 5000 && score.value.trim() < 6000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      totalTime: `4`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      totalTime: `4`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      totalTime: `4`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      totalTime: `4:15`,
    };
    let panjShanbe1 = {
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3StartPage.value} (3 ساعت مطالعه و حل تمرین)`,
      physic1: `فیزیک 1 (${physic1Title.value}) ${physic1StartPage.value} (1:30 ساعت مطالعه و حل تمرین)`,
      physic2: `فیزیک 2 (${physic2Title.value}) ${physic2StartPage.value} (1:30 ساعت مطالعه و حل تمرین)`,
      chemistry1: `شیمی 1 (${chemistry1Title.value}) ${chemistry1StartPage.value} (1 ساعت مطالعه)`,
      chemistry2: `شیمی 2 (${chemistry2Title.value}) ${chemistry2StartPage.value} (1 ساعت مطالعه)`,
      totalTime: `8`,
    };
    let jome1 = {
      geometry2: `${
        geometry2PageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      geometry1: `${
        geometry1PageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physic3: `فیزیک 3 (${physic3Title.value}) ${physic3StartPage.value} (4 ساعت مطالعه و حل تمرین)`,
      mathbase: `${mathBasePageCounterReturnedData().firstPart}`,
      revising: `مرور و جمع بندی مطالب (1:30 ساعت)`,
      totalTime: `${totalTimeJome15000()}`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (1:45 ساعت حل تست)`,
      geometry1: `${
        geometry1TestCounterReturnedData().firstPart
      } (45 دقیقه حل تست)`,
      geometry2: `${
        geometry2TestCounterReturnedData().firstPart
      } (45 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک 1 (${physic1Title.value}) ${physic1Module.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک 2 (${physic2Title.value}) ${physic2Module.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (1:45 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی 1 (${chemistry1Title.value}) ${chemistry1Module.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3Module.value} (2 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (1:15 ساعت حل تست)`,
      chemistry: `شیمی 2 (${chemistry2Title.value}) ${chemistry2Module.value} (45 دقیقه حل تست)`,
      totalTime: `5:30`,
    };
    let panjShanbe2 = {
      mathBase: `${mathBaseTestCounterReturnedData().firstPart}`,
      revising: `(7 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `${totalTimePanjShanbe25000()}`,
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
      shanbe1.chemistry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.gosaste +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.chemistry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.gosaste +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.chemistry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.physic1 +
      "<br>" +
      panjShanbe1.physic2 +
      "<br>" +
      panjShanbe1.chemistry1 +
      "<br>" +
      panjShanbe1.chemistry2 +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.mathbase +
      "<br>" +
      jome1.geometry2 +
      "<br>" +
      jome1.geometry1 +
      "<br>" +
      jome1.physic3 +
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
      shanbe2.geometry1 +
      "<br>" +
      shanbe2.geometry2 +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
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
      doShanbe2.gosaste +
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
      seShanbe2.gosaste +
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
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.mathBase +
      "<br>" +
      panjShanbe2.revising +
      "<br>" +
      panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.dailyReading +
        "<br>" +
        shanbe1.PreReading +
        "<br>" +
        shanbe1.hesaban +
        "<br>" +
        shanbe1.chemistry +
        "<br>" +
        shanbe1.totalTime,

      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.gosaste +
        "<br>" +
        yekShanbe1.totalTime,

      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.chemistry +
        "<br>" +
        doShanbe1.totalTime,

      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.gosaste +
        "<br>" +
        seShanbe1.totalTime,

      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.chemistry +
        "<br>" +
        chaharShanbe1.totalTime,

      panjShanbe1day:
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.physic1 +
        "<br>" +
        panjShanbe1.physic2 +
        "<br>" +
        panjShanbe1.chemistry1 +
        "<br>" +
        panjShanbe1.chemistry2 +
        "<br>" +
        panjShanbe1.totalTime,

      jome1day:
        jome1.mathbase +
        "<br>" +
        jome1.geometry2 +
        "<br>" +
        jome1.geometry1 +
        "<br>" +
        jome1.physic3 +
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
        shanbe2.geometry1 +
        "<br>" +
        shanbe2.geometry2 +
        "<br>" +
        shanbe2.totalTime,

      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
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
        doShanbe2.gosaste +
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
        seShanbe2.gosaste +
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
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,

      panjShanbe2day:
        panjShanbe2.mathBase +
        "<br>" +
        panjShanbe2.revising +
        "<br>" +
        panjShanbe2.totalTime,

      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() >= 6000 && score.value.trim() < 7000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      totalTime: `4:45`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().firstPart
      } (3 ساعت مطالعه و حل تمرین)`,
      totalTime: `4:45`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `5`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().secondPart
      } (3 ساعت مطالعه و حل تمرین)`,
      totalTime: `4:45`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (2 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `5`,
    };
    let panjShanbe1 = {
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3StartPage.value} (3:30 ساعت مطالعه و حل تمرین)`,
      physic1: `فیزیک 1 (${physic1Title.value}) ${physic1StartPage.value} (1:45 ساعت مطالعه و حل تمرین)`,
      physic2: `فیزیک 2 (${physic2Title.value}) ${physic2StartPage.value} (1:45 ساعت مطالعه و حل تمرین)`,
      chemistry1: `شیمی 1 (${chemistry1Title.value}) ${chemistry1StartPage.value} (1:15 ساعت مطالعه)`,
      chemistry2: `شیمی 2 (${chemistry2Title.value}) ${chemistry2StartPage.value} (1:15 ساعت مطالعه)`,
      mathbase: `${mathBasePageCounterReturnedData().firstPart}`,
      totalTime: `${totalTimePanjShanbe16000()}`,
    };
    let jome1 = {
      geometry2: `${
        geometry2PageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      geometry1: `${
        geometry1PageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      physic3: `فیزیک 3 (${physic3Title.value}) ${physic3StartPage.value} (4:30 ساعت مطالعه و حل تمرین)`,
      revising: `مرور و جمع بندی مطالب (3:15 ساعت)`,
      totalTime: `10:15`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (2:15 ساعت حل تست)`,
      geometry1: `${
        geometry1TestCounterReturnedData().firstPart
      } (1 ساعت حل تست)`,
      geometry2: `${
        geometry2TestCounterReturnedData().firstPart
      } (1 ساعت حل تست)`,
      totalTime: `6`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (2:15 ساعت حل تست)`,
      physic: `فیزیک 1 (${physic1Title.value}) ${physic1Module.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (2:15 ساعت حل تست)`,
      physic: `فیزیک 2 (${physic2Title.value}) ${physic2Module.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (2:15 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (1:30 ساعت حل تست)`,
      chemistry: `شیمی 1 (${chemistry1Title.value}) ${chemistry1Module.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3Module.value} (2 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (1:45 ساعت حل تست)`,
      chemistry: `شیمی 2 (${chemistry2Title.value}) ${chemistry2Module.value} (1 ساعت حل تست)`,
      totalTime: `6:30`,
    };
    let panjShanbe2 = {
      mathBase: `${mathBaseTestCounterReturnedData().firstPart}`,
      revising: `(8 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `${totalTimePanjShanbe26000()}`,
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
      shanbe1.chemistry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.gosaste +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.chemistry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.gosaste +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.chemistry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.mathbase +
      "<br>" +
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.physic1 +
      "<br>" +
      panjShanbe1.physic2 +
      "<br>" +
      panjShanbe1.chemistry1 +
      "<br>" +
      panjShanbe1.chemistry2 +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.geometry2 +
      "<br>" +
      jome1.geometry1 +
      "<br>" +
      jome1.physic3 +
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
      shanbe2.geometry1 +
      "<br>" +
      shanbe2.geometry2 +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
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
      doShanbe2.gosaste +
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
      seShanbe2.gosaste +
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
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.mathBase +
      "<br>" +
      panjShanbe2.revising +
      "<br>" +
      panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.dailyReading +
        "<br>" +
        shanbe1.PreReading +
        "<br>" +
        shanbe1.hesaban +
        "<br>" +
        shanbe1.chemistry +
        "<br>" +
        shanbe1.totalTime,

      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.gosaste +
        "<br>" +
        yekShanbe1.totalTime,

      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.chemistry +
        "<br>" +
        doShanbe1.totalTime,

      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.gosaste +
        "<br>" +
        seShanbe1.totalTime,

      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.chemistry +
        "<br>" +
        chaharShanbe1.totalTime,

      panjShanbe1day:
        panjShanbe1.mathbase +
        "<br>" +
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.physic1 +
        "<br>" +
        panjShanbe1.physic2 +
        "<br>" +
        panjShanbe1.chemistry1 +
        "<br>" +
        panjShanbe1.chemistry2 +
        "<br>" +
        panjShanbe1.totalTime,

      jome1day:
        jome1.geometry2 +
        "<br>" +
        jome1.geometry1 +
        "<br>" +
        jome1.physic3 +
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
        shanbe2.geometry1 +
        "<br>" +
        shanbe2.geometry2 +
        "<br>" +
        shanbe2.totalTime,

      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
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
        doShanbe2.gosaste +
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
        seShanbe2.gosaste +
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
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,

      panjShanbe2day:
        panjShanbe2.mathBase +
        "<br>" +
        panjShanbe2.revising +
        "<br>" +
        panjShanbe2.totalTime,

      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (score.value.trim() >= 7000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `5:15`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().firstPart
      } (3:30 ساعت مطالعه و حل تمرین)`,
      totalTime: `5:15`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      totalTime: `5:15`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `${
        gosastePageCounterReturnedData().secondPart
      } (3:30 ساعت مطالعه و حل تمرین)`,
      totalTime: `5:15`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `${
        hesabanPageCounterReturnedData().thirdPart
      } (2:30 ساعت مطالعه و حل تمرین)`,
      chemistry: `${
        chemistryPageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه)`,
      totalTime: `5:45`,
    };
    let panjShanbe1 = {
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3StartPage.value} (4 ساعت مطالعه و حل تمرین)`,
      physic1: `فیزیک 1 (${physic1Title.value}) ${physic1StartPage.value} (2 ساعت مطالعه و حل تمرین)`,
      physic2: `فیزیک 2 (${physic2Title.value}) ${physic2StartPage.value} (2 ساعت مطالعه و حل تمرین)`,
      chemistry1: `شیمی 1 (${chemistry1Title.value}) ${chemistry1StartPage.value} (1:30 ساعت مطالعه)`,
      chemistry2: `شیمی 2 (${chemistry2Title.value}) ${chemistry2StartPage.value} (1:30 ساعت مطالعه)`,
      totalTime: `11`,
    };
    let jome1 = {
      geometry2: `${
        geometry2PageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      geometry1: `${
        geometry1PageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physic3: `فیزیک 3 (${physic3Title.value}) ${physic3StartPage.value} (5 ساعت مطالعه و حل تمرین)`,
      mathbase: `${mathBasePageCounterReturnedData().firstPart}`,
      revising: `مرور و جمع بندی مطالب (3:15 ساعت)`,
      totalTime: `${totalTimeJome17000()}`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (2:30 ساعت حل تست)`,
      geometry1: `${
        geometry1TestCounterReturnedData().firstPart
      } (1 ساعت حل تست)`,
      geometry2: `${
        geometry2TestCounterReturnedData().firstPart
      } (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      hesaban: `حسابان 2 (${hesaban2Title.value}) ${hesaban2Module.value} (2:15 ساعت حل تست)`,
      physic: `فیزیک 1 (${physic1Title.value}) ${physic1Module.value} (1:45 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (1:15 ساعت حل تست)`,
      totalTime: `7`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (2:30 ساعت حل تست)`,
      physic: `فیزیک 2 (${physic2Title.value}) ${physic2Module.value} (1:45 ساعت حل تست)`,
      chemistry: `شیمی 3 (${chemistry3Title.value}) ${chemistry3Module.value} (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      gosaste: `گسسته (${gosasteTitle.value}) ${gosasteModule.value} (2:15 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (2 ساعت حل تست)`,
      chemistry: `شیمی 1 (${chemistry1Title.value}) ${chemistry1Module.value} (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      geometry: `هندسه 3 (${geometry3Title.value}) ${geometry3Module.value} (2:30 ساعت حل تست)`,
      physic: `فیزیک 3 (${physic3Title.value}) ${physic3Module.value} (1:45 ساعت حل تست)`,
      chemistry: `شیمی 2 (${chemistry2Title.value}) ${chemistry2Module.value} (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let panjShanbe2 = {
      mathBase: `${mathBaseTestCounterReturnedData().firstPart}`,
      revising: `(9 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `${totalTimePanjShanbe27000()}`,
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
      shanbe1.chemistry +
      "<br>" +
      shanbe1.totalTime;

    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.gosaste +
      "<br>" +
      yekShanbe1.totalTime;

    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.hesaban +
      "<br>" +
      doShanbe1.chemistry +
      "<br>" +
      doShanbe1.totalTime;

    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.gosaste +
      "<br>" +
      seShanbe1.totalTime;

    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.hesaban +
      "<br>" +
      chaharShanbe1.chemistry +
      "<br>" +
      chaharShanbe1.totalTime;

    panjShanbe1day.innerHTML =
      panjShanbe1.geometry +
      "<br>" +
      panjShanbe1.physic1 +
      "<br>" +
      panjShanbe1.physic2 +
      "<br>" +
      panjShanbe1.chemistry1 +
      "<br>" +
      panjShanbe1.chemistry2 +
      "<br>" +
      panjShanbe1.totalTime;

    jome1day.innerHTML =
      jome1.mathbase +
      "<br>" +
      jome1.geometry2 +
      "<br>" +
      jome1.geometry1 +
      "<br>" +
      jome1.physic3 +
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
      shanbe2.geometry1 +
      "<br>" +
      shanbe2.geometry2 +
      "<br>" +
      shanbe2.totalTime;

    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.hesaban +
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
      doShanbe2.gosaste +
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
      seShanbe2.gosaste +
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
      chaharShanbe2.geometry +
      "<br>" +
      chaharShanbe2.physic +
      "<br>" +
      chaharShanbe2.chemistry +
      "<br>" +
      chaharShanbe2.totalTime;

    panjShanbe2day.innerHTML =
      panjShanbe2.mathBase +
      "<br>" +
      panjShanbe2.revising +
      "<br>" +
      panjShanbe2.totalTime;

    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.dailyReading +
        "<br>" +
        shanbe1.PreReading +
        "<br>" +
        shanbe1.hesaban +
        "<br>" +
        shanbe1.chemistry +
        "<br>" +
        shanbe1.totalTime,

      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.gosaste +
        "<br>" +
        yekShanbe1.totalTime,

      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.hesaban +
        "<br>" +
        doShanbe1.chemistry +
        "<br>" +
        doShanbe1.totalTime,

      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.gosaste +
        "<br>" +
        seShanbe1.totalTime,

      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.hesaban +
        "<br>" +
        chaharShanbe1.chemistry +
        "<br>" +
        chaharShanbe1.totalTime,

      panjShanbe1day:
        panjShanbe1.geometry +
        "<br>" +
        panjShanbe1.physic1 +
        "<br>" +
        panjShanbe1.physic2 +
        "<br>" +
        panjShanbe1.chemistry1 +
        "<br>" +
        panjShanbe1.chemistry2 +
        "<br>" +
        panjShanbe1.totalTime,

      jome1day:
        jome1.mathbase +
        "<br>" +
        jome1.geometry2 +
        "<br>" +
        jome1.geometry1 +
        "<br>" +
        jome1.physic3 +
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
        shanbe2.geometry1 +
        "<br>" +
        shanbe2.geometry2 +
        "<br>" +
        shanbe2.totalTime,

      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.hesaban +
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
        doShanbe2.gosaste +
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
        seShanbe2.gosaste +
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
        chaharShanbe2.geometry +
        "<br>" +
        chaharShanbe2.physic +
        "<br>" +
        chaharShanbe2.chemistry +
        "<br>" +
        chaharShanbe2.totalTime,

      panjShanbe2day:
        panjShanbe2.mathBase +
        "<br>" +
        panjShanbe2.revising +
        "<br>" +
        panjShanbe2.totalTime,

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
