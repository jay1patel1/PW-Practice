function customForEach(ar, callback) {
    let returnArray = []
    for (let i = 0; i < ar.length; i++) {
        let a = callback(ar[i]);
        console.log(a)
        returnArray.push(a);
    }
    return returnArray;
}

// function addOne (num) {
//     let num
// }
console.log(customForEach([1,2,3],(num)=>{ return num = num+1}));