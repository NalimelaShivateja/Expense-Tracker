import { Request } from 'express'




interface AuthRequest extends Request {
    decodedJWT?: any;
}

export default AuthRequest;