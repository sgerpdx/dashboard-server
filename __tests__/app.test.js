require("dotenv").config();
const app = require("../lib/app.js");
const request = require("supertest");
//const { bookmarksData } = require("../data/bookmarks");

//// *** CRUD routes pass these tests but we need to mock the db connection for better testing practices
//// *** Also need before/after cleanup code to handle the following (request(app)) error:
//// **** "Jest has detected the following 1 open handle potentially keeping Jest from exiting"

describe("postgresSQL database CRUD routes", () => {
  // Test Jest itself
  //   it("verifies that Jest is working", () => {
  //     expect(1).toBe(1);
  //   });

  //// CRUD Route Tests for Bookmarks
  // GET
  it("returns all bookmarks", async () => {
    //
    const expectation = [
      {
        id: 1,
        bookmarkTitle: "place kitten",
        bookmarkURL: "https://placekitten.com/200/300",
        dateCreated: "2022-04-04T07:00:00.000Z",
      },
      {
        id: 4,
        bookmarkTitle: "neocities",
        bookmarkURL: "https://neocities.org/",
        dateCreated: "2022-04-05T07:00:00.000Z",
      },
      {
        id: 6,
        bookmarkTitle: "The AV Yacht Club",
        bookmarkURL: "https://www.avclub.com/",
        dateCreated: "2022-04-06T07:00:00.000Z",
      },
      {
        id: 14,
        bookmarkTitle: "Subaru",
        bookmarkURL: "http://www.subaru.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
      {
        id: 13,
        bookmarkTitle: "Toyota Aeronautical Vehicles",
        bookmarkURL: "http://www.toyota.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
    ];

    //
    const data = await request(app)
      .get("/api/v1/bookmarks")
      .expect("Content-Type", /json/)
      .expect(200);

    //
    expect(data.body).toEqual(expectation);
  });

  // GET by id
  it("returns a single bookmark by id", async () => {
    //
    const expectation = {
      id: 6,
      bookmarkTitle: "The AV Yacht Club",
      bookmarkURL: "https://www.avclub.com/",
      dateCreated: "2022-04-06T07:00:00.000Z",
    };

    //
    const data = await request(app)
      .get("/api/v1/bookmarks/6")
      .expect("Content-Type", /json/)
      .expect(200);

    //
    expect(data.body).toEqual(expectation);
  });

  // POST
  it("creates and inserts a new bookmark row into the database", async () => {
    //
    const newBookmark = {
      bookmarkTitle: "Mazda",
      bookmarkURL: "https://www.mazda.com/",
      dateCreated: "2022-04-13",
    };

    //
    const expectation = {
      ...newBookmark,
      dateCreated: "2022-04-13T07:00:00.000Z",
      id: 31,
    };

    //
    const data = await request(app)
      .post("/api/v1/bookmarks")
      .send(newBookmark)
      .expect("Content-Type", /json/)
      .expect(200);

    //
    expect(data.body).toEqual(expectation);

    //
    const allBookmarks = await request(app)
      .get("/api/v1/bookmarks")
      .expect("Content-Type", /json/)
      .expect(200);

    //
    const mazda = allBookmarks.body.find(
      (bookmark) => bookmark.bookmarkTitle === "Mazda"
    );

    //
    expect(mazda).toEqual(expectation);
  });

  // PUT
  it("updates a single bookmark by id", async () => {
    //
    const newBookmark = {
      bookmarkTitle: "Toyota Marine Vehicles",
      bookmarkURL: "http://www.toyota.com",
      dateCreated: "2022-04-09T07:00:00.000Z",
    };

    //
    const expectation = {
      ...newBookmark,
      id: 13,
    };

    //
    await request(app)
      .put("/api/v1/bookmarks/13")
      .send(newBookmark)
      .expect("Content-Type", /json/)
      .expect(200);

    //
    const updatedBookmark = await request(app)
      .get("/api/v1/bookmarks/13")
      .expect("Content-Type", /json/)
      .expect(200);

    //
    expect(updatedBookmark.body).toEqual(expectation);
  });

  // DELETE
  it("deletes a single bookmark by id", async () => {
    //
    const expectation = {
      id: 14,
      bookmarkTitle: "Subaru",
      bookmarkURL: "http://www.subaru.com",
      dateCreated: "2022-04-09T07:00:00.000Z",
    };

    //
    const data = await request(app)
      .delete("/api/v1/bookmarks/14")
      .expect("Content-Type", /json/)
      .expect(200);

    //
    expect(data.body).toEqual(expectation);

    //
    const deletedBookmark = await request(app)
      .get("/api/v1/bookmarks/14")
      .expect("Content-Type", /json/)
      .expect(500);

    //
    expect(deletedBookmark.body).toEqual({
      message: "Cannot read property 'id' of undefined",
      status: 500,
    });
  });
});
