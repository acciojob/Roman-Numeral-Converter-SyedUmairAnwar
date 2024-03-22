unction convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
 
	  let romanNumeral = ""
  //your code here
  while (num !== 0) {
    if (num >= 1000) {
      romanNumeral += "M"
      num -= 1000
    } else if (num >= 900) {
        romanNumeral += "CM"
        num -= 900
    } else if (num >= 500) {
        romanNumeral += "D"
        num -= 500
    } else if (num >= 400) {
        romanNumeral += "CD"
        num -= 400
    } else if (num >= 100) {
        romanNumeral += "C"
        num -= 100
    } else if (num >= 90) {
        romanNumeral += "XC"
        num -= 90
    } else if (num >= 50) {
        romanNumeral += "L"
        num -= 50
    } else if (num >= 40) {
        romanNumeral += "XL"
        num -= 40
    } else if (num >= 10) {
        romanNumeral += "X"
        num -= 10
    } else if (num >= 9) {
        romanNumeral += "IX"
        num -= 9
    } else if (num >= 5) {
        romanNumeral += "V"
        num -= 5
    } else if (num >= 4) {
        romanNumeral += "IV"
        num -= 4
    } else {
        romanNumeral += "I"
        num -= 1
    }
  }
	return romanNumeral;
 
 
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
 
console.log(convertToRoman(14));
 
 
 
 
// do not edit below this line
module.exports = convertToRoman




