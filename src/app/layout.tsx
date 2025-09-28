"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <html lang="en">
      <body className="h-screen w-screen bg-center bg-no-repeat">
        <QueryClientProvider client={queryClient}>
          <main className="min-h-screen flex justify-center items-center ">
            {children}
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
