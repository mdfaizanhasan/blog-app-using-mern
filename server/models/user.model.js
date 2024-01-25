import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            default: 'https://i.pinimg.com/originals/47/31/03/473103',
        },
    }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;