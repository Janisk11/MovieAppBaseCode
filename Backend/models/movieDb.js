const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://user:user@cluster0.stvhrzo.mongodb.net/?retryWrites=true&w=majority")

const Schema = mongoose.Schema;

var movieSchema = new Schema(
    {
       mName : String,
       director: String,
       producer:String,
       actor : String,
       actress : String,
       language : String,
       mCamera: String,
       mYear: Number
    }
)

var MoviesInfo = mongoose.model("movies",movieSchema);
module.exports = MoviesInfo;