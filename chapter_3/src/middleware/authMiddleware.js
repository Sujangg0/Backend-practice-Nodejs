import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function authMiddleware(req, res, next) {
    const token = req.header('authorization')

    if (!token) { return res.status(401).json({ mesage: "No token provided" }) }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) { return res.status(401).json({ message: "Invalid token" }) }
        
        req.userId = decode.id 
        next()
    })
}

export default authMiddleware;