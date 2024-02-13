import { PageType, pages } from "../../types.ts";
import SCHome from "./Home.styled.tsx";
import heroPhone from "../../assets/images/home/desktop/image-hero-phone.png";
import heroGradient from "../../assets/images/home/desktop/bg-pattern-hero-home.svg";
import Sink from "../../components/Sink/Sink.tsx";
import Line from "../../components/Line/Line.tsx";
import Typing from "../../components/Typing/Typing.tsx";
import useVisibility from "../../hooks/useVisibility.ts";

type Props = {
  currentPage: PageType;
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Home({ currentPage, delay, set_page }: Props) {
  const [headerRef, isHeaderVisible] = useVisibility(1, false);
  const pageName = "home";
  const isCurrent = pageName === currentPage.name;
  const heroTitleText =
    "Award-winning custom designs and digital branding solutions";
  const heroMessage =
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.";

  return (
    <SCHome className={isCurrent ? "current" : ""}>
      <header
        className={`header ${isHeaderVisible && "visible"} ${
          !isCurrent && "anime-to-below"
        }`}
        ref={headerRef}
      >
        <div className="images">
          <img src={heroGradient} alt="gradient" className="gradient" />
          <img src={heroPhone} alt="phone" className="phone" />
        </div>
        <div className="text">
          <div className="fs-h1">
            <Line text={heroTitleText} durationFactor={1 / 5} />
          </div>
          <div className="fs-body">
            <Typing text={heroMessage} delay={delay * 13} />
          </div>
          <Sink page={pages.about} delay={delay} set_page={set_page}>
            <p className="button-primary light">LEARN MORE</p>
          </Sink>
        </div>
      </header>
      <div className="byme"></div>
    </SCHome>
  );
}
