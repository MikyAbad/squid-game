# Squid Game #1 (Statues)

Statues is a fun and interactive game where players must click buttons alternatively simulating they're walking, avoiding "moving" when the light is RED and "walking" fast when the light is GREEN to increase their score. If you "walk" twice with the same foot, 1 point will be discounted. If you walk with the RED light you will LOSE all your points.

The game is built as a PWA using React and leverages various services for handling game logic and user management.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Additional Notes](#additional-notes)
- [License](#license)

## Features

- Dynamic light cycle that changes between red and green depending on user score
- PWA app that you can enjoy offline!
- User score management and persistence
- Interactive buttons for gameplay
- User authentication and score saving
- Responsive design with icons

## Installation

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

## Running the project

To start the development server, use:

```sh
 npm install
```

This will start the app on http://localhost:3000.

## Running tests

This project uses vitest and @testing-library/react for testing. To run the tests, use:

```sh
 npm test
```

## Project Structure

This project uses vitest and @testing-library/react for testing. To run the tests, use:

```php
  squid-game/
  ├── public/                     # Public assets
  ├── src/                        # Source code
  │   ├── components/             # React components
  │   │   └── Button.jsx          # Reusable button component
  │   ├── services/               # Service functions for game logic
  │   │   └── GameService/        # Game logic functions and tests
  │   │   └── UserService/        # User login functions and tests
  │   ├── views/                  # View components
  │   │   └── Home.jsx            # Home page
  │   │   └── Game.jsx            # Game page
  │   ├── main.jsx                # Entry point
  │   └── index.css               # Styles for the entire app
  ├── package.json                # Project configuration and dependencies
  └── README.md                   # Project documentation
```

## Dependencies

- React
- React Router DOM
- React Icons
- Vitest
- @testing-library/react
- @testing-library/jest-dom

## Additional Notes

Ensure you have the necessary services and API endpoints available for user authentication and score management. You might need to adjust the service URLs and logic according to your backend setup.

## License

This project is licensed under the MIT License.
