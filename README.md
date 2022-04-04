## Basic Server/Back-End Setup with PostgresSQL Database + Heroku Deployment

When using Postman to test routes, for req.body either choose 'raw' and select JSON from the dropdown menu, or activate line with 'urlencoded' middleware in app.js if you would like to enter req.body via 'x-www-form-urlencoded' in Postman. The latter approach is also necessary if the data is being entered using a form on the client side.
