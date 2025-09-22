"use client";
import { useEffect } from "react";
import { useAppNavigate } from "@/hooks/useAppNavigate";
import { StorageKey } from "@/constants/react-query";

export const useAuthGuard = () => {
  const { goToLogin } = useAppNavigate();

  useEffect(() => {
    const token = localStorage.getItem(StorageKey.User_Token);
    if (!token) {
      goToLogin();
    }
  }, [goToLogin]);
};
