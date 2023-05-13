//Write a program that takes an array of integers and returns the largest number in the array.

      let arr = [5, 10, 20, 3, 98, 95];
      let largest = arr[0];
      function largestNumber() {
         for (let i = 1; i < arr.length; i++) {
            if (arr[i] > largest)
            largest = arr[i];
         }
         document.write("The largest element of the array is: " + largest);
      }
      largestNumber();
