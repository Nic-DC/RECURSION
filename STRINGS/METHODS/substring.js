const str = "Hello World!";
console.log(str.substring(0, -3)); // Output: ""
/*
In this example, the second parameter -3 is negative, which means it counts from 
the end of the string. So substring() will return the part of the string from 
index 0 up to, but not including, the third character from the end of the string. 
Since -3 is outside the bounds of the string, it returns an empty string.
*/
console.log(str.substring(-6, 5)); // Output: "Hello"
/*
In this example, the first parameter -6 is negative, which means it counts 
from the end of the string. So substring() will return the part of the string 
from the sixth character from the end up to, but not including, the fifth character 
from the beginning of the string. The resulting substring is "Hello".

*/
console.log(str.substring(-4, -2)); // Output: "l"
/*
In this example, both parameters are negative. The first parameter -4 counts 
from the end of the string and specifies the starting index of the substring, 
which is the fourth character from the end. The second parameter -2 also counts 
from the end of the string and specifies the ending index of the substring, 
which is the second character from the end. The resulting substring is "l".
*/
console.log(str.substring(-4, -6)); // Output: ""
/*
The output of console.log(str.substring(-4, -6)) will be an empty string.
In the substring method, if the start index is greater than the end index, 
the method will swap the two arguments. In this case, -4 will be treated 
as 0 and -6 will be treated as 0 as well since they are both negative numbers. 
So, the substring method will swap these two arguments and treat the call as str.substring(0, 0).
This will result in an empty string as the substring between indices 0 and 0 is an empty string.
*/

// THEORY:

/*
In JavaScript, the substring() method is used to extract a 
portion of a string and return a new string. 
It takes two arguments: the starting index and the ending index. 
The substring() method returns the characters between these 
two indexes (excluding the character at the ending index).

The syntax for using the substring() method is:
*/
string.substring(startIndex, endIndex);
/*where:
string is the string you want to extract the substring from.
startIndex is the index of the first character to include in the substring.
endIndex is the index of the character to exclude from the substring.
If the endIndex parameter is not specified, the substring() method extracts 
the characters to the end of the string.

It's worth noting that the substring() method is similar to the 
slice() method in JavaScript, with the main difference being how 
negative values for the indexes are handled. Negative values for 
the substring() method are treated as 0, while negative values for 
the slice() method are treated as the length of the string plus the negative index.
*/

console.log(str.substring(3)); // Output: "lo world"
console.log(str.substring(0)); // Output: "Hello world"
console.log(str.substring(6)); // Output: "world"
console.log(str.substring(11)); // Output: ""

console.log(str.substring(-3)); // Output: "Hello world"
console.log(str.substring(-10)); // Output: "Hello world"
console.log(str.substring(-15)); // Output: "Hello world"

/*
When the start parameter is negative, it is treated as 0. 
So in the examples above, all the negative values are equivalent to 0.
Note that substring() is similar to slice(), but there are some differences. 
The main difference is that slice() allows negative values for 
the start and end parameters, while substring() treats negative values as 0.
*/
