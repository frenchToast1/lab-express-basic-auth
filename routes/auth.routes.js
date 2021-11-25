const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);

const User = require("../models/User.model.js");

// the get route skipped

// .post() route ==> to process form data
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body; // {username: 'jdoe@gmail.com', password: 'toto123'}

  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log(`Password hash: ${hashedPassword}`);

  res.send("ok");

  router.post("/login", (req, res, next) => {
    const { username, password } = req.body;
    if (username === "" || password === "") {
      res.render("auth/login", {
        errorMessage: "Please enter both, username and password to login.",
      });
      return;
    }

    User.findOne({ username }) // <== check if there's user with the provided username
      .then() // response from DB - doesn't matter if found or not)
      .catch(); // error handler in case some error occurred while getting the data from the DB)
  });
});

// Creer un nouveal utilisateur en DB
User.create({
  username: req.body.username,
  password: req.body.password,
})

  .then((userFromDB) => {
    console.log("Newly created user is: ", userFromDB);
  })
  .catch((error) => next(error));

//
module.exports = router;
