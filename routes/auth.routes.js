const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);

// the get route skipped

// .post() route ==> to process form data
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log(`Password hash: ${hashedPassword}`);
});
module.exports = router;
