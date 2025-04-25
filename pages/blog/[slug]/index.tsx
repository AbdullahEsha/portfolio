import { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import parse from "html-react-parser";
import Aos from "aos";
import "aos/dist/aos.css";
import { ArrowLeft, Calendar, User } from "lucide-react";
import AppContext from "../../../components/AppContextFolder/AppContext";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { blogPosts } from "../../../blogPosts.json";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const context = useContext(AppContext);
  const homeRef = useRef<HTMLDivElement>(null);

  const post = blogPosts.find((post) => post.slug === slug);

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

  // If the post is not found or the page is still loading, show a loading state
  if (!post && slug) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-AAprimary">
        <div className="text-AAsecondary text-xl">
          {/* animate loading */}
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-64"></div>
          </div>
        </div>
      </div>
    );
  }

  const meta = post
    ? {
        title: `${post.title} | Abdullah Esha`,
        description: post.content.replace(/<[^>]*>/g, "").substring(0, 150),
        image: post.image,
        type: "article",
      }
    : {
        title: "Blog Post | Abdullah Esha",
        description:
          "Read my thoughts on software development, tech trends, and more.",
        image: "/abdullahCircle.png",
        type: "website",
      };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://abdullahesha.me/blog/${slug}`}
        />
        <link rel="canonical" href={`https://abdullahesha.me/blog/${slug}`} />
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
        {/* <SocialMediaArround finishedLoading={true} /> */}

        {post && (
          <main className="px-8 md:px-24 lg:px-32 pt-28 pb-20 max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-AAsecondary hover:text-AAsecondary/80 transition-colors mb-6"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all posts
              </Link>

              <h1
                data-aos="fade-up"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                {post.title}
              </h1>

              <div
                data-aos="fade-up"
                className="flex flex-wrap items-center text-gray-400 mb-8"
              >
                <div className="flex items-center mr-6 mb-2">
                  <User size={16} className="mr-2 text-AAsecondary" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Calendar size={16} className="mr-2 text-AAsecondary" />
                  <span>{post.date}</span>
                </div>
                <div className="w-full mt-2">
                  <span className="inline-block bg-[#233554] text-AAsecondary rounded-full px-3 py-1 text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="h-64 md:h-80 bg-gray-700 rounded-lg mb-8 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-sm">Featured Image</span>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="text-gray-400 text-lg mb-8 line-clamp-3"
            >
              {parse(post.content)}
            </div>

            <div className="mt-12 pt-8 border-t border-[#233554]">
              <h3 className="text-white text-xl font-semibold mb-4">
                Share this post
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-AAsecondary transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-AAsecondary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-AAsecondary transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </main>
        )}

        <Footer
          githubUrl={"https://github.com/AbdullahEsha/portfolio"}
          hideSocialsInDesktop={true}
        />
      </div>
    </>
  );
}
