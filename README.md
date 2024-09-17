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
| `/api/v1/movies` | `GET` | n/a | `200` level rsponse with an array of movie objects as the body, ex: `[ {"id": 1184918, "poster_path": "https://image.tmdb.org/t/p/original//vcZfDONCxoOU7mosZEnkhYujBEG.jpg", "title": "The Wild Robot", "vote_count": 9}, ...]` | n/a |
|`/api/v1/movies` | `POST` | A song object in the request body, ex: `{songName: "Idle Momements", artistName: "Grant Green"}`| A `201` level response with the new song object as the body, ex: `{songName: "Idle Momements", artistName: "Grant Green", id:1234}` | `4xx` level response with a body like: `{errorMessage: 'Cannot POST: missing property <property> on request'}`|
|`/api/v1/movies/:id` | `DELETE` | The `id` of the song you want to delete in the URL | Response object with a status code of `204` (**no body**)| `4xx` level resposne with a body like: `{errorMessage: Cannot DELETE: no song with an ID of <songId> found}`| 
