"use client";

import { useLogin } from "@/hooks/use.parent.auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const loginMutation = useLogin();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(form, {
      onSuccess: () => {
        router.push("/parents"); // redirect after successful login
      },
    });
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Parent Login</h1>

      {!loginMutation.isSuccess && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loginMutation.isPending ? "Logging in..." : "Login"}
          </button>
        </form>
      )}

      {loginMutation.isError && (
        <p className="mt-4 text-red-500">
          ❌ {loginMutation.error.message || "Login failed"}
        </p>
      )}
    </div>
  );
};

export default Login;
