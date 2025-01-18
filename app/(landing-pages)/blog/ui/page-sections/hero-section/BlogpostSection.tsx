import RecentBlogPosts from "@/app/(landing-pages)/blog/ui/blog-posts/RecentBlogPosts"
import FullBlogPosts from "@/app/(landing-pages)/blog/ui/blog-posts/FullBlogPosts"

export default function BlogpostSection() {
    return (
        <div className="flex flex-col gap-28 md:gap-24 mb-24" id="blogpost-section" >
            <RecentBlogPosts />
            <FullBlogPosts />
        </div>
    )
}