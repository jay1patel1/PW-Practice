// for (let index = 20; index > 0; index--) {
//     console.log(index);
// }

function abc(n, n2) {
  if (n > n2) {
    function prints(max, min) {
        console.log(max);
        if (min == max) {
          return;
        } else {
          max = max - 1;
          prints(max, min);
        }
      }
      prints(n,n2);
  } else if (n < n2) {
    function prints2(min, max) {
        console.log(min);
        if (min == max) {
          return;
        } else {
          min = min + 1;
          prints2(min, max);
        }
      }
      prints2(n,n2)
  } else if (n==n2){
    console.log("both value are same");
  }
}


abc(4,34)
abc(64,34)
abc(34,34)