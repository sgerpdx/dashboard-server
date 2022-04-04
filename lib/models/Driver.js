const drivers = require("../controllers/drivers");
const pool = require("../utils/pool");

module.exports = class Driver {
  id;
  fname;
  lname;
  handle;
  sponsor;
  car_color;
  car_number;

  constructor(row) {
    this.id = row.id;
    this.fname = row.fname;
    this.lname = row.lname;
    this.handle = row.handle;
    this.sponsor = row.sponsor;
    this.car_color = row.car_color;
    this.car_number = row.car_number;
  }

  static async create(driver) {
    const { rows } = await pool.query(
      "INSERT INTO drivers (fname, lname, handle, sponsor, car_color, car_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        driver.fname,
        driver.lname,
        driver.handle,
        driver.sponsor,
        driver.car_color,
        driver.car_number,
      ]
    );
    console.log("D:", Driver);
    return new Driver(rows[0]);
  }

  static async retrieve() {
    const { rows } = await pool.query("SELECT * FROM drivers");
    return rows.map((row) => new Driver(row));
  }

  static async retrieveById(id) {
    const { rows } = await pool.query("SELECT * FROM drivers WHERE id=$1", [
      id,
    ]);
    return new Driver(rows[0]);
  }

  static async update(driver, id) {
    const { rows } = await pool.query(
      `
      UPDATE drivers
      SET fname=$1, lname=$2, handle=$3, sponsor=$4, car_color=$5, car_number=$6
      WHERE id=$7
      RETURNING *
      `,
      [
        driver.fname,
        driver.lname,
        driver.handle,
        driver.sponsor,
        driver.car_color,
        driver.car_number,
        id,
      ]
    );
    return new Driver(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      "DELETE FROM drivers WHERE id=$1 RETURNING *",
      [id]
    );
    return new Driver(rows[0]);
  }
};
