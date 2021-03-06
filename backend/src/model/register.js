const mongoose = require("mongoose");
var bcrypt = require('bcrypt')

// connect to cloud Database


const uri = "mongodb+srv://userone:userone@ictakfiles.i0dhy.mongodb.net/MessyKitchen?retryWrites=true&w=majority";
mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("db connected1")
    })
    .catch(err => console.log(err))

// create Schema
const Schema = mongoose.Schema;

// define Schema structure for an user account
const registerSchema = new Schema({

    name: String,
    email: String,

    pass: String,
    num: String,
    address: String,
    state: String,
    district: String,
    pincode: String,
    role: String


});
// registerSchema.statics.hashPass = function hashPass(pass) {
//     return bcrypt.hashSync(pass, 10)
// }

registerSchema.statics.hashPassword = function hashPassword(pass) {
    return bcrypt.hashSync(pass, 10);
}
registerSchema.methods.isValid = function(hashedpassword) {
        return bcrypt.compareSync(hashedpassword, this.pass);
    }
    // registerSchema.methods.isValid = function(hashedpassword) {
    //         return bcrypt.compareSync(hashedpassword, this.pass)
    //     }
    // create model
var registerdata = mongoose.model("register", registerSchema);

// export model
module.exports = registerdata;