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
// data
let isStudent = document.querySelector("#isStudent");
let score = document.querySelector("#score");
// biology first grade
let biologyFirstGradeStartPage = document.querySelector(
  "#biology-first-start-page"
);
let biologyFirstGradeTitle = document.querySelector("#biology-first-title");
let biologyFirstGradeModule = document.querySelector("#biology-first-module");
// biology second grade
let biologySecondGradeStartPage = document.querySelector(
  "#biology-second-start-page"
);
let biologySecondGradeTitle = document.querySelector("#biology-second-title");
let biologySecondGradeModule = document.querySelector("#biology-second-module");
// biology last grade
let biologyLastGradeStartPage = document.querySelector(
  "#biology-last-start-page"
);
let biologyLastGradeTitle = document.querySelector("#biology-last-title");
let biologyLastGradeModule = document.querySelector("#biology-last-module");
//
let biologyFirstGradeIncluded = document.querySelector(
  "#biology-first-included"
);
let biologysecondGradeIncluded = document.querySelector(
  "#biology-second-included"
);
// chemistry first grade
let chemistryFirstGradeStartPage = document.querySelector(
  "#chemistry-first-start-page"
);
let chemistryFirstGradeTitle = document.querySelector("#chemistry-first-title");
let chemistryFirstGradeModule = document.querySelector(
  "#chemistry-first-module"
);
// chemistry second grade
let chemistrySecondGradeStartPage = document.querySelector(
  "#chemistry-second-start-page"
);
let chemistrySecondGradeTitle = document.querySelector(
  "#chemistry-second-title"
);
let chemistrySecondGradeModule = document.querySelector(
  "#chemistry-second-module"
);
// chemistry last grade
let chemistryLastGradeStartPage = document.querySelector(
  "#chemistry-last-start-page"
);
let chemistryLastGradeTitle = document.querySelector("#chemistry-last-title");
let chemistryLastGradeModule = document.querySelector("#chemistry-last-module");
let chemistryLast2Pages = document.querySelector("#chemistry-last-2-pages");
let chemistryLast1Pages = document.querySelector("#chemistry-last-1-pages");
let chemistrySecondIncluded = document.querySelector(
  "#chemistry-second-included"
);
let chemistryFirstIncluded = document.querySelector(
  "#chemistry-first-included"
);
// physic first grade
let physicFirstGradeStartPage = document.querySelector(
  "#physic-first-start-page"
);
let physicFirstGradeTitle = document.querySelector("#physic-first-title");
let physicFirstGradeModule = document.querySelector("#physic-first-module");
// physic second grade
let physicSecondGradeStartPage = document.querySelector(
  "#physic-second-start-page"
);
let physicSecondGradeTitle = document.querySelector("#physic-second-title");
let physicSecondGradeModule = document.querySelector("#physic-second-module");
// physic last grade
let physicLastGradeStartPage = document.querySelector(
  "#physic-last-start-page"
);
let physicLastGradeLastPage = document.querySelector("#physic-last-end-page");
let physicLastGradeTitle = document.querySelector("#physic-last-title");
let physicLastGradeModule = document.querySelector("#physic-last-module");
// math first grade
let mathfirstGradeStartPage = document.querySelector("#math-first-start-page");
let mathfirstGradeTitle = document.querySelector("#math-first-title");
let mathFirstGradeModule = document.querySelector("#math-first-module");
// math second grade
let mathSecondGradeStartPage = document.querySelector(
  "#math-second-start-page"
);
let mathSecondGradeTitle = document.querySelector("#math-second-title");
let mathSecondGradeModule = document.querySelector("#math-second-module");
// math last grade
let mathLastGradeStartPage = document.querySelector("#math-last-start-page");
let mathLastGradeTitle = document.querySelector("#math-last-title");
let mathLastGradeModule = document.querySelector("#math-last-module");
let mathLastTwoStartPage = document.querySelector("#math-last-2-start-page");
let mathLastOneStartPage = document.querySelector("#math-last-1-start-page");
let mathLastThreeIncluded = document.querySelector("#math-last-3-included");
let mathLastTwoIncluded = document.querySelector("#math-last-2-included");
let mathLastOneIncluded = document.querySelector("#math-last-1-included");
//
let FirstGradeIncluded = document.querySelector("#math-first-included");
let secondGradeIncluded = document.querySelector("#math-second-included");
// Geology
let geologyStartPage = document.querySelector("#geology-start-page");
let geologyTitle = document.querySelector("#geology-title");
let geologyModule = document.querySelector("#geology-module");
let geologyIncluded = document.querySelector("#geology-included");
//clear btn
let clearBtn = document.querySelector(".clear-btn");

