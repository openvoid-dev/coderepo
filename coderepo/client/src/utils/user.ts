import jwt from "jsonwebtoken";

const generateToken = (userEmail: string): string => {
    const secretKey = "your-secret-key"; // Replace with your actual secret key
    const token = jwt.sign({ userEmail }, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour

    return token;
};

export const getCurrentUser = async (userEmail: string) => {
    try {
        // * Generate JWT token
        const token = generateToken(userEmail);

        // * Make the request to the protected route with the token in the headers
        const currentUser = await fetch(
            `http://localhost:8080/api/users/${userEmail}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!currentUser) {
            return null;
        }

        const { user } = await currentUser.json();

        return user;
    } catch (error: any) {
        return null;
    }
};
