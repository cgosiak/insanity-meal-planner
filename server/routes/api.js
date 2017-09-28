const express = require('express');
const fs = require('fs');

const router = express.Router();

const recipesJSON = './server/json/recipes.json';
const ingredientsJSON = './server/json/ingredients.json';

router.get('/ingredients', (req, res) => {
    fs.readFile(ingredientsJSON, function(err, data) {
        if (err) {
            res.status(500).json({
                error: err
            });
        }
        else {
            res.status(200).json(JSON.parse(data));
        }
    });
});

router.get('/recipes', (req, res) => {
    fs.readFile(recipesJSON, function(err, data) {
        if (err) {
            res.status(500).json({
                error: err
            });
        }
        else {
            res.status(200).json(JSON.parse(data));
        }
    });
});

router.post('/new-recipe', (req, res) => {
    fs.writeFile(recipesJSON, JSON.stringify(req.body, null, 4));
    res.status(200).json({
        message: "Success"
    });
});

module.exports = router;
