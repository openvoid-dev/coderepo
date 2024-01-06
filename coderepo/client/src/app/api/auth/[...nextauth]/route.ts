import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

const handler: NextApiHandler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const authResponse = await fetch(
          `${process.env.BACKEND_URL}/api/users/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        if (!authResponse.ok) {
          return null;
        }

        const data = await authResponse.json();
        const { user, token } = data;

        // Validate the JWT token (you may need to implement your own validation logic)
        const isValid = validateToken(token);

        if (!isValid) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt(params) {
      // Custom logic for handling JWT token (optional)
      return params.token;
    },
    async session(params) {
      // Custom logic for handling session (optional)
      return { ...params.session };
    },
  },
});

export default handler;

// Example token validation function (you may need to implement your own logic)
function validateToken(token: string): boolean {
  try {
    // Decode the token (this does not validate the signature)
    const decodedToken = JSON.parse(atob(token.split(".")[1]));

    // Check if the token has expired
    const isExpired = Date.now() >= decodedToken.exp * 1000;

    return !isExpired;
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}

export { handler as GET, handler as POST };
