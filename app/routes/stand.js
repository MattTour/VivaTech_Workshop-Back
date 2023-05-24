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

    res.send("Stand_created");
});

router.post('/update/:standId', async(req, res) => {
    let { standId } = req.params;
    let aStand = await stand.findByPk(standId);

    if (req.body.nom) {
        aStand.Nom = req.body.nom;
    }
    if (req.body.description) {
        aStand.Description = req.body.description;
    }
    if (req.body.localisation) {
        aStand.Localisation = req.body.localisation;
    }
    if (req.body.nom_entreprise) {
        aStand.Nom_Entreprise = req.body.nom_entreprise;
    }
    if (req.body.categorie) {
        aStand.Catégorie = req.body.categorie;
    }
    if (req.body.email) {
        aStand.Email = req.body.email;
    }
    if (req.body.telephone) {
        aStand.Telephone = req.body.telephone;
    }

    await aStand.save();

    res.send("Stand_updated");
});

router.post('/delete/:standId', async(req, res) => {
    let { standId } = req.params;
    let aStand = await stand.findByPk(standId);

    await aStand.destroy();

    res.send("Stand_deleted");
});

router.get('/categorie/:categorie', async(req, res) => {
    let { categorie } = req.params;
    let stands = await stand.findAll({
        where: {
            Catégorie: categorie
        }
    });

    res.status(200).json(stands);
});

module.exports = router;
