"use client";

import Image from "next/image";
import Link from "next/link";
import { Icons } from "~/components/Icons";

interface GuideCardProps {
  slug: string;
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  tag: {
    id: number;
    name: string;
    icon: string;
  };
}

const GuideCard = ({
  imageUrl,
  name,
  slug,
  description,
  tag,
}: GuideCardProps) => {
  const IconComponent = Icons[tag.icon as keyof typeof Icons];

  return (
    <article className="group">
      <Link href={`/guides/${slug}`}>
        <Image
          src={imageUrl}
          alt={name}
          width={600}
          height={600}
          className="rounded-lg"
        />
      </Link>
      <div className="mt-4">
        <p className="flex w-fit items-center gap-2 rounded-full border border-green-700/75 bg-green-900/10 px-3 py-1 font-heading text-sm font-semibold text-green-100">
          <IconComponent className="h-4 w-4 font-semibold text-green-100" />{" "}
          {tag.name}
        </p>

        <Link href={`/guides/${slug}`}>
          <h1 className="my-2 line-clamp-2 text-xl decoration-primary underline-offset-2 group-hover:underline">
            {name}
          </h1>
        </Link>
        <p className="line-clamp-3 text-muted-foreground">{description}</p>
      </div>
    </article>
  );
};

export default GuideCard;
