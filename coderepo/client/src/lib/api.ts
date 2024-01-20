import { getServerSession } from "next-auth";

export const getCurrentUser = async () => {
    try {
        const session = await getServerSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await fetch(
            `${process.env.BACKEND_URL}/api/users/${session.user.email}`
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
