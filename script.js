document.getElementById('split-bill-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const foodPrices = document.querySelectorAll('.your-food-price');
    const totalPrice = parseFloat(document.getElementById('total-price').value);
    const taxPercentage = parseFloat(document.getElementById('tax-percentage').value) / 100;
    const serviceFeePercentage = parseFloat(document.getElementById('service-fee-percentage').value) / 100;

    const totalTax = totalPrice * taxPercentage;
    const totalServiceFee = totalPrice * serviceFeePercentage;

    let yourSplit = 0;
    foodPrices.forEach(function (foodPrice) {
        const foodPriceValue = parseFloat(foodPrice.value);
        yourSplit += foodPriceValue + (foodPriceValue / totalPrice) * totalServiceFee;
    });

    document.getElementById('total-amount').textContent = yourSplit.toFixed(2);
    document.getElementById('breakdown').textContent = `Tax: Rp ${(totalTax).toFixed(2)}, Service Fee: Rp ${(totalServiceFee).toFixed(2)}`;
});

document.getElementById('add-food-price').addEventListener('click', function () {
    const container = document.getElementById('food-price-container');
    const index = document.querySelectorAll('.your-food-price').length;

    const newFoodPrice = document.createElement('div');
    newFoodPrice.classList.add('form-group');
    newFoodPrice.innerHTML = `
        <label for="your-food-price-${index}">Your Food Price *</label>
        <input type="number" id="your-food-price-${index}" class="your-food-price" required>
    `;
    container.appendChild(newFoodPrice);
});
