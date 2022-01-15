// Back to School

// Suppose you are given 2 strings which will include digits from 0-9 and the string can be of any length. You need to add those 2 strings as numbers and return the output as string. You need to do this as efficiently as possible. Again emphasizing on the point that the string can be of any length.

// Example-1

// str1 = "123456"
// str2 = "312321"

// output = "435777"
// Example-2

// str1 = "123456"
// str2 = "123456"

// output = "246912"

function addTwoNumbers(num1, num2) {
    return String(num1 + num2);
}

function convertStringToInteger(s) {
    return BigInt(s);
}

function main(str1, str2) {
    const num1 = convertStringToInteger(str1);
    const num2 = convertStringToInteger(str2);
    const sum = addTwoNumbers(num1, num2);
    console.log(sum);
}

main("123456", "123456");
