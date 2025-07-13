import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useRef } from "react";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import SocialMediaAround from "../components/Home/SocialMediaAround/SocialMediaAround";

export default function Home() {
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set finishedLoading to true immediately
    if (!context.sharedState.finishedLoading) {
      context.sharedState.finishedLoading = true;
      context.setSharedState({ ...context.sharedState });
    }

    // remove the interval Cookie timer setter
    clearInterval(context.sharedState.userdata.timerCookieRef.current);

    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener(
        "resize",
        context.sharedState.userdata.windowSizeTracker.current
      );
      window.removeEventListener(
        "mousemove",
        context.sharedState.userdata.mousePositionTracker.current,
        false
      );
      // remove Typing project EventListeners
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
    title: "Abdullah Esha - Software Engineer",
    description: `I've been working on Software development for 2 years straight. Get in touch with me to know more.`,
    image: "/abdullah-circle.png",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://abdullahesha.me`} />
        <link rel="canonical" href={`https://abdullahesha.me`} />
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
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        <Header finishedLoading={true} sectionsRef={homeRef} />
        <MyName finishedLoading={true} />
        <SocialMediaAround finishedLoading={true} />
        <AboutMe ref={aboutRef} />
        <WhereIHaveWorked />
        <SomethingIveBuilt />
        <GetInTouch />
        <Footer
          githubUrl={"https://github.com/AbdullahEsha/portfolio"}
          hideSocialsInDesktop={true}
        />
        {!isProd && <ScreenSizeDetector />}
      </div>
    </>
  );
}
