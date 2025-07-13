import { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import AppContext from "../../../components/AppContextFolder/AppContext";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import blogPosts from "../../../blogPosts.json";
import Image from "next/image";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const context = useContext(AppContext);
  const homeRef = useRef<HTMLDivElement>(null);

  const post = blogPosts.blogPosts.find((post) => post.slug === slug);

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
        image: "/abdullah-circle.png",
        type: "website",
      };

  const tagColors = [
    "bg-gradient-to-r from-blue-500 to-cyan-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-green-500 to-emerald-500",
    "bg-gradient-to-r from-orange-500 to-red-500",
    "bg-gradient-to-r from-indigo-500 to-purple-500",
    "bg-gradient-to-r from-teal-500 to-blue-500",
  ];

  const getTagColor = (index) => {
    return tagColors[index % tagColors.length];
  };

  // Enhanced content parser with custom styling
  const parseContent = (content) => {
    return parse(content, {
      replace: (domNode) => {
        if (domNode.type === "tag") {
          const getTextContent = (node) => {
            if (node.type === "text") return node.data;
            if (node.children) {
              return node.children
                .map((child) => getTextContent(child))
                .join("");
            }
            return "";
          };

          switch (domNode.name) {
            case "h2":
              return (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 mt-8 relative group">
                  <span className="relative z-10">
                    {getTextContent(domNode)}
                  </span>
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-AAsecondary to-blue-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                </h2>
              );
            case "h3":
              return (
                <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-3 mt-6">
                  {getTextContent(domNode)}
                </h3>
              );
            case "p":
              return (
                <p className="text-gray-300 leading-relaxed mb-4 text-base md:text-lg">
                  {getTextContent(domNode)}
                </p>
              );
            case "code":
              if (
                domNode.parent &&
                typeof domNode.parent === "object" &&
                "name" in domNode.parent &&
                (domNode.parent as any).name === "pre"
              ) {
                return (
                  <code className="block bg-gray-900 border border-gray-700 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto relative">
                    <div className="absolute top-2 right-2 text-xs text-gray-500">
                      CODE
                    </div>
                    {getTextContent(domNode)}
                  </code>
                );
              }
              return (
                <code className="bg-gray-800 text-cyan-400 px-2 py-1 rounded font-mono text-sm border border-gray-700">
                  {getTextContent(domNode)}
                </code>
              );
            case "pre":
              return (
                <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 mb-6 overflow-x-auto relative shadow-lg">
                  <div className="absolute top-2 right-2 text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    CODE
                  </div>
                  {getTextContent && parse(getTextContent(domNode))}
                </pre>
              );
            case "ul":
              return (
                <ul className="list-none space-y-2 mb-6 ml-4">
                  {domNode.children
                    ?.filter(
                      (child) => child.type === "tag" && child.name === "li"
                    )
                    .map((child, index) => (
                      <li key={index} className="text-gray-300 relative pl-6">
                        <span className="absolute left-0 top-2 w-2 h-2 bg-AAsecondary rounded-full shadow-sm shadow-AAsecondary/50"></span>
                        {domToReact((child as any).children)}
                      </li>
                    ))}
                </ul>
              );
            case "ol":
              return (
                <ol className="list-none space-y-2 mb-6 ml-4">
                  {domNode.children
                    ?.filter(
                      (child) => child.type === "tag" && child.name === "li"
                    )
                    .map((child, index) => (
                      <li key={index} className="text-gray-300 relative pl-8">
                        <span className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-r from-AAsecondary to-blue-500 rounded-full text-white text-xs flex items-center justify-center font-semibold shadow-sm shadow-AAsecondary/30">
                          {index + 1}
                        </span>
                        {domToReact((child as any).children)}
                      </li>
                    ))}
                </ol>
              );
            default:
              return;
          }
        }
      },
    });
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

        {post && (
          <main className="px-6 md:px-12 lg:px-24 pt-28 pb-20 max-w-5xl mx-auto">
            {/* Back Navigation */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-AAsecondary hover:text-white transition-all duration-300 mb-6 group"
              >
                <ArrowLeft
                  size={16}
                  className="mr-2 group-hover:-translate-x-1 transition-transform"
                />
                Back to all posts
              </Link>

              {/* Article Header */}
              <div className="mb-8">
                <h1
                  data-aos="fade-up"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div
                  data-aos="fade-up"
                  className="flex flex-wrap items-center text-gray-400 mb-8 space-x-6"
                >
                  <div className="flex items-center">
                    <User size={16} className="mr-2 text-AAsecondary" />
                    <span className="text-gray-300">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-AAsecondary" />
                    <span className="text-gray-300">{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-AAsecondary" />
                    <span className="text-gray-300">{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`inline-block ${getTagColor(
                        index
                      )} rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative mb-12 group">
                <div className="h-64 md:h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    width={800}
                    height={400}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-AAprimary/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Article Content */}
            <article data-aos="fade-up" className="prose prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed">
                {parseContent(post.content)}
              </div>
            </article>

            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2 flex items-center">
                    <Share2 size={20} className="mr-2 text-AAsecondary" />
                    Share this post
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Found this helpful? Share it with your network!
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(
                      `https://abdullahesha.me/blog/${slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
                  >
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      `https://abdullahesha.me/blog/${slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://abdullahesha.me/blog/${slug}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-colors duration-300 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg"
                  >
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Author Card */}
            <div className="mt-12 bg-gray-900/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-AAsecondary to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {post.author}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Full Stack Developer passionate about creating amazing web
                    experiences
                  </p>
                </div>
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
