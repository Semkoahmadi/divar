const { Schema, model } = require("mongoose");

const OTPSchema = new Schema({
    code: { type: String, required: true, default: undefined },
    expiresIn: { type: Number, required: false, default: 0 },
})

const UserSchema = new Schema({
    fullname: { type: String, required: false },
    mobile: { type: Number, unique: true, required: true },
    otp: { type: OTPSchema },
    verifiedMobile: { type: Boolean, default: false, required: true }
}, { timestamps: true });
const UserModel = model("user",UserSchema);
module.exports = UserModel