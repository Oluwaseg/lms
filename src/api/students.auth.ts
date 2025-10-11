import { api } from "../lib/axios";
import { ApiResponse } from "../types/api.types";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../types/students.type";

// LOGIN
export const loginUser = async (
  credentials: LoginCredentials,
): Promise<ApiResponse<AuthResponse>> => {
  const { data } = await api.post<ApiResponse<AuthResponse>>(
    "/students/login",
    credentials,
  );
  return data;
};

// REGISTER
export const registerUser = async (
  credentials: RegisterCredentials,
): Promise<ApiResponse<AuthResponse>> => {
  const { data } = await api.post<ApiResponse<AuthResponse>>(
    "/students/register",
    credentials,
  );
  return data;
};

// Verify Email
export const verifyEmail = async (
  token: string,
): Promise<ApiResponse<null>> => {
  const { data } = await api.get<ApiResponse<null>>(
    `/students/verify-email?token=${token}`,
  );
  return data;
};

// Get User
export const getUser = async <T = any>(): Promise<ApiResponse<T>> => {
  const { data } = await api.get<ApiResponse<T>>("/students/me");
  return data;
};
