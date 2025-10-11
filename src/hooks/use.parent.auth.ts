import { useMutation, useQuery } from "@tanstack/react-query";
import {
  loginUser,
  registerUser,
  verifyEmail,
  getParentUser,
} from "../api/parents.auth";
import { ApiResponse } from "../types/api.types";
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from "../types/parents.type";

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

export const useGetParentUser = <T>() => {
  return useQuery<ApiResponse<T>, Error>({
    queryKey: ["parentUser"],
    queryFn: () => getParentUser<T>(),
  });
};
