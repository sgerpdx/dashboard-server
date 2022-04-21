const pool = require("../utils/pool");

module.exports = class Bookmark {
  id;
  bookmark_title;
  bookmark_url;
  date_created;
  user_id;

  constructor(row) {
    this.id = row.id;
    this.bookmarkTitle = row.bookmark_title;
    this.bookmarkURL = row.bookmark_url;
    this.dateCreated = row.date_created;
    this.userId = row.user_id;
  }

  static async retrieve() {
    const { rows } = await pool.query("SELECT * FROM bookmarks");
    return rows.map((row) => new Bookmark(row));
  }

  static async retrieveById(id) {
    const { rows } = await pool.query("SELECT * FROM bookmarks WHERE id=$1", [
      id,
    ]);
    return new Bookmark(rows[0]);
  }

  static async retrieveByUserId(userId) {
    const { rows } = await pool.query(
      "SELECT * FROM bookmarks WHERE user_id=$1",
      [userId]
    );
    return rows.map((row) => new Bookmark(row));
  }

  static async create(bookmark) {
    const { rows } = await pool.query(
      "INSERT INTO bookmarks (bookmark_title, bookmark_url, date_created, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        bookmark.bookmarkTitle,
        bookmark.bookmarkURL,
        bookmark.dateCreated,
        bookmark.userId,
      ]
    );
    return new Bookmark(rows[0]);
  }

  static async update(bookmark, id) {
    const { rows } = await pool.query(
      `
      UPDATE bookmarks
      SET bookmark_title=$1, bookmark_url=$2, date_created=$3, user_id=$4
      WHERE id=$5
      RETURNING *
      `,
      [
        bookmark.bookmarkTitle,
        bookmark.bookmarkURL,
        bookmark.dateCreated,
        bookmark.userId,
        id,
      ]
    );
    return new Bookmark(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      "DELETE FROM bookmarks WHERE id=$1 RETURNING *",
      [id]
    );
    return new Bookmark(rows[0]);
  }
};
