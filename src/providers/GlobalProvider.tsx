"use client";

import { ScrollProvider } from "@/context/ScrollContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ReactNode } from "react";
import { QueryClientProviderWrapper } from "./QueryClientProviderWrapper";

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProviderWrapper>
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
    </QueryClientProviderWrapper>
  );
};
