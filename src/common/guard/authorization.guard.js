const CreateHttpError = require("http-errors");
const AuthorizationMessage = require("../messages/auth.messages");
const jwt = require("jsonwebtoken");
const UserModel = require("../../modules/user/user.model");
require("dotenv").config();

const Authorization = async (req, res, next) => {
    try {
        const token = req?.cookies?.access_token;
        console.log(req.cookies);
        
        if (!token) throw new CreateHttpError.Unauthorized(AuthorizationMessage.Login);
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (typeof data === "object" && "id" in data) {
            const user = await UserModel.findById(data.id, { accessToken: 0, otp: 0 ,__v:0,updatedAt:0,verifiedMobile:0}).lean();
            if (!user) throw new CreateHttpError.Unauthorized(AuthorizationMessage.NotFoundAccount);
            req.user = user;
            return next();
        }
        throw new CreateHttpError.Unauthorized(AuthorizationMessage.InvalidToken)
    } catch (error) {
        next(error)

    }
}

module.exports = Authorization