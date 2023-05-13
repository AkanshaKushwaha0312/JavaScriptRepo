//  Write a program that takes an array of integers and returns a new array containing only the positive numbers from the original array.

let array = [2, -3, 4, 5, -6, 9, -1,1];

    function getPositives(arr){
    const posArr = arr.filter(num => num > -1); //filter creates a copy of existing array and creates a new array of numbers which is satisfying the fitler condition.
                                                //num here is paramenter defined for lamba function.s
    return posArr;
    }

   document.write("Array containts only positive value :: ");
   document.write(getPositives(array));