import Image from "next/image";
import { ResponsiveImageProps } from "@/app/lib/definitions";

export default function ResponsiveImage({ imageSm, imageMd, alt }: ResponsiveImageProps) {
    return (
        <picture>
            <source media="(max-width: 767px)" srcSet={imageSm.src} />
            <source media="(min-width: 768px)" srcSet={imageMd.src} />
            <Image src={imageMd} alt={alt} />
        </picture>
    )
}