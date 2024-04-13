"use client";

import Image from "next/image";
import Link from "next/link";

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
  return (
    <article className="group transition-transform duration-300 hover:-translate-y-2">
      <Link href={`/guides/${slug}`}>
        <Image
          src={imageUrl}
          alt={name}
          width={310}
          height={176}
          className="rounded-lg border-2 border-primary/50"
        />
        <div className="mt-4">
          <p className="text-primary">{tag.name}</p>

          <h1 className="my-2 line-clamp-2 text-xl">{name}</h1>
          <p className="line-clamp-2 text-muted-foreground">{description}</p>
        </div>
      </Link>
    </article>
  );
};

export default GuideCard;
