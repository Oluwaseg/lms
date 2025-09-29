import { api } from '../lib/axios';
import { ApiResponse } from '../types/api.types';
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from '../types/students.type';

// LOGIN
export const loginUser = async (
  credentials: LoginCredentials
): Promise<ApiResponse<AuthResponse>> => {
  const { data } = await api.post<ApiResponse<AuthResponse>>(
    '/student/login',
    credentials
  );
  return data;
};

// REGISTER
export const registerUser = async (
  credentials: RegisterCredentials
): Promise<ApiResponse<AuthResponse>> => {
  const { data } = await api.post<ApiResponse<AuthResponse>>(
    '/student/register',
    credentials
  );
  return data;
};

// Verify Email
export const verifyEmail = async (
  token: string
): Promise<ApiResponse<null>> => {
  const { data } = await api.get<ApiResponse<null>>(
    `/student/verify-email?token=${token}`
  );
  return data;
};
