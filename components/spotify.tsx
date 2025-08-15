import { getNowPlaying } from "@/lib/get-now-playing";
import { getTopTrack } from "@/lib/get-top-track";
import Image from "next/image";

export const SpotifyWiget = async () => {
  let track = null;
  let spotifyText = "";

  try {
    track = await getNowPlaying();
    if (track && track?.isPlaying) {
      spotifyText = `Currently Playing on Spotify - ${track?.title} | ${track?.album} - ${track?.artist}`;
    } else {
      track = await getTopTrack();
      spotifyText = `Top track on Spotify - ${track?.title} | ${track?.album} - ${track?.artist}`;
    }
  } catch (error) {
    spotifyText = "Spotify is not available right now.";
  }

  return (
    <div className="w-full h-6 bg-[#1db954] z-[9999] fixed top-0">
      <div className="flex w-full h-full">
        <div className="p-3 sm:block hidden">
          <Image
            src={track?.albumImageUrl}
            width={50}
            height={50}
            className="rounded-lg border-2 border-white"
            alt="album-image"
          />
        </div>
        <div className="w-full overflow-hidden whitespace-nowrap">
          <h6 className="mt-1 text-[#212121] text-xs animate-marquee font-semibold">
            {spotifyText}
          </h6>
        </div>
      </div>
    </div>
  );
};
