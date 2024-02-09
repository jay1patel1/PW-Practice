function f(n) {
    for (let i = 0; i < n; i++) {
        let a = "";
        for (let j = 0; j < n; j++) {
            a = a + "*"
        }
        console.log(a);
    }
}

f(8)