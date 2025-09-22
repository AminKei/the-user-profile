"use client"; // مشخص کردن که این یک Client Component است
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken"); // یا هر روش ذخیره‌سازی که استفاده می‌کنید
    if (!authToken) {
      router.push("/login");
    }
  }, [router]);

  return <div></div>;
}
