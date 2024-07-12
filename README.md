# Product and Order Management API

This project is a RESTful API for managing products and orders using Express, MongoDB, and TypeScript. It includes full CRUD operations for products and orders, along with search functionality.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

### 1. Clone the Repository

```sh
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

npm install

### 3. Set Up Environment Variables

Create a .env file in the root of the project and add the following environment variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/your-database-name

Replace your-database-name with the name of your MongoDB database.

### 4. Start MongoDB

Make sure MongoDB is running on your machine. You can start MongoDB using the following command:

mongod

### 5. Run the Application

npm run dev

## API Endpoints

### Product Endpoints

Create a Product

POST /api/products

Request Body:
{
"name": "iPhone 13",
"description": "A sleek and powerful smartphone with cutting-edge features.",
"price": 999,
"category": "Electronics",
"tags": ["smartphone", "Apple", "iOS"],
"variants": [
{
"type": "Color",
"value": "Midnight Blue"
},
{
"type": "Storage Capacity",
"value": "256GB"
}
],
"inventory": {
"quantity": 50,
"inStock": true
}
}

### Get All Products

GET /api/products

### Get a Single Product

GET /api/products/:productId

### Update a Product

PUT /api/products/:productId

### Request Body:

{
"name": "Updated Product Name",
"description": "Updated Description",
"price": 1099,
"category": "Updated Category",
"tags": ["updated", "tags"]
}

### Delete a Product

DELETE /api/products/:productId

### Search Products

GET /api/products?searchTerm=iphone

### Order Endpoints

### Create an Order

POST /api/orders

### Request Body:

{
"productId": "60c72b2f9b1d4c001c8d6f8e",
"quantity": 2,
"totalPrice": 1998,
"status": "pending"
}

### Get All Orders

GET /api/orders

### Get a Single Order

GET /api/orders/:orderId

### Search Orders

GET /api/orders?email=pending...
