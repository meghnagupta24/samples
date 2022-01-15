// Eliminating the Unwants

// Suppose you are give 2 strings, one the input and the other one as the unwant.

// You need to find the occurence of the unwant string and remove it from the input. You need to basically remove all the unwant string occurences from the input.

// Example-1

// input = "daabcbaabcbc", unwant = "abc"

// Output: "dab"

// Explanation: The following operations are done:

// input = "daabcbaabcbc", remove "abc" starting at index 2, so input = "dabaabcbc".
// input = "dabaabcbc", remove "abc" starting at index 4, input = "dababc".
// input = "dababc", remove "abc" starting at index 3, so input = "dab". Now s has no occurrences of "abc".
// Example-2

// input = "axxxxyyyyb", unwant = "xy"

// Output: "ab"

// Explanation: The following operations are done:

// input = "axxxxyyyyb", remove "xy" starting at index 4 so input = "axxxyyyb".
// input = "axxxyyyb", remove "xy" starting at index 3 so input = "axxyyb".
// input = "axxyyb", remove "xy" starting at index 2 so input = "axyb".
// input = "axyb", remove "xy" starting at index 1 so input = "ab".
// Now input has no occurrences of "xy".

function eliminateUnwants(input, unwant) {
    const unwantLength = unwant.length;
    let inputArr = Array.from(input);
    let unwantIndex;
    while (unwantIndex != -1) {
        unwantIndex = input.indexOf(unwant);
        if (unwantIndex != -1) {
            inputArr.splice(unwantIndex, unwantLength);
            input = inputArr.join('');
        }        
    }
    return input;
}

function main(input, unwant) {
    const newInput = eliminateUnwants(input, unwant);
    console.log(newInput);
}

main('axxxxyyyyb', 'xy')
