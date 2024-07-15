import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

import { Toast } from "@/components";
import { queryClient } from "@/libs";

type AppProviderProps = PropsWithChildren;

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toast />
    </QueryClientProvider>
  );
}
