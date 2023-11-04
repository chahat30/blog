import User from "../models/User";

export const registerUser= async (req, res, next) => {
    try {
        const { name, email, password} = req.body;

        //check whether the user exists or not
        let user = await User.findOne({email});

        if(user)
        {
           //return res.status(400).json({ message : "User have already registered." });
           throw new Error("User have already registered");
        }

        //creating a new user
        user=await User.create({
            name,
            email,
            password
        });
        return res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            verified: user.verified,
            admin: user.admin,
            token: await user.generateJWT(),
        });
    } catch (error) {
        next(error);
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        let user=await User.findOne({email});

        if(!user)
        {
            throw new Error("Email not found");
        }

        if(await user.comparePassword(password))
        {
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                admin: user.admin,
                token: await user.generateJWT(),   
            });
        }
        else{
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        next(error);
    }
}

export const userProfile = async (req, res, next) =>{
    try {
        let user = await User.findById(req.user._id);
        if(user) {
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                verified: user.verified,
                admin: user.admin  
            });
        }
        else{
            let error = new Error("User not found");
            error.statusCode = 404;
            next(error);
        }
    } catch (error) {
        next(error);
    }
}

export const updateProfile = async (req, res, next) => {
    try {
        let user = await User.findById(req.user._id);
        if(!user){   //if user not found with this id
            throw new Error("User not found");
        }
        user.name = req.body.name || user.name; //The line of code essentially says: "If req.body.name is defined (i.e., it has a value), update the user.name property with the value of req.body.name. If req.body.name is not defined or is falsy (e.g., null, undefined, or an empty string), leave user.name unchanged."
        user.email= req.body.email || user.email;
        if(req.body.password && req.body.password.length < 6) {
            throw new Error("Password length must be atleast 6 characters");
        } else if (req.body.password ){
            user.password= req.body.password;
        }

        const updatedUserProfile= await user.save();
        res.json({
            _id: updatedUserProfile._id,
            avatar: updatedUserProfile.avatar,
            name: updatedUserProfile.name,
            email: updatedUserProfile.email,
            verified: updatedUserProfile.verified,
            admin: updatedUserProfile.admin,
            token: await updatedUserProfile.generateJWT(),   
        });
    } catch (error) {
        next(error);
    }
} 