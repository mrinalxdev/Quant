const userModel = require("../models/user-model")

class UserService {
    async findUser(filter) {
        const user = await userModel.findOne(filter)
        return user
    }

    async createUser(data) {
        const user = await userModel.create(data)
        return user
    }

}
module.exports = new UserService()