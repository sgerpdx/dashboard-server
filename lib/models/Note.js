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

  static async retrieveById(id) {
    const { rows } = await pool.query("SELECT * FROM notes WHERE id=$1", [id]);
    return new Note(rows[0]);
  }

  static async create(note) {
    const { rows } = await pool.query(
      "INSERT INTO notes (note_title, note_text, date_created) VALUES ($1, $2, $3) RETURNING *",
      [note.noteTitle, note.noteText, dateCreated]
    );
    console.log("Note:", Note);
    return new Note(rows[0]);
  }

  static async update(note, id) {
    const { rows } = await pool.query(
      `
      UPDATE notes
      SET note_title=$1, note_text=$2, date_created=$3
      WHERE id=$4
      RETURNING *
      `,
      [note.noteTitle, note.noteText, dateCreated, id]
    );
    return new Note(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      "DELETE FROM notes WHERE id=$1 RETURNING *",
      [id]
    );
    return new Note(rows[0]);
  }
};