let biologyBaseGradePageCounterReturnedData =
  function biologyBaseGradePageCounter() {
    if (
      biologyFirstGradeIncluded.value.trim() === "بله" &&
      biologysecondGradeIncluded.value.trim() === "بله"
    ) {
      let numArray = biologySecondGradeStartPage.value.trim().match(/\d+/g);
      if (numArray) {
        let biologySecondGradeEndPageNumbered = Number(numArray[1]);
        let biologySecondGradeStartPageNumbered = Number(numArray[0]);
        pageNumber =
          biologySecondGradeEndPageNumbered -
          biologySecondGradeStartPageNumbered;
        if (pageNumber % 2 === 0) {
          let dailybiologyReading = pageNumber / 2;
          let pagePartsObj = {
            firstPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value}) ${biologyFirstGradeStartPage.value}`,
            secondPart: `زیست پایه (زیست 2) (${
              biologySecondGradeTitle.value
            }) از صفحه ${biologySecondGradeStartPageNumbered} تا سر صفحه ${
              biologySecondGradeStartPageNumbered + dailybiologyReading
            }`,
            thirdPart: `زیست پایه (زیست 2) (${
              biologySecondGradeTitle.value
            }) از صفحه ${
              biologySecondGradeStartPageNumbered + dailybiologyReading
            } تا صفحه ${
              biologySecondGradeStartPageNumbered + dailybiologyReading * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let dailybiologyReadingFloor = Math.ceil(pageNumber / 2);
          let dailybiologyReadingCeil = Math.floor(pageNumber / 2);
          let pagePartsObj = {
            firstPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value}) ${biologyFirstGradeStartPage.value}`,
            secondPart: `زیست پایه (زیست 2) (${
              biologySecondGradeTitle.value
            }) از صفحه ${biologySecondGradeStartPageNumbered} تا سر صفحه ${
              biologySecondGradeStartPageNumbered + dailybiologyReadingFloor
            }`,
            thirdPart: `زیست پایه (زیست 2) (${
              biologySecondGradeTitle.value
            }) از صفحه ${
              biologySecondGradeStartPageNumbered + dailybiologyReadingFloor
            } تا صفحه ${
              biologySecondGradeStartPageNumbered +
              dailybiologyReadingFloor +
              dailybiologyReadingCeil
            }`,
          };
          return pagePartsObj;
        }
      } else {
        let pagePartsObj = {
          firstPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value}) ${biologyFirstGradeStartPage.value}`,
          secondPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value})`,
          thirdPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else if (
      biologyFirstGradeIncluded.value.trim() === "بله" &&
      biologysecondGradeIncluded.value.trim() === "خیر"
    ) {
      let numArray = biologyFirstGradeStartPage.value.trim().match(/\d+/g);
      if (numArray) {
        let biologyFirstGradeEndPageNumbered = Number(numArray[1]);
        let biologyFirstGradeStartPageNumbered = Number(numArray[0]);
        let pageNumber =
          biologyFirstGradeEndPageNumbered - biologyFirstGradeStartPageNumbered;
        if (pageNumber % 3 === 0) {
          let dailyBiologyReading = pageNumber / 3;
          let pagePartsObj = {
            firstPart: `زیست پایه (زیست 1) (${
              biologyFirstGradeTitle.value
            }) از صفحه ${biologyFirstGradeStartPageNumbered} تا سر صفحه ${
              biologyFirstGradeStartPageNumbered + dailyBiologyReading
            }`,
            secondPart: `زیست پایه (زیست 1) (${
              biologyFirstGradeTitle.value
            }) از صفحه ${
              biologyFirstGradeStartPageNumbered + dailyBiologyReading
            } تا سر صفحه ${
              biologyFirstGradeStartPageNumbered + dailyBiologyReading * 2
            }`,
            thirdPart: `زیست پایه (زیست 1) (${
              biologyFirstGradeTitle.value
            }) از صفحه ${
              biologyFirstGradeStartPageNumbered + dailyBiologyReading * 2
            } تا صفحه ${
              biologyFirstGradeStartPageNumbered + dailyBiologyReading * 3
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyBiologyReadingCeil = Math.ceil(pageNumber / 3);
          let dailyBiologyReadingFloor = Math.floor(pageNumber / 3);
          if (
            dailyBiologyReadingFloor * 2 + dailyBiologyReadingCeil ===
            pageNumber
          ) {
            let pagePartsObj = {
              firstPart: `زیست پایه (زیست 1) (${
                biologyFirstGradeTitle.value
              }) از صفحه ${biologyFirstGradeStartPageNumbered} تا سر صفحه ${
                biologyFirstGradeStartPageNumbered + dailyBiologyReadingFloor
              }`,
              secondPart: `زیست پایه (زیست 1) (${
                biologyFirstGradeTitle.value
              }) از صفحه ${
                biologyFirstGradeStartPageNumbered + dailyBiologyReadingFloor
              } تا سر صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor * 2 +
                1
              }`,
              thirdPart: `زیست پایه (زیست 1) (${
                biologyFirstGradeTitle.value
              }) از صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor * 2 +
                1
              } تا صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor * 2 +
                dailyBiologyReadingCeil
              }`,
            };
            return pagePartsObj;
          } else {
            let pagePartsObj = {
              firstPart: `زیست پایه (زیست 1) (${
                biologyFirstGradeTitle.value
              }) از صفحه ${biologyFirstGradeStartPageNumbered} تا سر صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                1
              }`,
              secondPart: `زیست پایه (زیست 1) (${
                biologyFirstGradeTitle.value
              }) از صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                1
              } تا سر صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                dailyBiologyReadingCeil +
                1
              }`,
              thirdPart: `زیست پایه (زیست 1) (${
                biologyFirstGradeTitle.value
              }) از صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                dailyBiologyReadingCeil +
                1
              } تا صفحه ${
                biologyFirstGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                dailyBiologyReadingCeil * 2
              }`,
            };
            return pagePartsObj;
          }
        }
      } else {
        let pagePartsObj = {
          firstPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value})`,
          secondPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value})`,
          thirdPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else if (
      biologyFirstGradeIncluded.value.trim() === "خیر" &&
      biologysecondGradeIncluded.value.trim() === "بله"
    ) {
      let numArray = biologySecondGradeStartPage.value.trim().match(/\d+/g);
      if (numArray) {
        let biologySecondGradeEndPageNumbered = Number(numArray[1]);
        let biologySecondGradeStartPageNumbered = Number(numArray[0]);
        let pageNumber =
          biologySecondGradeEndPageNumbered -
          biologySecondGradeStartPageNumbered;
        if (pageNumber % 3 === 0) {
          let dailyBiologyReading = pageNumber / 3;
          let pagePartsObj = {
            firstPart: `زیست پایه (زیست 2) (${
              biologySecondGradeTitle.value
            }) از صفحه ${biologySecondGradeStartPageNumbered} تا سر صفحه ${
              biologySecondGradeStartPageNumbered + dailyBiologyReading
            }`,
            secondPart: `زیست پایه (زیست 2) (${
              biologySecondGradeTitle.value
            }) از صفحه ${
              biologySecondGradeStartPageNumbered + dailyBiologyReading
            } تا سر صفحه ${
              biologySecondGradeStartPageNumbered + dailyBiologyReading * 2
            }`,
            thirdPart: `زیست پایه (زیست 2) (${
              biologySecondGradeTitle.value
            }) از صفحه ${
              biologySecondGradeStartPageNumbered + dailyBiologyReading * 2
            } تا صفحه ${
              biologySecondGradeStartPageNumbered + dailyBiologyReading * 3
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyBiologyReadingCeil = Math.ceil(pageNumber / 3);
          let dailyBiologyReadingFloor = Math.floor(pageNumber / 3);
          if (
            dailyBiologyReadingFloor * 2 + dailyBiologyReadingCeil ===
            pageNumber
          ) {
            let pagePartsObj = {
              firstPart: `زیست پایه (زیست 2) (${
                biologySecondGradeTitle.value
              }) از صفحه ${biologySecondGradeStartPageNumbered} تا سر صفحه ${
                biologySecondGradeStartPageNumbered + dailyBiologyReadingFloor
              }`,
              secondPart: `زیست پایه (زیست 2) (${
                biologySecondGradeTitle.value
              }) از صفحه ${
                biologySecondGradeStartPageNumbered + dailyBiologyReadingFloor
              } تا سر صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor * 2 +
                1
              }`,
              thirdPart: `زیست پایه (زیست 2) (${
                biologySecondGradeTitle.value
              }) از صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor * 2 +
                1
              } تا صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor * 2 +
                dailyBiologyReadingCeil
              }`,
            };
            return pagePartsObj;
          } else {
            let pagePartsObj = {
              firstPart: `زیست پایه (زیست 2) (${
                biologySecondGradeTitle.value
              }) از صفحه ${biologySecondGradeStartPageNumbered} تا سر صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                1
              }`,
              secondPart: `زیست پایه (زیست 2) (${
                biologySecondGradeTitle.value
              }) از صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                1
              } تا سر صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                dailyBiologyReadingCeil +
                1
              }`,
              thirdPart: `زیست پایه (زیست 2) (${
                biologySecondGradeTitle.value
              }) از صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                dailyBiologyReadingCeil +
                1
              } تا صفحه ${
                biologySecondGradeStartPageNumbered +
                dailyBiologyReadingFloor +
                dailyBiologyReadingCeil * 2
              }`,
            };
            return pagePartsObj;
          }
        }
      } else {
        let pagePartsObj = {
          firstPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value})`,
          secondPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value})`,
          thirdPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زیست پایه را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به زیست پایه را درست وارد کنید.`,
        thirdPart: `لطفا اطلاعات مربوط به زیست پایه را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let biologyLastGradePageCounterReturnedData =
  function biologyLastGradePageCounter(biologyLastGradeStartPage) {
    let numArray = biologyLastGradeStartPage.trim().match(/\d+/g);
    if (numArray) {
      let biologyLastGradeEndPageNumbered = Number(numArray[1]);
      let biologyLastGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        biologyLastGradeEndPageNumbered - biologyLastGradeStartPageNumbered;
      if (pageNumber % 4 === 0) {
        let dailyBiologyReading = pageNumber / 4;
        let pagePartsObj = {
          firstPart: `از صفحه ${biologyLastGradeStartPageNumbered} تا سر صفحه ${
            biologyLastGradeStartPageNumbered + dailyBiologyReading
          }`,
          secondPart: `از صفحه ${
            biologyLastGradeStartPageNumbered + dailyBiologyReading
          } تا سر صفحه ${
            biologyLastGradeStartPageNumbered + dailyBiologyReading * 2
          }`,
          thirdPart: `از صفحه ${
            biologyLastGradeStartPageNumbered + dailyBiologyReading * 2
          } تا سر صفحه ${
            biologyLastGradeStartPageNumbered + dailyBiologyReading * 3
          }`,
          forthPart: `از صفحه ${
            biologyLastGradeStartPageNumbered + dailyBiologyReading * 3
          } تا صفحه ${
            biologyLastGradeStartPageNumbered + dailyBiologyReading * 4
          }`,
        };
        return pagePartsObj;
      } else {
        let dailyBiologyReadingCeil = Math.ceil(pageNumber / 4);
        let dailyBiologyReadingFloor = Math.floor(pageNumber / 4);
        if (
          dailyBiologyReadingFloor * 3 + dailyBiologyReadingCeil ===
          pageNumber
        ) {
          let pagePartsObj = {
            firstPart: `از صفحه ${biologyLastGradeStartPageNumbered} تا سر صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingFloor
            }`,
            secondPart: `از صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingFloor
            } تا سر صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingFloor * 2
            }`,
            thirdPart: `از صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingFloor * 2
            } تا سر صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingFloor * 2 +
              dailyBiologyReadingCeil
            }`,
            forthPart: `از صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingFloor * 2 +
              dailyBiologyReadingCeil
            } تا صفحه ${
              biologyLastGradeStartPageNumbered +
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
            firstPart: `از صفحه ${biologyLastGradeStartPageNumbered} تا سر صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingFloor
            }`,
            secondPart: `از صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingFloor
            } تا سر صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingFloor +
              dailyBiologyReadingCeil
            }`,
            thirdPart: `از صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingFloor +
              dailyBiologyReadingCeil
            } تا سر صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingFloor +
              dailyBiologyReadingCeil * 2
            }`,
            forthPart: `از صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingFloor +
              dailyBiologyReadingCeil * 2
            } تا صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingFloor * 2 +
              dailyBiologyReadingCeil * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `از صفحه ${biologyLastGradeStartPageNumbered} تا سر صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingCeil
            }`,
            secondPart: `از صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingCeil
            } تا سر صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingCeil * 2
            }`,
            thirdPart: `از صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingCeil * 2
            } تا سر صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingCeil * 3
            }`,
            forthPart: `از صفحه ${
              biologyLastGradeStartPageNumbered + dailyBiologyReadingCeil * 3
            } تا صفحه ${
              biologyLastGradeStartPageNumbered +
              dailyBiologyReadingCeil * 3 +
              dailyBiologyReadingFloor
            }`,
          };
          return pagePartsObj;
        }
      }
    } else {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
        thirdPart: ``,
        forthPart: ``,
      };
      return pagePartsObj;
    }
  };

let biologyBaseGradeTestCounterReturnedData =
  function biologyBaseGradeTestCounter() {
    if (
      biologyFirstGradeIncluded.value.trim() === "بله" &&
      biologysecondGradeIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value}) ${biologyFirstGradeModule.value}`,
        secondPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value}) ${biologySecondGradeModule.value}`,
        thirdPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value}) ${biologySecondGradeModule.value}`,
      };
      return pagePartsObj;
    } else if (
      biologyFirstGradeIncluded.value.trim() === "بله" &&
      biologysecondGradeIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value}) ${biologyFirstGradeModule.value}`,
        secondPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value}) ${biologyFirstGradeModule.value}`,
        thirdPart: `زیست پایه (زیست 1) (${biologyFirstGradeTitle.value}) ${biologyFirstGradeModule.value}`,
      };
      return pagePartsObj;
    } else if (
      biologyFirstGradeIncluded.value.trim() === "خیر" &&
      biologysecondGradeIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value}) ${biologySecondGradeModule.value}`,
        secondPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value}) ${biologySecondGradeModule.value}`,
        thirdPart: `زیست پایه (زیست 2) (${biologySecondGradeTitle.value}) ${biologySecondGradeModule.value}`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زیست پایه را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به زیست پایه را درست وارد کنید.`,
        thirdPart: `لطفا اطلاعات مربوط به زیست پایه را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let mathBaseGradePageCounterReturnedData = function mathBaseGradePageCounter() {
  if (
    FirstGradeIncluded.value.trim() === "بله" &&
    secondGradeIncluded.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) ${mathfirstGradeStartPage.value}`,
      secondPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) ${mathSecondGradeStartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    FirstGradeIncluded.value.trim() === "بله" &&
    secondGradeIncluded.value.trim() === "خیر"
  ) {
    let numArray = mathfirstGradeStartPage.value.trim().match(/\d+/g);
    if (numArray) {
      let mathfirstGradeLastPageNumbered = Number(numArray[1]);
      let mathfirstGradeStartPageNumbered = Number(numArray[0]);
      pageNumber =
        mathfirstGradeLastPageNumbered - mathfirstGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyMathReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `مباحث مستقل ریاضی پایه (${
            mathfirstGradeTitle.value
          }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
            mathfirstGradeStartPageNumbered + dailyMathReading
          }`,
          secondPart: `مباحث مستقل ریاضی پایه (${
            mathfirstGradeTitle.value
          }) (ریاضی 1) از صفحه ${
            mathfirstGradeStartPageNumbered + dailyMathReading
          } تا صفحه ${mathfirstGradeStartPageNumbered + dailyMathReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyMathReadingFloor = Math.ceil(pageNumber / 2);
        let dailyMathReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `مباحث مستقل ریاضی پایه (${
            mathfirstGradeTitle.value
          }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
            mathfirstGradeStartPageNumbered + dailyMathReadingFloor
          }`,
          secondPart: `مباحث مستقل ریاضی پایه (${
            mathfirstGradeTitle.value
          }) (ریاضی 1) از صفحه ${
            mathfirstGradeStartPageNumbered + dailyMathReadingFloor
          } تا صفحه ${
            mathfirstGradeStartPageNumbered +
            dailyMathReadingFloor +
            dailyMathReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
        secondPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
      };
      return pagePartsObj;
    }
  } else if (
    FirstGradeIncluded.value.trim() === "خیر" &&
    secondGradeIncluded.value.trim() === "بله"
  ) {
    let numArray = mathSecondGradeStartPage.value.trim().match(/\d+/g);
    if (numArray) {
      let mathSecondGradeLastPageNumbered = Number(numArray[1]);
      let mathSecondGradeStartPageNumbered = Number(numArray[0]);
      pageNumber =
        mathSecondGradeLastPageNumbered - mathSecondGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyMathReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `مباحث مستقل ریاضی پایه (${
            mathSecondGradeTitle.value
          }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
            mathSecondGradeStartPageNumbered + dailyMathReading
          }`,
          secondPart: `مباحث مستقل ریاضی پایه (${
            mathSecondGradeTitle.value
          }) (ریاضی 2) از صفحه ${
            mathSecondGradeStartPageNumbered + dailyMathReading
          } تا صفحه ${mathSecondGradeStartPageNumbered + dailyMathReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyMathReadingFloor = Math.ceil(pageNumber / 2);
        let dailyMathReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `مباحث مستقل ریاضی پایه (${
            mathSecondGradeTitle.value
          }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
            mathSecondGradeStartPageNumbered + dailyMathReadingFloor
          }`,
          secondPart: `مباحث مستقل ریاضی پایه (${
            mathSecondGradeTitle.value
          }) (ریاضی 2) از صفحه ${
            mathSecondGradeStartPageNumbered + dailyMathReadingFloor
          } تا صفحه ${
            mathSecondGradeStartPageNumbered +
            dailyMathReadingFloor +
            dailyMathReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2)`,
        secondPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2)`,
      };
      return pagePartsObj;
    }
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let mathLastGradePageCounterReturnedData = function mathLastGradePageCounter() {
  if (
    mathLastThreeIncluded.value.trim() === "بله" &&
    mathLastTwoIncluded.value.trim() === "بله" &&
    mathLastOneIncluded.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} و (ریاضی 2) ${mathLastTwoStartPage.value}`,
      secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) ${mathLastGradeStartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    mathLastThreeIncluded.value.trim() === "بله" &&
    mathLastTwoIncluded.value.trim() === "بله" &&
    mathLastOneIncluded.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value}`,
      secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) ${mathLastGradeStartPage.value}`,
    };
    return pagePartsObj;
  } else if (
    mathLastThreeIncluded.value.trim() === "بله" &&
    mathLastTwoIncluded.value.trim() === "خیر" &&
    mathLastOneIncluded.value.trim() === "خیر"
  ) {
    let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
    if (numArray) {
      let mathLastGradeLastPageNumbered = Number(numArray[1]);
      let mathLastGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyMathReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `ریاضی دوازدهم (${
            mathLastGradeTitle.value
          }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
            mathLastGradeStartPageNumbered + dailyMathReading
          }`,
          secondPart: `ریاضی دوازدهم (${
            mathLastGradeTitle.value
          }) (ریاضی 3) از صفحه ${
            mathLastGradeStartPageNumbered + dailyMathReading
          } تا صفحه ${mathLastGradeStartPageNumbered + dailyMathReading * 2}`,
        };
        return pagePartsObj;
      } else {
        let dailyMathReadingFloor = Math.ceil(pageNumber / 2);
        let dailyMathReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `ریاضی دوازدهم (${
            mathLastGradeTitle.value
          }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
            mathLastGradeStartPageNumbered + dailyMathReadingFloor
          }`,
          secondPart: `ریاضی دوازدهم (${
            mathLastGradeTitle.value
          }) (ریاضی 3) از صفحه ${
            mathLastGradeStartPageNumbered + dailyMathReadingFloor
          } تا صفحه ${
            mathLastGradeStartPageNumbered +
            dailyMathReadingFloor +
            dailyMathReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) `,
        secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) `,
      };
      return pagePartsObj;
    }
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let mathBaseGradeTestCounterReturnedData = function mathBaseGradeTestCounter() {
  if (
    FirstGradeIncluded.value.trim() === "بله" &&
    secondGradeIncluded.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
      secondPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
    };
    return pagePartsObj;
  } else if (
    FirstGradeIncluded.value.trim() === "بله" &&
    secondGradeIncluded.value.trim() === "خیر"
  ) {
    let pagePartsObj = {
      firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
      secondPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
    };
    return pagePartsObj;
  } else if (
    FirstGradeIncluded.value.trim() === "خیر" &&
    secondGradeIncluded.value.trim() === "بله"
  ) {
    let pagePartsObj = {
      firstPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
      secondPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
    };
    return pagePartsObj;
  } else {
    let pagePartsObj = {
      firstPart: "لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.",
      secondPart: "لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.",
    };
    return pagePartsObj;
  }
};

let mathBaseGradeGraduatedPageCounterReturnedData =
  function mathBaseGradeGraduatedPageCounter() {
    if (
      FirstGradeIncluded.value.trim() === "بله" &&
      secondGradeIncluded.value.trim() === "بله"
    ) {
      let numArrayFirst = mathfirstGradeStartPage.value.trim().match(/\d+/g);
      let numArraySecond = mathSecondGradeStartPage.value.trim().match(/\d+/g);
      if (numArrayFirst && numArraySecond) {
        let mathfirstGradeLastPageNumbered = Number(numArrayFirst[1]);
        let mathfirstGradeStartPageNumbered = Number(numArrayFirst[0]);
        let mathSecondGradeLastPageNumbered = Number(numArraySecond[1]);
        let mathSecondGradeStartPageNumbered = Number(numArraySecond[0]);
        let mathFirstGradePageNumber =
          mathfirstGradeLastPageNumbered - mathfirstGradeStartPageNumbered;
        let mathSecondGradePageNumber =
          mathSecondGradeLastPageNumbered - mathSecondGradeStartPageNumbered;

        if (
          mathFirstGradePageNumber % 2 === 0 &&
          mathSecondGradePageNumber % 2 === 0
        ) {
          let dailyFirstGradeMathReading = mathFirstGradePageNumber / 2;
          let dailySecondGradeMathReading = mathSecondGradePageNumber / 2;
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReading
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReading
            } تا صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReading * 2
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
              mathSecondGradeStartPageNumbered + dailySecondGradeMathReading
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered + dailySecondGradeMathReading
            } تا صفحه ${
              mathSecondGradeStartPageNumbered + dailySecondGradeMathReading * 2
            }`,
          };
          return pagePartsObj;
        } else if (
          mathFirstGradePageNumber % 2 === 0 &&
          mathSecondGradePageNumber % 2 === 1
        ) {
          let dailyFirstGradeMathReading = mathFirstGradePageNumber / 2;
          let dailySecondGradeMathReadingFloor = Math.ceil(
            mathSecondGradePageNumber / 2
          );
          let dailySecondGradeMathReadingCeil = Math.floor(
            mathSecondGradePageNumber / 2
          );
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReading
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReading
            } تا صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReading * 2
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
              mathSecondGradeStartPageNumbered +
              dailySecondGradeMathReadingFloor
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered +
              dailySecondGradeMathReadingFloor
            } تا صفحه ${
              mathSecondGradeStartPageNumbered +
              dailySecondGradeMathReadingFloor +
              dailySecondGradeMathReadingCeil
            }`,
          };
          return pagePartsObj;
        } else if (
          mathFirstGradePageNumber % 2 === 1 &&
          mathSecondGradePageNumber % 2 === 0
        ) {
          let dailyFirstGradeMathReadingFloor = Math.ceil(
            mathFirstGradePageNumber / 2
          );
          let dailyFirstGradeMathReadingCeil = Math.floor(
            mathFirstGradePageNumber / 2
          );
          let dailySecondGradeMathReading = mathSecondGradePageNumber / 2;
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReadingFloor
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReadingFloor
            } تا صفحه ${
              mathfirstGradeStartPageNumbered +
              dailyFirstGradeMathReadingFloor +
              dailyFirstGradeMathReadingCeil
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
              mathSecondGradeStartPageNumbered + dailySecondGradeMathReading
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered + dailySecondGradeMathReading
            } تا صفحه ${
              mathSecondGradeStartPageNumbered + dailySecondGradeMathReading * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyFirstGradeMathReadingFloor = Math.ceil(
            mathFirstGradePageNumber / 2
          );
          let dailyFirstGradeMathReadingCeil = Math.floor(
            mathFirstGradePageNumber / 2
          );
          let dailySecondGradeMathReadingFloor = Math.ceil(
            mathSecondGradePageNumber / 2
          );
          let dailySecondGradeMathReadingCeil = Math.floor(
            mathSecondGradePageNumber / 2
          );
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReadingFloor
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyFirstGradeMathReadingFloor
            } تا صفحه ${
              mathfirstGradeStartPageNumbered +
              dailyFirstGradeMathReadingFloor +
              dailyFirstGradeMathReadingCeil
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
              mathSecondGradeStartPageNumbered +
              dailySecondGradeMathReadingFloor
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered +
              dailySecondGradeMathReadingFloor
            } تا صفحه ${
              mathSecondGradeStartPageNumbered +
              dailySecondGradeMathReadingFloor +
              dailySecondGradeMathReadingCeil
            }`,
          };
          return pagePartsObj;
        }
      } else if (numArrayFirst && !numArraySecond) {
        let mathfirstGradeLastPageNumbered = Number(numArrayFirst[1]);
        let mathfirstGradeStartPageNumbered = Number(numArrayFirst[0]);
        let mathFirstGradePageNumber =
          mathfirstGradeLastPageNumbered - mathfirstGradeStartPageNumbered;
        if (mathFirstGradePageNumber % 2 === 0) {
          let dailyMathReading = mathFirstGradePageNumber / 2;
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading
            } تا صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading * 2
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2)`,
            forthPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2)`,
          };
          return pagePartsObj;
        } else {
          let dailyMathReadingFloor = Math.ceil(mathFirstGradePageNumber / 2);
          let dailyMathReadingCeil = Math.floor(mathFirstGradePageNumber / 2);
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReadingFloor
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReadingFloor
            } تا صفحه ${
              mathfirstGradeStartPageNumbered +
              dailyMathReadingFloor +
              dailyMathReadingCeil
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
            forthPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
          };
          return pagePartsObj;
        }
      } else if (!numArrayFirst && numArraySecond) {
        let mathSecondGradeLastPageNumbered = Number(numArraySecond[1]);
        let mathSecondGradeStartPageNumbered = Number(numArraySecond[0]);
        let mathSecondGradePageNumber =
          mathSecondGradeLastPageNumbered - mathSecondGradeStartPageNumbered;
        if (mathSecondGradePageNumber % 2 === 0) {
          let dailyMathReading = mathSecondGradePageNumber / 2;
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
            thirdPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading
            } تا صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyMathReadingFloor = Math.ceil(mathSecondGradePageNumber / 2);
          let dailyMathReadingCeil = Math.floor(mathSecondGradePageNumber / 2);
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
            thirdPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReadingFloor
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReadingFloor
            } تا صفحه ${
              mathSecondGradeStartPageNumbered +
              dailyMathReadingFloor +
              dailyMathReadingCeil
            }`,
          };
          return pagePartsObj;
        }
      } else {
        let pagePartsObj = {
          firstPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
          thirdPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
          secondPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
          forthPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
        };
        return pagePartsObj;
      }
    } else if (
      FirstGradeIncluded.value.trim() === "بله" &&
      secondGradeIncluded.value.trim() === "خیر"
    ) {
      let numArray = mathfirstGradeStartPage.value.trim().match(/\d+/g);
      if (numArray) {
        let mathfirstGradeLastPageNumbered = Number(numArray[1]);
        let mathfirstGradeStartPageNumbered = Number(numArray[0]);
        pageNumber =
          mathfirstGradeLastPageNumbered - mathfirstGradeStartPageNumbered;
        if (pageNumber % 4 === 0) {
          let dailyMathReading = pageNumber / 4;
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading
            } تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading * 2
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading * 2
            } تا سر صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading * 3
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathfirstGradeTitle.value
            }) (ریاضی 1) از صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading * 3
            } تا صفحه ${
              mathfirstGradeStartPageNumbered + dailyMathReading * 4
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
          let dailyMathReadingFloor = Math.floor(pageNumber / 4);
          if (dailyMathReadingFloor * 3 + dailyMathReadingCeil === pageNumber) {
            let pagePartsObj = {
              firstPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingFloor
              }`,
              secondPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingFloor
              } تا سر صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingFloor * 2
              }`,
              thirdPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingFloor * 2
              } تا سر صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingFloor * 2 +
                dailyMathReadingCeil
              }`,
              forthPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingFloor * 2 +
                dailyMathReadingCeil
              } تا صفحه ${
                mathfirstGradeStartPageNumbered +
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
              firstPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingFloor
              }`,
              secondPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingFloor
              } تا سر صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil
              }`,
              thirdPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil
              } تا سر صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil * 2
              }`,
              forthPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil * 2
              } تا صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingFloor * 2 +
                dailyMathReadingCeil * 2
              }`,
            };
            return pagePartsObj;
          } else {
            let pagePartsObj = {
              firstPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${mathfirstGradeStartPageNumbered} تا سر صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingCeil
              }`,
              secondPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingCeil
              } تا سر صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingCeil * 2
              }`,
              thirdPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingCeil * 2
              } تا سر صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingCeil * 3
              }`,
              forthPart: `مباحث مستقل ریاضی پایه (${
                mathfirstGradeTitle.value
              }) (ریاضی 1) از صفحه ${
                mathfirstGradeStartPageNumbered + dailyMathReadingCeil * 3
              } تا صفحه ${
                mathfirstGradeStartPageNumbered +
                dailyMathReadingCeil * 3 +
                dailyMathReadingFloor
              }`,
            };
            return pagePartsObj;
          }
        }
      } else {
        let pagePartsObj = {
          firstPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
          secondPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
          thirdPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
          forthPart: `مباحث مستقل ریاضی پایه (${mathfirstGradeTitle.value}) (ریاضی 1) `,
        };
        return pagePartsObj;
      }
    } else if (
      FirstGradeIncluded.value.trim() === "خیر" &&
      secondGradeIncluded.value.trim() === "بله"
    ) {
      let numArray = mathSecondGradeStartPage.value.trim().match(/\d+/g);
      if (numArray) {
        let mathSecondGradeLastPageNumbered = Number(numArray[1]);
        let mathSecondGradeStartPageNumbered = Number(numArray[0]);
        pageNumber =
          mathSecondGradeLastPageNumbered - mathSecondGradeStartPageNumbered;
        if (pageNumber % 4 === 0) {
          let dailyMathReading = pageNumber / 4;
          let pagePartsObj = {
            firstPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading
            }`,
            secondPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading
            } تا سر صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading * 2
            }`,
            thirdPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading * 2
            } تا سر صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading * 3
            }`,
            forthPart: `مباحث مستقل ریاضی پایه (${
              mathSecondGradeTitle.value
            }) (ریاضی 2) از صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading * 3
            } تا صفحه ${
              mathSecondGradeStartPageNumbered + dailyMathReading * 4
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
          let dailyMathReadingFloor = Math.floor(pageNumber / 4);
          if (dailyMathReadingFloor * 3 + dailyMathReadingCeil === pageNumber) {
            let pagePartsObj = {
              firstPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingFloor
              }`,
              secondPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingFloor
              } تا سر صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingFloor * 2
              }`,
              thirdPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingFloor * 2
              } تا سر صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingFloor * 2 +
                dailyMathReadingCeil
              }`,
              forthPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingFloor * 2 +
                dailyMathReadingCeil
              } تا صفحه ${
                mathSecondGradeStartPageNumbered +
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
              firstPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingFloor
              }`,
              secondPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingFloor
              } تا سر صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil
              }`,
              thirdPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil
              } تا سر صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil * 2
              }`,
              forthPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingFloor +
                dailyMathReadingCeil * 2
              } تا صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingFloor * 2 +
                dailyMathReadingCeil * 2
              }`,
            };
            return pagePartsObj;
          } else {
            let pagePartsObj = {
              firstPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${mathSecondGradeStartPageNumbered} تا سر صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingCeil
              }`,
              secondPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingCeil
              } تا سر صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingCeil * 2
              }`,
              thirdPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingCeil * 2
              } تا سر صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingCeil * 3
              }`,
              forthPart: `مباحث مستقل ریاضی پایه (${
                mathSecondGradeTitle.value
              }) (ریاضی 2) از صفحه ${
                mathSecondGradeStartPageNumbered + dailyMathReadingCeil * 3
              } تا صفحه ${
                mathSecondGradeStartPageNumbered +
                dailyMathReadingCeil * 3 +
                dailyMathReadingFloor
              }`,
            };
            return pagePartsObj;
          }
        }
      } else {
        let pagePartsObj = {
          firstPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
          secondPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
          thirdPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
          forthPart: `مباحث مستقل ریاضی پایه (${mathSecondGradeTitle.value}) (ریاضی 2) `,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.`,
        thirdPart: `لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.`,
        forthPart: `لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let mathBaseGradeGraduatedTestCounterReturnedData =
  function mathBaseGradeTestCounter() {
    if (
      FirstGradeIncluded.value.trim() === "بله" &&
      secondGradeIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
        thirdPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
        secondPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
        forthPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
      };
      return pagePartsObj;
    } else if (
      FirstGradeIncluded.value.trim() === "بله" &&
      secondGradeIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
        secondPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
        thirdPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
        forthPart: `مباحث مستقل ریاضی پایه (ریاضی 1) (${mathfirstGradeTitle.value}) ${mathFirstGradeModule.value}`,
      };
      return pagePartsObj;
    } else if (
      FirstGradeIncluded.value.trim() === "خیر" &&
      secondGradeIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
        secondPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
        thirdPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
        forthPart: `مباحث مستقل ریاضی پایه (ریاضی 2) (${mathSecondGradeTitle.value}) ${mathSecondGradeModule.value}`,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: "لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.",
        secondPart: "لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.",
        thirdPart: "لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.",
        forthPart: "لطفا اطلاعات مربوط به ریاضی پایه را درست وارد کنید.",
      };
      return pagePartsObj;
    }
  };

let mathLastGradeGraduatedPageCounterReturnedData =
  function mathLastGradeGraduatedPageCounter() {
    if (score.value.trim() < 5000) {
      if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "بله"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 4 === 0) {
            let dailyMathReading = pageNumber / 4;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (45 دقیقه مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (45 دقیقه مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (45 دقیقه مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (45 دقیقه مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
            let dailyMathReadingFloor = Math.floor(pageNumber / 4);
            if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingCeil * 3 +
                  dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArrayTwo = mathLastTwoStartPage.value.trim().match(/\d+/g);
        if (numArrayTwo) {
          let mathLastTwoEndPageNumbered = Number(numArrayTwo[1]);
          let mathLastTwoStartPageNumbered = Number(numArrayTwo[0]);
          let pageNumberMathTwo =
            mathLastTwoEndPageNumbered - mathLastTwoStartPageNumbered;
          if (pageNumberMathTwo % 2 === 0) {
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } تا صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          } else {
            let dailyMathTwoReadingFloor = Math.ceil(pageNumberMathTwo / 2);
            let dailyMathTwoReadingCeil = Math.floor(pageNumberMathTwo / 2);
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered +
                    dailyMathTwoReadingFloor +
                    dailyMathTwoReadingCeil
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } تا صفحه ${
                  mathLastTwoStartPageNumbered +
                  dailyMathTwoReadingFloor +
                  dailyMathTwoReadingCeil
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let numArrayLast = mathLastGradeStartPage.value.trim().match(/\d+/g);
          if (numArrayLast) {
            let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
            let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
            let pageNumber =
              mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
            if (pageNumber % 4 === 0) {
              let dailyMathReading = pageNumber / 4;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
              let dailyMathReadingFloor = Math.floor(pageNumber / 4);
              if (
                dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 3 +
                    dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else if (
                dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingCeil * 3 +
                    dailyMathReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              }
            }
          } else {
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          }
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "خیر" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 6 === 0) {
            dailyMathReading = pageNumber / 6;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (30 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (30 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (45 دقیقه مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (45 دقیقه مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } (45 دقیقه مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 6
              } (45 دقیقه مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingFloor = Math.floor(pageNumber / 6);
            let dailyMathReadingCeil = Math.ceil(pageNumber / 6);
            if (
              dailyMathReadingFloor * 5 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5 + 1
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 5 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 4 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil * 3 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 4 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor + dailyMathReadingCeil * 5 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 5
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (30 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (30 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else {
        let pagePartsObj = {
          firstPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
          secondPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
          thirdPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
          forthPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
          fifthPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
          sixthPart: `لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.`,
        };
        return pagePartsObj;
      }
    } else if (score.value.trim() < 6000 && score.value.trim() >= 5000) {
      if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "بله"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 4 === 0) {
            let dailyMathReading = pageNumber / 4;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (45 دقیقه مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (45 دقیقه مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (45 دقیقه مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (45 دقیقه مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
            let dailyMathReadingFloor = Math.floor(pageNumber / 4);
            if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingCeil * 3 +
                  dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArrayTwo = mathLastTwoStartPage.value.trim().match(/\d+/g);
        if (numArrayTwo) {
          let mathLastTwoEndPageNumbered = Number(numArrayTwo[1]);
          let mathLastTwoStartPageNumbered = Number(numArrayTwo[0]);
          let pageNumberMathTwo =
            mathLastTwoEndPageNumbered - mathLastTwoStartPageNumbered;
          if (pageNumberMathTwo % 2 === 0) {
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } تا صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          } else {
            let dailyMathTwoReadingFloor = Math.ceil(pageNumberMathTwo / 2);
            let dailyMathTwoReadingCeil = Math.floor(pageNumberMathTwo / 2);
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered +
                    dailyMathTwoReadingFloor +
                    dailyMathTwoReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } تا صفحه ${
                  mathLastTwoStartPageNumbered +
                  dailyMathTwoReadingFloor +
                  dailyMathTwoReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let numArrayLast = mathLastGradeStartPage.value.trim().match(/\d+/g);
          if (numArrayLast) {
            let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
            let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
            let pageNumber =
              mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
            if (pageNumber % 4 === 0) {
              let dailyMathReading = pageNumber / 4;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
              let dailyMathReadingFloor = Math.floor(pageNumber / 4);
              if (
                dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 3 +
                    dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else if (
                dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingCeil * 3 +
                    dailyMathReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              }
            }
          } else {
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (45 دقیقه مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          }
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "خیر" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 6 === 0) {
            dailyMathReading = pageNumber / 6;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (45 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (45 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (45 دقیقه مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (45 دقیقه مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } (45 دقیقه مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 6
              } (45 دقیقه مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingFloor = Math.floor(pageNumber / 6);
            let dailyMathReadingCeil = Math.ceil(pageNumber / 6);
            if (
              dailyMathReadingFloor * 5 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5 + 1
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 5 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 4 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil * 3 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 4 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor + dailyMathReadingCeil * 5 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } (45 دقیقه مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } (45 دقیقه مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 5
                } (45 دقیقه مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else {
        let pagePartsObj = {
          firstPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          secondPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          thirdPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          forthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          fifthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          sixthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
        };
        return pagePartsObj;
      }
    } else if (score.value.trim() < 7000 && score.value.trim() >= 6000) {
      if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "بله"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 4 === 0) {
            let dailyMathReading = pageNumber / 4;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (1 ساعت مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (1 ساعت مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (1 ساعت مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (1 ساعت مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
            let dailyMathReadingFloor = Math.floor(pageNumber / 4);
            if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingCeil * 3 +
                  dailyMathReadingFloor
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (30 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArrayTwo = mathLastTwoStartPage.value.trim().match(/\d+/g);
        if (numArrayTwo) {
          let mathLastTwoEndPageNumbered = Number(numArrayTwo[1]);
          let mathLastTwoStartPageNumbered = Number(numArrayTwo[0]);
          let pageNumberMathTwo =
            mathLastTwoEndPageNumbered - mathLastTwoStartPageNumbered;
          if (pageNumberMathTwo % 2 === 0) {
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } تا صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          } else {
            let dailyMathTwoReadingFloor = Math.ceil(pageNumberMathTwo / 2);
            let dailyMathTwoReadingCeil = Math.floor(pageNumberMathTwo / 2);
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered +
                    dailyMathTwoReadingFloor +
                    dailyMathTwoReadingCeil
                  } (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (30 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } تا صفحه ${
                  mathLastTwoStartPageNumbered +
                  dailyMathTwoReadingFloor +
                  dailyMathTwoReadingCeil
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let numArrayLast = mathLastGradeStartPage.value.trim().match(/\d+/g);
          if (numArrayLast) {
            let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
            let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
            let pageNumber =
              mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
            if (pageNumber % 4 === 0) {
              let dailyMathReading = pageNumber / 4;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 4
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
              let dailyMathReadingFloor = Math.floor(pageNumber / 4);
              if (
                dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 3 +
                    dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else if (
                dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingCeil * 3 +
                    dailyMathReadingFloor
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              }
            }
          } else {
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (30 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          }
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "خیر" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 6 === 0) {
            dailyMathReading = pageNumber / 6;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (30 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (30 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (1 ساعت مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (1 ساعت مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } (1 ساعت مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 6
              } (1 ساعت مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingFloor = Math.floor(pageNumber / 6);
            let dailyMathReadingCeil = Math.ceil(pageNumber / 6);
            if (
              dailyMathReadingFloor * 5 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5 + 1
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 5 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 4 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil * 3 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 4 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 4
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor + dailyMathReadingCeil * 5 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (30 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (30 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 5
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (30 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (30 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else {
        let pagePartsObj = {
          firstPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          secondPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          thirdPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          forthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          fifthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          sixthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
        };
        return pagePartsObj;
      }
    } else {
      if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "بله"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 4 === 0) {
            let dailyMathReading = pageNumber / 4;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (1 ساعت مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (1 ساعت مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (1 ساعت مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (1 ساعت مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
            let dailyMathReadingFloor = Math.floor(pageNumber / 4);
            if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingCeil * 3 +
                  dailyMathReadingFloor
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 1) ${mathLastOneStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) ${mathLastTwoStartPage.value} (45 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "بله" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArrayTwo = mathLastTwoStartPage.value.trim().match(/\d+/g);
        if (numArrayTwo) {
          let mathLastTwoEndPageNumbered = Number(numArrayTwo[1]);
          let mathLastTwoStartPageNumbered = Number(numArrayTwo[0]);
          let pageNumberMathTwo =
            mathLastTwoEndPageNumbered - mathLastTwoStartPageNumbered;
          if (pageNumberMathTwo % 2 === 0) {
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let dailyMathTwoReading = pageNumberMathTwo / 2;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading
                } تا صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReading * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          } else {
            let dailyMathTwoReadingFloor = Math.ceil(pageNumberMathTwo / 2);
            let dailyMathTwoReadingCeil = Math.floor(pageNumberMathTwo / 2);
            let numArrayLast = mathLastGradeStartPage.value
              .trim()
              .match(/\d+/g);
            if (numArrayLast) {
              let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
              let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
              let pageNumber =
                mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
              if (pageNumber % 4 === 0) {
                let dailyMathReading = pageNumber / 4;
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 2) از صفحه ${
                    mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                  } تا صفحه ${
                    mathLastTwoStartPageNumbered +
                    dailyMathTwoReadingFloor +
                    dailyMathTwoReadingCeil
                  } (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReading * 4
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
                let dailyMathReadingFloor = Math.floor(pageNumber / 4);
                if (
                  dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 3 +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else if (
                  dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                  pageNumber
                ) {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingFloor
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor +
                      dailyMathReadingCeil * 2
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingFloor * 2 +
                      dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                } else {
                  let pagePartsObj = {
                    firstPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    secondPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 2) از صفحه ${
                      mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                    } تا صفحه ${
                      mathLastTwoStartPageNumbered +
                      dailyMathTwoReadingFloor +
                      dailyMathTwoReadingCeil
                    } (45 دقیقه مطالعه و حل تمرین)`,
                    thirdPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } (1 ساعت مطالعه و حل تمرین)`,
                    forthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } (1 ساعت مطالعه و حل تمرین)`,
                    fifthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                    } تا سر صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } (1 ساعت مطالعه و حل تمرین)`,
                    sixthPart: `ریاضی دوازدهم (${
                      mathLastGradeTitle.value
                    }) (ریاضی 3) از صفحه ${
                      mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                    } تا صفحه ${
                      mathLastGradeStartPageNumbered +
                      dailyMathReadingCeil * 3 +
                      dailyMathReadingFloor
                    } (1 ساعت مطالعه و حل تمرین)`,
                  };
                  return pagePartsObj;
                }
              }
            } else {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${mathLastTwoStartPageNumbered} تا سر صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 2) از صفحه ${
                  mathLastTwoStartPageNumbered + dailyMathTwoReadingFloor
                } تا صفحه ${
                  mathLastTwoStartPageNumbered +
                  dailyMathTwoReadingFloor +
                  dailyMathTwoReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let numArrayLast = mathLastGradeStartPage.value.trim().match(/\d+/g);
          if (numArrayLast) {
            let mathLastGradeLastPageNumbered = Number(numArrayLast[1]);
            let mathLastGradeStartPageNumbered = Number(numArrayLast[0]);
            let pageNumber =
              mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
            if (pageNumber % 4 === 0) {
              let dailyMathReading = pageNumber / 4;
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReading * 4
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else {
              let dailyMathReadingCeil = Math.ceil(pageNumber / 4);
              let dailyMathReadingFloor = Math.floor(pageNumber / 4);
              if (
                dailyMathReadingFloor * 3 + dailyMathReadingCeil ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 3 +
                    dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else if (
                dailyMathReadingFloor * 2 + dailyMathReadingCeil * 2 ===
                pageNumber
              ) {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingFloor
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor +
                    dailyMathReadingCeil * 2
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingFloor * 2 +
                    dailyMathReadingCeil * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              } else {
                let pagePartsObj = {
                  firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
                  thirdPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } (1 ساعت مطالعه و حل تمرین)`,
                  forthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } (1 ساعت مطالعه و حل تمرین)`,
                  fifthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 2
                  } تا سر صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } (1 ساعت مطالعه و حل تمرین)`,
                  sixthPart: `ریاضی دوازدهم (${
                    mathLastGradeTitle.value
                  }) (ریاضی 3) از صفحه ${
                    mathLastGradeStartPageNumbered + dailyMathReadingCeil * 3
                  } تا صفحه ${
                    mathLastGradeStartPageNumbered +
                    dailyMathReadingCeil * 3 +
                    dailyMathReadingFloor
                  } (1 ساعت مطالعه و حل تمرین)`,
                };
                return pagePartsObj;
              }
            }
          } else {
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 2) (45 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (ریاضی 3) (1 ساعت مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          }
        }
      } else if (
        mathLastThreeIncluded.value.trim() === "بله" &&
        mathLastTwoIncluded.value.trim() === "خیر" &&
        mathLastOneIncluded.value.trim() === "خیر"
      ) {
        let numArray = mathLastGradeStartPage.value.trim().match(/\d+/g);
        if (numArray) {
          let mathLastGradeLastPageNumbered = Number(numArray[1]);
          let mathLastGradeStartPageNumbered = Number(numArray[0]);
          let pageNumber =
            mathLastGradeLastPageNumbered - mathLastGradeStartPageNumbered;
          if (pageNumber % 6 === 0) {
            dailyMathReading = pageNumber / 6;
            let pagePartsObj = {
              firstPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } (45 دقیقه مطالعه و حل تمرین)`,
              secondPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } (45 دقیقه مطالعه و حل تمرین)`,
              thirdPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 2
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } (1 ساعت مطالعه و حل تمرین)`,
              forthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 3
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } (1 ساعت مطالعه و حل تمرین)`,
              fifthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 4
              } تا سر صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } (1 ساعت مطالعه و حل تمرین)`,
              sixthPart: `ریاضی دوازدهم (${
                mathLastGradeTitle.value
              }) (ریاضی 3) از صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 5
              } تا صفحه ${
                mathLastGradeStartPageNumbered + dailyMathReading * 6
              } (1 ساعت مطالعه و حل تمرین)`,
            };
            return pagePartsObj;
          } else {
            let dailyMathReadingFloor = Math.floor(pageNumber / 6);
            let dailyMathReadingCeil = Math.ceil(pageNumber / 6);
            if (
              dailyMathReadingFloor * 5 + dailyMathReadingCeil ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 5 + 1
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 5 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 4 + dailyMathReadingCeil * 2 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 4
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 4 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 3 + dailyMathReadingCeil * 3 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 2
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 3 +
                  dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor * 2 + dailyMathReadingCeil * 4 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 3
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor * 2 +
                  dailyMathReadingCeil * 4
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            } else if (
              dailyMathReadingFloor + dailyMathReadingCeil * 5 ===
              pageNumber
            ) {
              let pagePartsObj = {
                firstPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${mathLastGradeStartPageNumbered} تا سر صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } (45 دقیقه مطالعه و حل تمرین)`,
                secondPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered + dailyMathReadingFloor
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } (45 دقیقه مطالعه و حل تمرین)`,
                thirdPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } (1 ساعت مطالعه و حل تمرین)`,
                forthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 2
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } (1 ساعت مطالعه و حل تمرین)`,
                fifthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 3
                } تا سر صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } (1 ساعت مطالعه و حل تمرین)`,
                sixthPart: `ریاضی دوازدهم (${
                  mathLastGradeTitle.value
                }) (ریاضی 3) از صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 4
                } تا صفحه ${
                  mathLastGradeStartPageNumbered +
                  dailyMathReadingFloor +
                  dailyMathReadingCeil * 5
                } (1 ساعت مطالعه و حل تمرین)`,
              };
              return pagePartsObj;
            }
          }
        } else {
          let pagePartsObj = {
            firstPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            secondPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (45 دقیقه مطالعه و حل تمرین)`,
            thirdPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
            forthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
            fifthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
            sixthPart: `ریاضی دوازدهم (${mathLastGradeTitle.value}) (1 ساعت مطالعه و حل تمرین)`,
          };
          return pagePartsObj;
        }
      } else {
        let pagePartsObj = {
          firstPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          secondPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          thirdPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          forthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          fifthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
          sixthPart: "لطفا اطلاعات مربوط به ریاضی دوازدهم را درست وارد کنید.",
        };
        return pagePartsObj;
      }
    }
  };

let chemistryLastGradePageCounterReturnedData =
  function chemistryLastGradePageCounter(chemistryLastGradeStartPage) {
    if (
      chemistryFirstIncluded.value.trim() === "بله" &&
      chemistrySecondIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value} و (شیمی 2) ${chemistryLast2Pages.value}`,
        secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
      };
      return pagePartsObj;
    } else if (
      chemistryFirstIncluded.value.trim() === "بله" &&
      chemistrySecondIncluded.value.trim() === "خیر"
    ) {
      let pagePartsObj = {
        firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value}`,
        secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
      };
      return pagePartsObj;
    } else if (
      chemistryFirstIncluded.value.trim() === "خیر" &&
      chemistrySecondIncluded.value.trim() === "بله"
    ) {
      let pagePartsObj = {
        firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 2) ${chemistryLast2Pages.value}`,
        secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
      };
      return pagePartsObj;
    } else if (
      chemistryFirstIncluded.value.trim() === "خیر" &&
      chemistrySecondIncluded.value.trim() === "خیر"
    ) {
      let numArray = chemistryLastGradeStartPage.trim().match(/\d+/g);
      if (numArray) {
        let chemistryLastGradeEndPageNumbered = Number(numArray[1]);
        let chemistryLastGradeStartPageNumbered = Number(numArray[0]);
        let pageNumber =
          chemistryLastGradeEndPageNumbered -
          chemistryLastGradeStartPageNumbered;
        if (pageNumber % 2 === 0) {
          let dailyChemistryReading = pageNumber / 2;
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            }`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
          let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            }`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered +
              dailyChemistryReadingFloor +
              dailyChemistryReadingCeil
            }`,
          };
          return pagePartsObj;
        }
      } else {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به شیمی دوازدهم را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به شیمی دوازدهم را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let chemistryFirstGradePageCounterReturnedData =
  function chemistryFirstGradePageCounter(chemistryFirstGradeStartPage) {
    let numArray = chemistryFirstGradeStartPage.trim().match(/\d+/g);
    if (numArray) {
      let chemistryFirstGradeEndPageNumbered = Number(numArray[1]);
      let chemistryFirstGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        chemistryFirstGradeEndPageNumbered -
        chemistryFirstGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyChemistryReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `از صفحه ${chemistryFirstGradeStartPageNumbered} تا سر صفحه ${
            chemistryFirstGradeStartPageNumbered + dailyChemistryReading
          }`,
          secondPart: `از صفحه ${
            chemistryFirstGradeStartPageNumbered + dailyChemistryReading
          } تا صفحه ${
            chemistryFirstGradeStartPageNumbered + dailyChemistryReading * 2
          }`,
        };
        return pagePartsObj;
      } else {
        let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
        let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `از صفحه ${chemistryFirstGradeStartPageNumbered} تا سر صفحه ${
            chemistryFirstGradeStartPageNumbered + dailyChemistryReadingFloor
          }`,
          secondPart: `از صفحه ${
            chemistryFirstGradeStartPageNumbered + dailyChemistryReadingFloor
          } تا صفحه ${
            chemistryFirstGradeStartPageNumbered +
            dailyChemistryReadingFloor +
            dailyChemistryReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    }
  };

