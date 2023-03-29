console.log("Welcome to Employee Wage Problem Using JavaScript")

//UC-01----->Ability to Check Employee is present or Absent
const IS_Absent = 0
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_Absent) {
    console.log("Employee is Absent");
}
else {
    console.log("Employee is Present");
}