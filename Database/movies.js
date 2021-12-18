const mongoose = require("mongoose");

const MoviesSchema = mongoose.Schema({
    imageurl: String,
    title: String,
    actor: String
});

const MoviesModel = mongoose.model("movies", MoviesSchema);

module.exports = MoviesModel;