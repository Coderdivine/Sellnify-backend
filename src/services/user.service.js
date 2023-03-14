const User = require("./../models/user.model");
const CustomError = require("./../utils/custom-error");

class UserService {

    async login(seller_id){
        const result = await User.findOne({seller_id});
        if(!result) throw new CustomError("Seller not found",404);
        return result;
    }

    async updateUserProfile(data, seller_id) {
        if (!data.city) throw new CustomError("City is required");

        const context = {
            city: data.city,
        };

        return await this.update(seller_id, context);
    }

    async update(seller_id, data) {
        const user = await User.updateOne({ seller_id }, { $set: data });
        if (!user) throw new CustomError("user does not exist", 404);

        return user;
    }
}

module.exports = new UserService();
