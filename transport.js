function calculateCarCost() {
  let distance = parseFloat(document.getElementById("carDistance").value);
  let fuelConsumption = parseFloat(document.getElementById("carFuelConsumption").value);
  let fuelPrice = parseFloat(document.getElementById("fuelPrice").value);

  let cost = (distance / 100) * fuelConsumption * fuelPrice;
  document.getElementById("carCost").textContent = "Стоимость автомобиля в месяц: " + cost.toFixed(2) + " руб.";
}

function calculatePublicTransportCost() {
  let trips = parseInt(document.getElementById("publicTransportTrips").value);
  let price = parseFloat(document.getElementById("publicTransportPrice").value);

  let cost = trips * price;
  document.getElementById("publicTransportCost").textContent = "Стоимость общественного транспорта в месяц: " + cost.toFixed(2) + " руб.";
}
