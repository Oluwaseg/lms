"use client";
import React, { createContext, useContext } from "react";
import { useGetUser } from "@/hooks/use.student.auth";
import { User } from "@/types/api.types";

interface UserContextValue {
  user?: User;
  isLoading: boolean;
  isError: boolean;
  error?: any;
}

const UserContext = createContext<UserContextValue>({
  user: undefined,
  isLoading: true,
  isError: false,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError, error } = useGetUser<User>();
  const user = data?.data;

  return (
    <UserContext.Provider value={{ user, isLoading, isError, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
