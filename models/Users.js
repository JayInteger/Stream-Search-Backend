const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
        username: String,
        firstname: String,
        lastname: String,
        age: Number,
        email: String,
        registered: String,
        favoriteGenres: Array,
        id: String,
        role: String,
        desc: String,
        avatar: String,
        lang: String,
        abos: Array,
        favoriteMovieIds: Array,
        alreadySeenMovieIds: Array,
        wantToWatchMovieIds: Array,
        
});

module.exports = mongoose.model('user',UsersSchema);