original test script: "test": "echo \"Error: no test specified\" && exit 1",

"heroku addons:create heroku-postgresql:hobby-dev && heroku config:set PGSSLMODE=require && heroku config:get DATABASE_URL"
