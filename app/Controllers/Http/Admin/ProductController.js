"use strict"
const Database = use('Database')

class ProductController {
	index({view})  //object with a view property
		return view.render("admin/products/all")
	}
	store({request, response}) {
		Database.raw(`
			INSERT INTO products (title, sku, )
			`)
		return request.post()
	}
	create({view}) {
		return view.render("admin/products/create")
	}
	show(view) {
		return view.render("admin/products/show")
	}
	edit(view) {
		return view.render("admin/products/edit")
	}
	update() {

	}
	delete() {

	}
}

module.exports = ProductController
