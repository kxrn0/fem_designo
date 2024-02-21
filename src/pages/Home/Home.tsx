import { PageType, pages } from "../../types.ts";
import SCHome from "./Home.styled.tsx";
import heroPhone from "../../assets/images/home/desktop/image-hero-phone.png";
import heroGradient from "../../assets/images/home/desktop/bg-pattern-hero-home.svg";
import appDesignDesktop from "../../assets/images/home/desktop/image-app-design.jpg";
import appDesignTablet from "../../assets/images/home/tablet/image-app-design.jpg";
import appDesignMobile from "../../assets/images/home/mobile/image-app-design.jpg";

import webDesnDesktop from "../../assets/images/home/desktop/image-web-design-large.jpg";
import webDesTablet from "../../assets/images/home/tablet/image-web-design.jpg";
import webDesMobile from "../../assets/images/home/mobile/image-web-design.jpg";

import graphDesktop from "../../assets/images/home/desktop/image-graphic-design.jpg";
import graphTablet from "../../assets/images/home/tablet/image-graphic-design.jpg";
import graphMobile from "../../assets/images/home/mobile/image-graphic-design.jpg";

import IllustPassion from "../../image_components/IllustPassion.tsx";
import IllustResource from "../../image_components/IllustResource.tsx";
import IllustFren from "../../image_components/IllustFren.tsx";

import Sink from "../../components/Sink/Sink.tsx";
import Line from "../../components/Line/Line.tsx";
import Typing from "../../components/Typing/Typing.tsx";
import useVisibility from "../../hooks/useVisibility.ts";
import LeafSVG from "../../image_components/LeafSVG.tsx";
import Lean from "../../components/Lean/Lean.tsx";
import { useMemo } from "react";
import Passion from "../../components/Passion/Passion.tsx";

type Props = {
  currentPage: PageType;
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Home({ currentPage, delay, set_page }: Props) {
  const [headerRef, isHeaderVisible] = useVisibility(0.5, false);
  const pageName = "home";
  const isCurrent = pageName === currentPage.name;
  const heroTitleText =
    "Award-winning custom designs and digital branding solutions";
  const heroMessage =
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.";

  const linksData = useMemo(
    () => [
      {
        page: pages.webDesign,
        delay: delay,
        set_page,
        title: "WEB DESIGN",
        images: {
          desktop: { src: webDesnDesktop, breakPoint: 1200 },
          tablet: { src: webDesTablet, breakPoint: 700 },
          mobile: { src: webDesMobile },
        },
      },
      {
        page: pages.appDesign,
        delay,
        set_page,
        title: "APP DESIGN",
        images: {
          desktop: { src: appDesignDesktop, breakPoint: 1200 },
          tablet: { src: appDesignTablet, breakPoint: 700 },
          mobile: { src: appDesignMobile },
        },
      },
      {
        page: pages.graphicDesign,
        delay,
        set_page,
        title: "GRAPHIC DESIGN",
        images: {
          desktop: { src: graphDesktop, breakPoint: 1200 },
          tablet: { src: graphTablet, breakPoint: 700 },
          mobile: { src: graphMobile },
        },
      },
    ],
    []
  );
  const passionData = useMemo(
    () => [
      {
        Illustration: IllustPassion,
        title: "PASSIONATE",
        description:
          "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      },
      {
        Illustration: IllustResource,
        title: "RESOURCEFUL",
        description:
          "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      },
      {
        Illustration: IllustFren,
        title: "FRIENDLY",
        description:
          " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      },
    ],
    []
  );

  return (
    <SCHome className={isCurrent ? "current" : ""}>
      <LeafSVG />
      <header
        className={`header ${isHeaderVisible && "visible"} ${
          !isCurrent && "anime-exit"
        }`}
        ref={headerRef}
      >
        <div
          className={`images ${isHeaderVisible && "anime-appear"} ${
            !isCurrent && "anime-exit"
          }`}
        >
          <img src={heroGradient} alt="gradient" className="gradient" />
          <img src={heroPhone} alt="phone" className="phone" />
        </div>
        <div className="text">
          <div className="fs-h1">
            <Line text={heroTitleText} timeScale={1 / 5} />
          </div>
          <div className="fs-body">
            <Typing text={heroMessage} delay={delay * 6.5} />
          </div>
          <Sink page={pages.about} delay={delay} set_page={set_page}>
            <p
              className={`button-primary light ${
                isHeaderVisible && "anime-enter"
              }`}
            >
              LEARN MORE
            </p>
          </Sink>
        </div>
      </header>
      <section className={`links ${!isCurrent && "out"}`}>
        {linksData.map((link, index) => (
          <Lean key={index} {...link} isOut={!isCurrent} />
        ))}
      </section>
      <section className="passions">
        {passionData.map((passion, index) => (
          <Passion key={index} {...passion} isOut={!isCurrent} />
        ))}
      </section>
    </SCHome>
  );
}
