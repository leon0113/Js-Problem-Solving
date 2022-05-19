const greeting = 'Hello How are you?';
function reverseString(str) {
    let reversed = '';
    for (const char of str) {
        // console.log(char);
        reversed = char + reversed;
    }
    return reversed;
}
const reverse = reverseString(greeting);
console.log(reverse);