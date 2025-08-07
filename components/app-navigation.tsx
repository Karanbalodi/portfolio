"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { NavigationItem } from "./navigation-item";

export function AppNavigation() {
  const pathname = usePathname();
  return (
    <nav className="sm:h-32 h-24 flex items-center absolute left-1/2 -translate-x-2/4">
      <div className="w-64 flex justify-between">
        <NavigationItem title="Work" isActive={pathname === '/'} path="/"/>
        <NavigationItem title="About" isActive={pathname === '/about'} path="/about"/>
        <NavigationItem title="Photography" isActive={pathname === '/photography'} path="photography"/>
      </div>
    </nav>
  );
}
