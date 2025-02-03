import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        profilePic:{
            type: String,
            default: "https://res.cloudinary.com/dm7nojb8g/image/upload/v1738056565/nkwygtkar73egkhmwohm.jpg"
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;