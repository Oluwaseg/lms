import { api } from "../lib/axios";
import { ApiResponse, AuthResponse } from "../types/api.types";

export const verifyToken = async (): Promise<AuthResponse> => {
  try {
    // Just hit the endpoint; the browser will attach the httpOnly cookie automatically
    const response = await api.get<ApiResponse<AuthResponse>>("/auth/verify");

    if (!response.data.success || !response.data.data) {
      throw new Error(response.data.message || "Token verification failed");
    }

    return response.data.data;
  } catch (error) {
    console.error("❌ Token verification failed:", error);
    throw new Error("Failed to verify token");
  }
};
