import { fetchSpotify } from "@/lib/spotify";

export async function getTopTrack() {
  const res = await fetchSpotify("me/top/tracks?limit=3");

  if (res.status === 204 || res.status > 400) {
    return { isPlaying: false };
  }

  const songs = await res.json();
  const item = songs.items[2];

  return {
    title: item.name,
    artist: item.artists.map((a: any) => a.name).join(", "),
    album: item.album.name,
    albumImageUrl: item.album.images[0].url,
    songUrl: item.external_urls.spotify,
  };
}
