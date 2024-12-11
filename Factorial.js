//Find a Factorial of a number

//method 1- recursion

function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    return n*factorial(n-1);
}

//Method 2-Iterative

function factorial1(n){
    let result = 1;
    for(let i=2; i<=n; i++){
        result *= i;
    }
    return result;
}

