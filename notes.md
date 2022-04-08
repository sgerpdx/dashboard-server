original test script: "test": "echo \"Error: no test specified\" && exit 1",

"heroku addons:create heroku-postgresql:hobby-dev && heroku config:set PGSSLMODE=require && heroku config:get DATABASE_URL"

sql setup for results table:
CREATE TABLE results (
id SERIAL PRIMARY KEY NOT NULL,
race_date DATE NOT NULL,
location_id INTEGER NOT NULL REFERENCES races_id,
first_place_id INTEGER NOT NULL REFERENCES drivers_id,
second_place_id INTEGER NOT NULL REFERENCES drivers_id,
third_place_id INTEGER NOT NULL REFERENCES drivers_id
);
