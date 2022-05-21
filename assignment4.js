// problem 1
function anaToVori(ana) {
    if (typeof ana != 'number') {
        console.log('Please enter a number');
    }
    else if (ana < 0) {
        console.log('Enter a positive number');
    }
    else {
        const vori = ana / 16;
        return vori;
    }

}
const output = anaToVori(32);
console.log(output);


// problem 2
function pandaCost(shingara, samusa, jilapi) {
    if (shingara < 0 || samusa < 0 || jilapi < 0) {
        console.log('Enter a positive quantity!')
    }
    else {
        const perShingaraCost = 7;
        const perSamusaCost = 10;
        const perJilapiCost = 15;

        const shigaraCost = perShingaraCost * shingara;
        const samusaCost = perSamusaCost * samusa;
        const jilapiCost = perJilapiCost * jilapi;

        const totalCost = shigaraCost + samusaCost + jilapiCost;
        return totalCost;
    }


}

const quantity = pandaCost(1, 2, 1);
console.log(quantity);


// problem 3 

function picnicBudget(people) {
    if (people <= 100) {
        const costOfFirst100 = 5000 * people;
        return costOfFirst100;
    }
    else if (people <= 200) {
        const costOfFirst100 = 5000 * 100;
        const costOfSecond100 = 4000 * (people - 100);
        const totalCostOf200 = costOfFirst100 + costOfSecond100;
        return totalCostOf200;
    }
    else {
        const costOfFirst100 = 5000 * 100;
        const costOfSecond100 = 4000 * 100;
        const costOfRest = 3000 * (people - 200);
        const totalCost = costOfFirst100 + costOfSecond100 + costOfRest;
        return totalCost;
    }
}
const numOfPeople = picnicBudget(201);
console.log(numOfPeople);


// problem 4
const friends = ['sdfd', 'fggf', 'fgtedt', 'frtf', 'fgtgh'];
function oddFriend(nameArray) {

    let oddName = '';
    for (var i = 0; i < nameArray.length; i++) {
        if (nameArray[i].length % 2 != 0) {
            oddName = nameArray[i];
        }
    }
    return oddName;
}
const output1 = oddFriend(friends);
console.log(output);














