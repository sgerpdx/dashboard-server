require("dotenv").config();
const app = require("../lib/app.js");
const pool = require("../lib/utils/pool");
const request = require("supertest");
//const { bookmarksData } = require("../data/bookmarks");

describe("postgresSQL database CRUD routes", () => {
  // Will this code help?
  //   beforeEach(() => {
  //     return setup(pool);
  //   });

  // Tests
  //   it("verifies that Jest is working", () => {
  //     expect(1).toBe(1);
  //   });

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
        id: 13,
        bookmarkTitle: "Toyota",
        bookmarkURL: "http://www.toyota.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
      {
        id: 14,
        bookmarkTitle: "Subaru",
        bookmarkURL: "http://www.subaru.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
      {
        id: 19,
        bookmarkTitle: "Suzuki",
        bookmarkURL: "http://www.suzuki.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
      {
        id: 20,
        bookmarkTitle: "Lexus",
        bookmarkURL: "http://www.lexus.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
      {
        id: 22,
        bookmarkTitle: "Ford",
        bookmarkURL: "http://www.ford.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
      {
        id: 23,
        bookmarkTitle: "Chrysler",
        bookmarkURL: "http://www.chrysler.com",
        dateCreated: "2022-04-09T07:00:00.000Z",
      },
      {
        id: 24,
        bookmarkTitle: "Star Wars",
        bookmarkURL: "http://www.starwars.com",
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
});
