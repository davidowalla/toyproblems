
function calculateGrade() {
  // Get the input element
  const marksInput = document.getElementById('marksInput');

  // Get the value of the input
  const marks = parseFloat(marksInput.value);

  // Get the output element
  const gradeOutput = document.getElementById('gradeOutput');

  // Check if the input is a valid number within the specified range
  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    const grade = getGrade(marks);
    gradeOutput.textContent = `Grade: ${grade}`;
  } else {
    gradeOutput.textContent = 'Invalid input. Please enter a number between 0 & 100.';
  }
}

function getGrade(marks) {
  if (marks > 79) {
    return 'A';
  } else if (marks >= 60 && marks <= 79) {
    return 'B';
  } else if (marks >= 50 && marks <= 59) {
    return 'C';
  } else if (marks >= 40 && marks <= 49) {
    return 'D';
  } else {
    return 'E';
  }
}