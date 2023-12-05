function power(pow) {
    return function (num) {
        return num ** pow;
    }
}

console.log(power(2)(3))

console.log('----------------------')

const powArrow = pow => num => num ** pow;

console.log(powArrow(2)(3))