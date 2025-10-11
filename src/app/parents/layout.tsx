"use client";
import { useCheckSession } from "@/hooks/useCheckSession";

export default function ParentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useCheckSession();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/*<Header />*/}
        <main className="flex-1">{children}</main>
        {/*<Footer />*/}
      </div>
    </>
  );
}
