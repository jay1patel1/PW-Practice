// const dt = new Date("1-1-2003");
// console.log(dt);
// console.log(dt.getDate());
// console.log(dt.getMonth());
// console.log(dt.getFullYear());
// console.log(dt.getTime());
// console.log(dt.getDay());
// let a = dt.getTime();
// // let c = a.toDateString();
// console.log(a);
// let cd = a.toDateString();



// // const currentDate = new Date(); // Creates a new Date object representing the current date and time
// // const dateString = currentDate.toDateString(); // Converts the date portion of the date to a string
// // console.log(dateString);

const abc = new Date().getTime();
console.log(abc);
const cbc = Date.now();
console.log(cbc);
const abcd = new Date (cbc);
console.log(abcd.getSeconds());

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const myArray = ['a', 'b', 'v', 'c', 'd', 'g'];
  const shuffledArray = shuffleArray(myArray);
  console.log(shuffledArray);


  let asd = ["a","s","d","g"];
  let cvb = ["c","v","b"];
  asd = cvb
  console.log(asd);