let chemistrySecondGradePageCounterReturnedData =
  function chemistrySecondGradePageCounter(chemistrySecondGradeStartPage) {
    let numArray = chemistrySecondGradeStartPage.trim().match(/\d+/g);
    if (numArray) {
      let chemistrySecondGradeEndPageNumbered = Number(numArray[1]);
      let chemistrySecondGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        chemistrySecondGradeEndPageNumbered -
        chemistrySecondGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyChemistryReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `از صفحه ${chemistrySecondGradeStartPageNumbered} تا سر صفحه ${
            chemistrySecondGradeStartPageNumbered + dailyChemistryReading
          }`,
          secondPart: `از صفحه ${
            chemistrySecondGradeStartPageNumbered + dailyChemistryReading
          } تا صفحه ${
            chemistrySecondGradeStartPageNumbered + dailyChemistryReading * 2
          }`,
        };
        return pagePartsObj;
      } else {
        let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
        let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `از صفحه ${chemistrySecondGradeStartPageNumbered} تا سر صفحه ${
            chemistrySecondGradeStartPageNumbered + dailyChemistryReadingFloor
          }`,
          secondPart: `از صفحه ${
            chemistrySecondGradeStartPageNumbered + dailyChemistryReadingFloor
          } تا صفحه ${
            chemistrySecondGradeStartPageNumbered +
            dailyChemistryReadingFloor +
            dailyChemistryReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    }
  };

let chemistryLastGradeGraduatedPageCounterReturnedData =
  function chemistryLastGradeGraduatedPageCounter(chemistryLastGradeStartPage) {
    if (
      chemistryFirstIncluded.value.trim() === "بله" &&
      chemistrySecondIncluded.value.trim() === "بله"
    ) {
      let numArray = chemistryLastGradeStartPage.trim().match(/\d+/g);
      if (numArray.length === 2) {
        let chemistryLastGradeEndPageNumbered = Number(numArray[1]);
        let chemistryLastGradeStartPageNumbered = Number(numArray[0]);
        let pageNumber =
          chemistryLastGradeEndPageNumbered -
          chemistryLastGradeStartPageNumbered;
        if (pageNumber % 2 === 0) {
          let dailyChemistryReading = pageNumber / 2;
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value} و (شیمی 2) ${chemistryLast2Pages.value}`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            }`,
            thirdPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
          let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value} و (شیمی 2) ${chemistryLast2Pages.value}`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            }`,
            thirdPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered +
              dailyChemistryReadingFloor +
              dailyChemistryReadingCeil
            }`,
          };
          return pagePartsObj;
        }
      } else if (numArray.length > 2) {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value} و (شیمی 2) ${chemistryLast2Pages.value}`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
        };
        return pagePartsObj;
      } else {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value} و (شیمی 2) ${chemistryLast2Pages.value}`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else if (
      chemistryFirstIncluded.value.trim() === "بله" &&
      chemistrySecondIncluded.value.trim() === "خیر"
    ) {
      let numArray = chemistryLastGradeStartPage.trim().match(/\d+/g);
      if (numArray.length === 2) {
        let chemistryLastGradeEndPageNumbered = Number(numArray[1]);
        let chemistryLastGradeStartPageNumbered = Number(numArray[0]);
        let pageNumber =
          chemistryLastGradeEndPageNumbered -
          chemistryLastGradeStartPageNumbered;
        if (pageNumber % 2 === 0) {
          let dailyChemistryReading = pageNumber / 2;
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value}`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            }`,
            thirdPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
          let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value}`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            }`,
            thirdPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered +
              dailyChemistryReadingFloor +
              dailyChemistryReadingCeil
            }`,
          };
          return pagePartsObj;
        }
      } else if (numArray.length > 2) {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value}`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
        };
        return pagePartsObj;
      } else {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 1) ${chemistryLast1Pages.value}`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else if (
      chemistryFirstIncluded.value.trim() === "خیر" &&
      chemistrySecondIncluded.value.trim() === "بله"
    ) {
      let numArray = chemistryLastGradeStartPage.trim().match(/\d+/g);
      if (numArray.length === 2) {
        let chemistryLastGradeEndPageNumbered = Number(numArray[1]);
        let chemistryLastGradeStartPageNumbered = Number(numArray[0]);
        let pageNumber =
          chemistryLastGradeEndPageNumbered -
          chemistryLastGradeStartPageNumbered;
        if (pageNumber % 2 === 0) {
          let dailyChemistryReading = pageNumber / 2;
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 2) ${chemistryLast2Pages.value}`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            }`,
            thirdPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading * 2
            }`,
          };
          return pagePartsObj;
        } else {
          let dailyChemistryReadingFloor = Math.ceil(pageNumber / 2);
          let dailyChemistryReadingCeil = Math.floor(pageNumber / 2);
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 2) ${chemistryLast2Pages.value}`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            }`,
            thirdPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered +
              dailyChemistryReadingFloor +
              dailyChemistryReadingCeil
            }`,
          };
          return pagePartsObj;
        }
      } else if (numArray.length > 2) {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 2) ${chemistryLast2Pages.value}`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
        };
        return pagePartsObj;
      } else {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) (شیمی 2) ${chemistryLast2Pages.value}`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else if (
      chemistryFirstIncluded.value.trim() === "خیر" &&
      chemistrySecondIncluded.value.trim() === "خیر"
    ) {
      let numArray = chemistryLastGradeStartPage.trim().match(/\d+/g);
      if (numArray.length === 2) {
        let chemistryLastGradeEndPageNumbered = Number(numArray[1]);
        let chemistryLastGradeStartPageNumbered = Number(numArray[0]);
        let pageNumber =
          chemistryLastGradeEndPageNumbered -
          chemistryLastGradeStartPageNumbered;
        if (pageNumber % 3 === 0) {
          let dailyChemistryReading = pageNumber / 3;
          let pagePartsObj = {
            firstPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            }`,
            secondPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading
            } تا سر صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading * 2
            }`,
            thirdPart: `شیمی دوازدهم (${
              chemistryLastGradeTitle.value
            }) از صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading * 2
            } تا صفحه ${
              chemistryLastGradeStartPageNumbered + dailyChemistryReading * 3
            }`,
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
              firstPart: `شیمی دوازدهم (${
                chemistryLastGradeTitle.value
              }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
                chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
              }`,
              secondPart: `شیمی دوازدهم (${
                chemistryLastGradeTitle.value
              }) از صفحه ${
                chemistryLastGradeStartPageNumbered + dailyChemistryReadingFloor
              } تا سر صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor * 2 +
                1
              }`,
              thirdPart: `شیمی دوازدهم (${
                chemistryLastGradeTitle.value
              }) از صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor * 2 +
                1
              } تا صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor * 2 +
                dailyChemistryReadingCeil
              }`,
            };
            return pagePartsObj;
          } else {
            let pagePartsObj = {
              firstPart: `شیمی دوازدهم (${
                chemistryLastGradeTitle.value
              }) از صفحه ${chemistryLastGradeStartPageNumbered} تا سر صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor +
                1
              }`,
              secondPart: `شیمی دوازدهم (${
                chemistryLastGradeTitle.value
              }) از صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor +
                1
              } تا سر صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor +
                dailyChemistryReadingCeil +
                1
              }`,
              thirdPart: `شیمی دوازدهم (${
                chemistryLastGradeTitle.value
              }) از صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor +
                dailyChemistryReadingCeil +
                1
              } تا صفحه ${
                chemistryLastGradeStartPageNumbered +
                dailyChemistryReadingFloor +
                dailyChemistryReadingCeil * 2
              }`,
            };
            return pagePartsObj;
          }
        }
      } else if (numArray.length > 2) {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeStartPage}`,
        };
        return pagePartsObj;
      } else {
        let pagePartsObj = {
          firstPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
          secondPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
          thirdPart: `شیمی دوازدهم (${chemistryLastGradeTitle.value})`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به شیمی دوازدهم را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به شیمی دوازدهم را درست وارد کنید.`,
        thirdPart: `لطفا اطلاعات مربوط به شیمی دوازدهم را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let physicLastGradePageCounterReturnedData =
  function physicLastGradePageCounter(physicLastGradeStartPage) {
    let numArray = physicLastGradeStartPage.trim().match(/\d+/g);
    if (numArray) {
      let physicLastGradeLastPageNumbered = Number(numArray[1]);
      let physicLastGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        physicLastGradeLastPageNumbered - physicLastGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyPhysicReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `از صفحه ${physicLastGradeStartPageNumbered} تا سر صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading
          }`,
          secondPart: `از صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading
          } تا صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading * 2
          }`,
        };
        return pagePartsObj;
      } else {
        let dailyPhysicReadingFloor = Math.ceil(pageNumber / 2);
        let dailyPhysicReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `از صفحه ${physicLastGradeStartPageNumbered} تا سر صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReadingFloor
          }`,
          secondPart: `از صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReadingFloor
          } تا صفحه ${
            physicLastGradeStartPageNumbered +
            dailyPhysicReadingFloor +
            dailyPhysicReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    }
  };

let physicFirstGradePageCounterReturnedData =
  function physicFirstGradePageCounter(physicFirstGradeStartPage) {
    let numArray = physicFirstGradeStartPage.trim().match(/\d+/g);
    if (numArray) {
      let physicFirstGradeLastPageNumbered = Number(numArray[1]);
      let physicFirstGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        physicFirstGradeLastPageNumbered - physicFirstGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyphysicReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `از صفحه ${physicFirstGradeStartPageNumbered} تا سر صفحه ${
            physicFirstGradeStartPageNumbered + dailyphysicReading
          }`,
          secondPart: `از صفحه ${
            physicFirstGradeStartPageNumbered + dailyphysicReading
          } تا صفحه ${
            physicFirstGradeStartPageNumbered + dailyphysicReading * 2
          }`,
        };
        return pagePartsObj;
      } else {
        let dailyPhysicReadingFloor = Math.ceil(pageNumber / 2);
        let dailyPhysicReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `از صفحه ${physicFirstGradeStartPageNumbered} تا سر صفحه ${
            physicFirstGradeStartPageNumbered + dailyPhysicReadingFloor
          }`,
          secondPart: `از صفحه ${
            physicFirstGradeStartPageNumbered + dailyPhysicReadingFloor
          } تا صفحه ${
            physicFirstGradeStartPageNumbered +
            dailyPhysicReadingFloor +
            dailyPhysicReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    }
  };

let physicSecondGradePageCounterReturnedData =
  function physicSecondGradePageCounter(physicSecondGradeStartPage) {
    let numArray = physicSecondGradeStartPage.trim().match(/\d+/g);
    if (numArray) {
      let physicSecondGradeLastPageNumbered = Number(numArray[1]);
      let physicSecondGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        physicSecondGradeLastPageNumbered - physicSecondGradeStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyphysicReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `از صفحه ${physicSecondGradeStartPageNumbered} تا سر صفحه ${
            physicSecondGradeStartPageNumbered + dailyphysicReading
          }`,
          secondPart: `از صفحه ${
            physicSecondGradeStartPageNumbered + dailyphysicReading
          } تا صفحه ${
            physicSecondGradeStartPageNumbered + dailyphysicReading * 2
          }`,
        };
        return pagePartsObj;
      } else {
        let dailyPhysicReadingFloor = Math.ceil(pageNumber / 2);
        let dailyPhysicReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `از صفحه ${physicSecondGradeStartPageNumbered} تا سر صفحه ${
            physicSecondGradeStartPageNumbered + dailyPhysicReadingFloor
          }`,
          secondPart: `از صفحه ${
            physicSecondGradeStartPageNumbered + dailyPhysicReadingFloor
          } تا صفحه ${
            physicSecondGradeStartPageNumbered +
            dailyPhysicReadingFloor +
            dailyPhysicReadingCeil
          }`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    }
  };

let physicLastGradeGraduatedPageCounterReturnedData =
  function physicLastGradeGraduatedPageCounter(physicLastGradeStartPage) {
    let numArray = physicLastGradeStartPage.trim().match(/\d+/g);
    if (numArray) {
      let physicLastGradeLastPageNumbered = Number(numArray[1]);
      let physicLastGradeStartPageNumbered = Number(numArray[0]);
      let pageNumber =
        physicLastGradeLastPageNumbered - physicLastGradeStartPageNumbered;
      if (pageNumber % 3 === 0) {
        let dailyPhysicReading = pageNumber / 3;
        let pagePartsObj = {
          firstPart: `از صفحه ${physicLastGradeStartPageNumbered} تا سر صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading
          }`,
          secondPart: `از صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading
          } تا سر صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading * 2
          }`,
          thirdPart: `از صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading * 2
          } تا صفحه ${
            physicLastGradeStartPageNumbered + dailyPhysicReading * 3
          }`,
        };
        return pagePartsObj;
      } else {
        let dailyPhysicReadingCeil = Math.ceil(pageNumber / 3);
        let dailyPhysicReadingFloor = Math.floor(pageNumber / 3);
        if (
          dailyPhysicReadingFloor * 2 + dailyPhysicReadingCeil ===
          pageNumber
        ) {
          let pagePartsObj = {
            firstPart: `از صفحه ${physicLastGradeStartPageNumbered} تا سر صفحه ${
              physicLastGradeStartPageNumbered + dailyPhysicReadingFloor
            }`,
            secondPart: `از صفحه ${
              physicLastGradeStartPageNumbered + dailyPhysicReadingFloor
            } تا سر صفحه ${
              physicLastGradeStartPageNumbered + dailyPhysicReadingFloor * 2 + 1
            }`,
            thirdPart: `از صفحه ${
              physicLastGradeStartPageNumbered + dailyPhysicReadingFloor * 2 + 1
            } تا صفحه ${
              physicLastGradeStartPageNumbered +
              dailyPhysicReadingFloor * 2 +
              dailyPhysicReadingCeil
            }`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `از صفحه ${physicLastGradeStartPageNumbered} تا سر صفحه ${
              physicLastGradeStartPageNumbered + dailyPhysicReadingFloor + 1
            }`,
            secondPart: `از صفحه ${
              physicLastGradeStartPageNumbered + dailyPhysicReadingFloor + 1
            } تا سر صفحه ${
              physicLastGradeStartPageNumbered +
              dailyPhysicReadingFloor +
              dailyPhysicReadingCeil +
              1
            }`,
            thirdPart: `از صفحه ${
              physicLastGradeStartPageNumbered +
              dailyPhysicReadingFloor +
              dailyPhysicReadingCeil +
              1
            } تا صفحه ${
              physicLastGradeStartPageNumbered +
              dailyPhysicReadingFloor +
              dailyPhysicReadingCeil * 2
            }`,
          };
          return pagePartsObj;
        }
      }
    } else {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
        thirdPart: ``,
      };
      return pagePartsObj;
    }
  };

