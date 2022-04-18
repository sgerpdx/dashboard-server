DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS bookmarks CASCADE;
DROP TABLE IF EXISTS notes;

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    moniker TEXT NOT NULL,
    timezone INT NOT NULL,
    lang TEXT NOT NULL
);

CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY NOT NULL,
    bookmark_title TEXT NOT NULL,
    bookmark_url TEXT NOT NULL,
    date_created DATE,
    user_id VARCHAR(250) NOT NULL REFERENCES users(id)
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY NOT NULL,
    note_title TEXT NOT NULL,
    note_text TEXT NOT NULL,
    date_created DATE,
    user_id VARCHAR(250) NOT NULL REFERENCES users(id)
);

INSERT INTO users (id, moniker, timezone, lang)
VALUES (
    '35e4c2b4-5ab3-4778-834d-331861705815',
    'Sam',
    8,
    'en'
);

INSERT INTO bookmarks (bookmark_title, bookmark_url, date_created, user_id)
VALUES (
    'Placeholder Kitten Images',
    'https://placekitten.com/200/300',
    '2022-04-18',
    '35e4c2b4-5ab3-4778-834d-331861705815'
);

INSERT INTO notes (note_title, note_text, date_created, user_id)
VALUES (
    'Donut Reminder',
    'Remember to buy more donuts on Monday.',
    '2022-04-18',
    '35e4c2b4-5ab3-4778-834d-331861705815'
);

