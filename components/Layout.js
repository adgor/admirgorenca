import React from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

export const Layout = ({ children }) => {
  return (
    <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      <Header />
      <Sidebar />
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">{children}</div>
    </div>
  );
};
