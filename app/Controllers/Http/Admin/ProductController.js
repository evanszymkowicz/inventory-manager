"use strict";

const Database = use("Database");

class ProductController {
  async index({ view, request, response }) {
    try {
      let allProducts = await Database.raw(`
			SELECT products.id,
			products.title, products.sku, products.price, brands.title as brand,
			concat(users.f_name, ' ', users.l_name) as user,
			products.material, products.qty, products.size,
			products.user_id, products.created_at
			FROM products
			INNER JOIN brands
			ON products.brand_id = brands.id
			INNER JOIN users
			ON products.user_id = users.id
			ORDER BY created_at ASC
		`);
      allProducts = allProducts[0];

      return view.render("admin/products/all", { allProducts });
    } catch (error) {
      console.log(error);
      return response.redirect("back");
    }
  }
async store ({request, response}){
	try {
		const post = request.post()
		await Database.raw(`
			INSERT INTO products (title, sku, img_url, material, description, brand_id, qty, price, size, user_id)
			Values(${sanitize.escape(post.title)}, ${sanitize.escape(post.sku)},
			Values(${sanitize.escape(post.title)}, ${sanitize.escape(post.sku)},
	        ${sanitize.escape(post.img_url)},
	        ${sanitize.escape(post.material)},
	        ${sanitize.escape(post.description)},
	        ${sanitize.escape(post.brand_id)},
	        ${sanitize.escape(post.qty)},
	        ${sanitize.escape(post.price)},
	        ${sanitize.escape(post.size)},
	        ${parseInt(1)})
	     `)
		return response.redirect('/admin/products')
    } catch (error){
      console.log(error)
      return response.redirect('back')
    }
  }
	async create({view, request, response}){
		let brands = await Database.raw(`
			SELECT * FROM brands
			ORDER BY brands.title ASC
		`)
    brands = brands[0]
    return view.render('admin/products/create', {brands})
  }
  async show({view, request, response, params}) {
    try {
      let product = await Database.raw(`
        SELECT products.id,
        products.title, products.sku, products.img_url, products.description, brands.title as brand,
        concat(users.f_name, ' ', users.l_name) as user,
        products.material, products.qty, products.price, products.size,
        products.user_id, products.created_at
        FROM products
        INNER JOIN brands
        ON products.brand_id = brands.id
        INNER JOIN users
        ON products.user_id = users.id
        WHERE products.id = ${params.id}
        ORDER BY created_at ASC
        LIMIT 1
      `)
      product = product[0][0]
    }
	}

module.exports = ProductController;
