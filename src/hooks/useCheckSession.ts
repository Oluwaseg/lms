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
        if (role === "student" && (pathname.startsWith("/parents") || pathname.startsWith("/instructors") || pathname.startsWith("/moderators") || pathname.startsWith("/admin"))) {
          router.replace("/students");
          return;
        }
        if (role === "parent" && (pathname.startsWith("/students") || pathname.startsWith("/instructors") || pathname.startsWith("/moderators") || pathname.startsWith("/admin"))) {
          router.replace("/parents");
          return;
        }
        if (role === "instructor" && (pathname.startsWith("/students") || pathname.startsWith("/parents") || pathname.startsWith("/moderators") || pathname.startsWith("/admin"))) {
          router.replace("/instructors");
          return;
        }
        if (role === "moderator" && (pathname.startsWith("/students") || pathname.startsWith("/parents") || pathname.startsWith("/instructors") || pathname.startsWith("/admin"))) {
          router.replace("/moderators");
          return;
        }
        if (role === "admin" && (pathname.startsWith("/students") || pathname.startsWith("/parents") || pathname.startsWith("/instructors") || pathname.startsWith("/moderators"))) {
          router.replace("/admin");
          return;
        }

        // ✅ If user is on their own login page but already logged in → redirect to their dashboard
        if (pathname.includes("/login")) {
          if (role === "student") {
            router.replace("/students");
          } else if (role === "parent") {
            router.replace("/parents");
          } else if (role === "instructor") {
            router.replace("/instructors");
          } else if (role === "moderator") {
            router.replace("/moderators");
          } else if (role === "admin") {
            router.replace("/admin");
          }
        }
      } catch (error) {
        console.warn("❌ Session invalid or expired");

        // ❌ Invalid token: redirect to correct login page by path
        // Only redirect if we're not already on a login page to prevent loops
        if (pathname.startsWith("/students") && !pathname.includes("/login")) {
          router.replace("/students/login");
        } else if (pathname.startsWith("/parents") && !pathname.includes("/login")) {
          router.replace("/parents/login");
        } else if (pathname.startsWith("/instructors") && !pathname.includes("/login")) {
          router.replace("/instructors/login");
        } else if (pathname.startsWith("/moderators") && !pathname.includes("/login")) {
          router.replace("/moderators/login");
        } else if (pathname.startsWith("/admin") && !pathname.includes("/login")) {
          router.replace("/admin/login");
        } else if (!pathname.includes("/login")) {
          router.replace("/");
        }
      }
    };

    checkSession();
  }, [pathname, router]);
};
