

const batteryBatches = [5, 7, 2, 17]; // Update array as needed

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Initial value for the accumulator

module.exports = { totalBatteries };
