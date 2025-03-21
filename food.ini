function calculateFoodSavings() {
    const currentFoodSpending = parseFloat(document.getElementById('currentFoodSpending').value);

    if (isNaN(currentFoodSpending) || currentFoodSpending < 0) {
        alert("Пожалуйста, введите корректные расходы на продукты.");
        return;
    }

    // Примерные коэффициенты экономии (можно настроить)
    const savingsRate = 0.15; // 15% от текущих расходов

    // Рассчитываем экономию
    const possibleSavings = currentFoodSpending * savingsRate;

    // Отображаем результаты
    document.getElementById('savingsAmount').textContent = possibleSavings.toFixed(2);

    // Советы по экономии
    let tips = "";
    if (possibleSavings > 1000) {
        tips = "Попробуйте планировать меню на неделю, чтобы избежать импульсивных покупок и использовать все продукты.";
    } else if (possibleSavings > 500) {
        tips = "Сравнивайте цены в разных магазинах и покупайте оптом продукты длительного хранения.";
    } else {
        tips = "Сократите походы в рестораны и готовьте дома чаще.";
    }
    document.getElementById('savingsTips').textContent = tips;
}
