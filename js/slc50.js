const probabilities = {
  "Starlight Points": 0.673,
  "Starlight Fragments": 0.2987,
  "Starlight Card": 0.0252,
  "Premium Starlight Card": 0.0031,
};

const maxChests = 50;

function getRandomResult() {
  const randomValue = Math.random();
  let accumulatedProbability = 0;
  for (const [item, probability] of Object.entries(probabilities)) {
    accumulatedProbability += probability;
    if (randomValue < accumulatedProbability) {
      return item;
    }
  }
  return "Error"; // Should never reach here
}

function simulateChestOpening() {
  let numChestsOpened = 0;
  while (numChestsOpened < maxChests) {
    const result = getRandomResult();
    numChestsOpened++;
    if (result === "Starlight Card") {
      return numChestsOpened;
    }
  }
  return "Starlight Card Not Found";
}

function runSimulations(numSimulations) {
  let chestsDrawn = [];
  for (let i = 0; i < numSimulations; i++) {
    const chestsNeeded = simulateChestOpening();
    if (chestsNeeded !== "Starlight Card Not Found") {
      chestsDrawn.push(chestsNeeded);
    }
  }

  const totalChests = chestsDrawn.reduce((acc, curr) => acc + curr, 0);
  const averageChests = totalChests / (chestsDrawn.length || 1);
  const lowestChestsNeeded = Math.min(...chestsDrawn);
  const highestChestsNeeded = Math.max(...chestsDrawn);

  const results = `
    Average Chests: ${averageChests.toFixed(2)}
    Lowest Chests Needed: ${lowestChestsNeeded}
    Highest Chests Needed: ${highestChestsNeeded}
  `;

  document.getElementById('results').textContent = results;
}

const simulateButton = document.getElementById('simulateButton');
const numSimulationsInput = document.getElementById('numSimulations');

simulateButton.addEventListener('click', () => {
  const userNumSimulations = parseInt(numSimulationsInput.value);
  if (isNaN(userNumSimulations) || userNumSimulations <= 0) {
    alert("Please enter a valid positive number of simulations.");
    return;
  }

  runSimulations(userNumSimulations);
});
