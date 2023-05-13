 
 //Write a program that takes a string and returns the reverse of that string.
         
 function string_reverse(str) 
 {
    return str.split("").reverse().join("");
 }

document.write('</br>' +string_reverse("Akansha"));
document.write('</br>' +string_reverse("learning"));
document.write('</br>' +string_reverse("JavaScript"));
 