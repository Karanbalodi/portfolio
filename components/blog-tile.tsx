interface BlogTileProps {
  title: string;
  date: string;
  views: string;
  description: string;
  readTime?: string;
}

export const BlogTile = ({
  title,
  date,
  views,
  description,
  readTime,
}: BlogTileProps) => (
  <div
    className="cursor-pointer"
    // onClick={() =>
    // //   redirect(
    // //     "https://medium.com/coox-tech/what-is-a-progressive-web-app-pwa-and-how-to-convert-your-react-native-app-into-a-pwa-using-expo-11540ff116a"
    // //   )
    // }
  >
    <h1 className="text-primary font-medium text-xl mt-8">{title}</h1>
    <p className="text-dark-gray text-sm mt-3">
      ⏱ {readTime} | 👀 {views} | 🗓 {date}
    </p>
    <p className="mt-4 text-primary text-sm">{description}</p>
  </div>
);
