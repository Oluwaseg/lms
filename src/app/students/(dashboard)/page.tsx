"use client";
import { useGetUser } from "@/hooks/use.student.auth";
import { User } from "@/types/api.types";

export default function DashboardPage() {
  const { data, isLoading, isError, error } = useGetUser<User>();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  const user = data?.data;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <h1>Welcome, {user?.name || "Parent"}</h1>
        <p className="text-red-600">Email: {user?.email}</p>
        <span className="text-blue-600">Phone: {user?.code}</span>
      </main>
    </div>
  );
}
