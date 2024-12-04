
//Method 1- most commonly used for its simplicity
function reverseString1(str){
    return str.split('').reverse().join('');

}


//Method 2 - using for loop
function reverseString2(str){
    let reversedStr = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

//Method 3 -using recursion
function reverseString3(str){
    if(str==="")return str;
    return reverseString3(str.slice(1)) + str[0];

}

console.log(reverseString3("kriti"))