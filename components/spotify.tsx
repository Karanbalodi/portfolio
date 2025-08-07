import Image from "next/image";
import { PiHeadphones } from "react-icons/pi";

export const SpotifyWiget = async () => {
  let track;

  const nowPlaying = await fetch(
    "http://localhost:3000/api/spotify/now-playing"
  ).then((res) => res.json());

  if (nowPlaying?.isPlaying) {
    track = nowPlaying;
  } else {
    const top = await fetch("/api/spotify/top-tracks").then((res) =>
      res.json()
    );
    track = top.tracks[0];
  }
  return (
    <div className="w-[96%] h-18 bg-[#333333] rounded-lg mx-2 fixed bottom-4 p-3">
      <div className="flex">
        <Image
          src={track.albumImageUrl}
          width={42}
          height={12}
          className="rounded-lg"
          alt="album-image"
        />
        <div className="ml-2 w-[100%]">
          <div className="overflow-hidden whitespace-nowrap">
            <h6 className="text-white text-sm animate-marquee inline-block">
              Currently Playing on Spotify - {track.title}
            </h6>
          </div>
          <div className="overflow-hidden whitespace-nowrap w-auto">
            <p className="text-white text-sm animate-marquee inline-block">
              {track.album} - {track.artist}
            </p>
          </div>
        </div>
        <PiHeadphones size={40} color="#1DB954"/>
      </div>
    </div>
  );
};
