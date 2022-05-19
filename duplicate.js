const names = ['fgh', 'ryt', 'dgfr', 'vff', 'fgh'];
function removeDuplicate(name) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = name[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);