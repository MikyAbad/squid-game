# Squid Game #1 (Statues) 🐙

Statues is a fun and interactive game where players must click buttons alternatively simulating they're walking, avoiding "moving" when the light is RED and "walking" fast when the light is GREEN to increase their score. If you "walk" twice with the same foot, 1 point will be discounted. If you walk with the RED light you will LOSE all your points.

The game is built as a PWA using React and leverages various services for handling game logic and user management.

➡️ LIVE version: [Squid Game](https://mikyabad.github.io/squid-game/) ⬅️

## Table of Contents 📋

- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Additional Notes](#additional-notes)
- [License](#license)

## Features 📦

- Dynamic light cycle changing between red and green depending on user score
- Anxious ticking clock audio incrementing with your score
- Vibrating device/browser when losing all your points (if supported!)
- PWA app that you can enjoy offline!
- User score management and persistence
- Interactive buttons for gameplay
- User authentication and score saving
- Responsive design with icons

## Installation 🔧

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/MikyAbad/squid-game.git
   cd squid-game
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Running the project 🚀

To start the development server, use:

```sh
 npm run dev
```

This will start the app on http://localhost:5173.

## Running tests 🧪

This project uses vitest and @testing-library/react for testing. To run the tests, use:

```sh
 npm run test
```

## Project Structure 🏗️

This is the basic files and folders structure tree of the project made in React with Vite:

```php
  squid-game/
  ├── public/                     # Public assets
  ├── src/                        # Source code
  │   ├── components/             # React components
  │   │   └── Button.jsx          # Reusable button component
  │   │   └── GameLogo.jsx        # Reusable logo component
  │   │   └── UserScore.jsx       # Reusable user score info component
  │   ├── services/               # Service functions for game logic
  │   │   └── GameService/        # Game logic functions and tests
  │   │   └── UserService/        # User login functions and tests
  │   ├── utils/                  # Useful functions/helpers
  │   │   └── vibrate/            # Vibrate function
  │   ├── views/                  # View components
  │   │   └── Home.jsx            # Home page
  │   │   └── Game.jsx            # Game page
  │   │   └── Leaderboard.jsx     # High scores page
  │   ├── main.jsx                # Entry point
  │   └── index.css               # Styles for the entire app
  ├── package.json                # Project configuration and dependencies
  └── README.md                   # Project documentation
```

## Dependencies 🛠️

- React
- React DOM
- React Router DOM
- React Icons
- vite-plugin-pwa
- Vitest (development only)
- @testing-library/react (development only)
- @testing-library/jest-dom (development only)
- @vite-pwa/assets-generator (development only)
- gh-pages (development only)

## Additional Notes ✒️

Maybe both audio and vibration features are not fully supported by your browser/device. If that's your case, these features won't be available for you 😞

## License 🖇️

This project is licensed under the MIT License.
