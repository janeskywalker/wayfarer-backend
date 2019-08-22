
const db = require('../models');

const index = (req, res) => {
    db.City.find({}, (error, foundCities) => {
        if (error) return response.sendErrorResponse(res, error);
        console.log({foundCities})
        // response.sendResponse(res, foundCities);
        res.send(foundCities)
    });
    
}

module.exports = {
  index,
};
