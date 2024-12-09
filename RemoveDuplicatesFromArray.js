//Write a function to remove duplicates from an array.

//Method-1

function removeDuplicates(arr){
    return [...new Set(arr)];
}

//Method-2

function removeDuplicates(arr){
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}


