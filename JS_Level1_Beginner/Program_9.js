// Write a program that takes a string and returns true if the string is a palindrome (i.e., the string is the same forwards and backwards), and false otherwise.

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

const value = checkPalindrome('pullup');


    document.write("Is the string pallindrome? :: " +value);


