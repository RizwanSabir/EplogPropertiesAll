const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  profilepicture: {
    type: String, // This will store the path to the uploaded image
    required: false,  // imageUrl is optional
  },
  roles: [
    {
      roleName: { type: String, required: true }, // e.g., 'Blogs', 'Teams'
      permissions: {
        
        All: { type: Boolean, default: false }, //Can do all things
        viewAll: { type: Boolean, default: false }, //View all people 
        create: { type: Boolean, default: false }, // create Itself
        edit: { type: Boolean, default: false }, // edit itself blog
        delete: { type: Boolean, default: false }, // create itself Blog
        editAll: { type: Boolean, default: false }, // edit All people 
        deleteAll: { type: Boolean, default: false }, //delete All people 
        // Add any other permissions as needed
      },
    },
  ],
  facebookId: { type: String, required: true },
  instagramId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Token expires in 1 hour
});


const passwordResetTokenSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'emails', required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '1h' } // Token expires in 1 hour
});



userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};


userSchema.methods.setPassword = async function (password) {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    this.password = await bcrypt.hash(password, salt);
};


const EamilSchema = mongoose.model("emails", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		role: Joi.string().valid("Brand", "User", "Influencer").required().label("Role"),
		profileCompleted: Joi.boolean().required().label("ProfileCompleted"),
	});
	return schema.validate({profileCompleted:false,...data});
};





const PasswordResetTokens = mongoose.model('PasswordResetToken', passwordResetTokenSchema);



module.exports = { EamilSchema, validate , PasswordResetTokens};
