import { useMutation } from '@tanstack/react-query';
import { loginUser, registerUser, verifyEmail } from '../api/instructors.auth';
import { ApiResponse } from '../types/api.types';
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from '../types/instructors.type';

export const useLogin = () => {
  return useMutation<ApiResponse<AuthResponse>, Error, LoginCredentials>({
    mutationFn: loginUser,
  });
};

export const useRegister = () => {
  return useMutation<ApiResponse<AuthResponse>, Error, RegisterCredentials>({
    mutationFn: registerUser,
  });
};

export const useVerifyEmail = () => {
  return useMutation<ApiResponse<null>, Error, string>({
    mutationFn: verifyEmail,
  });
};
