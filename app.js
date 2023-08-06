let username = prompt("Please Enter Your Name");
let welcomeMsg = prompt(`Welcome ${username}, Please Enter Your Mark (0-100) !`);
let mark = Math.floor(welcomeMsg);
console.log(mark)

if (mark >= 0 && mark <= 49) {
    result = "F/Fail";
} else if (mark >= 50 && mark <= 60) {
    result = "D/Passed";
} else if (mark >= 61 && mark <= 70) {
    result = "C/Passed";
} else if (mark >= 71 && mark <= 80) {
    result = "B/Passed";
} else if (mark >= 81 && mark <= 90) {
    result = "A/Passed";
} else if (mark >= 91 && mark <= 100) {
    result = "A+/Passed";
} else {
    result = "Invalid Answer Because Your Mark should be >= 0 and <= 100";
}

alert(result);




