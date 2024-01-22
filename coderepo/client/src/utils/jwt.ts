import jwt from "jsonwebtoken";

export const generateToken = (userEmail: string): string => {
    const secretKey = "your-secret-key"; // Replace with your actual secret key
    const token = jwt.sign({ userEmail }, secretKey, { expiresIn: "1h" });

    return token;
};
