var express = require('express');
var router = express.Router();

const stand = require('../models/stand');

router.get('/', async(req, res) => {
    let stands = await stand.findAll();
    res.status(200).json(stands);
});

router.get('/:standId', async(req, res) => {
    let { standId } = req.params;
    let aStand = await stand.findByPk(standId);
    res.status(200).json(aStand);
});

router.post('/create', async(req, res) => {
    console.log(req.body);

    const newStand = stand.build({
        Nom: req.body.nom,
        Description: req.body.description,
        Localisation: req.body.localisation,
        Nom_Entreprise: req.body.nom_entreprise,
        Catégorie: req.body.categorie,
        Email: req.body.email,
        Telephone: req.body.telephone,
    });

    await newStand.save();

    res.send("User_created");
});

module.exports = router;
