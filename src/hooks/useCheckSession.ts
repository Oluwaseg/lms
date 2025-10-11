"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { verifyToken } from "@/api/security";

export const useCheckSession = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await verifyToken(); // backend verifies cookie + returns user
        const role = data.user.role?.name; // <-- we now trust backend role
        console.log("✅ Session valid for:", role);

        // 🚫 If user tries to access a route outside their role — block it
        if (role === "student" && pathname.startsWith("/parents")) {
          router.replace("/students/dashboard");
          return;
        }
        if (role === "parent" && pathname.startsWith("/students")) {
          router.replace("/parents/dashboard");
          return;
        }

        // ✅ If user is on their own login page but already logged in → redirect to their dashboard
        if (pathname.includes("/login")) {
          if (role === "student") {
            router.replace("/students/dashboard");
          } else if (role === "parent") {
            router.replace("/parents/dashboard");
          }
        }
      } catch (error) {
        console.warn("❌ Session invalid or expired");

        // ❌ Invalid token: redirect to correct login page by path
        if (pathname.startsWith("/students")) {
          router.replace("/students/login");
        } else if (pathname.startsWith("/parents")) {
          router.replace("/parents/login");
        } else {
          router.replace("/");
        }
      }
    };

    checkSession();
  }, [pathname, router]);
};
