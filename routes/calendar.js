/* /calendar requests to this module  */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test', function (err) {
    console.log(err);
});

var ContactModel = mongoose.Model('contact', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        // TODO: add a regular expression for an email
    }
});

router.get('/', function (req, res) {
    res.status(200).json({
        message: 'IMPL_101'
    });
});

router.post('/', function (req, res) {
    console.log(req.body);

    (new ContactModel(req.body)).save(function (err, result) {
        if (err) res.status(500).json({ error: err });
        else res.status(200).json(result);
    });
});



module.exports = router;

