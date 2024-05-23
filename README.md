# Restaurant Menu API Documentation

### Overview

The Restaurant Menu API provides access to various categories of menu items such as appetizers, entrees, sandwiches, and more. This API allows users to retrieve menu items filtered by category and optional criteria such as price range and description keywords.

### Base URL

The API is served under the base URL http://localhost:4000/api. Ensure that the server is running on this port or configure it accordingly.

### Endpoints

#### Get Menu Items by Category

Retrieve menu items filtered by category with optional query parameters to filter further based on price and description.

- URL: /api/{category}
- Method: GET
- URL Params:
  - Required: 
    - category=[string] - The category of menu items to retrieve.
  - Optional:
    - minPrice=[string] - Minimum price of the menu items.
    - maxPrice=[string] - Maximum price of the menu items.
    - descriptionContains=[string] - A keyword to search in the item descriptions.
- Success Response:
  - Code: 200 OK
  - Content: An array of menu items.
- Error Response:
  - Code: 404 Not Found
  - Content: { error : "Category not found" }

### Data Model

#### MenuItem

- name (string): The name of the menu item.
- description (string): Description of the menu item.
- price (number): Price of the menu item.

### Examples

#### Request

**GET /api/entrees?minPrice=10&maxPrice=20&descriptionContains=pasta**

#### Response

```json
[
  {
    "name": "Farfalle Pasta with Braised Pork in Tomato Cream",
    "description": "capers butternut squash kale",
    "price": 12.95
  }
]
