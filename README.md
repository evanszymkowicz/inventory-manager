# inventory-manager

## Notes:

Using a bootstrapped UI `resources/views/layouts/partials`: </br>
Header.edge </br>
menu-left.edge </br>

Had renamed the div class "breadcrumbs" to something else not realizing that it is a bootstrap class. Went back to fix it, but there could be some bugs remaining.

## .env file

DB_CONNECTION=mysql </br>
DB_USER=root </br>
DB_PASSWORD=root </br>
DB_DATABASE=shoes_ims </br>

## Each commit in order:

First Commit: Just atom/git nonsense </br>
View layer: Bringing in a bootstrapped UI </br>
Migrations: Controllers in Http/Admin and the view layer </br>
Webpack: Added .babelrc, gulpfile. Edited Package.json. Added React components </br>
Migrations: New branch. Adonis uses KnexJS to help with SQL Schema. `adonis make:migration[name]` loads one into src/database/migrations </br>
	-also upgraded axios to patch security issue< /br>
cleanup/debug: The usual. Would like to go back and take out unused UI pages, but it keeps crashing Atom. </br>

## List of Migrations:

(To be debugged) </br>

CreateProducts: id, title, sku, material, description, brand_id, qty, size, user_id, created, updated. </br>
Brands </br>
AddForeignKeyToProductsSchema </br>
CreateOrders </br>
CreateItems </br>
AddColumnToProducts </br>
AddColumnToBrands </br>
AddPriceToBrands </br>
AddZipCodeToOrders </br>
AddForeignKey </br>

I need to go back and debug these, wanted to get them up first though.
`npm install sqlstring`
