/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var shareArea = area / 2;

console.log(shareArea);




/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money >= 25000){
    console.log('Laptop');
}
else if(money >= 10000){
    console.log('Cycle');
}
else{
    console.log('Chocolate');
}



/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for (var startDay = 1; startDay <= lastDay; startDay++) {
    if(startDay % 3 === 0){
        console.log(startDay +' - medicine');
    }
    else{
        console.log(startDay +' - rest');
    }

}





/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

if((fileName.charAt(0) === '#')
    || fileName.endsWith('.pdf') 
        || fileName.endsWith('.docx')) {

    console.log('Store');
}
else{
    console.log('Delete');
}



/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var name = student.name;
var roll = student.roll;
var department = student.department;

var email = name + roll + '.' + department + '@ph.ac.bd';

console.log(email);



/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

 var finalSalary = startingSalary * (1.05)** experience;
 finalSalary = finalSalary.toFixed(2); 
 console.log(finalSalary);