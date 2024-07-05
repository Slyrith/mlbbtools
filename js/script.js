const simulationContainer = document.getElementById('simulation-container');

function loadSimulation(simulationUrl) {
  fetch(simulationUrl)
    .then(response => response.text())
    .then(htmlContent => {
      simulationContainer.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error("Error loading simulation:", error);
      simulationContainer.textContent = "Error loading simulation.";
    });
}

const simSlc50Button = document.getElementById('sim-slc50');
const simOtherButton = document.getElementById('sim-other');

simSlc50Button.addEventListener('click', () => {
  loadSimulation('simulations/slc50.html');
});

simOtherButton.addEventListener('click', () => {
  loadSimulation('simulations/other-sim.html');
});

// Add event listeners for other simulation buttons
