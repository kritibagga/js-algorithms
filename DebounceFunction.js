//Implement a debounce function that delays the execution of a function.

function debounce(func, delay) {
    let timeout; // Declare a variable to store the timeout ID

    // Return a new function that will wrap the original function
    return function(...args) {
        clearTimeout(timeout); // Clear any previously set timeouts

        // Set a new timeout
        timeout = setTimeout(() => {
            // After the delay, call the original function
            func.apply(this, args);
        }, delay); // The delay time after which func will be executed
    };
}

const log = debounce(() => console.log("Debounced!"), 3000);
log();


//Usage:
// const log = debounce(() => console.log("Debounced!"), 3000);
// log(); // This will log "Debounced!" after 3 seconds


//Another Method

const debounceArrow = (fn,delay)=>{
    let Timerid;
    return function(...args){
        clearTimeout(Timerid);
        Timerid=setTimeout(()=>{
            fn(...args);
        },delay)
    }
}

const logDebounced=debounceArrow(()=>console.log("Debounced!"),2000);