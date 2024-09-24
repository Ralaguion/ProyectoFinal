# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  "images": [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
  ]
}

1. Obtener todos los productos
GET: /products
URL completa: https://dummyjson.com/products
Descripción: Obtiene la lista completa de productos.
2. Obtener un producto por ID
GET: /products/{id}
URL completa: https://dummyjson.com/products/{id}
Descripción: Obtiene un producto específico por su ID.
Ejemplo: https://dummyjson.com/products/1
3. Buscar productos por palabra clave
GET: /products/search?q={query}
URL completa: https://dummyjson.com/products/search?q={query}
Descripción: Busca productos que coincidan con una palabra clave.
Ejemplo: https://dummyjson.com/products/search?q=phone
4. Obtener productos por categoría
GET: /products/category/{category}
URL completa: https://dummyjson.com/products/category/{category}
Descripción: Obtiene productos filtrados por categoría.
Ejemplo: https://dummyjson.com/products/category/smartphones
5. Agregar un nuevo producto
POST: /products/add
URL completa: https://dummyjson.com/products/add
Descripción: Agrega un nuevo producto (requiere datos en el cuerpo de la solicitud).
6. Actualizar un producto
PUT: /products/{id}
URL completa: https://dummyjson.com/products/{id}
Descripción: Actualiza un producto existente por su ID (requiere datos en el cuerpo de la solicitud).
Ejemplo: https://dummyjson.com/products/1
7. Eliminar un producto
DELETE: /products/{id}
URL completa: https://dummyjson.com/products/{id}
Descripción: Elimina un producto por su ID.
Ejemplo: https://dummyjson.com/products/1
Ejemplo para un CRUD básico:
Crear (POST): https://dummyjson.com/products/add
Leer (GET): https://dummyjson.com/products/1
Actualizar (PUT): https://dummyjson.com/products/1
Eliminar (DELETE): https://dummyjson.com/products/1