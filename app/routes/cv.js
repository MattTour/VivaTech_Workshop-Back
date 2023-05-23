var express = require('express');
var router = express.Router();

const cv = require('../models/cv');

router.get('/', async(req, res) => {
    let cvs = await cv.findAll();
    res.status(200).json(cvs);
});

router.get('/:cvId', async(req, res) => {
    let { cvId } = req.params;
    let unCV = await cv.findByPk(cvId);
    res.status(200).json(unCV);
});

router.post('/create', async(req, res) => {
    console.log(req.body);

    const newCV = cv.build({
        id_user: req.body.user,
        Last_Diplome: req.body.diplome,
        Poste_Recherche: req.body.poste,
    });

    await newCV.save();

    res.send("CV_created");
});

router.post('/update/:cvId', async(req, res) => {
    let { cvId } = req.params;
    let aCV = await cv.findByPk(cvId);

    if (req.body.user) {
        aCV.id_user = req.body.user;
    }
    if (req.body.diplome) {
        aCV.Last_Diplome = req.body.diplome;
    }
    if (req.body.poste) {
        aCV.Poste_Recherche = req.body.poste;
    }

    await aCV.save();

    res.send("CV_updated");
});

router.post('/delete/:cvId', async(req, res) => {
    let { cvId } = req.params;
    let aCV = await cv.findByPk(cvId);

    await aCV.destroy();

    res.send("CV_deleted");
});

module.exports = router;
