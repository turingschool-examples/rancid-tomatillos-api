# Rancid Tomatillos API

## Set Up
- Clone this repo
- `cd` into directory
- `npm i`
- `node server.js` or `nodemon server.js`
- Navigate to `http://localhost:3001/api/v1/movies` to see the movie data

## Routes
The server should be running locally at `http://localhost:3001`.

| URL Path | Verb | Data to Send | Sample Sucessful Response | Sample Unsuccessful Response |
|----------|------|--------------|---------------------------|------------------------------|
| `/api/v1/movies` | `GET` | n/a | A `200` response code with an array of movie objects, ex: `[{"id": 1184918, "poster_path": "https://image.tmdb.org/t/p/original//vcZfDONCxoOU7mosZEnkhYujBEG.jpg", "title": "The Wild Robot", "vote_count": 9}, ...]` | n/a |
|`/api/v1/movies` | `PATCH` | An object with movie id string in the request body, ex: `{ id: "1184918" }`| A `200` level response all movies returned with update vote count on appropriate movie, ex: `[{"id": 1184918, "poster_path": "https://image.tmdb.org/t/p/original//vcZfDONCxoOU7mosZEnkhYujBEG.jpg", "title": "The Wild Robot", "vote_count": 10}, ...]` | `4xx` level response with a message like: `No movie found with an ID of 123. Try again with an existing movie ID.` or `Expected format: { id: <String> }. You're missing the ID property.`
|`/api/v1/movies/:id` | `GET` | The `id` of the movie you need details for in the URL | A `200` response code with an object of movie details, ex: `{"backdrop_path": "https://image.tmdb.org/t/p/original//62zw627mH74rng9zc4tFfaR54KW.jpg", "genre_ids": ["Family"], "id": 1184918, "original_language": "en", "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.", "popularity": 199.001, "poster_path": "https://image.tmdb.org/t/p/original//vcZfDONCxoOU7mosZEnkhYujBEG.jpg", "release_date": "2024-09-12", "title": "The Wild Robot"}`| `4xx` level response with a message like: `No movie found with an ID of 38. Try again with an existing movie ID.`| 
