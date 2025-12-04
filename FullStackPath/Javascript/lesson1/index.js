//document.getElementById("count-el").innerText = 10;

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch

// console.log(count)

// *** learing how to use console.log and use multiple variables as well as adding them**
// let myAge = 27
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

//* another example */
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

let countEl = document.getElementById("count-el");

let count = 0;
function increment() {
  count = count + 1;
  countEl.innerText = count;
}
function save() {
  console.log(count)
}