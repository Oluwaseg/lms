"use client";

import { useVerifyEmail } from "@/hooks/use.parent.auth";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Verify = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const verifyMutation = useVerifyEmail();

  useEffect(() => {
    if (token) {
      verifyMutation.mutate(token);
    }
  }, [token]);

  useEffect(() => {
    if (verifyMutation.isSuccess) {
      setTimeout(() => {
        window.location.href = "/parents/login";
      }, 3000);
    }
  }, [verifyMutation.isSuccess]);

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded-lg shadow text-center">
      <h1 className="text-2xl font-bold mb-6">Email Verification</h1>

      {!token && (
        <p className="text-red-500">❌ No token provided in the URL.</p>
      )}

      {verifyMutation.isPending && <p>⏳ Verifying your email...</p>}

      {verifyMutation.isError && (
        <p className="text-red-500">
          ❌ {verifyMutation.error.message || "Verification failed"}
        </p>
      )}

      {verifyMutation.isSuccess && verifyMutation.data.success && (
        <p className="text-green-600">
          ✅ {verifyMutation.data.message || "Your email has been verified!"}
        </p>
      )}
    </div>
  );
};

export default Verify;
