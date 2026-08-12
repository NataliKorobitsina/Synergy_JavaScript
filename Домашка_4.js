// 1 все числа в диапазоне от 1 до 100, кратные 3, 5 или 3 и 5 одновременно

for (let i=1; i<=100; i++) {

	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`число ${i} кратно 3 и 5 одновременно`)
	}
	else if (i % 3 === 0) {
		console.log(`число ${i} кратно 3`)
	}
	else if (i % 5 === 0) {
		console.log(`число ${i} кратно 5 `)
	}
	else {
		console.log(i)
	}
}

// 2 все трехзначные числа Армстронга

for (let i = 1; i < 10; ++i) {
	for (let j = 0; j < 10; ++j) {
		for (let k = 0; k < 10; ++k) {
			let sum = (i**3 + j**3 + k**3);
			let num = (i*100 +j*10 + k);
			if (sum === num) {
				console.log(num)
			}

		}
	}
}



// 3 наибольший общий делитель

let first = 352;
let second = 458;
let gcd;

while (first != second) {
	if (first > second) {
		first = first - second;
	}
	else {
		second = second - first;
	}
}
nod = first;
console.log(gcd);
