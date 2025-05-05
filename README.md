# Poke API

Poke API is an API built with Node.js and Express that allows managing Pokémon information. This project includes functionalities to retrieve, create, update, and delete Pokémon data.

## Project Structure

The project is organized as follows:

```
package.json
server.js
src/
  config/
    config.js
    database.js
  controllers/
    pokemonController.js
  docs/
    pokemon.docs.js
  middleware/
    errorHandler.js
  migrations/
    20250423004200-create-pokemon.js
  models/
    pokemonModel.js
  routes/
    pokemonRoutes.js
  services/
    pokemonService.js
  utils/
```

### Folder Description

- **config/**: Configuration files, such as the database.
- **controllers/**: Controllers that handle route logic.
- **docs/**: API documentation.
- **middleware/**: Custom middlewares, such as error handling.
- **migrations/**: Database migrations.
- **models/**: Data models.
- **routes/**: API route definitions.
- **services/**: Business logic and services.
- **utils/**: Utilities and helper functions.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Compatible database (e.g., SQLite, PostgreSQL, etc.)

## Installation

1. Clone this repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd poke_api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in a `.env` file:
   ```env
   DB_HOST=localhost
   DB_USER=user
   DB_PASSWORD=password
   DB_NAME=poke_api
   PORT=3000
   ```

4. Run migrations to set up the database:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Access the API at `http://localhost:3000`.

## Main Endpoints

- **GET /pokemon**: Retrieves a list of Pokémon.
- **POST /pokemon**: Creates a new Pokémon.
- **PUT /pokemon/:id**: Updates an existing Pokémon.
- **DELETE /pokemon/:id**: Deletes a Pokémon.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.