let geologyStudentPageCounterReturnedData = function geologyStudentPageCounter(
  geologyStartPage
) {
  if (geologyIncluded.value.trim() === "بله" && score.value.trim() < 5000) {
    let pagePartsObj = {
      firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyStartPage} (1 ساعت مطالعه)`,
    };
    return pagePartsObj;
  } else if (
    geologyIncluded.value.trim() === "بله" &&
    score.value.trim() >= 5000 &&
    score.value.trim() < 7000
  ) {
    let pagePartsObj = {
      firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyStartPage} (1:30 ساعت مطالعه)`,
    };
    return pagePartsObj;
  } else if (
    geologyIncluded.value.trim() === "بله" &&
    score.value.trim() >= 7000
  ) {
    let numArray = geologyStartPage.trim().match(/\d+/g);
    if (numArray) {
      let geologyLastPageNumbered = Number(numArray[1]);
      let geologyStartPageNumbered = Number(numArray[0]);
      let pageNumber = geologyLastPageNumbered - geologyStartPageNumbered;
      if (pageNumber % 2 === 0) {
        let dailyGeologyReading = pageNumber / 2;
        let pagePartsObj = {
          firstPart: `زمین شناسی (${
            geologyTitle.value
          }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
            geologyStartPageNumbered + dailyGeologyReading
          } (45 دقیقه مطالعه)`,
          secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailyGeologyReading
          } تا صفحه ${
            geologyStartPageNumbered + dailyGeologyReading * 2
          } (45 دقیقه مطالعه)`,
        };
        return pagePartsObj;
      } else {
        let dailyGeologyReadingFloor = Math.ceil(pageNumber / 2);
        let dailyGeologyReadingCeil = Math.floor(pageNumber / 2);
        let pagePartsObj = {
          firstPart: `زمین شناسی (${
            geologyTitle.value
          }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
            geologyStartPageNumbered + dailyGeologyReadingFloor
          } (45 دقیقه مطالعه)`,
          secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailyGeologyReadingFloor
          } تا صفحه ${
            geologyStartPageNumbered +
            dailyGeologyReadingFloor +
            dailyGeologyReadingCeil
          } (45 دقیقه مطالعه)`,
        };
        return pagePartsObj;
      }
    } else {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) (45 دقیقه مطالعه)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) (45 دقیقه مطالعه)`,
      };
      return pagePartsObj;
    }
  } else if (geologyIncluded.value.trim() === "خیر") {
    let pagePartsObj = {
      firstPart: ``,
      secondPart: ``,
    };
    return pagePartsObj;
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let geologyStudentTestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله") {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1 ساعت حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let geologyStudentFirstWeek6000TestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله") {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (15 دقیقه حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let geologyStudentFirstWeek7000TestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله") {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (15 دقیقه حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let geologyPageCounterReturnedData = function geologyPageCounter(
  geologyStartPage
) {
  if (geologyIncluded.value.trim() === "بله" && score.value.trim() < 5000) {
    let numArray = geologyStartPage.trim().match(/\d+/g);
    if (numArray) {
      let geologyLastPageNumbered = Number(numArray[1]);
      let geologyStartPageNumbered = Number(numArray[0]);
      let pageNumber = geologyLastPageNumbered - geologyStartPageNumbered;
      if (pageNumber % 3 === 0) {
        let dailygeologyReading = pageNumber / 3;
        let pagePartsObj = {
          firstPart: `زمین شناسی (${
            geologyTitle.value
          }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } (1:15 ساعت مطالعه)`,
          secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } (1:15 ساعت مطالعه)`,
          thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } تا صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 3
          } (1 ساعت مطالعه)`,
        };
        return pagePartsObj;
      } else {
        let dailyGeologyReadingCeil = Math.ceil(pageNumber / 3);
        let dailyGeologyReadingFloor = Math.floor(pageNumber / 3);
        if (
          dailyGeologyReadingFloor * 2 + dailyGeologyReadingCeil ===
          pageNumber
        ) {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } (1:15 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } (1:15 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor * 2 +
              dailyGeologyReadingCeil
            } (1 ساعت مطالعه)`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } (1:15 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } تا سر صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } (1:15 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil * 2
            } (1 ساعت مطالعه)`,
          };
          return pagePartsObj;
        }
      }
    } else {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) (1:15 ساعت مطالعه)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) (1:15 ساعت مطالعه)`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) (1 ساعت مطالعه)`,
      };
      return pagePartsObj;
    }
  } else if (
    geologyIncluded.value.trim() === "بله" &&
    score.value.trim() >= 5000 &&
    score.value.trim() < 6000
  ) {
    let numArray = geologyStartPage.trim().match(/\d+/g);
    if (numArray) {
      let geologyLastPageNumbered = Number(numArray[1]);
      let geologyStartPageNumbered = Number(numArray[0]);
      let pageNumber = geologyLastPageNumbered - geologyStartPageNumbered;
      if (pageNumber % 3 === 0) {
        let dailygeologyReading = pageNumber / 3;
        let pagePartsObj = {
          firstPart: `زمین شناسی (${
            geologyTitle.value
          }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } (1:30 ساعت مطالعه)`,
          secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } (1:15 ساعت مطالعه)`,
          thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } تا صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 3
          } (1:15 ساعت مطالعه)`,
        };
        return pagePartsObj;
      } else {
        let dailyGeologyReadingCeil = Math.ceil(pageNumber / 3);
        let dailyGeologyReadingFloor = Math.floor(pageNumber / 3);
        if (
          dailyGeologyReadingFloor * 2 + dailyGeologyReadingCeil ===
          pageNumber
        ) {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } (1:30 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } (1:15 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor * 2 +
              dailyGeologyReadingCeil
            } (1:15 ساعت مطالعه)`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } (1:30 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } تا سر صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } (1:15 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil * 2
            } (1:15 ساعت مطالعه)`,
          };
          return pagePartsObj;
        }
      }
    } else {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) (1:30 ساعت مطالعه)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) (1:15 ساعت مطالعه)`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) (1:15 ساعت مطالعه)`,
      };
      return pagePartsObj;
    }
  } else if (
    geologyIncluded.value.trim() === "بله" &&
    score.value.trim() >= 6000 &&
    score.value.trim() < 7000
  ) {
    let numArray = geologyStartPage.trim().match(/\d+/g);
    if (numArray) {
      let geologyLastPageNumbered = Number(numArray[1]);
      let geologyStartPageNumbered = Number(numArray[0]);
      let pageNumber = geologyLastPageNumbered - geologyStartPageNumbered;
      if (pageNumber % 3 === 0) {
        let dailygeologyReading = pageNumber / 3;
        let pagePartsObj = {
          firstPart: `زمین شناسی (${
            geologyTitle.value
          }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } (1:30 ساعت مطالعه)`,
          secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } (1:30 ساعت مطالعه)`,
          thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } تا صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 3
          } (1:30 ساعت مطالعه)`,
        };
        return pagePartsObj;
      } else {
        let dailyGeologyReadingCeil = Math.ceil(pageNumber / 3);
        let dailyGeologyReadingFloor = Math.floor(pageNumber / 3);
        if (
          dailyGeologyReadingFloor * 2 + dailyGeologyReadingCeil ===
          pageNumber
        ) {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } (1:30 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } (1:30 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor * 2 +
              dailyGeologyReadingCeil
            } (1:30 ساعت مطالعه)`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } (1:30 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } تا سر صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } (1:30 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil * 2
            } (1:30 ساعت مطالعه)`,
          };
          return pagePartsObj;
        }
      }
    } else {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) (1:30 ساعت مطالعه)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) (1:30 ساعت مطالعه)`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) (1:30 ساعت مطالعه)`,
      };
      return pagePartsObj;
    }
  } else if (
    geologyIncluded.value.trim() === "بله" &&
    score.value.trim() >= 7000
  ) {
    let numArray = geologyStartPage.trim().match(/\d+/g);
    if (numArray) {
      let geologyLastPageNumbered = Number(numArray[1]);
      let geologyStartPageNumbered = Number(numArray[0]);
      let pageNumber = geologyLastPageNumbered - geologyStartPageNumbered;
      if (pageNumber % 3 === 0) {
        let dailygeologyReading = pageNumber / 3;
        let pagePartsObj = {
          firstPart: `زمین شناسی (${
            geologyTitle.value
          }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } (1:45 ساعت مطالعه)`,
          secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading
          } تا سر صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } (1:45 ساعت مطالعه)`,
          thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 2
          } تا صفحه ${
            geologyStartPageNumbered + dailygeologyReading * 3
          } (1:30 ساعت مطالعه)`,
        };
        return pagePartsObj;
      } else {
        let dailyGeologyReadingCeil = Math.ceil(pageNumber / 3);
        let dailyGeologyReadingFloor = Math.floor(pageNumber / 3);
        if (
          dailyGeologyReadingFloor * 2 + dailyGeologyReadingCeil ===
          pageNumber
        ) {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } (1:45 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor
            } تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } (1:45 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor * 2 + 1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor * 2 +
              dailyGeologyReadingCeil
            } (1:30 ساعت مطالعه)`,
          };
          return pagePartsObj;
        } else {
          let pagePartsObj = {
            firstPart: `زمین شناسی (${
              geologyTitle.value
            }) از صفحه ${geologyStartPageNumbered} تا سر صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } (1:45 ساعت مطالعه)`,
            secondPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered + dailyGeologyReadingFloor + 1
            } تا سر صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } (1:45 ساعت مطالعه)`,
            thirdPart: `زمین شناسی (${geologyTitle.value}) از صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil +
              1
            } تا صفحه ${
              geologyStartPageNumbered +
              dailyGeologyReadingFloor +
              dailyGeologyReadingCeil * 2
            } (1:30 ساعت مطالعه)`,
          };
          return pagePartsObj;
        }
      }
    } else {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) (1:45 ساعت مطالعه)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) (1:45 ساعت مطالعه)`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) (1:30 ساعت مطالعه)`,
      };
      return pagePartsObj;
    }
  } else if (geologyIncluded.value.trim() === "خیر") {
    let pagePartsObj = {
      firstPart: ``,
      secondPart: ``,
      thirdPart: ``,
    };
    return pagePartsObj;
  } else {
    let pagePartsObj = {
      firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      secondPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      thirdPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
    };
    return pagePartsObj;
  }
};

let geologyGratuatedTestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله" && score.value.trim() < 7000) {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (30 دقیقه حل تست)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (30 دقیقه حل تست)`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (30 دقیقه حل تست)`,
        forthPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (30 دقیقه حل تست)`,
        fifthPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (30 دقیقه حل تست)`,
      };
      return pagePartsObj;
    } else if (
      geologyIncluded.value.trim() === "بله" &&
      score.value.trim() >= 7000
    ) {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
        thirdPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
        forthPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
        fifthPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
        thirdPart: ``,
        forthPart: ``,
        fifthPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        thirdPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        forthPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        fifthPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let geologyGratuatedFirstWeek4000TestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله") {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let geologyGratuatedFirstWeek5000TestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله") {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1:30 ساعت حل تست)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (45 دقیقه حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let geologyGratuatedFirstWeek6000TestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله") {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1:30 ساعت حل تست)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1:15 ساعت حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

let geologyGratuatedFirstWeek7000TestCounterReturnedData =
  function geologyStudentTestCounter() {
    if (geologyIncluded.value.trim() === "بله") {
      let pagePartsObj = {
        firstPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1:45 ساعت حل تست)`,
        secondPart: `زمین شناسی (${geologyTitle.value}) ${geologyModule.value} (1:30 ساعت حل تست)`,
      };
      return pagePartsObj;
    } else if (geologyIncluded.value.trim() === "خیر") {
      let pagePartsObj = {
        firstPart: ``,
        secondPart: ``,
      };
      return pagePartsObj;
    } else {
      let pagePartsObj = {
        firstPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
        secondPart: `لطفا اطلاعات مربوط به زمین شناسی را درست وارد کنید.`,
      };
      return pagePartsObj;
    }
  };

