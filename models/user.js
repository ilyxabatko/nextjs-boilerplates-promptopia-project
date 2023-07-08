import { Schema, model, models } from "mongoose"; 

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String
    }
});


// In case we work with "always running" server, we'd do this:
// const User = model("User", UserSchema);
// export default User;

// But in Next.js we want our route to be running when it's getting called.
// This route is getting called from scratch every time the connection is established.
// We should check if the User model exist, if not - create ned moder:
const User = models.User || model("User", UserSchema);

export default User;
