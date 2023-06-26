const hashService = require("../services/hash-service");
const otpService = require("../services/otp-service");
const userService = require("../services/user-service");
const tokenService = require("../services/token-service")

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone Feilds is required" });
    }

    const otp = await otpService.generateOtp();
    const ttl = 1000 * 60 * 2; // 2 Min for the OTP
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    try {
      await otpService.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "message sending failed" });
    }
  }

  async verifyOtp(req, res) {
    const { otp, phone, hash } = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All feilds are required" });
    }

    const [hashedOtp, expires] = hash.split(".");
    if (Date.now() > +expires) {
      res.status(400).json({ message: "OTP expired" });
    }

    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOtp(hashedOtp, data);
    if (!isValid) {
      res.status(400).json({ message: "Invalid OTP entered" });
    }

    let user;

    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (error) {
      console.log(err);
      res.status(500).json({ message: " Something went wrong in DB😁" });
    }

    //Token
    const { accessToken, refreshToken} = tokenService.generateTokens({ _id: user._id, activated : false })

    res.cookie('refreshToken', refreshToken,  {
      maxAge : 1000 * 60 * 60 *24 *30,
      httpOnly : true
    })
    res.json({ accessToken })

  }
}

module.exports = new AuthController();