function panjShanbe14000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "8:15";
  } else {
    return "7:15";
  }
}

function chaharShanbe24000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "5:30";
  } else {
    return "4:30";
  }
}

function panjShanbe15000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "9:45";
  } else {
    return "8:15";
  }
}

function chaharShanbe25000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "6";
  } else {
    return "5";
  }
}

function panjShanbe16000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12:30";
  } else {
    return "11";
  }
}

function jome16000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11:45";
  } else {
    return "11:30";
  }
}

function chaharShanbe26000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "7:30";
  } else {
    return "6:30";
  }
}

function panjShanbe17000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:45";
  } else {
    return "13";
  }
}

function jome17000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "14";
  } else {
    return "13";
  }
}

function chaharShanbe27000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "8:30";
  } else {
    return "7:30";
  }
}

function shanbe1Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "8:30";
  } else {
    return "7:15";
  }
}

function yekshanbe1Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "9";
  } else {
    return "7:45";
  }
}

function seshanbe1Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "9";
  } else {
    return "8";
  }
}

function chaharshanbe1Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "9";
  } else {
    return "8:15";
  }
}

function panjshanbe1Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "9";
  } else {
    return "8:15";
  }
}

function shanbe2Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "9:30";
  }
}

function yekshanbe2Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "9:30";
  }
}

function doshanbe2Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "9:30";
  }
}

function seshanbe2Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "9:30";
  }
}

function chaharshanbe2Gratuated4000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "9:30";
  }
}

function shanbe1Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10:30";
  } else {
    return "9";
  }
}

function yekshanbe1Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10:30";
  } else {
    return "9:15";
  }
}

function seshanbe1Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "8:45";
  }
}

function chaharshanbe1Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "8:30";
  }
}

function panjshanbe1Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "10";
  } else {
    return "9:15";
  }
}

function shanbe2Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11";
  } else {
    return "10:30";
  }
}

function yekshanbe2Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11";
  } else {
    return "10:30";
  }
}

function doshanbe2Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11";
  } else {
    return "10:30";
  }
}

function seshanbe2Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11";
  } else {
    return "10:30";
  }
}

function chaharshanbe2Gratuated5000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11";
  } else {
    return "10:30";
  }
}

function shanbe1Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11:45";
  } else {
    return "10:15";
  }
}

function yekshanbe1Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11:45";
  } else {
    return "10:15";
  }
}

function seshanbe1Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11:45";
  } else {
    return "10:15";
  }
}

function chaharshanbe1Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11:45";
  } else {
    return "10:15";
  }
}

function panjshanbe1Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "11:45";
  } else {
    return "10:30";
  }
}

function shanbe2Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12";
  } else {
    return "11:30";
  }
}

function yekshanbe2Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12";
  } else {
    return "11:30";
  }
}

function doshanbe2Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12";
  } else {
    return "11:30";
  }
}

function seshanbe2Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12";
  } else {
    return "11:30";
  }
}

function chaharshanbe2Gratuated6000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12";
  } else {
    return "11:30";
  }
}

function shanbe1Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:30";
  } else {
    return "11:45";
  }
}

function yekshanbe1Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:30";
  } else {
    return "11:45";
  }
}

function seshanbe1Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12:45";
  } else {
    return "11:15";
  }
}

function chaharshanbe1Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12:45";
  } else {
    return "11";
  }
}

function panjshanbe1Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "12:45";
  } else {
    return "11:15";
  }
}

function shanbe2Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:15";
  } else {
    return "12:30";
  }
}

function yekshanbe2Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:15";
  } else {
    return "12:30";
  }
}

function doshanbe2Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:15";
  } else {
    return "12:30";
  }
}

function seshanbe2Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:15";
  } else {
    return "12:30";
  }
}

function chaharshanbe2Gratuated7000Total() {
  if (geologyIncluded.value.trim() === "بله") {
    return "13:15";
  } else {
    return "12:30";
  }
}

