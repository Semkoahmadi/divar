const AuthService = require("./auth.service");
const autoBind = require("auto-bind");
const AuthMessage = require("./auth.message")
class AuthController {
    #service;
    constructor() {
        autoBind(this)
        this.#service = AuthService
    }
    async sendOTP(req, res, next) {
        try {
            const { mobile } = req.body;
            await this.#service.sendOTP(mobile);
            return {
                message: AuthMessage.SendOtpSuccessfully
            }
        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController();