// hooks/useAppNavigate.ts
"use client"; // مشخص کردن که این یک Client Component است
import { useRouter } from "next/navigation";

export const useAppNavigate = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/profile");
  };

  const goToRegister = () => {
    router.push("/signup");
  };

  const goToLogin = () => {
    router.push("/login");
  };

  return {
    goToHome,
    goToRegister,
    goToLogin,
  };
};