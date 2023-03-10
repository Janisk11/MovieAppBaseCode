const MoviesInfo = require("../models/movieDb");

module.exports.getMovies = async (req, res) => {
    try {
        let result = await MoviesInfo.find();
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.getMovie = async (req, res) => {
    try {
        var {id} = req.params;
        let result = await MoviesInfo.findById({_id:id});
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.addMovie = async (req, res) => {
    try {
        let movie = new MoviesInfo(req.body);
        movie.save(); 
        if (movie) {
            res.json({status:true});
        } else {
            res.json({status:false});
        }
    } catch (error) {
        res.json({status:false});
    }
}

module.exports.removeMovie = async (req, res) => {
    try {
        await MoviesInfo.findByIdAndDelete(req.body._id);
        res.send("data deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.updateMovie = async (req, res) => {
    try {
        await MoviesInfo.findByIdAndUpdate(req.params.id, req.body);
        res.send("data updated");
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports.movieSearch = async (req, res) => {
    try {
        let result = await MoviesInfo.find({"mName":{ $regex: "(?i)"+req.body.mName+"(?-i)"}});
        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
