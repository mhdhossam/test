import {jwtDecode} from "jwt-decode"; // Default import in TypeScript

/**
 * Interface for the decoded JWT structure.
 * Adjust the fields based on your actual JWT structure.
 */
interface DecodedToken {
  user_type?: string;
  user_id?: number | string | null; // Adjust type if `user_id` is strictly a string or number
}

/**
 * Interface for the return type of `getUserType` function.
 */
interface UserTypeResponse {
  userType: string;
  userId: number | string | null;
}

/**
 * Function to get the user type and user ID from the decoded JWT token
 * @returns {UserTypeResponse} An object containing userType and userId
 */
export const getUserType = (): UserTypeResponse => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    try {
      // Decode the token
      const decodedToken = jwtDecode<DecodedToken>(token);

      // Return both userType and userId, defaulting to "User" and null if not found
      return {
        userType: decodedToken.user_type || "User",
        userId: decodedToken.user_id || null, // Assuming the JWT contains a user_id field
      };
    } catch (error) {
      console.error("Error decoding the token:", error);
      return {
        userType: "User", // Default user type
        userId: null, // Default user ID if there's an error
      };
    }
  }

  return {
    userType: "User", // Default user type if no token is found
    userId: null, // Default user ID if no token is found
  };
};
