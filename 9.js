let x = 345678912345678;
let calculatedValue = 0
for (let i = x; i !== 0; i) {
    let a = i%10;
    calculatedValue += a;
    i = i-a;
    i = i/10;
}
console.log(calculatedValue)

let ab = x.toString();
console.log(ab)
let c = 0;
for (let i = 0; i < ab.length; i++) {
    let num = parseInt(ab[i])
    console.log(num)
    c = c + num;
}
console.log(c)