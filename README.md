# restaurant menu api

### overview

The Restaurant Menu API provides access to various categories of menu items such as appetizers, entrees, sandwiches, and more. This API allows users to retrieve menu items filtered by category and optional criteria such as price range and description keywords.

### base url

The API is served under the base URL ```http://localhost:4000/api```. Ensure that the server is running on this port or configure it accordingly.

### endpoints

#### fetch menu item by category

Retrieve menu items filtered by category with optional query parameters to filter further based on price and description.

- URL: ```/api/{category}```
- Method: ```GET```
- URL Params:
  - Required: 
    - ```category=[string] - The category of menu items to retrieve.```
  - Optional:
    - ```minPrice=[string] - Minimum price of the menu items.```
    - ```maxPrice=[string] - Maximum price of the menu items.```
    - ```descriptionContains=[string] - A keyword to search in the item descriptions.```
- Success Response:
  - Code: ```200 OK```
  - Content: ```An array of menu items.```
- Error Response:
  - Code: ```404 Not Found```
  - Content: ```{ error : "Category not found" }```

### data model

#### menu item
```
name (string): The name of the menu item.
description (string): Description of the menu item.
price (number): Price of the menu item.
```
### examples

#### request

```
GET /api/entrees?minPrice=10&maxPrice=20&descriptionContains=pasta
```

#### response

```json
[
  {
    "name": "Farfalle Pasta with Braised Pork in Tomato Cream",
    "description": "capers butternut squash kale",
    "price": 12.95
  }
]

```
### Overview

The Restaurant Menu API also supports GraphQL queries, allowing clients to fetch data about menu items in a more flexible and efficient manner. Below are the GraphQL queries that can be used to interact with the API.

### GraphQL Endpoint

The GraphQL endpoint is available at http://localhost:4000/graphql.

### Queries

#### Fetch Menu Items by Category

Fetch all menu items from a specific category.

- Query:

```graphql
query GetMenuItemsByCategory($category: String!) {
  getMenuItemsByCategory(category: $category) {
    name
    description
    price
  }
}
```

#### Fetch All Menu Items

Retrieve all menu items across all categories.

- Query:

```graphql
query GetAllMenuItems {
  getAllMenuItems {
    name
    description
    price
  }
}
```
#### Custom Search in Menu Items

Search for manu items that include a specific keyword in their description

- Query:

```graphql
query CustomQuery($search: String!) {
    customQuery(search: $search) {
      name
      description
      price
    }
}
```