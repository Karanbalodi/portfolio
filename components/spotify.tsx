import Image from "next/image";

export const SpotifyWiget = async () => {
  let track;
  let spotifyText = "";
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/spotify/now-playing`,
      { cache: "no-store" }
    );
    const nowPlaying = await res.json();

    if (nowPlaying?.isPlaying) {
      track = nowPlaying;
      spotifyText = `Currently Playing on Spotify - ${track?.title} | ${track?.album} - ${track?.artist}`;
    } else {
      // fallback to top track
      const topRes = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/spotify/top-tracks`,
        {
          cache: "no-store",
        }
      );
      const top = await topRes.json();
      track = top.tracks[0];
      spotifyText = `Top track on Spotify - ${track?.title} | ${track?.album} - ${track?.artist}`;
    }
  } catch (error) {
    console.log(
      "Error fetching Spotify data:",
      error,
      process.env.NEXT_PUBLIC_SITE_URL
    );
  }

  return (
    <div className="w-full h-6 bg-[#1db954] z-[9999] fixed top-0">
      <div className="flex w-full">
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
