"use client";

import { useRegister } from "@/hooks/use.parent.auth";
import { useState } from "react";

const Register = () => {
  const registerMutation = useRegister();

  const [form, setForm] = useState({
    name: "",
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
    registerMutation.mutate(form);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Student Registration</h1>

      {!registerMutation.isSuccess && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
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
              className="block text-sm font-medium mb-1"
              htmlFor="password"
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
            disabled={registerMutation.isPending}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {registerMutation.isPending ? "Registering..." : "Register"}
          </button>
        </form>
      )}

      {registerMutation.isError && (
        <p className="mt-4 text-red-500">
          {registerMutation.error.message || "Something went wrong"}
        </p>
      )}

      {registerMutation.isSuccess && (
        <div className="mt-6 text-center">
          <p className="text-green-600 font-medium mb-2">
            🎉 {registerMutation.data.message}
          </p>
          <p className="text-gray-700">
            We’ve sent a verification link to your email. Please check your
            inbox and verify your account.
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
