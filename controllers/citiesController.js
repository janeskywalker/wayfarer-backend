
const db = require('../models');

const index = (req, res) => {
    db.City.find({}, (error, foundCities) => {
        if (error) return response.sendErrorResponse(res, error);
        console.log({foundCities})
        // response.sendResponse(res, foundCities);
        res.send(foundCities)
    });
    
}

const show = (req, res) => {
  console.log('requesting one city')
  db.City.findById(req.params.id, (error, foundCity) => {
    if (error) return response.sendErrorResponse(res, error);
    // response.sendResponse(res, foundPokemons);
    res.send(foundCity)
    });
}


module.exports = {
  index,
  show
};
