import jwt from 'jsonwebtoken';
import crypto from "crypto"
import User from '../models/userModel.js';

//create hash password
const hashPassword = (password) => {
    const salt = "salt";
    const hash = crypto.createHash('sha256')
        .update(password, salt)
        .digest('hex');
    return hash;
}

// compare password
const comparePassword = (password, hash) => {
    const hashedPassword = hashPassword(password);
    return hashedPassword === hash;
}
// create token
const createToken = (user) => {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}


// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = hashPassword(password);
    try {
        const user = new User({ name, email, password: hashedPassword });
        const token = createToken(user);
        await user.save();
        res.status(201).json({ message: "User created successfully", user, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}


// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        const isPasswordCorrect = comparePassword(password, user.password);
        if (isPasswordCorrect) {
            const token = createToken(user);
            return res.status(200).json({ user, token });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch {
        return res.status(500).json({ message: "Something went wrong" });
    }
}

//get user
const getUser = async (req, res) => {
    const { id } = req.user;
    console.log(id);
    try {
        const user = await User.findById(id);
        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export { loginUser, registerUser, getUser }