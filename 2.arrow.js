function a(b) {
    return b+1;
}
console.log(a(1));

let c = b => b+1;
console.log(c(1));
function d(e) {
    return function (f) {
        return e + f
    }
}
// let d = e => c => e+f ;
console.log(d(1)(2));