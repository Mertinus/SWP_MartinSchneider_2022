let calorieInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000\n`;

let calorieList = calorieInput.split('\n');
let calorieListInt = [];
calorieList.forEach(element => {
    calorieListInt.push(parseInt(element));
});
console.log(calorieListInt);

let elfSum = [];
let currElfSum = 0;
for(let i=0;i<calorieListInt.length;i++) {
    if(!isNaN(calorieListInt[i])) {
        currElfSum += calorieListInt[i];
    }
    else {
        elfSum.push(currElfSum);
        currElfSum=0;
    }
}
console.log(elfSum);

var len = elfSum.length, max = -Infinity;
  while (len--) {
    if (elfSum[len] > max) {
      max = elfSum[len];
    }
  }
console.log(max);