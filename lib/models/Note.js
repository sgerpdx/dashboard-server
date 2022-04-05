const pool = require("../utils/pool");

module.exports = class Note {
  id;
  note_title;
  note_text;
  date_created;

  constructor(row) {
    this.id = row.id;
    this.noteTitle = row.note_title;
    this.noteText = row.note_text;
    this.dateCreated = row.date_created;
  }

  static async retrieve() {
    const { rows } = await pool.query("SELECT * FROM notes");
    return rows.map((row) => new Note(row));
  }
};
