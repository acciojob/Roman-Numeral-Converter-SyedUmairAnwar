function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
    let str="";
	if (num>1000){
		str=str+'M';
		num=num-1000;
	}
	 if(num>500){
		str=str+'D';num=num-500;
	}
	while (num>100){str=str+'C';num=num-100;}
	while (num>50){str=str+'L';num=num-50;}
	while  (num>10){str=str+'X';num=num-10;}
	while  (num>5){str=str+'V';num=num-5;}
	while  (num>0){str=str+'I';num=num-1;}
  //your code here
console.log(str)
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
