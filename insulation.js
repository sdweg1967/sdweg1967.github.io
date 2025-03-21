function calculateInsulationSavings() {
  let currentCost = parseFloat(document.getElementById("currentHeatingCost").value);
  let insulationType = document.getElementById("insulationType").value;

  let savingsPercentage = 0;
  switch (insulationType) {
    case "mineralWool":
      savingsPercentage = 0.3; // Пример: экономия 30%
      break;
    case "expandedPolystyrene":
      savingsPercentage = 0.4; // Пример: экономия 40%
      break;
    case "other":
      savingsPercentage = 0.2; // Пример: экономия 20%
      break;
  }

  let savings = currentCost * savingsPercentage;
  document.getElementById("insulationSavings").textContent = "Экономия на отоплении: " + savings.toFixed(2) + " руб.";
}