function generateTable() {
  if (isStudent.value.trim() === "بله" && score.value.trim() < 5000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeStartPage.value} (1:15 ساعت مطالعه)`,
      totalTime: `3:45`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (1 ساعت مطالعه)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeStartPage.value} (1 ساعت مطالعه و حل تمرین)`,
      totalTime: `3:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (1 ساعت مطالعه)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      totalTime: `3:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (1 ساعت مطالعه)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeStartPage.value} (1:15 ساعت مطالعه)`,
      totalTime: `3:45`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeStartPage.value} (1 ساعت مطالعه و حل تمرین)`,
      totalTime: `3:30`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (1:30 ساعت مطالعه)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (1:45 ساعت مطالعه)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      geology: `${
        geologyStudentPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      totalTime: `${panjShanbe14000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (1:30 ساعت مطالعه)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (1:45 ساعت مطالعه)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      revise: `مرور و جمع بندی مطالب (1:30 ساعت) `,
      totalTime: `7:45`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (1 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (45 دقیقه حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (30 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (30 دقیقه حل تست)`,
      totalTime: `4:15 دقیقه`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (45 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (30 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (30 دقیقه حل تست)`,
      totalTime: `4:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (1 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:30 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `4:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:30 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (15 دقیقه حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (15 دقیقه حل تست)`,
      geology: `${geologyStudentTestCounterReturnedData().firstPart}`,
      totalTime: `${chaharShanbe24000Total()}`,
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
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.physicFirstGrade +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.physicSecondGrade +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geology +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.physicLastGrade +
      "<br>" +
      panjShanbe1.mathBaseGrade +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.biologyLastGrade +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.physicLastGrade +
      "<br>" +
      jome1.mathLastGrade +
      "<br>" +
      jome1.revise +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
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
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.physicFirstGrade +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.physicSecondGrade +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geology +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.physicLastGrade +
        "<br>" +
        panjShanbe1.mathBaseGrade +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biologyLastGrade +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.physicLastGrade +
        "<br>" +
        jome1.mathLastGrade +
        "<br>" +
        jome1.revise +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
        "<br>" +
        chaharShanbe2.geology +
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
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeStartPage.value} (1:30 ساعت مطالعه)`,
      totalTime: `4:30`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (1:15 ساعت مطالعه)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeStartPage.value} (1:15 ساعت مطالعه و حل تمرین)`,
      totalTime: `4:30`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      totalTime: `4:30`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (1:15 ساعت مطالعه)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeStartPage.value} (1:30 ساعت مطالعه)`,
      totalTime: `4:45`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeStartPage.value} (1:15 ساعت مطالعه و حل تمرین)`,
      totalTime: `4:30`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (1:30 ساعت مطالعه)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (2 ساعت مطالعه)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      geology: `${
        geologyStudentPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      totalTime: `${panjShanbe15000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (1:30 ساعت مطالعه)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (2 ساعت مطالعه)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      revise: `مرور و جمع بندی مطالب (1:30 ساعت) `,
      totalTime: `8:30`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (1:15 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (1 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (45 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:15 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (1 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (45 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (1:15 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:45 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      totalTime: `5:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:30 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      geology: `${geologyStudentTestCounterReturnedData().firstPart}`,
      totalTime: `${chaharShanbe25000Total()}`,
    };
    let panjShanbe2 = {
      revising: `(7:30 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `7:30`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };
    shanbe1day.innerHTML =
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.physicFirstGrade +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.physicSecondGrade +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geology +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.physicLastGrade +
      "<br>" +
      panjShanbe1.mathBaseGrade +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.biologyLastGrade +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.physicLastGrade +
      "<br>" +
      jome1.mathLastGrade +
      "<br>" +
      jome1.revise +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
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
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.physicFirstGrade +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.physicSecondGrade +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geology +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.physicLastGrade +
        "<br>" +
        panjShanbe1.mathBaseGrade +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biologyLastGrade +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.physicLastGrade +
        "<br>" +
        jome1.mathLastGrade +
        "<br>" +
        jome1.revise +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
        "<br>" +
        chaharShanbe2.geology +
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
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (1 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (30 دقیقه حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeStartPage.value} (1:30 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (15 دقیقه حل تست)`,
      totalTime: `5:15`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (1:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (15 دقیقه حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeStartPage.value} (1:15 ساعت مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (15 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (15 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (15 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (1:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (15 دقیقه حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeStartPage.value} (1:30 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `5:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().thirdPart
      } (15 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeStartPage.value} (1:15 ساعت مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (15 دقیقه حل تست)`,
      totalTime: `5`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (1:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (2 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (30 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      geology: `${
        geologyStudentPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      totalTime: `${panjShanbe16000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (1:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (2 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      geologyTest: `${
        geologyStudentFirstWeek6000TestCounterReturnedData().firstPart
      }`,
      revise: `مرور و جمع بندی مطالب (2 ساعت) `,
      totalTime: `${jome16000Total()}`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (1:30 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (1:15 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (1 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:30 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (1:15 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (1 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (1:30 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:15 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (1 ساعت حل تست)`,
      totalTime: `6:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (2 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:15 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (1 ساعت حل تست)`,
      totalTime: `6:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:45 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:15 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (1 ساعت حل تست)`,
      geology: `${geologyStudentTestCounterReturnedData().firstPart}`,
      totalTime: `${chaharShanbe26000Total()}`,
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
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.biologyBaseGradeTest +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.chemistryFirstGradeTest +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.biologyLastGradeTest +
      "<br>" +
      yekShanbe1.physicFirstGrade +
      "<br>" +
      yekShanbe1.physicFirstGradeTest +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.biologyBaseGradeTest +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGradeTest +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.biologyLastGradeTest +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.chemistrySecondGradeTest +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.biologyBaseGradeTest +
      "<br>" +
      chaharShanbe1.physicSecondGrade +
      "<br>" +
      chaharShanbe1.physicSecondGradeTest +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geology +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.biologyLastGradeTest +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGradeTest +
      "<br>" +
      panjShanbe1.physicLastGrade +
      "<br>" +
      panjShanbe1.physicLastGradeTest +
      "<br>" +
      panjShanbe1.mathBaseGrade +
      "<br>" +
      panjShanbe1.mathBaseGradeTest +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.mathLastGradeTest +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.geologyTest +
      "<br>" +
      jome1.biologyLastGrade +
      "<br>" +
      jome1.biologyLastGradeTest +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.chemistryLastGradeTest +
      "<br>" +
      jome1.physicLastGrade +
      "<br>" +
      jome1.physicLastGradeTest +
      "<br>" +
      jome1.mathLastGrade +
      "<br>" +
      jome1.mathLastGradeTest +
      "<br>" +
      jome1.revise +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
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
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.biologyBaseGradeTest +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.chemistryFirstGradeTest +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.biologyLastGradeTest +
        "<br>" +
        yekShanbe1.physicFirstGrade +
        "<br>" +
        yekShanbe1.physicFirstGradeTest +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.biologyBaseGradeTest +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGradeTest +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.biologyLastGradeTest +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.chemistrySecondGradeTest +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.biologyBaseGradeTest +
        "<br>" +
        chaharShanbe1.physicSecondGrade +
        "<br>" +
        chaharShanbe1.physicSecondGradeTest +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geology +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.biologyLastGradeTest +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGradeTest +
        "<br>" +
        panjShanbe1.physicLastGrade +
        "<br>" +
        panjShanbe1.physicLastGradeTest +
        "<br>" +
        panjShanbe1.mathBaseGrade +
        "<br>" +
        panjShanbe1.mathBaseGradeTest +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.mathLastGradeTest +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.geologyTest +
        "<br>" +
        jome1.biologyLastGrade +
        "<br>" +
        jome1.biologyLastGradeTest +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.chemistryLastGradeTest +
        "<br>" +
        jome1.physicLastGrade +
        "<br>" +
        jome1.physicLastGradeTest +
        "<br>" +
        jome1.mathLastGrade +
        "<br>" +
        jome1.mathLastGradeTest +
        "<br>" +
        jome1.revise +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
        "<br>" +
        chaharShanbe2.geology +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (isStudent.value.trim() === "بله" && score.value.trim() >= 7000) {
    let shanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (1:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (30 دقیقه حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeStartPage.value} (1:45 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let yekShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (1:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (30 دقیقه حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeStartPage.value} (1:30 ساعت مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let doShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (1:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (30 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (30 دقیقه حل تست)`,
      totalTime: `5:45`,
    };
    let seShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (1:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (30 دقیقه حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeStartPage.value} (1:45 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (45 دقیقه حل تست)`,
      totalTime: `6:30`,
    };
    let chaharShanbe1 = {
      dailyReading: "روزخوانی (1:15 ساعت)",
      PreReading: "پیش خوانی (45 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (1:30 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().thirdPart
      } (30 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeStartPage.value} (1:30 ساعت مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `6`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (1:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (2:15 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradePageCounterReturnedData().secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().firstPart
      } (2 ساعت مطالعه و حل تمرین)`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      geology: `${
        geologyStudentPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      totalTime: `${panjShanbe17000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (1:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradePageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (2:15 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradePageCounterReturnedData(physicLastGradeStartPage.value)
          .secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradePageCounterReturnedData().secondPart
      } (2 ساعت مطالعه و حل تمرین)`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      geology: `${
        geologyStudentPageCounterReturnedData(geologyStartPage.value).secondPart
      }`,
      geologyTest: `${
        geologyStudentFirstWeek7000TestCounterReturnedData().firstPart
      }`,
      revise: `مرور و جمع بندی مطالب (2 ساعت) `,
      totalTime: `${jome17000Total()}`,
    };
    let shanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (1:45 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (1:30 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (1:15 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let yekShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:45 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (1:30 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (1:15 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let doShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (1:45 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:30 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1:15 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7:15`,
    };
    let seShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (2:15 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:30 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1:15 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (1:15 ساعت حل تست)`,
      totalTime: `7:45`,
    };
    let chaharShanbe2 = {
      dailyReading: "روزخوانی (1 ساعت)",
      PreReading: "پیش خوانی (30 دقیقه)",
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (2 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:30 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1:15 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (1:15 ساعت حل تست)`,
      geology: `${geologyStudentTestCounterReturnedData().firstPart}`,
      totalTime: `${chaharShanbe27000Total()}`,
    };
    let panjShanbe2 = {
      revising: `(10 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `10`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };
    shanbe1day.innerHTML =
      shanbe1.dailyReading +
      "<br>" +
      shanbe1.PreReading +
      "<br>" +
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.biologyBaseGradeTest +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.chemistryFirstGradeTest +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.dailyReading +
      "<br>" +
      yekShanbe1.PreReading +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.biologyLastGradeTest +
      "<br>" +
      yekShanbe1.physicFirstGrade +
      "<br>" +
      yekShanbe1.physicFirstGradeTest +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.dailyReading +
      "<br>" +
      doShanbe1.PreReading +
      "<br>" +
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.biologyBaseGradeTest +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGradeTest +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.dailyReading +
      "<br>" +
      seShanbe1.PreReading +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.biologyLastGradeTest +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.chemistrySecondGradeTest +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.dailyReading +
      "<br>" +
      chaharShanbe1.PreReading +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.biologyBaseGradeTest +
      "<br>" +
      chaharShanbe1.physicSecondGrade +
      "<br>" +
      chaharShanbe1.physicSecondGradeTest +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geology +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.biologyLastGradeTest +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGradeTest +
      "<br>" +
      panjShanbe1.physicLastGrade +
      "<br>" +
      panjShanbe1.physicLastGradeTest +
      "<br>" +
      panjShanbe1.mathBaseGrade +
      "<br>" +
      panjShanbe1.mathBaseGradeTest +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.mathLastGradeTest +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.geology +
      "<br>" +
      jome1.geologyTest +
      "<br>" +
      jome1.biologyLastGrade +
      "<br>" +
      jome1.biologyLastGradeTest +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.chemistryLastGradeTest +
      "<br>" +
      jome1.physicLastGrade +
      "<br>" +
      jome1.physicLastGradeTest +
      "<br>" +
      jome1.mathLastGrade +
      "<br>" +
      jome1.mathLastGradeTest +
      "<br>" +
      jome1.revise +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.dailyReading +
      "<br>" +
      shanbe2.PreReading +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.dailyReading +
      "<br>" +
      yekShanbe2.PreReading +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.dailyReading +
      "<br>" +
      doShanbe2.PreReading +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.dailyReading +
      "<br>" +
      seShanbe2.PreReading +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.dailyReading +
      "<br>" +
      chaharShanbe2.PreReading +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
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
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.biologyBaseGradeTest +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.chemistryFirstGradeTest +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.dailyReading +
        "<br>" +
        yekShanbe1.PreReading +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.biologyLastGradeTest +
        "<br>" +
        yekShanbe1.physicFirstGrade +
        "<br>" +
        yekShanbe1.physicFirstGradeTest +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.dailyReading +
        "<br>" +
        doShanbe1.PreReading +
        "<br>" +
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.biologyBaseGradeTest +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGradeTest +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.dailyReading +
        "<br>" +
        seShanbe1.PreReading +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.biologyLastGradeTest +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.chemistrySecondGradeTest +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.dailyReading +
        "<br>" +
        chaharShanbe1.PreReading +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.biologyBaseGradeTest +
        "<br>" +
        chaharShanbe1.physicSecondGrade +
        "<br>" +
        chaharShanbe1.physicSecondGradeTest +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geology +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.biologyLastGradeTest +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGradeTest +
        "<br>" +
        panjShanbe1.physicLastGrade +
        "<br>" +
        panjShanbe1.physicLastGradeTest +
        "<br>" +
        panjShanbe1.mathBaseGrade +
        "<br>" +
        panjShanbe1.mathBaseGradeTest +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.mathLastGradeTest +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.geology +
        "<br>" +
        jome1.geologyTest +
        "<br>" +
        jome1.biologyLastGrade +
        "<br>" +
        jome1.biologyLastGradeTest +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.chemistryLastGradeTest +
        "<br>" +
        jome1.physicLastGrade +
        "<br>" +
        jome1.physicLastGradeTest +
        "<br>" +
        jome1.mathLastGrade +
        "<br>" +
        jome1.mathLastGradeTest +
        "<br>" +
        jome1.revise +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.dailyReading +
        "<br>" +
        shanbe2.PreReading +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.dailyReading +
        "<br>" +
        yekShanbe2.PreReading +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.dailyReading +
        "<br>" +
        doShanbe2.PreReading +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.dailyReading +
        "<br>" +
        seShanbe2.PreReading +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.dailyReading +
        "<br>" +
        chaharShanbe2.PreReading +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
        "<br>" +
        chaharShanbe2.geology +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (isStudent.value.trim() === "خیر" && score.value.trim() < 5000) {
    let shanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (2 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (30 دقیقه حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).firstPart
      } (1 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (15 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).firstPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().firstPart
      } (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().firstPart
      }`,
      totalTime: `${shanbe1Gratuated4000Total()}`,
    };
    let yekShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (2:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).firstPart
      } (1 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (15 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).secondPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().secondPart
      } (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().secondPart
      }`,
      totalTime: `${yekshanbe1Gratuated4000Total()}`,
    };
    let doShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (2 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (30 دقیقه حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).secondPart
      } (1:15 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (30 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (30 دقیقه حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().thirdPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().thirdPart
      } (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().thirdPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `8:30`,
    };
    let seShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (2:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).secondPart
      } (1:15 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (30 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (15 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).thirdPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().forthPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().forthPart
      } (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().forthPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `${seshanbe1Gratuated4000Total()}`,
    };
    let chaharShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (2 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().thirdPart
      } (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (2:15 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (45 دقیقه حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().fifthPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek4000TestCounterReturnedData().firstPart
      }`,
      totalTime: `${chaharshanbe1Gratuated4000Total()}`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (2:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (2:15 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (45 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).secondPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().sixthPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek4000TestCounterReturnedData().secondPart
      }`,
      totalTime: `${panjshanbe1Gratuated4000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (2:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).thirdPart
      } (2 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .secondPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (15 دقیقه حل تست)`,
      revising: `(2 ساعت مرور و جمع بندی مطالب)`,
      totalTime: `9`,
    };
    let shanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (3 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (2:30 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (2 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (2 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().firstPart}`,
      totalTime: `${shanbe2Gratuated4000Total()}`,
    };
    let yekShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (2:30 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (2 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (2 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().secondPart}`,
      totalTime: `${yekshanbe2Gratuated4000Total()}`,
    };
    let doShanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (3 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (2:30 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().thirdPart}`,
      totalTime: `${doshanbe2Gratuated4000Total()}`,
    };
    let seShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (2:30 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().forthPart}`,
      totalTime: `${seshanbe2Gratuated4000Total()}`,
    };
    let chaharShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (2:30 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().fifthPart}`,
      totalTime: `${chaharshanbe2Gratuated4000Total()}`,
    };
    let panjShanbe2 = {
      revising: `(8 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `8`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };
    shanbe1day.innerHTML =
      shanbe1.geology +
      "<br>" +
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.biologyBaseGradeTest +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.chemistryFirstGradeTest +
      "<br>" +
      shanbe1.physicLastGrade +
      "<br>" +
      shanbe1.physicLastGradeTest +
      "<br>" +
      shanbe1.mathBaseGrade +
      "<br>" +
      shanbe1.mathBaseGradeTest +
      "<br>" +
      shanbe1.mathLastGrade +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.biologyLastGradeTest +
      "<br>" +
      yekShanbe1.chemistrySecondGrade +
      "<br>" +
      yekShanbe1.chemistrySecondGradeTest +
      "<br>" +
      yekShanbe1.physicLastGrade +
      "<br>" +
      yekShanbe1.physicLastGradeTest +
      "<br>" +
      yekShanbe1.mathBaseGrade +
      "<br>" +
      yekShanbe1.mathBaseGradeTest +
      "<br>" +
      yekShanbe1.mathLastGrade +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.biologyBaseGradeTest +
      "<br>" +
      doShanbe1.chemistryFirstGrade +
      "<br>" +
      doShanbe1.chemistryFirstGradeTest +
      "<br>" +
      doShanbe1.physicLastGrade +
      "<br>" +
      doShanbe1.physicLastGradeTest +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGradeTest +
      "<br>" +
      doShanbe1.mathLastGrade +
      "<br>" +
      doShanbe1.mathLastGradeTest +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.geology +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.biologyLastGradeTest +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.chemistrySecondGradeTest +
      "<br>" +
      seShanbe1.physicSecondGrade +
      "<br>" +
      seShanbe1.physicSecondGradeTest +
      "<br>" +
      seShanbe1.mathBaseGrade +
      "<br>" +
      seShanbe1.mathBaseGradeTest +
      "<br>" +
      seShanbe1.mathLastGrade +
      "<br>" +
      seShanbe1.mathLastGradeTest +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.geologyTest +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.biologyBaseGradeTest +
      "<br>" +
      chaharShanbe1.chemistryLastGrade +
      "<br>" +
      chaharShanbe1.chemistryLastGradeTest +
      "<br>" +
      chaharShanbe1.physicFirstGrade +
      "<br>" +
      chaharShanbe1.physicFirstGradeTest +
      "<br>" +
      chaharShanbe1.mathLastGrade +
      "<br>" +
      chaharShanbe1.mathLastGradeTest +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geologyTest +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.biologyLastGradeTest +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGradeTest +
      "<br>" +
      panjShanbe1.physicSecondGrade +
      "<br>" +
      panjShanbe1.physicSecondGradeTest +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.mathLastGradeTest +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.biologyLastGrade +
      "<br>" +
      jome1.biologyLastGradeTest +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.chemistryLastGradeTest +
      "<br>" +
      jome1.physicFirstGrade +
      "<br>" +
      jome1.physicFirstGradeTest +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.geology +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.geology +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.geology +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.geology +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.geology +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
      "<br>" +
      chaharShanbe2.totalTime;
    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;
    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.geology +
        "<br>" +
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.biologyBaseGradeTest +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.chemistryFirstGradeTest +
        "<br>" +
        shanbe1.physicLastGrade +
        "<br>" +
        shanbe1.physicLastGradeTest +
        "<br>" +
        shanbe1.mathBaseGrade +
        "<br>" +
        shanbe1.mathBaseGradeTest +
        "<br>" +
        shanbe1.mathLastGrade +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.biologyLastGradeTest +
        "<br>" +
        yekShanbe1.chemistrySecondGrade +
        "<br>" +
        yekShanbe1.chemistrySecondGradeTest +
        "<br>" +
        yekShanbe1.physicLastGrade +
        "<br>" +
        yekShanbe1.physicLastGradeTest +
        "<br>" +
        yekShanbe1.mathBaseGrade +
        "<br>" +
        yekShanbe1.mathBaseGradeTest +
        "<br>" +
        yekShanbe1.mathLastGrade +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.biologyBaseGradeTest +
        "<br>" +
        doShanbe1.chemistryFirstGrade +
        "<br>" +
        doShanbe1.chemistryFirstGradeTest +
        "<br>" +
        doShanbe1.physicLastGrade +
        "<br>" +
        doShanbe1.physicLastGradeTest +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGradeTest +
        "<br>" +
        doShanbe1.mathLastGrade +
        "<br>" +
        doShanbe1.mathLastGradeTest +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.geology +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.biologyLastGradeTest +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.chemistrySecondGradeTest +
        "<br>" +
        seShanbe1.physicSecondGrade +
        "<br>" +
        seShanbe1.physicSecondGradeTest +
        "<br>" +
        seShanbe1.mathBaseGrade +
        "<br>" +
        seShanbe1.mathBaseGradeTest +
        "<br>" +
        seShanbe1.mathLastGrade +
        "<br>" +
        seShanbe1.mathLastGradeTest +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.geologyTest +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.biologyBaseGradeTest +
        "<br>" +
        chaharShanbe1.chemistryLastGrade +
        "<br>" +
        chaharShanbe1.chemistryLastGradeTest +
        "<br>" +
        chaharShanbe1.physicFirstGrade +
        "<br>" +
        chaharShanbe1.physicFirstGradeTest +
        "<br>" +
        chaharShanbe1.mathLastGrade +
        "<br>" +
        chaharShanbe1.mathLastGradeTest +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geologyTest +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.biologyLastGradeTest +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGradeTest +
        "<br>" +
        panjShanbe1.physicSecondGrade +
        "<br>" +
        panjShanbe1.physicSecondGradeTest +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.mathLastGradeTest +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biologyLastGrade +
        "<br>" +
        jome1.biologyLastGradeTest +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.chemistryLastGradeTest +
        "<br>" +
        jome1.physicFirstGrade +
        "<br>" +
        jome1.physicFirstGradeTest +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.geology +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.geology +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.geology +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.geology +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.geology +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
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
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (2:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (45 دقیقه حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).firstPart
      } (1:15 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (30 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).firstPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().firstPart
      } (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().firstPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (15 دقیقه حل تست)`,
      totalTime: `${shanbe1Gratuated5000Total()}`,
    };
    let yekShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (2:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).firstPart
      } (1:15 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (30 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).secondPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (45 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).secondPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().secondPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().secondPart
      } (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().secondPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (15 دقیقه حل تست)`,
      totalTime: `${yekshanbe1Gratuated5000Total()}`,
    };
    let doShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (45 دقیقه حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).secondPart
      } (1:15 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (30 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().thirdPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().thirdPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `10`,
    };
    let seShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (2:15 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).secondPart
      } (1:15 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (30 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (15 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).thirdPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().forthPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().forthPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().forthPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      totalTime: `${seshanbe1Gratuated5000Total()}`,
    };
    let chaharShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (2 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().thirdPart
      } (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (2:15 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .firstPart
      } (45 دقیقه مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (15 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().fifthPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek5000TestCounterReturnedData().firstPart
      }`,
      totalTime: `${chaharshanbe1Gratuated5000Total()}`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (2:15 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().sixthPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (30 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek5000TestCounterReturnedData().secondPart
      }`,
      totalTime: `${panjshanbe1Gratuated5000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (45 دقیقه حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).thirdPart
      } (2:30 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (30 دقیقه حل تست)`,
      revising: `(2:45 ساعت مرور و جمع بندی مطالب)`,
      totalTime: `11`,
    };
    let shanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (3:15 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (2:45 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (2:15 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (2:15 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().firstPart}`,
      totalTime: `${shanbe2Gratuated5000Total()}`,
    };
    let yekShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:15 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (2:45 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (2:15 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (2:15 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().secondPart}`,
      totalTime: `${yekshanbe2Gratuated5000Total()}`,
    };
    let doShanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (3:15 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (2:45 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:15 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:15 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().thirdPart}`,
      totalTime: `${doshanbe2Gratuated5000Total()}`,
    };
    let seShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:15 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (2:45 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:15 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:15 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().forthPart}`,
      totalTime: `${seshanbe2Gratuated5000Total()}`,
    };
    let chaharShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:15 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (2:45 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:15 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:15 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().fifthPart}`,
      totalTime: `${chaharshanbe2Gratuated5000Total()}`,
    };
    let panjShanbe2 = {
      revising: `(10 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `10`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };
    shanbe1day.innerHTML =
      shanbe1.geology +
      "<br>" +
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.biologyBaseGradeTest +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.chemistryFirstGradeTest +
      "<br>" +
      shanbe1.physicLastGrade +
      "<br>" +
      shanbe1.physicLastGradeTest +
      "<br>" +
      shanbe1.mathBaseGrade +
      "<br>" +
      shanbe1.mathBaseGradeTest +
      "<br>" +
      shanbe1.mathLastGrade +
      "<br>" +
      shanbe1.mathLastGradeTest +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.biologyLastGradeTest +
      "<br>" +
      yekShanbe1.chemistrySecondGrade +
      "<br>" +
      yekShanbe1.chemistrySecondGradeTest +
      "<br>" +
      yekShanbe1.physicLastGrade +
      "<br>" +
      yekShanbe1.physicLastGradeTest +
      "<br>" +
      yekShanbe1.mathBaseGrade +
      "<br>" +
      yekShanbe1.mathBaseGradeTest +
      "<br>" +
      yekShanbe1.mathLastGrade +
      "<br>" +
      yekShanbe1.mathLastGradeTest +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.biologyBaseGradeTest +
      "<br>" +
      doShanbe1.chemistryFirstGrade +
      "<br>" +
      doShanbe1.chemistryFirstGradeTest +
      "<br>" +
      doShanbe1.physicLastGrade +
      "<br>" +
      doShanbe1.physicLastGradeTest +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGradeTest +
      "<br>" +
      doShanbe1.mathLastGrade +
      "<br>" +
      doShanbe1.mathLastGradeTest +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.geology +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.biologyLastGradeTest +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.chemistrySecondGradeTest +
      "<br>" +
      seShanbe1.physicSecondGrade +
      "<br>" +
      seShanbe1.physicSecondGradeTest +
      "<br>" +
      seShanbe1.mathBaseGrade +
      "<br>" +
      seShanbe1.mathBaseGradeTest +
      "<br>" +
      seShanbe1.mathLastGrade +
      "<br>" +
      seShanbe1.mathLastGradeTest +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.geologyTest +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.biologyBaseGradeTest +
      "<br>" +
      chaharShanbe1.chemistryLastGrade +
      "<br>" +
      chaharShanbe1.chemistryLastGradeTest +
      "<br>" +
      chaharShanbe1.physicFirstGrade +
      "<br>" +
      chaharShanbe1.physicFirstGradeTest +
      "<br>" +
      chaharShanbe1.mathLastGrade +
      "<br>" +
      chaharShanbe1.mathLastGradeTest +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geologyTest +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.biologyLastGradeTest +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGradeTest +
      "<br>" +
      panjShanbe1.physicSecondGrade +
      "<br>" +
      panjShanbe1.physicSecondGradeTest +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.mathLastGradeTest +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.biologyLastGrade +
      "<br>" +
      jome1.biologyLastGradeTest +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.chemistryLastGradeTest +
      "<br>" +
      jome1.physicFirstGrade +
      "<br>" +
      jome1.physicFirstGradeTest +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.geology +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.geology +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.geology +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.geology +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.geology +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
      "<br>" +
      chaharShanbe2.totalTime;
    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;
    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.geology +
        "<br>" +
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.biologyBaseGradeTest +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.chemistryFirstGradeTest +
        "<br>" +
        shanbe1.physicLastGrade +
        "<br>" +
        shanbe1.physicLastGradeTest +
        "<br>" +
        shanbe1.mathBaseGrade +
        "<br>" +
        shanbe1.mathBaseGradeTest +
        "<br>" +
        shanbe1.mathLastGrade +
        "<br>" +
        shanbe1.mathLastGradeTest +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.biologyLastGradeTest +
        "<br>" +
        yekShanbe1.chemistrySecondGrade +
        "<br>" +
        yekShanbe1.chemistrySecondGradeTest +
        "<br>" +
        yekShanbe1.physicLastGrade +
        "<br>" +
        yekShanbe1.physicLastGradeTest +
        "<br>" +
        yekShanbe1.mathBaseGrade +
        "<br>" +
        yekShanbe1.mathBaseGradeTest +
        "<br>" +
        yekShanbe1.mathLastGrade +
        "<br>" +
        yekShanbe1.mathLastGradeTest +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.biologyBaseGradeTest +
        "<br>" +
        doShanbe1.chemistryFirstGrade +
        "<br>" +
        doShanbe1.chemistryFirstGradeTest +
        "<br>" +
        doShanbe1.physicLastGrade +
        "<br>" +
        doShanbe1.physicLastGradeTest +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGradeTest +
        "<br>" +
        doShanbe1.mathLastGrade +
        "<br>" +
        doShanbe1.mathLastGradeTest +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.geology +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.biologyLastGradeTest +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.chemistrySecondGradeTest +
        "<br>" +
        seShanbe1.physicSecondGrade +
        "<br>" +
        seShanbe1.physicSecondGradeTest +
        "<br>" +
        seShanbe1.mathBaseGrade +
        "<br>" +
        seShanbe1.mathBaseGradeTest +
        "<br>" +
        seShanbe1.mathLastGrade +
        "<br>" +
        seShanbe1.mathLastGradeTest +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.geologyTest +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.biologyBaseGradeTest +
        "<br>" +
        chaharShanbe1.chemistryLastGrade +
        "<br>" +
        chaharShanbe1.chemistryLastGradeTest +
        "<br>" +
        chaharShanbe1.physicFirstGrade +
        "<br>" +
        chaharShanbe1.physicFirstGradeTest +
        "<br>" +
        chaharShanbe1.mathLastGrade +
        "<br>" +
        chaharShanbe1.mathLastGradeTest +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geologyTest +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.biologyLastGradeTest +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGradeTest +
        "<br>" +
        panjShanbe1.physicSecondGrade +
        "<br>" +
        panjShanbe1.physicSecondGradeTest +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.mathLastGradeTest +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biologyLastGrade +
        "<br>" +
        jome1.biologyLastGradeTest +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.chemistryLastGradeTest +
        "<br>" +
        jome1.physicFirstGrade +
        "<br>" +
        jome1.physicFirstGradeTest +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.geology +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.geology +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.geology +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.geology +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.geology +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
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
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (1 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).firstPart
      } (1:15 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().firstPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().firstPart
      }`,
      totalTime: `${shanbe1Gratuated6000Total()}`,
    };
    let yekShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).firstPart
      } (1:15 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).secondPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().secondPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().secondPart
      }`,
      totalTime: `${yekshanbe1Gratuated6000Total()}`,
    };
    let doShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (2:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (1 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).secondPart
      } (1:30 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (30 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).thirdPart
      } (1:30 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().thirdPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().thirdPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().thirdPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      totalTime: `11`,
    };
    let seShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).secondPart
      } (1:30 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (30 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (30 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).thirdPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().forthPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().forthPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().forthPart
      }`,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      totalTime: `${seshanbe1Gratuated6000Total()}`,
    };
    let chaharShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (2:15 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().thirdPart
      } (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (2:30 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:15 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().fifthPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek6000TestCounterReturnedData().firstPart
      }`,
      totalTime: `${chaharshanbe1Gratuated6000Total()}`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (2:30 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:15 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().sixthPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek6000TestCounterReturnedData().secondPart
      }`,
      totalTime: `${panjshanbe1Gratuated6000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).thirdPart
      } (2:30 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (30 دقیقه حل تست)`,
      revising: `(3:30 ساعت مرور و جمع بندی مطالب)`,
      totalTime: `12`,
    };
    let shanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (3:30 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (3 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (2:30 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (2:30 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().firstPart}`,
      totalTime: `${shanbe2Gratuated6000Total()}`,
    };
    let yekShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:30 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (3 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (2:30 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (2:30 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().secondPart}`,
      totalTime: `${yekshanbe2Gratuated6000Total()}`,
    };
    let doShanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (3:30 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (3 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:30 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:30 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().thirdPart}`,
      totalTime: `${doshanbe2Gratuated6000Total()}`,
    };
    let seShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:30 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (3 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:30 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:30 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().forthPart}`,
      totalTime: `${seshanbe2Gratuated6000Total()}`,
    };
    let chaharShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:30 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (3 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:30 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:30 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().fifthPart}`,
      totalTime: `${chaharshanbe2Gratuated6000Total()}`,
    };
    let panjShanbe2 = {
      revising: `(11 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `11`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };
    shanbe1day.innerHTML =
      shanbe1.geology +
      "<br>" +
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.biologyBaseGradeTest +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.chemistryFirstGradeTest +
      "<br>" +
      shanbe1.physicLastGrade +
      "<br>" +
      shanbe1.physicLastGradeTest +
      "<br>" +
      shanbe1.mathBaseGrade +
      "<br>" +
      shanbe1.mathBaseGradeTest +
      "<br>" +
      shanbe1.mathLastGrade +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.biologyLastGradeTest +
      "<br>" +
      yekShanbe1.chemistrySecondGrade +
      "<br>" +
      yekShanbe1.chemistrySecondGradeTest +
      "<br>" +
      yekShanbe1.physicLastGrade +
      "<br>" +
      yekShanbe1.physicLastGradeTest +
      "<br>" +
      yekShanbe1.mathBaseGrade +
      "<br>" +
      yekShanbe1.mathBaseGradeTest +
      "<br>" +
      yekShanbe1.mathLastGrade +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.biologyBaseGradeTest +
      "<br>" +
      doShanbe1.chemistryFirstGrade +
      "<br>" +
      doShanbe1.chemistryFirstGradeTest +
      "<br>" +
      doShanbe1.physicLastGrade +
      "<br>" +
      doShanbe1.physicLastGradeTest +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGradeTest +
      "<br>" +
      doShanbe1.mathLastGrade +
      "<br>" +
      doShanbe1.mathLastGradeTest +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.geology +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.biologyLastGradeTest +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.chemistrySecondGradeTest +
      "<br>" +
      seShanbe1.physicSecondGrade +
      "<br>" +
      seShanbe1.physicSecondGradeTest +
      "<br>" +
      seShanbe1.mathBaseGrade +
      "<br>" +
      seShanbe1.mathBaseGradeTest +
      "<br>" +
      seShanbe1.mathLastGrade +
      "<br>" +
      seShanbe1.mathLastGradeTest +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.geologyTest +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.biologyBaseGradeTest +
      "<br>" +
      chaharShanbe1.chemistryLastGrade +
      "<br>" +
      chaharShanbe1.chemistryLastGradeTest +
      "<br>" +
      chaharShanbe1.physicFirstGrade +
      "<br>" +
      chaharShanbe1.physicFirstGradeTest +
      "<br>" +
      chaharShanbe1.mathLastGrade +
      "<br>" +
      chaharShanbe1.mathLastGradeTest +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geologyTest +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.biologyLastGradeTest +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGradeTest +
      "<br>" +
      panjShanbe1.physicSecondGrade +
      "<br>" +
      panjShanbe1.physicSecondGradeTest +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.mathLastGradeTest +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.biologyLastGrade +
      "<br>" +
      jome1.biologyLastGradeTest +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.chemistryLastGradeTest +
      "<br>" +
      jome1.physicFirstGrade +
      "<br>" +
      jome1.physicFirstGradeTest +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.geology +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.geology +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.geology +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.geology +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.geology +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
      "<br>" +
      chaharShanbe2.totalTime;
    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;
    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.geology +
        "<br>" +
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.biologyBaseGradeTest +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.chemistryFirstGradeTest +
        "<br>" +
        shanbe1.physicLastGrade +
        "<br>" +
        shanbe1.physicLastGradeTest +
        "<br>" +
        shanbe1.mathBaseGrade +
        "<br>" +
        shanbe1.mathBaseGradeTest +
        "<br>" +
        shanbe1.mathLastGrade +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.biologyLastGradeTest +
        "<br>" +
        yekShanbe1.chemistrySecondGrade +
        "<br>" +
        yekShanbe1.chemistrySecondGradeTest +
        "<br>" +
        yekShanbe1.physicLastGrade +
        "<br>" +
        yekShanbe1.physicLastGradeTest +
        "<br>" +
        yekShanbe1.mathBaseGrade +
        "<br>" +
        yekShanbe1.mathBaseGradeTest +
        "<br>" +
        yekShanbe1.mathLastGrade +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.biologyBaseGradeTest +
        "<br>" +
        doShanbe1.chemistryFirstGrade +
        "<br>" +
        doShanbe1.chemistryFirstGradeTest +
        "<br>" +
        doShanbe1.physicLastGrade +
        "<br>" +
        doShanbe1.physicLastGradeTest +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGradeTest +
        "<br>" +
        doShanbe1.mathLastGrade +
        "<br>" +
        doShanbe1.mathLastGradeTest +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.geology +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.biologyLastGradeTest +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.chemistrySecondGradeTest +
        "<br>" +
        seShanbe1.physicSecondGrade +
        "<br>" +
        seShanbe1.physicSecondGradeTest +
        "<br>" +
        seShanbe1.mathBaseGrade +
        "<br>" +
        seShanbe1.mathBaseGradeTest +
        "<br>" +
        seShanbe1.mathLastGrade +
        "<br>" +
        seShanbe1.mathLastGradeTest +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.geologyTest +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.biologyBaseGradeTest +
        "<br>" +
        chaharShanbe1.chemistryLastGrade +
        "<br>" +
        chaharShanbe1.chemistryLastGradeTest +
        "<br>" +
        chaharShanbe1.physicFirstGrade +
        "<br>" +
        chaharShanbe1.physicFirstGradeTest +
        "<br>" +
        chaharShanbe1.mathLastGrade +
        "<br>" +
        chaharShanbe1.mathLastGradeTest +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geologyTest +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.biologyLastGradeTest +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGradeTest +
        "<br>" +
        panjShanbe1.physicSecondGrade +
        "<br>" +
        panjShanbe1.physicSecondGradeTest +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.mathLastGradeTest +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biologyLastGrade +
        "<br>" +
        jome1.biologyLastGradeTest +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.chemistryLastGradeTest +
        "<br>" +
        jome1.physicFirstGrade +
        "<br>" +
        jome1.physicFirstGradeTest +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.geology +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.geology +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.geology +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.geology +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.geology +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
        "<br>" +
        chaharShanbe2.totalTime,
      panjShanbe2day: panjShanbe2.revising + "<br>" + panjShanbe2.totalTime,
      jome2day: jome2.revising,
    };

    localStorage.setItem("localStorageObj", JSON.stringify(localStorageData));
  } else if (isStudent.value.trim() === "خیر" && score.value.trim() >= 7000) {
    let shanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().firstPart
      } (2:30 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (1:15 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).firstPart
      } (1:30 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).firstPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1:15 ساعت حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).firstPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().firstPart
      } (45 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().firstPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (15 دقیقه حل تست)`,
      totalTime: `${shanbe1Gratuated7000Total()}`,
    };
    let yekShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .firstPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:15 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).firstPart
      } (1:30 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).secondPart
      } (1:45 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1:15 ساعت حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).secondPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().secondPart
      } (1 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().secondPart
      } (45 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().secondPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (15 دقیقه حل تست)`,
      totalTime: `${yekshanbe1Gratuated7000Total()}`,
    };
    let doShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().secondPart
      } (2:30 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (1:15 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${
        chemistryFirstGradePageCounterReturnedData(
          chemistryFirstGradeStartPage.value
        ).secondPart
      } (1:30 ساعت مطالعه)`,
      chemistryFirstGradeTest: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (45 دقیقه حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${
        physicLastGradeGraduatedPageCounterReturnedData(
          physicLastGradeStartPage.value
        ).thirdPart
      } (2 ساعت مطالعه و حل تمرین)`,
      physicLastGradeTest: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (1 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().thirdPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().thirdPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().thirdPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      totalTime: `12:30`,
    };
    let seShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .secondPart
      } (2:30 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1:15 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${
        chemistrySecondGradePageCounterReturnedData(
          chemistrySecondGradeStartPage.value
        ).secondPart
      } (1:30 ساعت مطالعه)`,
      chemistrySecondGradeTest: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (45 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (45 دقیقه حل تست)`,
      geology: `${
        geologyPageCounterReturnedData(geologyStartPage.value).thirdPart
      }`,
      mathBaseGrade: `${
        mathBaseGradeGraduatedPageCounterReturnedData().forthPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      mathBaseGradeTest: `${
        mathBaseGradeGraduatedTestCounterReturnedData().forthPart
      } (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().forthPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      totalTime: `${seshanbe1Gratuated7000Total()}`,
    };
    let chaharShanbe1 = {
      biologyBaseGrade: `${
        biologyBaseGradePageCounterReturnedData().thirdPart
      } (2:30 ساعت مطالعه)`,
      biologyBaseGradeTest: `${
        biologyBaseGradeTestCounterReturnedData().thirdPart
      } (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).firstPart
      } (2:45 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:15 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .firstPart
      } (1 ساعت مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (45 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().fifthPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek7000TestCounterReturnedData().firstPart
      }`,
      totalTime: `${chaharshanbe1Gratuated7000Total()}`,
    };
    let panjShanbe1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .thirdPart
      } (2:45 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).secondPart
      } (2:45 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:15 دقیقه حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${
        physicSecondGradePageCounterReturnedData(
          physicSecondGradeStartPage.value
        ).secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      physicSecondGradeTest: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (30 دقیقه حل تست)`,
      mathLastGrade: `${
        mathLastGradeGraduatedPageCounterReturnedData().sixthPart
      } `,
      mathLastGradeTest: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (45 دقیقه حل تست)`,
      geologyTest: `${
        geologyGratuatedFirstWeek7000TestCounterReturnedData().secondPart
      }`,
      totalTime: `${panjshanbe1Gratuated7000Total()}`,
    };
    let jome1 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${
        biologyLastGradePageCounterReturnedData(biologyLastGradeStartPage.value)
          .forthPart
      } (2:45 ساعت مطالعه)`,
      biologyLastGradeTest: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (1 ساعت حل تست)`,
      chemistryLastGrade: `${
        chemistryLastGradeGraduatedPageCounterReturnedData(
          chemistryLastGradeStartPage.value
        ).thirdPart
      } (2:30 ساعت مطالعه)`,
      chemistryLastGradeTest: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (1:30 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${
        physicFirstGradePageCounterReturnedData(physicFirstGradeStartPage.value)
          .secondPart
      } (1:15 ساعت مطالعه و حل تمرین)`,
      physicFirstGradeTest: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (30 دقیقه حل تست)`,
      revising: `(3:45 ساعت مرور و جمع بندی مطالب)`,
      totalTime: `13:15`,
    };
    let shanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().firstPart
      } (3:45 ساعت حل تست)`,
      chemistryFirstGrade: `شیمی 1 (${chemistryFirstGradeTitle.value}) ${chemistryFirstGradeModule.value} (3:15 ساعت حل تست)`,
      physicFirstGrade: `فیزیک 1 (${physicFirstGradeTitle.value}) ${physicFirstGradeModule.value} (2:45 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().firstPart
      } (2:45 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().firstPart}`,
      totalTime: `${shanbe2Gratuated7000Total()}`,
    };
    let yekShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:45 ساعت حل تست)`,
      chemistrySecondGrade: `شیمی 2 (${chemistrySecondGradeTitle.value}) ${chemistrySecondGradeModule.value} (3:15 ساعت حل تست)`,
      physicSecondGrade: `فیزیک 2 (${physicSecondGradeTitle.value}) ${physicSecondGradeModule.value} (2:45 ساعت حل تست)`,
      mathBaseGrade: `${
        mathBaseGradeTestCounterReturnedData().secondPart
      } (2:45 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().secondPart}`,
      totalTime: `${yekshanbe2Gratuated7000Total()}`,
    };
    let doShanbe2 = {
      biologyBaseGrade: `${
        biologyBaseGradeTestCounterReturnedData().secondPart
      } (3:45 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (3:15 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:45 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:45 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().thirdPart}`,
      totalTime: `${doshanbe2Gratuated7000Total()}`,
    };
    let seShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:45 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (3:15 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:45 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:45 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().forthPart}`,
      totalTime: `${seshanbe2Gratuated7000Total()}`,
    };
    let chaharShanbe2 = {
      biologyLastGrade: `زیست دوازدهم (${biologyLastGradeTitle.value}) ${biologyLastGradeModule.value} (3:45 ساعت حل تست)`,
      chemistryLastGrade: `شیمی دوازدهم (${chemistryLastGradeTitle.value}) ${chemistryLastGradeModule.value} (3:15 ساعت حل تست)`,
      physicLastGrade: `فیزیک دوازدهم (${physicLastGradeTitle.value}) ${physicLastGradeModule.value} (2:45 ساعت حل تست)`,
      mathLastGrade: `ریاضی دوازدهم (${mathLastGradeTitle.value}) ${mathLastGradeModule.value} (2:45 ساعت حل تست)`,
      geology: `${geologyGratuatedTestCounterReturnedData().fifthPart}`,
      totalTime: `${chaharshanbe2Gratuated7000Total()}`,
    };
    let panjShanbe2 = {
      revising: `(12:45 ساعت) انجام آزمون مشابه پارسال بهمراه بررسی`,
      totalTime: `12:45`,
    };
    let jome2 = {
      revising: `شرکت در آزمون قلم چی و بررسی آزمون`,
    };
    shanbe1day.innerHTML =
      shanbe1.geology +
      "<br>" +
      shanbe1.biologyBaseGrade +
      "<br>" +
      shanbe1.biologyBaseGradeTest +
      "<br>" +
      shanbe1.chemistryFirstGrade +
      "<br>" +
      shanbe1.chemistryFirstGradeTest +
      "<br>" +
      shanbe1.physicLastGrade +
      "<br>" +
      shanbe1.physicLastGradeTest +
      "<br>" +
      shanbe1.mathBaseGrade +
      "<br>" +
      shanbe1.mathBaseGradeTest +
      "<br>" +
      shanbe1.mathLastGrade +
      "<br>" +
      shanbe1.mathLastGradeTest +
      "<br>" +
      shanbe1.totalTime;
    yekShanbe1day.innerHTML =
      yekShanbe1.geology +
      "<br>" +
      yekShanbe1.biologyLastGrade +
      "<br>" +
      yekShanbe1.biologyLastGradeTest +
      "<br>" +
      yekShanbe1.chemistrySecondGrade +
      "<br>" +
      yekShanbe1.chemistrySecondGradeTest +
      "<br>" +
      yekShanbe1.physicLastGrade +
      "<br>" +
      yekShanbe1.physicLastGradeTest +
      "<br>" +
      yekShanbe1.mathBaseGrade +
      "<br>" +
      yekShanbe1.mathBaseGradeTest +
      "<br>" +
      yekShanbe1.mathLastGrade +
      "<br>" +
      yekShanbe1.mathLastGradeTest +
      "<br>" +
      yekShanbe1.totalTime;
    doShanbe1day.innerHTML =
      doShanbe1.biologyBaseGrade +
      "<br>" +
      doShanbe1.biologyBaseGradeTest +
      "<br>" +
      doShanbe1.chemistryFirstGrade +
      "<br>" +
      doShanbe1.chemistryFirstGradeTest +
      "<br>" +
      doShanbe1.physicLastGrade +
      "<br>" +
      doShanbe1.physicLastGradeTest +
      "<br>" +
      doShanbe1.mathBaseGrade +
      "<br>" +
      doShanbe1.mathBaseGradeTest +
      "<br>" +
      doShanbe1.mathLastGrade +
      "<br>" +
      doShanbe1.mathLastGradeTest +
      "<br>" +
      doShanbe1.totalTime;
    seShanbe1day.innerHTML =
      seShanbe1.geology +
      "<br>" +
      seShanbe1.biologyLastGrade +
      "<br>" +
      seShanbe1.biologyLastGradeTest +
      "<br>" +
      seShanbe1.chemistrySecondGrade +
      "<br>" +
      seShanbe1.chemistrySecondGradeTest +
      "<br>" +
      seShanbe1.physicSecondGrade +
      "<br>" +
      seShanbe1.physicSecondGradeTest +
      "<br>" +
      seShanbe1.mathBaseGrade +
      "<br>" +
      seShanbe1.mathBaseGradeTest +
      "<br>" +
      seShanbe1.mathLastGrade +
      "<br>" +
      seShanbe1.mathLastGradeTest +
      "<br>" +
      seShanbe1.totalTime;
    chaharShanbe1day.innerHTML =
      chaharShanbe1.geologyTest +
      "<br>" +
      chaharShanbe1.biologyBaseGrade +
      "<br>" +
      chaharShanbe1.biologyBaseGradeTest +
      "<br>" +
      chaharShanbe1.chemistryLastGrade +
      "<br>" +
      chaharShanbe1.chemistryLastGradeTest +
      "<br>" +
      chaharShanbe1.physicFirstGrade +
      "<br>" +
      chaharShanbe1.physicFirstGradeTest +
      "<br>" +
      chaharShanbe1.mathLastGrade +
      "<br>" +
      chaharShanbe1.mathLastGradeTest +
      "<br>" +
      chaharShanbe1.totalTime;
    panjShanbe1day.innerHTML =
      panjShanbe1.geologyTest +
      "<br>" +
      panjShanbe1.biologyLastGrade +
      "<br>" +
      panjShanbe1.biologyLastGradeTest +
      "<br>" +
      panjShanbe1.chemistryLastGrade +
      "<br>" +
      panjShanbe1.chemistryLastGradeTest +
      "<br>" +
      panjShanbe1.physicSecondGrade +
      "<br>" +
      panjShanbe1.physicSecondGradeTest +
      "<br>" +
      panjShanbe1.mathLastGrade +
      "<br>" +
      panjShanbe1.mathLastGradeTest +
      "<br>" +
      panjShanbe1.totalTime;
    jome1day.innerHTML =
      jome1.biologyLastGrade +
      "<br>" +
      jome1.biologyLastGradeTest +
      "<br>" +
      jome1.chemistryLastGrade +
      "<br>" +
      jome1.chemistryLastGradeTest +
      "<br>" +
      jome1.physicFirstGrade +
      "<br>" +
      jome1.physicFirstGradeTest +
      "<br>" +
      jome1.revising +
      "<br>" +
      jome1.totalTime;
    shanbe2day.innerHTML =
      shanbe2.geology +
      "<br>" +
      shanbe2.biologyBaseGrade +
      "<br>" +
      shanbe2.chemistryFirstGrade +
      "<br>" +
      shanbe2.physicFirstGrade +
      "<br>" +
      shanbe2.mathBaseGrade +
      "<br>" +
      shanbe2.totalTime;
    yekShanbe2day.innerHTML =
      yekShanbe2.geology +
      "<br>" +
      yekShanbe2.biologyLastGrade +
      "<br>" +
      yekShanbe2.chemistrySecondGrade +
      "<br>" +
      yekShanbe2.physicSecondGrade +
      "<br>" +
      yekShanbe2.mathBaseGrade +
      "<br>" +
      yekShanbe2.totalTime;
    doShanbe2day.innerHTML =
      doShanbe2.geology +
      "<br>" +
      doShanbe2.biologyBaseGrade +
      "<br>" +
      doShanbe2.chemistryLastGrade +
      "<br>" +
      doShanbe2.physicLastGrade +
      "<br>" +
      doShanbe2.mathLastGrade +
      "<br>" +
      doShanbe2.totalTime;
    seShanbe2day.innerHTML =
      seShanbe2.geology +
      "<br>" +
      seShanbe2.biologyLastGrade +
      "<br>" +
      seShanbe2.chemistryLastGrade +
      "<br>" +
      seShanbe2.physicLastGrade +
      "<br>" +
      seShanbe2.mathLastGrade +
      "<br>" +
      seShanbe2.totalTime;
    chaharShanbe2day.innerHTML =
      chaharShanbe2.geology +
      "<br>" +
      chaharShanbe2.biologyLastGrade +
      "<br>" +
      chaharShanbe2.chemistryLastGrade +
      "<br>" +
      chaharShanbe2.physicLastGrade +
      "<br>" +
      chaharShanbe2.mathLastGrade +
      "<br>" +
      chaharShanbe2.totalTime;
    panjShanbe2day.innerHTML =
      panjShanbe2.revising + "<br>" + panjShanbe2.totalTime;
    jome2day.innerHTML = jome2.revising;

    let localStorageData = {
      shanbe1day:
        shanbe1.geology +
        "<br>" +
        shanbe1.biologyBaseGrade +
        "<br>" +
        shanbe1.biologyBaseGradeTest +
        "<br>" +
        shanbe1.chemistryFirstGrade +
        "<br>" +
        shanbe1.chemistryFirstGradeTest +
        "<br>" +
        shanbe1.physicLastGrade +
        "<br>" +
        shanbe1.physicLastGradeTest +
        "<br>" +
        shanbe1.mathBaseGrade +
        "<br>" +
        shanbe1.mathBaseGradeTest +
        "<br>" +
        shanbe1.mathLastGrade +
        "<br>" +
        shanbe1.mathLastGradeTest +
        "<br>" +
        shanbe1.totalTime,
      yekShanbe1day:
        yekShanbe1.geology +
        "<br>" +
        yekShanbe1.biologyLastGrade +
        "<br>" +
        yekShanbe1.biologyLastGradeTest +
        "<br>" +
        yekShanbe1.chemistrySecondGrade +
        "<br>" +
        yekShanbe1.chemistrySecondGradeTest +
        "<br>" +
        yekShanbe1.physicLastGrade +
        "<br>" +
        yekShanbe1.physicLastGradeTest +
        "<br>" +
        yekShanbe1.mathBaseGrade +
        "<br>" +
        yekShanbe1.mathBaseGradeTest +
        "<br>" +
        yekShanbe1.mathLastGrade +
        "<br>" +
        yekShanbe1.mathLastGradeTest +
        "<br>" +
        yekShanbe1.totalTime,
      doShanbe1day:
        doShanbe1.biologyBaseGrade +
        "<br>" +
        doShanbe1.biologyBaseGradeTest +
        "<br>" +
        doShanbe1.chemistryFirstGrade +
        "<br>" +
        doShanbe1.chemistryFirstGradeTest +
        "<br>" +
        doShanbe1.physicLastGrade +
        "<br>" +
        doShanbe1.physicLastGradeTest +
        "<br>" +
        doShanbe1.mathBaseGrade +
        "<br>" +
        doShanbe1.mathBaseGradeTest +
        "<br>" +
        doShanbe1.mathLastGrade +
        "<br>" +
        doShanbe1.mathLastGradeTest +
        "<br>" +
        doShanbe1.totalTime,
      seShanbe1day:
        seShanbe1.geology +
        "<br>" +
        seShanbe1.biologyLastGrade +
        "<br>" +
        seShanbe1.biologyLastGradeTest +
        "<br>" +
        seShanbe1.chemistrySecondGrade +
        "<br>" +
        seShanbe1.chemistrySecondGradeTest +
        "<br>" +
        seShanbe1.physicSecondGrade +
        "<br>" +
        seShanbe1.physicSecondGradeTest +
        "<br>" +
        seShanbe1.mathBaseGrade +
        "<br>" +
        seShanbe1.mathBaseGradeTest +
        "<br>" +
        seShanbe1.mathLastGrade +
        "<br>" +
        seShanbe1.mathLastGradeTest +
        "<br>" +
        seShanbe1.totalTime,
      chaharShanbe1day:
        chaharShanbe1.geologyTest +
        "<br>" +
        chaharShanbe1.biologyBaseGrade +
        "<br>" +
        chaharShanbe1.biologyBaseGradeTest +
        "<br>" +
        chaharShanbe1.chemistryLastGrade +
        "<br>" +
        chaharShanbe1.chemistryLastGradeTest +
        "<br>" +
        chaharShanbe1.physicFirstGrade +
        "<br>" +
        chaharShanbe1.physicFirstGradeTest +
        "<br>" +
        chaharShanbe1.mathLastGrade +
        "<br>" +
        chaharShanbe1.mathLastGradeTest +
        "<br>" +
        chaharShanbe1.totalTime,
      panjShanbe1day:
        panjShanbe1.geologyTest +
        "<br>" +
        panjShanbe1.biologyLastGrade +
        "<br>" +
        panjShanbe1.biologyLastGradeTest +
        "<br>" +
        panjShanbe1.chemistryLastGrade +
        "<br>" +
        panjShanbe1.chemistryLastGradeTest +
        "<br>" +
        panjShanbe1.physicSecondGrade +
        "<br>" +
        panjShanbe1.physicSecondGradeTest +
        "<br>" +
        panjShanbe1.mathLastGrade +
        "<br>" +
        panjShanbe1.mathLastGradeTest +
        "<br>" +
        panjShanbe1.totalTime,
      jome1day:
        jome1.biologyLastGrade +
        "<br>" +
        jome1.biologyLastGradeTest +
        "<br>" +
        jome1.chemistryLastGrade +
        "<br>" +
        jome1.chemistryLastGradeTest +
        "<br>" +
        jome1.physicFirstGrade +
        "<br>" +
        jome1.physicFirstGradeTest +
        "<br>" +
        jome1.revising +
        "<br>" +
        jome1.totalTime,
      shanbe2day:
        shanbe2.geology +
        "<br>" +
        shanbe2.biologyBaseGrade +
        "<br>" +
        shanbe2.chemistryFirstGrade +
        "<br>" +
        shanbe2.physicFirstGrade +
        "<br>" +
        shanbe2.mathBaseGrade +
        "<br>" +
        shanbe2.totalTime,
      yekShanbe2day:
        yekShanbe2.geology +
        "<br>" +
        yekShanbe2.biologyLastGrade +
        "<br>" +
        yekShanbe2.chemistrySecondGrade +
        "<br>" +
        yekShanbe2.physicSecondGrade +
        "<br>" +
        yekShanbe2.mathBaseGrade +
        "<br>" +
        yekShanbe2.totalTime,
      doShanbe2day:
        doShanbe2.geology +
        "<br>" +
        doShanbe2.biologyBaseGrade +
        "<br>" +
        doShanbe2.chemistryLastGrade +
        "<br>" +
        doShanbe2.physicLastGrade +
        "<br>" +
        doShanbe2.mathLastGrade +
        "<br>" +
        doShanbe2.totalTime,
      seShanbe2day:
        seShanbe2.geology +
        "<br>" +
        seShanbe2.biologyLastGrade +
        "<br>" +
        seShanbe2.chemistryLastGrade +
        "<br>" +
        seShanbe2.physicLastGrade +
        "<br>" +
        seShanbe2.mathLastGrade +
        "<br>" +
        seShanbe2.totalTime,
      chaharShanbe2day:
        chaharShanbe2.geology +
        "<br>" +
        chaharShanbe2.biologyLastGrade +
        "<br>" +
        chaharShanbe2.chemistryLastGrade +
        "<br>" +
        chaharShanbe2.physicLastGrade +
        "<br>" +
        chaharShanbe2.mathLastGrade +
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

// events
btn.addEventListener("click", generateTable);
clearBtn.addEventListener("click", clearTable);
window.addEventListener("load", getDataFromLocalStorage);
