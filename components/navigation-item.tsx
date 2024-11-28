import Link from "next/link";
import React, { FC } from "react";

interface NavigationItemProps {
  path: string;
  title: string;
  isActive: boolean;
}

export const NavigationItem: FC<NavigationItemProps> = ({
  path,
  title,
  isActive,
}) => (
  <Link
    className={`text-lg cursor-pointer  ${
      isActive && "bg-red-100"
    }  px-1.5 py-0.5 rounded`}
    href={path}
  >
    {title}
  </Link>
);
