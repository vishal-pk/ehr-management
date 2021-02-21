const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
// @route     POST api/users
// @desc      Regiter a doctor
// @access    Public
router.post(
  '/doctor',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email , password} = req.body;


    try {
      let doctor = await Doctor.findOne({ email });

      if (doctor) {
        return res.status(400).json({ msg: 'Doctor already exists' });
      }

      doctor = new Doctor({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      doctor.password = await bcrypt.hash(password, salt);

      await doctor.save();

      const payload = {
        doctor: {
          id: doctor.id,
          name:doctor.name,
          email:doctor.email,
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



router.post(
  '/patient',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age , address,gender,dob,contactnum} = req.body;
    

    try {
      // let patient = await Patient.findOne({ email });

      // if (patient) {
      //   return res.status(400).json({ msg: 'Patient already exists' });
      // }

      patient = new Patient({
        name, 
        age, 
        address,
        gender,
        dob,
        contactnum
      });

      const salt = await bcrypt.genSalt(10);

      // patient.password = await bcrypt.hash(password, salt);

      await patient.save();

      const payload = {
        patient: {
          id: patient.id,
          name:patient.name,
          // email:patient.email,
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



// router.put('/:id', auth, async (req, res) => {
//   const { name, email, number,address,city,pincode,profession,img } = req.body;


//   const userFields= {};
//   if (name) userFields.name = name;
//   if (email) userFields.email = email;
//   if (number) userFields.number= number;
//   if (address) userFields.address = address;
//   if (city) userFields.city = city;
//   if (pincode) userFields.pincode = pincode;
//   if (profession) userFields.profession = profession;
//   if (img) userFields.img = img;

//   try {
//     let doctor= await Doctor.findById(req.params.id);

//     if (!doctor) return res.status(404).json({ msg: 'Doctor not found' });

   

//     doctor = await Doctor.findByIdAndUpdate(
//       req.params.id,
//       { $set: userFields },
//       { new: true }
//     );

//     res.json(doctor);
//     const payload = {
//       doctor: {
//         id: doctor.id,
//         name:doctor.name,
//         number:doctor.number,
//         email:doctor.email,
//         city:doctor.city,
//         profession: doctor.profession,
//         img: doctor.img
//       }
//     };
//     jwt.sign(
//       payload,
//       config.get('jwtSecret'),
//       {
//         expiresIn: 360000
//       },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });
module.exports = router;
