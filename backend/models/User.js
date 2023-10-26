import {Schema , model } from 'mongoose';
import {hash} from 'bcryptjs';
import {sign} from 'jsonwebtoken';

// test change
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

UserSchema.pre('save', async function (next){
    if(this.isModified('password'))
    {
        this.password= await hash(this.password, 10);
        return next();
    }
    return next();
})

UserSchema.methods.generateJWT= async function() {
    return await sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}

const User = model("User", UserSchema);     //model name, schema
export default User;