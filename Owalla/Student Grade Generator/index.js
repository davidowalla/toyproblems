
// Function to prompt user for input until a valid mark is entered
function getValidMark() {
    let mark;

    do {
        // Prompt the user for input
        mark = prompt("Enter the student's mark (between 0 and 100):");

        // Convert the input to a number
        mark = parseFloat(mark);

        // Check if the input is a number and within the valid range
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert("Please enter a valid mark between 0 and 100.");
        } else {
            // Valid input, break out of the loop
            break;
        }
    } while (true);

    return mark;
}

// Get the student's mark
const studentMark = getValidMark();

// Determine the grade based on the mark
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

// Display the result
alert(`The student's mark is ${studentMark}, and the grade is: ${grade}`);
