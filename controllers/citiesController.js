
const db = require('../models');

// show all cities
const index = (req, res) => {
    db.City.find({}, (error, foundCities) => {
        if (error) return res.status(500).send(error);
        console.log({foundCities})
        // response.sendResponse(res, foundCities);
        res.send(foundCities)
    });
    
}

// show one city, taking id
const show = (req, res) => {
  console.log('requesting one city')
  db.City.findById(req.params.id, (error, foundCity) => {
    if (error) return res.status(500).send(error);
    // response.sendResponse(res, foundPokemons);
    res.send(foundCity)
    });
}

// creating post for a city
// const createPost = 

module.exports = {
  index,
  show,
  // createPost
};
