# Water Tracker

A Progressive Web App (PWA) designed to help users track their daily water intake. Users can set a daily goal, record the amount of water they drink throughout the day, and visually monitor their progress with a realistic water animation. The app resets daily to encourage consistent hydration habits.

## Features

- **Daily Water Tracking**: Record water intake with preset buttons (4 oz, 8 oz, etc.) or enter a custom amount.
- **Visual Progress**: See your water level rise in a cup with a fluid animation that simulates real water movement.
- **Customizable Daily Goal**: Set and update your daily water intake goal by clicking on the fraction display in the cup.
- **Daily Reset**: Water intake resets each day, allowing you to start fresh each morning.
- **PWA Capabilities**: Installable on mobile devices and desktops for quick access.

## App

[Use the app](https://nickdeupree.github.io/WaterTracker/)

## Usage

1. **Set Your Goal**: Click on the fraction inside the cup to input your daily water intake goal (default is 64 oz).
2. **Add Water**: Use the provided buttons to add water (4 oz, 8 oz, 12 oz, 16 oz, 32 oz), or type a custom amount and press "Add."
3. **Track Your Progress**: Watch the water level rise as you log your intake. The current and goal amounts are displayed as a fraction inside the cup.
4. **Daily Reset**: The app automatically resets water intake every day.

## Code Overview

### Key Files

- **index.html**: The main HTML file with the app structure and basic elements.
- **styles.css**: Contains all the CSS for styling, including animations for the water effect.
- **app.js**: JavaScript logic for managing water intake, updating visuals, and handling the daily reset functionality.

### Core Functions

- **loadWater**: Loads the current water intake and daily goal from `localStorage` and checks if a reset is needed for a new day.
- **addWater**: Increases water intake by a specified amount, updates `localStorage`, and refreshes the visual display.
- **updateWaterVisual**: Adjusts the water level in the cup based on the current intake relative to the goal.
- **setDailyGoal**: Allows users to set or update their daily water intake goal directly within the app.
- **resetWater**: Resets the water intake at the beginning of each new day.
