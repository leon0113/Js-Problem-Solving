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
console.log(output1);

const result = Math.pow(5, 2);
console.log(result);