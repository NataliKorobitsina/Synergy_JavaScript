//1 является ли строка палиндромом

function checkPalindrome () {
	let string2 = "";
	for (let i = string.length - 1; i >= 0 ; i--) {
		string2 = string2 + string[i];
	}

	if (string === string2) {
		console.log("Строка палиндром!");
	} else { 
		console.log("Строка не является палиндромом!");
	}
	console.log(string2);
	return string2;
	}

let string = "шалаш";
checkPalindrome();

//2 является ли число простым

function simpleNum(a) {
	let divider = 2;
	let flag = 1;
	while (divider <= a/2 ){
		if (a % divider == 0){
			console.log(`Число ${a} не является простым`);
			break;
		} 
		divider += 1;
		
	if (a % divider != 0){
			console.log(`Число ${a} простое`);
			break;
		}
	} 
	return 0;
}
let num = 67;
simpleNum(num); 


//3 опредеить возраст человека

function age(day) {
	let age = new Date().getFullYear() - day.getFullYear();
	return age;
}

let birthday = new Date("1987-05-12");
console.log(age(birthday));

//4 выходной ли день

function holiday(date){
	let dayWeek = date.getDay();
	let date1 = date.toLocaleDateString();
	if (dayWeek == 0 || dayWeek == 6) {
		console.log(`${date1} выходной день!`)
	} else console.log(`${date1} рабочий день`);
}
holiday(birthday);