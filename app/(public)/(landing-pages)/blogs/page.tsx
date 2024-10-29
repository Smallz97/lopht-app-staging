import HeroSection from "@/app/(public)/ui/blogs-page/page-sections/hero-section/HeroSection"
import RecentBlogPosts from "@/app/(public)/ui/blogs-page/blog-posts/RecentBlogPosts"
import FullBlogPosts from "@/app/(public)/ui/blogs-page/blog-posts/FullBlogPosts"
import CallToActionSection from "@/app/(public)/ui/shared-ui-components/cta-section/CallToActionSection"

export default function Blogs() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-28 md:gap-24 mb-24" id="blog-posts-section" >
        <RecentBlogPosts />
        <FullBlogPosts />
      </div>
      <CallToActionSection />
    </>
  )
}
