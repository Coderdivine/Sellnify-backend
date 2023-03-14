const response = require("../utils/response");
const UserService = require("../services/user.service");

class UserContoller {
    
    async login(req, res) {
        const result = await UserService.login(req.$seller_id);
        res.status(200).send(response("User Logged In", result));
    }

    async updateUserProfile(req, res) {
        const result = await UserService.updateUserProfile(req.body, req.$seller_id);
        res.status(200).send(response("City updated", result));
    }

}

module.exports = new UserContoller();
