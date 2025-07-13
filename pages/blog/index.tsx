import { useContext, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AppContext from "../../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import blogData from "../../blogPosts.json";
import Image from "next/image";
import SocialMediaAround from "../../components/Home/SocialMediaAround/SocialMediaAround";

const BlogPage = () => {
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

  const meta = {
    title: "Abdullah Esha - Blog",
    description: `Read my thoughts on software development, tech trends, and more.`,
    image: "/abdullahCircle.png",
    type: "website",
  };

  const randomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://abdullahesha.me/blog`} />
        <link rel="canonical" href={`https://abdullahesha.me/blog`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Abdullah Esha" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shahria72632736" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
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
            {blogData.blogPosts.map((post) => (
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
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-block ${randomColor()} rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2 shadow-md`}
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
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-2 hover:text-AAsecondary transition-colors">
                      {post.title}
                    </h2>
                    <div className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.content.replace(/<[^>]*>/g, "").substring(0, 150)}
                      ...
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

export default BlogPage;
