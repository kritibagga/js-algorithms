//Palindrome: A palindrome is a word, phrase, number, or other sequence of characters that reads the same backward as it does forward, ignoring spaces, punctuation, and capitalization.
//Example: madam,radar,level,civic


//Method 1- check if a string is palindrome
function isPalindrome(str) {

    const reversed=str.split("").reverse().join("");
    return reversed === str;
}
//Method 2- using for loop
//

function isPalindrome1(str){
    let cleaned=str.toLowerCase().replace(/[^a-z0-9]/g,'');// replace any non alpha numeric to empty or deleted; g checks for all characters which is repeatable
    let start=0;
    let end=cleaned.length-1;

    while(start<end){
        if(cleaned[start]!==cleaned[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;

}

//Methos 3- recursion

function isPalindrome2(str){

    //cleaning
    let cleaned=str.toLowerCase().replace(/[^a-z0-9]/g,'');

    //Base Case
    if(cleaned.length<=1){
        return true;
    }

    //compare first and last character
    if(cleaned[0]!==cleaned[cleaned.length-1]){
        return false;
    }

    //recursive case: check the substring without first and last character
    return isPalindrome2(cleaned.slice(1,cleaned.length-1));
}

// Method 4- using array methods
function isPalindrome3(str) {

    // Clean the string: lowercase and remove non-alphanumeric characters
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string using Array.from and compare
    let reversed = Array.from(cleaned).reverse().join('');

    return cleaned === reversed;
}

