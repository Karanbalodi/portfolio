// lib/getNowPlaying.ts
import { fetchSpotify } from "@/lib/spotify";

export async function getNowPlaying() {
  const res = await fetchSpotify("me/player/currently-playing");

  if (res.status === 204 || res.status > 400) {
    return { isPlaying: false };
  }

  const song = await res.json();
  const item = song.item;

  return {
    title: item.name,
    artist: item.artists.map((a: any) => a.name).join(", "),
    album: item.album.name,
    albumImageUrl: item.album.images[0].url,
    songUrl: item.external_urls.spotify,
    isPlaying: song.is_playing,
  };
}
