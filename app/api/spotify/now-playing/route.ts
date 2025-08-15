import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/get-now-playing";

export async function GET() {
  const data = await getNowPlaying();
  return NextResponse.json(data);
}
