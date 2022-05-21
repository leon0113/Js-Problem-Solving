function oddFriend(array) {
    let oddName = ' ';
    for (let i = 0; i < array.length; i++) {
        const lengthOfName = array[i].length;
        if (lengthOfName % 2 != 0) {
            oddName = array[i];
        }
    }
    return oddName;
}


const output = oddFriend(['fsff', 'fsdf', 'fdfg', 'leo']);
console.log(output);
