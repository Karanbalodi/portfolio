import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image: StaticImageData;
  role: string;
  index: number;
}

export function ExperienceCard({
  index,
  title,
  description,
  dates,
  location,
  role,
  image,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div
        className={`absolute -left-[70px] ${
          index === 0 ? "top-0" : "top-2"
        } flex items-center justify-center bg-white rounded-full`}
      >
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="rounded-full border"
        />
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1 ml-4">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">
            {role} | {location}
          </p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
    </li>
  );
}
