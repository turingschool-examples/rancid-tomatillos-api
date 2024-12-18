# Rancid Tomatillos API

## Set Up
- Clone this repo
- `cd` into directory
- `npm i`
- `node server.js` or `nodemon server.js`
- Navigate to `http://localhost:3001/api/v1/movies` to see the movie data

## Routes
The server should be running locally at `http://localhost:3001`.

| Goal | URL Path | Verb | Data to Send | Sample Sucessful Response | Sample Unsuccessful Response |
|----------|--------|----|--------------|---------------------------|---------------------------|
|Get all movie posters| `/api/v1/movies` | `GET` | n/a | A `200` response code with an array of movie objects, ex: `[{"id": 1184918, "poster_path": "something.jpg", "title": "The Wild Robot", "vote_count": 9}, ...]` | n/a |
|Up or down vote a movie|`/api/v1/movies/:id` | `PATCH` | The `id` of the movie you're voting for in the URL and an object specifying and up or down vote in the request body, ex: `{ vote_direction: <"up" or "down"> }`| A `200` level response with single movie with correct vote count, ex: `{"id": 1184918, "poster_path": "something.jpg", "title": "The Wild Robot", "vote_count": 10}` | `4xx` level response with a message like: `No movie found with an ID of 123. Try again with an existing movie ID.` or `Expected body: { vote_direction: 'up' or 'down' }`
|Get a movie's details|`/api/v1/movies/:id` | `GET` | The `id` of the movie you need details for in the URL | A `200` response code with an object of movie details, ex: `{"backdrop_path": "something.jpg", "genre_ids": ["Family"], "id": 1184918, "original_language": "en", "overview": "After a shipwreck, ...", "popularity": 199.001, "poster_path": "something.jpg", "release_date": "2024-09-12", "title": "The Wild Robot"}`| `4xx` level response with a message like: `No movie found with an ID of 38. Try again with an existing movie ID.`| 
