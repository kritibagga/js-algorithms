//Write a function to count how many times a character appears in a string.


function countChar(str,char){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===char){
            count++;        }
    }
    return count;
}

function countChar1(str,char){
    return str.split(char).length-1;
}

console.log(countChar("hello world","o"))
