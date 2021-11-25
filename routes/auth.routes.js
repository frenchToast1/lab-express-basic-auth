const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);

const User = require("../models/User.model.js");

// the get route skipped

// .post() route ==> to process form data
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log(`Password hash: ${hashedPassword}`);

  res.send("ok");

  // Creer un nouveal utilisateur en DB
  User.create({
    username: "juliekogan1@gmail.com",
    password: "123456789",
  })

    .then((userFromDB) => {
      console.log("Newly created user is: ", userFromDB);
    })
    .catch((error) => next(error));
});

//
module.exports = router;
