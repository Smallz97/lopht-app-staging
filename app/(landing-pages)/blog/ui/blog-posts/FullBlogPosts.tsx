import Image from "next/image";
import { ArrowLink } from "@/app/(landing-pages)/utilities/lib/icons";
import { Blogpost } from "@/app/(landing-pages)/utilities/lib/definitions";
import { FullBlogPostsList } from "@/app/(landing-pages)/utilities/lib/blogpost-placeholder";

export default function FullBlogPosts() {
    return (
        <div>
            <div className="text-[#0f1728] text-xl font-semibold leading-[30px] mb-8">All blog posts</div>
            <div className="flex flex-col gap-12 md:grid grid-cols-2 lg:grid-cols-3">
                {FullBlogPostsList.map((Blogpost: Blogpost, index) => (
                    <div className="flex-col gap-8 flex" key={index}>
                        <Image
                            src={Blogpost.image}
                            alt={`blogpost-image`}
                        />
                        <div className="self-stretch flex-col gap-3 flex">
                            <div className="self-stretch text-orange-400 text-sm font-semibold leading-tight">{Blogpost.nameDate}</div>
                            <div className="self-stretch justify-between flex">
                                <div className="text-[#0f1728] text-xl font-semibold leading-[30px]">{Blogpost.title}</div>
                                <div className="justify-center items-center flex">
                                    <div className="w-6 h-6">
                                        <ArrowLink />
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch text-[#475466] text-sm font-normal leading-normal">{Blogpost.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
