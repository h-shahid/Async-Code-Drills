// function todayIs(message) {
//   console.log(message);
// }

// todayIs("Today is Friday");

// setTimeout(() => {
//     todayIs("Today is some other day.");
// }, 2000);

//TIMING OUT
// function getWords(message) {
// console.log("Today's")
// setTimeout(() => {
//     console.log("done");
// }, 1000)
// setTimeout(() => {
//     console.log("Saturday's");
// }, 2000)
// setTimeout(() => {
//     console.log("tomorrow");
// }, 3000)
// }

// getWords()

//CALLBACKS & RECURSION
// function done() {
//     console.log("Job's done!")

// }
// function countDown(num,callback) {  //will run the callback function when it reaches 1.
//  if (num === 1) {
//     callback()
//  } else {
//      setTimeout(() => {
//          console.log(num)
//         countDown(num-1,callback)
//      }, 1000)

//  }

// } //recursion- calling a function inside itself
// countDown(6,done)

//PROMISES PROMISES :)
let lunchtime = true;
function orderMeSomeFood() {
  return new Promise((resolve, reject) => {
    if (lunchtime === true) {
      let lunchObj = {
        lunch: "Turkey Sandwich & Chips",
        drink: "Apple Juice",
      };
      resolve(lunchObj);
    } else {
      let error = new Error(" This lunch is wack");
      reject(error);
    }
  });
}
orderMeSomeFood()
    .then(res => console.log(res))
    .catch(err => console.log(err));
