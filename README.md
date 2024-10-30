# Education API

This is a RESTful API built with NestJS for managing cars, garages, and faults. The API provides endpoints to create, read, update, and delete records for cars, garages, and faults. It also includes Swagger documentation for easy testing and understanding of the API.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database](#database)
- [API Endpoints](#api-endpoints)
  - [Cars](#cars)
  - [Garages](#garages)
  - [Faults](#faults)
- [Swagger Documentation](#swagger-documentation)
- [Migration](#migration)
- [Running the Application](#running-the-application)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Arsined/Car-repair-shop-API
   cd Car-repair-shop-API-main
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

```env
DATABASE_HOST=localhost
DATABASE_NAME=education
```

## Database

The application uses PostgreSQL as the database. Make sure you have PostgreSQL installed and running. You can configure the database connection in the `.env` file.

## API Endpoints

### Cars

- **Create a new car**
  - **Method:** `POST`
  - **URL:** `/api/cars`
  - **Body:**
    ```json
    {
      "brand": "Toyota",
      "color": "white",
      "faults": [1, 2, 3],
      "garageId": 1
    }
    ```

- **Get all cars**
  - **Method:** `GET`
  - **URL:** `/api/cars`

- **Get a car by ID**
  - **Method:** `GET`
  - **URL:** `/api/cars/:id`

- **Get faults by brand**
  - **Method:** `GET`
  - **URL:** `/api/cars/brand`

- **Update a car**
  - **Method:** `PUT`
  - **URL:** `/api/cars/:id`
  - **Body:**
    ```json
    {
      "brand": "Toyota",
      "color": "white",
      "faults": [1, 2, 3],
      "garageId": 1
    }
    ```

- **Delete a car**
  - **Method:** `DELETE`
  - **URL:** `/api/cars/:id`

### Garages

- **Create a new garage**
  - **Method:** `POST`
  - **URL:** `/api/garages`
  - **Body:**
    ```json
    {
      "address": "ул. Главная, 123",
      "capacity": 10
    }
    ```

- **Get all garages**
  - **Method:** `GET`
  - **URL:** `/api/garages`

- **Get a garage by ID**
  - **Method:** `GET`
  - **URL:** `/api/garages/:id`

- **Get incomplete information about garages**
  - **Method:** `GET`
  - **URL:** `/api/garages/incomplete`

- **Update a garage**
  - **Method:** `PUT`
  - **URL:** `/api/garages/:id`
  - **Body:**
    ```json
    {
      "address": "ул. Главная, 123",
      "capacity": 10
    }
    ```

- **Delete a garage**
  - **Method:** `DELETE`
  - **URL:** `/api/garages/:id`

### Faults

- **Create a new fault**
  - **Method:** `POST`
  - **URL:** `/api/faults`
  - **Body:**
    ```json
    {
      "name": "Поломка двигателя",
      "description": "Двигатель перестал работать",
      "price": 1000
    }
    ```

- **Get all faults**
  - **Method:** `GET`
  - **URL:** `/api/faults`

- **Get a fault by ID**
  - **Method:** `GET`
  - **URL:** `/api/faults/:id`

- **Get incomplete information about faults**
  - **Method:** `GET`
  - **URL:** `/api/faults/incomplete`

- **Update a fault**
  - **Method:** `PUT`
  - **URL:** `/api/faults/:id`
  - **Body:**
    ```json
    {
      "name": "Поломка двигателя",
      "description": "Двигатель перестал работать",
      "price": 1000
    }
    ```

- **Delete a fault**
  - **Method:** `DELETE`
  - **URL:** `/api/faults/:id`

## Swagger Documentation

Swagger documentation is available at `http://localhost:3001/api_docs` when the application is running. It provides a user-friendly interface to test the API endpoints.

## Migration

The application uses TypeORM for database migrations. To run the migrations, use the following command:

```bash
npm run typeorm migration:run
```

## Running the Application

1. Start the application:
   ```bash
   npm run start
   ```

2. The API will be available at `http://localhost:3001/api`.

3. Swagger documentation will be available at `http://localhost:3001/api_docs`.
