
//Write a program that takes an array of integers and returns a new array containing only the prime numbers from the original array.

function isPrime(num){
    if(num==0 || num==1)
    return false;

    for(let i=2;i<=Math.sqrt(num);i++){
             if(num%2==0){
                  return false;
            }
    }
    return true;
 }

 let input = [0,1,2,3,4,5,6,7,8,9];
 let newarray=[];

 for(let i=0; i<input.length; +i++){
    if(isPrime(input[i])){
        newarray.push(input[i]);
    }

 }

 document.write("The array of prime number is :: "+newarray);

