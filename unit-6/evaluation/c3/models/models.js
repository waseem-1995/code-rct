const mongoose = require("mongoose");


const footballSchema = mongoose.Schema({
" player_name": String,
 "position": String,
 "team": String,
 "assists":String,
 "nationality":String,
 "goals": Number,
 "age": Number,
 "mutable":Boolean
});

const FootballModel = mongoose.model("list", footballSchema);

module.exports = {
    FootballModel
}

