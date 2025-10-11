import { api } from "../lib/axios";
import { ApiResponse, AuthResponse, User } from "../types/api.types";

export const verifyToken = async (): Promise<AuthResponse> => {
  try {
       const response = await api.get<ApiResponse<User>>("/auth/verify");

    if (!response.data.success || !response.data.data) {
      throw new Error(response.data.message || "Token verification failed");
    }

    return {
      user: response.data.data
    };
  } catch (error) {
    console.error("❌ Token verification failed:", error);
    throw new Error("Failed to verify token");
  }
};
