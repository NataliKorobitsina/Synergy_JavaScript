//1 Первую букву заглавной и вывести обновлённую строку

let dartV = "luke, I am your father";
let lUpp = dartV[0].toUpperCase(); //console.log(dartVader.charAt(0).toUpperCase() + dartVader.slice(1))
console.log(lUpp + dartV.slice(1));

//2 сравнить, в верхний регистр, снова сравнить

let str1 = "AbcdEfg";
let str2 = "abCDEFg";

console.log(str1.localeCompare(str2));
console.log(str1.toUpperCase().localeCompare(str2.toUpperCase()));

//3 вывести високосные года из массива

let years = [2000, 2001, 2002, 2003, 2004, 2005];

for (let year of years) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year);
    }
}

//4

let arr = [6, 187, 66, 4, 67, 30, 18];
console.log(arr.sort());
console.log(arr.reverse());