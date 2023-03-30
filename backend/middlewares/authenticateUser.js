import jwt from "jsonwebtoken"

const authenticateUser = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization && authorization.split(" ")[1]
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        console.log(req.user);
        next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}
export default authenticateUser