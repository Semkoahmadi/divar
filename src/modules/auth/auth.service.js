const autoBind = require("auto-bind");
const UserModel = require("../user/user.model");

class AuthService {
    #model;
    constructor(){
        autoBind(this);
        this.#model = UserModel
    }
    async sendOTP(mobile) {
        const user = await this.#model.findOne({})
    }
    async checkOTP(mobile, code) {

    }
}
module.exports = new AuthService();