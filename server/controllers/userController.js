const User= require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

console.log("✅ NEW USER CONTROLLER LOADED");

const registerUser = async(req,res) =>{
    try{
        const{ name,email,password,role } = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message: "All required filed must be filled",
            });
        }

        
        const existingUser = await User.findOne({ email });
         if (existingUser) {
        return res.status(400).json({
        success: false,
        message: "User already exists with this email",
        });
       }

    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
     
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        res.status(201).json({
            success: true,
            message:"user registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
  },
        });

    } catch(error){

        if (error.code === 11000) {
        return res.status(400).json({
         success: false,
         message: "Email already registered",
      });
     }

        res.status(500).json({
            success:false,
            message: error.message,
        });
    }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {registerUser, loginUser};