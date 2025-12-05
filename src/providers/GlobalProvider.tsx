"use client";

import { ScrollProvider } from "@/context/ScrollContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReactNode } from "react";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ScrollProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ScrollProvider>
  );
};
