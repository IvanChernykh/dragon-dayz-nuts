import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router";

import { RoutesLayout } from "./RoutesLayout";
import { MenuBar } from "../MenuBar";
import { Header } from "../ui/Header";

export const AppLayout: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex w-full h-screen overflow-hidden">
          <MenuBar />
          <div className="w-full">
            <Header />
            <RoutesLayout />
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
