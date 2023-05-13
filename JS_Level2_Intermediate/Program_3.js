
//Write a program that takes a string and returns a new string with all the vowels removed.

function NoVowel(str){

let stringWithoutVowel='';
for(let i=0;i<str.length;i++){
           if(str.charAt(i)!=='a' && str.charAt(i)!='e' && str.charAt(i)!='i' && str.charAt(i)!='o' && str.charAt(i)!='u' && str.charAt(i)!=='A' && str.charAt(i)!='E' && str.charAt(i)!='I' && str.charAt(i)!='O' && str.charAt(i)!='U'){
                    stringWithoutVowel=stringWithoutVowel+str.charAt(i)
                }

            }

return stringWithoutVowel;
}

 let original_str = 'Javascript';
 let str = NoVowel(original_str);

 document.write("Before removing vowels, the string is :: "+original_str);

 document.write("</br>After removing vowels, the output of the string is :: "+str);


