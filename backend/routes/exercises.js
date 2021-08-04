const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res) =>{
    Exercise.find()
        .then(exercises =>res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = Number(req.body.mobile);
    const dob = Date.parse(req.body.dob);

    newExercise = new Exercise({
        name,
        email,
        mobile,
        dob,
    });
    
    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+ err));
}
);


module.exports = router;