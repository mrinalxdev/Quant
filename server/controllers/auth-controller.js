const hashService = require("../services/hash-service");
const otpService = require("../services/otp-service");

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
}

module.exports = new AuthController();
