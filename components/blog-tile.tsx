'use client';

import { redirect } from "next/navigation";

interface BlogTileProps {
  title: string;
  date: string;
  views: string;
  description: string;
  readTime?: string;
  redirectUrl?: string;
}

export const BlogTile = ({
  title,
  date,
  views,
  description,
  readTime,
  redirectUrl,
}: BlogTileProps) => (
  <div className="cursor-pointer" onClick={() => redirect(redirectUrl ?? "")}>
    <h1 className="text-primary font-medium text-xl mt-8">{title}</h1>
    <p className="text-dark-gray text-sm mt-3">
      ⏱ {readTime} | 👀 {views} | 🗓 {date}
    </p>
    <p className="mt-4 text-primary text-sm line-clamp-4">{description}</p>
  </div>
);
