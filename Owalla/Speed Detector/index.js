// Function to calculate demerit points based on the speed
function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const pointsPerExcessSpeed = 5;
  const pointsThresholdForSuspension = 12;

  if (speed < speedLimit) {
      console.log("Ok");
  } else {
      // Calculate demerit points
      const demeritPoints = Math.floor((speed - speedLimit) / pointsPerExcessSpeed);

      console.log(`Points: ${demeritPoints}`);

      // Check if the driver's license should be suspended
      if (demeritPoints > pointsThresholdForSuspension) {
          console.log("License suspended");
      }
  }
}

// Example usage: You can replace 80 with the actual speed input
calculateDemeritPoints(80);