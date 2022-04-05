const pool = require("../utils/pool");

module.exports = class Bookmark {
  id;
  bookmark_title;
  bookmark_url;
  date_created;

  constructor(row) {
    this.id = row.id;
    this.bookmarkTitle = row.bookmark_title;
    this.bookmarkURL = row.bookmark_url;
    this.dateCreated = row.date_created;
  }

  static async retrieve() {
    const { rows } = await pool.query("SELECT * FROM bookmarks");
    return rows.map((row) => new Bookmark(row));
  }

  static async create(bookmark) {
    const { rows } = await pool.query(
      "INSERT INTO bookmarks (bookmark_title, bookmark_url, date_created) VALUES ($1, $2, $3) RETURNING *",
      [bookmark.bookmarkTitle, bookmark.bookmarkURL, bookmark.dateCreated]
    );
    console.log("Bookmark:", Bookmark);
    return new Bookmark(rows[0]);
  }
};
