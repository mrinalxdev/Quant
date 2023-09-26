const router = require("express").Router();
const User = require("../Modals/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/create/user",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  body("username").isLength({ min: 5 }),
  body("phonenumber").isLength({ min: 10 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json("Some Error Occured");
    }
    try {
      let user = await User.finOne({ email: req.body.eamil });
      if (user) {
        return res.status(200).json("Please Login with correct password");
      }

      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profile: req.body.profile,
        phonenumber: req.body.phonenumber,
      });
      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        JWTSEC
      );
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      return res.status(400).json("Server Error");
    }
  }
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json("Some Error Occured");
    }

    try {
      const user = await User.findOne({ email: req.body.email }).select(
        "+password"
      );
      if (!user) {
        return res.status(400).json("User dosen't found");
      }
      const Comparepassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!Comparepassword) {
        return res.status(200).json("Password Error");
      }
      const accessToken = jwt.sign(
        {
          id: user._id,
          username: user.username,
        },
        JWTSEC
      );
      const { password, ...other } = user._doc;
      res.status(200).json({ other, accessToken });
    } catch (error) {
      res.status.json("Internal Sever Error");
    }
  }
);

module.exports = router;
