require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then((data) => spotifyApi.setAccessToken(data.body["access_token"]))
  .catch((error) =>
    console.log("Something went wrong when retrieving an access token", error)
  );

// Our routes go here
app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/artist-search", (req, res, next) => {
  spotifyApi
    .searchArtists(req.query.artist) //name del input del form és artist, és el query que volem obtenir

    .then((data) => { //fem servir then perquè ha de tenir un ordre, primer busca, després troba i després mostra.
      //console.log('The received data from the API: ', data.body.artists.items);
      res.render("artist-search", { data: data.body.artists.items }); //fem render a la pàgina on volem obtenir els resultats, i la informació que volem està en aquesta direcció que guardarem sota el nom de data
    })
    .catch((err) =>
      console.log("The error while searching artists occurred: ", err)
    );
});

app.get("/albums/:artistId", (req, res, next) => { //al ser un paràmetre posem els : . artistId és només el nom de la variable, podria seere qualsevol altre
  spotifyApi
    .getArtistAlbums(req.params.artistId) //fem servir params perquè ja tenim la informació i només hem de cercar-la dins del contingut que ja tenim?
    .then((data) => {
      //console.log('The received data from the API: ', data.body.items);
      res.render("albums", { data: data.body.items }); //lloc on volem mostrar la info i la info que mostrarem, aquesta sempre entre curly braces
    })
    .catch((err) =>
      console.log("The error while searching albums occurred: ", err)
    );
});

app.get("/tracks/:albumId", (req, res, next) => {
  spotifyApi
    .getAlbumTracks(req.params.albumId, { limit: 5, offset: 1 })
    .then((data) => {
      //console.log(data.body.items);
      res.render("tracks", { data: data.body.items });
    })
    .catch((err) =>
      console.log("The error while searching tracks occurred: ", err)
    );
});

app.listen(3000, () =>
  console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊")
);
