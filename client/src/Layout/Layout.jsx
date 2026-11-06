import AppSidebar from "@/components/AppSidebar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-screen flex flex-col">
        <Topbar />
        <main className="flex-1 w-full p-4 sm:p-6">
          <Outlet />
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
