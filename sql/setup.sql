DROP TABLE IF EXISTS bookmarks;
DROP TABLE IF EXISTS notes;

CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY NOT NULL,
    bookmark_title TEXT NOT NULL,
    bookmark_url TEXT NOT NULL,
    date_created DATE
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY NOT NULL,
    note_title TEXT NOT NULL,
    note_text TEXT NOT NULL,
    date_created DATE
);

INSERT INTO bookmarks (bookmark_title, bookmark_url, date_created)
VALUES (
    'place kitten',
    'https://placekitten.com/200/300',
    '2022-04-04'
);

INSERT INTO notes (note_title, note_text, date_created)
VALUES (
    'Donut Reminder',
    'Remember to buy more donuts on Monday.',
    '2022-04-04'
);

