// app/api/spotify/top-tracks/route.ts
import { NextResponse } from "next/server";
import { fetchSpotify } from "@/lib/spotify";

export async function GET() {
  const res = await fetchSpotify("me/top/tracks?limit=1");

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch top tracks" },
      { status: 500 }
    );
  }

  const data = await res.json();

  const tracks = data.items.map((track: any) => ({
    title: track.name,
    artist: track.artists.map((a: any) => a.name).join(", "),
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
  }));

  return NextResponse.json({ tracks });
}
