console.log("Welcome to Employee Wage Problem Using JavaScript")

//UC-04------->Calculating Wages for a Month assuming 20 Working Days in a Month
let totalEmpHrs=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
{
  let empCheck=Math.floor(Math.random()*10)%3;
  totalEmpHrs+=getWorkingHours(empCheck);
}

let empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("Hour: "+totalEmpHrs+" Emp Wage: "+empWage);