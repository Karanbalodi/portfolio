"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { NavigationItem } from "./navigation-item";
import { navigation } from "@/constants";

export function AppNavigation() {
  const pathname = usePathname();
  return (
    <nav className="sm:h-32 h-24 flex items-center absolute top-2 left-1/2 -translate-x-2/4">
      <div className="w-64 flex justify-between">
        {navigation?.map((item) => (
          <NavigationItem
            key={item.title}
            title={item?.title}
            isActive={pathname === item?.path}
            path={item?.path}
          />
        ))}
      </div>
    </nav>
  );
}
