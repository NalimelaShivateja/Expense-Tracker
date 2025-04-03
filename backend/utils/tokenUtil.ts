const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, name: user.displayName, email: user.emails[0].value },
        process.env.JWT_SECRET, // Secure your JWT secret
        { expiresIn: "1h" } // Token expires in 1 hour
    );
};

export default generateToken;
