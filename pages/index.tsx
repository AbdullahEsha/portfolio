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
import Seo from "../components/Seo/Seo";
import { absoluteUrl, SITE_NAME, SITE_URL } from "../lib/seo";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import SocialMediaAround from "../components/Home/SocialMediaAround/SocialMediaAround";

const personJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl("/abdullah-circle.png"),
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/AbdullahEsha",
      "https://www.linkedin.com/in/abdullahesha",
      "https://www.instagram.com/shahriar_isha",
    ],
  },
];

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

  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Seo
        title="Abdullah Esha - Software Engineer"
        description="Abdullah Esha is a full-stack software engineer building microservices, APIs, ERP/CRM systems and modern web apps with React, Next.js and Node.js. Get in touch to work together."
        path="/"
        jsonLd={personJsonLd}
      />
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
