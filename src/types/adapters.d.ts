import NextAuth, { DefaultSession, type DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Leveraged by session callback's user object (AdapterUser extends User)
   */
  export interface User extends DefaultUser {
    /** Define any user-specific variables here to make them available to other code inferences */
    role: "ADMIN" | "USER";
    // Any other attributes you need from either your User table columns or additional fields during a session callback
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user: User;
  }
}
