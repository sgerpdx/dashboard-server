## Dashboard Server

This repo acts as a server for [Personal Web Dashboard](https://github.com/sgerpdx/personal-web-dashboard) which is intended to be a use-in-any-browser app for storing personal web bookmarks, as well as accessing local time and eventually, weather and news.

Currently this code provides for three endpoints:

- /bookmarks -- Fully accessible via the client-side code for CRUD routes.
  - /bookmarks/:id -- Usable with GET, PUT and DELETE.
- /notes -- Meant for recording miscellaneous info for personal use. Not yet implemented in client.
- /news -- Runs a simple fetch to external [Mediastack](https://mediastack.com/) API for news.

As of yet user account/auth functionality has not been added to this code.
