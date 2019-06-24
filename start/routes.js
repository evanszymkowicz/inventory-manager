"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

//custom routes
Route.get("/", "Admin/DashboardController.index");
Route.get("/admin", "Admin/DashboardController.index");
Route.get("/index.html", "Admin/DashboardController.index");
Route.get("/index", "admin/DashboardController.index");

//API
Route.get("api/admin/products", "admin/productController.sendAllProducts");
Route.post("api/admin/products", "Admin/OrderController.store");

// admin/products
Route.get("/admin/products", "admin/productController.index");
Route.post("/admin/products", "admin/productController.store");
Route.get("/admin/products/create", "admin/productController.create");
Route.get("/admin/products/:id", "admin/productController.show");
Route.get("/admin/products/:id/edit", "admin/productController.edit");
Route.put("/admin/products/:id", "admin/productController.update");
Route.get("/admin/products/:id/delete", "admin/productController.delete");

// Admin/Brands
Route.get("/admin/brands", "Admin/BrandController.index");
Route.post("/admin/brands", "Admin/BrandController.store");
Route.get("/admin/brands/create", "Admin/BrandController.create");
Route.get("/admin/brands/:id", "Admin/BrandController.show");
Route.get("/admin/brands/:id/edit", "Admin/BrandController.edit");
Route.put("/admin/brands/:id", "Admin/BrandController.update");
Route.get("/admin/brands/:id/delete", "Admin/BrandController.delete");

// Admin/Orders
Route.get("/admin/orders", "Admin/OrderController.index");
Route.post("/admin/orders", "Admin/OrderController.store");
Route.get("/admin/orders/create", "Admin/OrderController.create");
Route.get("/admin/orders/:id", "Admin/OrderController.show");
Route.get("/admin/orders/:id/edit", "Admin/OrderController.edit");
Route.put("/admin/orders/:id", "Admin/OrderController.update");
Route.get("/admin/orders/:id/delete", "Admin/OrderController.delete");
