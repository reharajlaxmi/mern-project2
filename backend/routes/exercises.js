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

router.route("/add").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
    let myobj = {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
    });
  });
  
  // This section will help you update a record by id.
//   router.route("/update/:id").post(function (req, res) {
//     let db_connect = dbo.getDb("employees");
//     let myquery = { id: req.body.id };
//     let newvalues = {
//       $set: {
//         person_name: req.body.person_name,
//         person_position: req.body.person_position,
//         person_level: req.body.person_level,
//       },
//     };
//     db_connect
//       .collection("records")
//       .updateOne(myquery, newvalues, function (err, res) {
//         if (err) throw err;
//         console.log("1 document updated");
//       });
//   });


module.exports = router;