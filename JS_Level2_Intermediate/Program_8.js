
//Write a program that takes a string and returns a new string with each word reversed, but the order of the words should remain the same.

function reverseString(str){
    return str.split("").reverse().join("");
}

let inputString="hello World";
let reverseSentence='';

let wordArray=inputString.split(" ");
for(let i=0;i<wordArray.length;i++){
    reverseSentence=reverseSentence+reverseString(wordArray[i])+" ";
}

document.write("The output of the string is :: "+reverseSentence);

