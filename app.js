window.onload = loadWater;

function loadWater() {
    const today = new Date().toLocaleDateString();
    const savedDate = localStorage.getItem('lastUpdatedDate');

    // Check if saved date is different from today
    if (savedDate !== today) {
        resetWater(); // Reset water if a new day has started
        localStorage.setItem('lastUpdatedDate', today); // Update the saved date
    }

    const water = localStorage.getItem('water') || 0;
    const waterGoal = localStorage.getItem('waterGoal') || 124;

    document.getElementById('water-amount').innerHTML = `${water} oz`;
    document.getElementById('goal-display').textContent = `${waterGoal} oz`;
    updateWaterVisual();
}

function addWater(amount) {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('lastUpdatedDate', today); // Update the date each time water is added

    let water = parseInt(localStorage.getItem('water')) || 0;
    let waterGoal = parseInt(localStorage.getItem('waterGoal')) || 124;

    water += amount;
    localStorage.setItem('water', water);
    document.getElementById('water-amount').innerHTML = `${water} oz`;
    document.getElementById('goal-display').textContent = `${waterGoal} oz`;
    updateWaterVisual();
}

function addCustomWater() {
    const customAmount = parseInt(document.getElementById('custom-amount').value) || 0;
    addWater(customAmount);
}

function editGoal() {
    const goalDisplay = document.getElementById('goal-display');
    const goalInput = document.getElementById('goal-input');
    const waterGoal = localStorage.getItem('waterGoal') || 64;

    goalDisplay.style.display = 'none';
    goalInput.style.display = 'inline';
    goalInput.value = waterGoal;
    goalInput.focus();

    goalInput.addEventListener('blur', saveGoal); // Save on focus loss
    goalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') saveGoal();
    });
}

function saveGoal() {
    const goalInput = document.getElementById('goal-input');
    const newGoal = parseInt(goalInput.value);

    if (!isNaN(newGoal) && newGoal > 0) {
        localStorage.setItem('waterGoal', newGoal);
    }
    
    goalInput.style.display = 'none';
    document.getElementById('goal-display').style.display = 'inline';
    updateWaterVisual();
}

function updateWaterVisual() {
    const waterLevel = document.getElementById('water-level');
    const water = parseInt(localStorage.getItem('water')) || 0;
    const waterGoal = parseInt(localStorage.getItem('waterGoal')) || 124;
    const cupHeight = 150;

    const waterHeight = (water / waterGoal) * cupHeight;
    waterLevel.style.height = `${Math.min(waterHeight, cupHeight)}px`;
    document.getElementById('goal-display').textContent = `${waterGoal} oz`;
}

function resetWater() {
    localStorage.setItem('water', 0);
    document.getElementById('water-amount').innerHTML = '0 oz';
    updateWaterVisual();
}
