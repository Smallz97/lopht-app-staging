import Image from "next/image";
import FirstDesktop from '@/app/(landing-pages)/blog/ui/blogposts-images/recent-blog-posts/first-dekstop.png'
import { ArrowLink } from "@/app/(landing-pages)/utilities/lib/icons";
import { Blogpost } from "@/app/(landing-pages)/utilities/lib/definitions";
import { RecentBlogPostsList } from "@/app/(landing-pages)/utilities/lib/blogpost-placeholder";

export default function RecentBlogPosts() {
    return (
        <div className="pt-20 lg:pt-24" id="recent-blogposts-section">
            <div className="text-[#0f1728] text-xl font-semibold leading-[30px] mb-8" id="section-heading">Recent blog posts</div>
            <div className="flex flex-col gap-12 md:grid grid-cols-2 lg:hidden" id="cards-wrapper">
                {RecentBlogPostsList.map((Blogpost: Blogpost, index) => (
                    <div className="flex-col gap-8 flex" key={index}>
                        <Image
                            src={Blogpost.image}
                            alt={`blogpost-image`}
                        />
                        <div className="self-stretch flex-col gap-3 flex">
                            <div className="self-stretch text-orange-400 text-sm font-semibold leading-tight">{Blogpost.nameDate}</div>
                            <div className="self-stretch justify-between flex">
                                <div className="text-[#0f1728] text-xl font-semibold leading-[30px]">{Blogpost.title}</div>
                                <div className="pt-0.5 flex-col flex">
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
            <div className="hidden lg:flex flex-col gap-8" id="">
                <Image
                    src={FirstDesktop}
                    alt={`blogpost-image`}
                />
                <div className="self-stretch flex-col gap-3 flex">
                    <div className="self-stretch text-orange-400 text-sm font-semibold leading-tight">{RecentBlogPostsList[0].nameDate}</div>
                    <div className="self-stretch justify-between flex">
                        <div className="text-[#0f1728] text-xl font-semibold leading-[30px]">{RecentBlogPostsList[0].title}</div>
                        <div className="pt-0.5 flex-col flex">
                            <div className="w-6 h-6">
                                <ArrowLink />
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch text-[#475466] text-sm font-normal leading-normal">{RecentBlogPostsList[0].description}</div>
                </div>
            </div>
        </div>
    )
}
