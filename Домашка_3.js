// Задание 1

let min = 18;

if (!(min >= 0 && min <= 59)) {
	console.log("Введите значение от 0 до 59!");
}
	else if (min <= 15 && min >= 0) {
		console.log(`${min} минут - это первая четверть часа.`);
	}
		else if (min > 15 && min <= 30) {
			console.log(`${min} минут - это вторая четверть часа.`);
		} 
			else if (min > 30 && min <= 45) {
				console.log(`${min} минут - это третья четверть часа.`);
			} 
				else if (min > 45 && min <= 59) {
						console.log(`${min} минут - это четвертая четверть часа.`);
}

//Задание 2

let month = 5, season;

/*
if (!(num.isInteger(month))) {
	console.log("Введите целое цисло от 1 до 12");
}

*/

switch(month) {
	case 1:
	season = "Зима"
	break;
	case 2:
	season = "Зима"
	break;
	case 3:
	season = "Весна"
	break;
	case 4:
	season = "Весна"
	break;
	case 5:
	season = "Весна"
	break;
	case 6:
	season = "Лето"
	break;
	case 7:
	season = "Лето"
	break;
	case 8:
	season = "Лето"
	break;
	case 9:
	season = "Осень"
	break;
	case 10:
	season = "Осень"
	break;
	case 11:
	season = "Осень"
	break;
	case 12:
	season = "Зима"
	break;
	default:
	season = "Значение не найдено";
}
console.log(season);

//Задание 3

let number = 7;

if (number % 2 == 0) {
	console.log(number ** 2);
} else console.log(number ** 3);


