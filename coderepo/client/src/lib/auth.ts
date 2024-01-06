type SignUpData = {
  email: string;
  username: string;
  password: string;
};

const signUp = async (data: SignUpData) => {
  try {
    // * Create the user
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/users/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    // * Check if the user was created successfully
    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    // * Return the user data
    return await response.json();
  } catch (error) {
    console.error("Sign-up error:", error);
  }
};

export default signUp;
