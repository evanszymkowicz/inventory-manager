# inventory-manager

## Notes:

Using a bootstrapped UI with partials in `resources/views/partials`: </br>
Header.edge</br>
menu-left.edge</br>

Had renamed the div class "breadcrumbs" to something else not realizing that it is a bootstrap class. Went back to fix it, but there could be some bugs remaining.

## .env file

DB_CONNECTION=mysql
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=shoes_ims

## Each commit in order:

First Commit: Just atom/git nonsense </br>
View layer: Bringing in a bootstrapped UI</br>
Migrations: Controllers in Http/Admin and the view layer</br>
Webpack: Added .babelrc, gulpfile. Edited Package.json. Added React components</br>
