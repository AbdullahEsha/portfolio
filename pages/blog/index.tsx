import { useContext, useEffect, useRef } from "react";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AppContext from "../../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import blogData from "../../blogPosts.json";
import Image from "next/image";
import SocialMediaAround from "../../components/Home/SocialMediaAround/SocialMediaAround";
import Seo from "../../components/Seo/Seo";
import { absoluteUrl, excerpt, SITE_NAME, toIsoDate } from "../../lib/seo";

type PostSummary = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
};

type BlogPageProps = { posts: PostSummary[] };

// Deterministic so the server HTML and client hydration produce identical markup.
const tagColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
];

const BlogPage = ({ posts }: BlogPageProps) => {
  const context = useContext(AppContext);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set finishedLoading to true immediately
    if (!context.sharedState.finishedLoading) {
      context.sharedState.finishedLoading = true;
      context.setSharedState({ ...context.sharedState });
    }

    // Clean up event listeners
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      window.removeEventListener(
        "resize",
        context.sharedState.typing.eventInputLostFocus
      );
      document.removeEventListener(
        "keydown",
        context.sharedState.typing.keyboardEvent
      );
    }
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} - Blog`,
    url: absoluteUrl("/blog"),
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      image: absoluteUrl(post.image),
      datePublished: toIsoDate(post.date),
      author: { "@type": "Person", name: post.author },
    })),
  };

  return (
    <>
      <Seo
        title="Blog | Abdullah Esha - Software Engineer"
        description="Articles by Abdullah Esha on software development, React, Next.js, Git, Docker, AWS, Laravel and server administration."
        path="/blog"
        jsonLd={jsonLd}
      />
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
        <Header finishedLoading={true} sectionsRef={homeRef} />
        <SocialMediaAround finishedLoading={true} />

        <main className="px-8 md:px-24 lg:px-32 pt-28 pb-20 max-w-6xl mx-auto">
          <div data-aos="fade-up" className="mb-12">
            <h1 className="text-AAsecondary text-4xl md:text-5xl font-bold mb-4">
              Blog
            </h1>
            <p className="text-gray-400 text-lg">
              Thoughts, ideas, and insights on software development and
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                data-aos="fade-up"
                className="bg-[#112240] rounded-lg overflow-hidden hover:translate-y-[-5px] transition-all duration-300 border border-[#233554] hover:border-AAsecondary/50"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <div className="absolute top-2 left-2 text-white text-xs px-2 py-1 rounded z-10">
                        {/* random color */}
                        {post.tags.map((tag, index) => (
                          <span
                            key={tag}
                            className={`inline-block ${
                              tagColors[(post.id + index) % tagColors.length]
                            } rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2 shadow-md`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-AAsecondary text-sm">
                        {post.category}
                      </span>
                      <span className="mx-2 text-gray-500">•</span>
                      <time
                        dateTime={toIsoDate(post.date)}
                        className="text-gray-500 text-sm"
                      >
                        {post.date}
                      </time>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2 hover:text-AAsecondary transition-colors">
                      {post.title}
                    </h2>
                    <div className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 mr-3">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      </div>
                      <span className="text-gray-400 text-sm">
                        {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>

        <Footer
          githubUrl={"https://github.com/AbdullahEsha/portfolio"}
          hideSocialsInDesktop={true}
        />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async ({
  res,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  const posts = blogData.blogPosts.map(({ content, ...post }) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: excerpt(content, 150),
    author: post.author,
    authorImage: post.authorImage,
    date: post.date,
    category: post.category,
    image: post.image,
    tags: post.tags,
  }));

  return { props: { posts } };
};

export default BlogPage;
