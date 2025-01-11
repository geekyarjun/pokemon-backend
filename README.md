# Node.js Project

## Overview

This is a Node.js project designed to serve as the backend for the Pokemon application. It utilizes the following technologies:

- **Node.js**
- **Express.js**
- **MongoDB**
- **dotenv** for environment variable management

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v20 or later)
- **npm** (v6 or later) or **yarn**
- **MongoDB** (local or cloud instance)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/geekyarjun/pokemon-backend.git
cd your-repo

```

### 2. Install Dependencies

```bash
npm install
# or
yarn install

```

### 3. Create `.env.<environment>` File

Create a `.env.development` or `.env.production` file in the root directory and add the following environment variables:

```env
# Application settings
NODE_ENV=development
PORT=3100

# Database settings
MONGODB_URL=mongodb://localhost:27017/<your_database_name>

# Pokemons API base url
POKEMON_API_BASE_URL=https://pokeapi.co/api/v2/pokemon
```

> **Note:** Replace placeholder values (e.g., `your_database_name`) with actual value like **pokemon**.

> **Note:** Ensure values should be according to the respective environment.

### 4. Start MongoDB

Ensure MongoDB is running locally or configure the `MONGODB_URL` variable to point to a cloud-hosted MongoDB instance (e.g., MongoDB Atlas).

### 5. Start the Application

#### Development Mode

```bash
npm run dev

```

This starts the application with hot-reloading (using `nodemon`).

#### Production Mode

```bash
npm start

```

This starts the application in production mode.

The application will be available at `http://localhost:3100` by default.

---

## Scripts

- **`npm run dev`**: Starts the app in development mode with `nodemon`.
- **`npm start`**: Starts the app in production mode.

---

## Project Structure

```
.
├── src
│   ├── controllers      # Route handlers
│   ├── middleware       # Custom middleware
│   ├── models           # Database models (Mongoose schemas)
│   ├── routes           # API routes
│   ├── services         # Business logic
│   └── utils            # Utility functions
├── .env                 # Environment variables
├── .gitignore           # Ignored files
├── package.json         # Node.js dependencies and scripts
└── README.md            # Project documentation

```

---

## API Endpoints

### Example: Pokémon API

| Month  | Endpoint                          | Description                 |
| ------ | --------------------------------- | --------------------------- |
| GET    | `/api/v1/pokemons`                | Fetch all Pokemons          |
| POST   | `/api/v1/pokemons/favourites/:id` | Add a Pokemon to favourites |
| DELETE | `/api/v1/pokemons/favourites/:id` | Remove from favourites      |

---

## Environment Variables

Here are the key environment variables used in this project:
| Variable | Description | Default Value |
| -------- | ------- | ------ |
| NODE_ENV | Environment type (development/production) | `development` |
| PORT | Port for the server | `3100` |
| MONGODB_URL | MongoDB connection string | `mongodb://localhost:27017/your_database_name` |

---

## Troubleshooting

1.  **MongoDB Connection Errors**:

    - Ensure MongoDB is running locally or that the `MONGODB_URL` is correct.

2.  **Environment Variables Not Loaded**:

    - Check if the `.env` file exists in the root directory and contains the required variables.

3.  **Port Already in Use**:

    - Modify the `PORT` value in the `.env` file or terminate the process using the port.

---

## Contributing

1.  Fork the repository.
2.  Create a new branch for your feature/fix.
3.  Commit your changes with a clear message.
4.  Push your branch and open a pull request.

---

## License

This project is licensed under the [MIT License](https://mit-license.org/).

---

## Contact

For questions or support, please reach out to [Arjun Shrivastava](mailto:itsarjunshrivastava@gmail.com).
