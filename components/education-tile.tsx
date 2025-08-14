"use client";

interface EducationtileProps {
  title: string;
  subtitle: string;
  description: string;
  aggregate: string;
  redirectUrl?: string;
  color: string;
}

export const Educationtile = ({
  title,
  subtitle,
  description,
  aggregate,
  color,
  redirectUrl,
}: EducationtileProps) => {
  const handleRedirect = () => {
    window.open(redirectUrl, "_blank");
  };

  return (
    <>
      <h1
        className={`text-${color}-900 bg-${color}-100 p-2 px-4 inline-block rounded items-center hover:underline cursor-pointer`}
        onClick={handleRedirect}
      >
        {title}
      </h1>
      <p className="mt-2 text-dark-gray text-sm">{subtitle}</p>
      <p className="mt-2 text-primary text-sm">{description}</p>
      <p className="mt-2 mb-6 text-primary font-medium">
        Aggregate: {aggregate}
      </p>
    </>
  );
};
