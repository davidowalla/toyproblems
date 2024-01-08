
function calculateDemeritPoints() {
  const speedInput = document.getElementById('speedInput');
  const resultOutput = document.getElementById('result');

  // Get the speed value from the input
  const speed = parseFloat(speedInput.value);

  // Check if the input is a valid number
  if (!isNaN(speed)) {
    const speedLimit = 70;
    const pointsPer5KmOver = 1;
    const pointsThresholdForSuspension = 12;

    if (speed < speedLimit) {
      resultOutput.textContent = "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5) * pointsPer5KmOver;
      resultOutput.textContent = `${demeritPoints} Points`;

      if (demeritPoints >= pointsThresholdForSuspension) {
        resultOutput.textContent  ="License suspended";
      }
    }
  } else {
    resultOutput.textContent = "Invalid input. Please enter a valid number.";
  }
}

function resetForm() {
  // Get the form element by its ID
  const form = document.getElementById('speedForm');

  // Reset the form
  form.reset();

  // Clear the output
  const output = document.getElementById('result');
  output.textContent = '';
}

 