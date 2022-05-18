const business = 450;
const minister = 350;
const army = 500;
//If condition
if (business > minister && business > army) {
    console.log("Business in bigger");
}
else if (minister > business && minister > army) {
    console.log("Minister is bigger");
}
else {
    console.log("Army is bigger");
}

//Math.max
var max = Math.max(business, minister, army);
console.log("biggest is :", max);

// Using Function
function findBig(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const bigger = findBig(320, 500, 1200);
console.log('The biggest is :', bigger);