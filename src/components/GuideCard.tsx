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

const GuideCard = ({ imageUrl, name, slug, description, tag }: GuideCardProps) => {
    const IconComponent = Icons[tag.icon as keyof typeof Icons];

    return (
        <article className="group">
            <Link href={`/guides/${slug}`}>
                <Image src={imageUrl} alt={name} width={600} height={600} className="rounded-lg" />
            </Link>
            <div className="mt-4">
                <p className="flex items-center gap-2 bg-green-900/10 text-green-100 rounded-full px-3 py-1 border border-green-700/75 font-semibold font-heading w-fit text-sm"><IconComponent className="w-4 h-4 font-semibold text-green-100" /> {tag.name}</p>

                <Link href={`/guides/${slug}`}>
                    <h1 className="text-xl line-clamp-2 my-2 group-hover:underline decoration-primary underline-offset-2">{name}</h1>
                </Link>
                <p className="text-muted-foreground line-clamp-3">{description}</p>
            </div>
        </article>
    )
}

export default GuideCard;