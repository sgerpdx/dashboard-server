const pool = require("../utils/pool");

module.exports = class User {
  id;
  moniker;
  timezone;
  lang;

  constructor(row) {
    this.id = row.id;
    this.moniker = row.moniker;
    this.timezone = row.timezone;
    this.lang = row.lang;
  }

  static async retrieve() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows.map((row) => new User(row));
  }

  static async retrieveById(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    return new User(rows[0]);
  }

  static async create(user) {
    const { rows } = await pool.query(
      "INSERT INTO users (id, moniker, timezone, lang) VALUES ($1, $2, $3, $4) RETURNING *",
      [user.id, user.moniker, user.timezone, user.lang]
    );
    return new User(rows[0]);
  }

  static async update(user, id) {
    const { rows } = await pool.query(
      `
        UPDATE users
        SET moniker=$1, timezone=$2, lang=$3
        WHERE id=$4
        RETURNING *
        `,
      [user.moniker, user.timezone, user.lang, id]
    );
    return new User(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      [id]
    );
    return new User(rows[0]);
  }
};
