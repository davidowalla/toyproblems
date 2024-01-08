
function getValidMark() {
    let mark;

    do {
        
        mark = prompt("Enter the student's mark (between 0 and 100):");

        mark = parseFloat(mark);

        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Please enter a valid mark between 0 and 100.");
        } else {
            break;
        }
    } while (true);

    return mark;
}

const studentMark = getValidMark();

let grade;

if (studentMark > 79) {
    grade = 'A';
} else if (studentMark >= 60 && studentMark <= 79) {
    grade = 'B';
} else if (studentMark >= 50 && studentMark <= 59) {
    grade = 'C';
} else if (studentMark >= 40 && studentMark <= 49) {
    grade = 'D';
} else {
    grade = 'E';
}

alert(`The student's mark is ${studentMark}, and the grade is: ${grade}`);
