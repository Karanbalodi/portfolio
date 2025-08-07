// app/api/spotify/now-playing/route.ts
import { NextResponse } from "next/server";
import { fetchSpotify } from "@/lib/spotify";

export async function GET() {
  const res = await fetchSpotify("me/player/currently-playing");

  if (res.status === 204 || res.status > 400) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  const song = await res.json();

  const item = song.item;
  const isPlaying = song.is_playing;
  const title = item.name;
  const artist = item.artists.map((a: any) => a.name).join(", ");
  const album = item.album.name;
  const albumImageUrl = item.album.images[0].url;
  const songUrl = item.external_urls.spotify;

  return NextResponse.json({
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
    isPlaying,
  });
}
