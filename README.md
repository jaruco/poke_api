# Poke API

Poke API es una API desarrollada con Node.js y Express que permite gestionar información sobre Pokémon. Este proyecto incluye funcionalidades para consultar, crear, actualizar y eliminar datos de Pokémon.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

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

### Descripción de Carpetas

- **config/**: Archivos de configuración, como la base de datos.
- **controllers/**: Controladores que manejan la lógica de las rutas.
- **docs/**: Documentación de la API.
- **middleware/**: Middlewares personalizados, como el manejo de errores.
- **migrations/**: Migraciones para la base de datos.
- **models/**: Modelos de datos.
- **routes/**: Definición de las rutas de la API.
- **services/**: Lógica de negocio y servicios.
- **utils/**: Utilidades y funciones auxiliares.

## Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Base de datos compatible (por ejemplo, SQLite, PostgreSQL, etc.)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd poke_api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno en un archivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=usuario
   DB_PASSWORD=contraseña
   DB_NAME=poke_api
   PORT=3000
   ```

4. Ejecuta las migraciones para configurar la base de datos:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```

2. Accede a la API en `http://localhost:3000`.

## Endpoints Principales

- **GET /pokemon**: Obtiene una lista de Pokémon.
- **POST /pokemon**: Crea un nuevo Pokémon.
- **PUT /pokemon/:id**: Actualiza un Pokémon existente.
- **DELETE /pokemon/:id**: Elimina un Pokémon.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.