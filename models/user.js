import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a - zA - Z0 -9._] + (?< ![_.])$/, "Username is invalid, it should contain 8-20 alphanumeric letters and be unique"]
    }, image: {
        type: String,
    }
})


// const User = require('./path/to/userModel');

// Now you can use the User model to perform database operations.
// For instance, to create a new user:

// const newUser = new User({
//   email: 'example@example.com',
//   username: 'example_user',
//   image: 'avatar.jpg',
// });

// newUser.save((err, user) => {
//   if (err) {
//     console.error('Error creating user:', err);
//   } else {
//     console.log('User created successfully:', user);
//   }
// });


const User = models.User || model("User", UserSchema)

export default User;