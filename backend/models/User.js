import {Schema , model } from 'mongoose';

const UserSchema= new Schema({
    avatar: { type: String, default: "" },
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    verified: { type: Boolean, default: false},
    verificationCode: { type: String, required: false},
    admin: { type: Boolean, default: false},
},
{
    timestamps: true        //options: automatically adds 2 fields: created at and updated at
}
);

const User = model("User", UserSchema);     //model name, schema
export default User;