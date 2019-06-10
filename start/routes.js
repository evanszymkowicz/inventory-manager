'use strict'

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
const Route = use('Route')

//custom routes
Route.get('/', 'PageControlller.index')

Route.get('/admin/products', 'Admin/ProductController.index')
Route.post('/admin/products', 'Admin/ProductController.store') //product page route (post route)
Route.get('/admin/products/create', 'Admin/ProductController.create') //create method
Route.get('/admin/products/:id', 'Admin/ProductController.show') //ID to name and locate products
Route.get('/admin/products/:id/edit', 'Admin/ProductController.edit') //edit products
Route.put('/admin/products/:id/edit', 'Admin/ProductController.update') //Put request, submits form to the URL
Route.delete('/admin/products/:id/delete', 'Admin/ProductController.delete') //delete products
