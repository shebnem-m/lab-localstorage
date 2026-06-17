"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isChecking, setIsChecking] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      try {
        const base64Url = token.split(".")[1];
        if (base64Url) {
          const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split("")
              .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
              .join("")
          );
          const payload = JSON.parse(jsonPayload);
          setUserEmail(payload.email || "User");
        } else {
          setUserEmail("Logged In User"); 
        }
      } catch (e) {
        setUserEmail("Logged In User");
      }
      
      setIsChecking(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center text-zinc-500">
        Checking session...
      </div>
    );
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">You are in, my friend</h1>

      <p className="text-zinc-500">
        This page should only be visible to logged in users.
        {userEmail && (
          <span className="block mt-2 font-medium text-black text-center bg-zinc-100 px-3 py-1 rounded-md">
            Logged in as: {userEmail}
          </span>
        )}
      </p>

      <button
        type="button"
        onClick={handleLogout}
        className="rounded-full bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-zinc-700"
      >
        Log out
      </button>
    </main>
  );
}