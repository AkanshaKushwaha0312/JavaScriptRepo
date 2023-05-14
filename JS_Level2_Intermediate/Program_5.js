
//Write a program that takes a string and returns true if the string is a pangram (i.e., it contains all the letters of the alphabet at least once), and false otherwise.

function isPanagram(str){
    let alphabet='abcdefghigklmnopqrstuvwx';
    let lowercaseString=str.toLowerCase();
    for(let i=0;i<lowercaseString.length;i++){
       if(lowercaseString.indexOf(alphabet.charAt(i))==-1){
                   return false;
        }
    }
    return true;
 }

 document.write("Is my string pangram? :: "+isPanagram('The quick brown fox jumps over the lazy dog'));