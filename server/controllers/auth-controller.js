class AuthController {
  sendOtp(req, res) {
    // const { phone } = req.body
    // if (!phone){
    //     res.status(400).json({ message : 'Phone Feils is required'})
    // }
    
    res.send("Hello from Otp route")
  }
}

module.exports = new AuthController();
