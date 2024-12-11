function fibRecursive(n) {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	return fibRecursive(n - 1) + fibRecursive(n - 2);
}



function fibIterative(n) {
	let a = 0,
		b = 1;
	for (let i = 2; i <= n; i++) {
		let temp = a + b;
		a = b;
		b = temp;
	}

	return n === 0 ? 0 : b;
}

//Fib Series

function fibSeries(n){
    let series=[0,1];
    for(let i=2;i<=n;i++){
        series.push(series[i-1]+series[i-2]);
    }
    return series;
}

console.log(fibSeries(6))

