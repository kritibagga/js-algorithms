//method-1
function findLargestNumber1(arr){
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

//Method-2
function findLargestNumber2(arr){
    return Math.max(...arr);
}

//Method-3
function findLargestNumber3(arr){
    return arr.reduce((a, b) => Math.max(a, b));
}


