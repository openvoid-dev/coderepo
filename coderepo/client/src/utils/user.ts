export const getCurrentUser = async (userEmail: string) => {
    try {
        const currentUser = await fetch(
            `http://localhost:8080/api/users/${userEmail}`
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
