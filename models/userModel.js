const mongoose = require("mongoose");

// first name
// last name
// email
// phone number
// degree
// specialty
// type of practice
// address
// group count
// infividual cost
// total cost
// emergency contact
// years in practice
// company / institution
// billing info
// invoice url

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "This email is associated with an account."],
    },
    degree: {
      type: String,
    },
    specialty: {
      type: String,
    },
    address: {
      line1: {
        type: String,
      },
      line2: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zip: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    password: {
      type: String,
      required: [true, "Pasword is required."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

//
//
//
//
//
//
//
//
//
//
//
// import mongoose from "mongoose";
// const { Schema } = mongoose;
// import bcrypt from "bcrypt";

// const userSchema = new Schema(
//   {
//     name: {
//       first: {
//         type: String,
//         trim: true,
//         required: true,
//       },
//       last: {
//         type: String,
//         trim: true,
//         required: true,
//       },
//     },
//     email: {
//       type: String,
//       unique: true,
//       lowercase: true,
//       trim: true,
//       required: true,
//     },
//     degree: {
//       type: String,
//       required: true,
//     },
//     hash_password: {
//       type: String,
//       trim: true,
//       required: true,
//     },
//     created: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     virtuals: {
//       fullName: {
//         get() {
//           return this, name.first + " " + this.name.last;
//         },
//         set(v) {
//           this.name.first = v.substr(0, v.indexOf(" "));
//           this.name.last = v.substr(v.indexOf(" ") + 1);
//         },
//       },
//     },
//     methods: {
//       comparePassword(password) {
//         return bcrypt.compareSync(password, this.hash_password);
//       },
//     },
//   }
// );

// const User = mongoose.model("User", userSchema);
// export default User;
