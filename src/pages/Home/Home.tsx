import { PageType, pages } from "../../types.ts";
import SCHome from "./Home.styled.tsx";
import heroPhone from "../../assets/images/home/desktop/image-hero-phone.png";
import heroGradient from "../../assets/images/home/desktop/bg-pattern-hero-home.svg";
import Sink from "../../components/Sink/Sink.tsx";
import { CSSProperties } from "react";

type Props = {
  currentPage: PageType;
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Home({ currentPage, delay, set_page }: Props) {
  const pageName = "home";
  const isCurrent = pageName === currentPage.name;
  const headerTitleText =
    "Award-winning custom designs and digital branding solutions";

  return (
    <SCHome className={isCurrent ? "current" : ""}>
      <header className="header">
        <div className="images">
          <img src={heroGradient} alt="gradient" className="gradient" />
          <img src={heroPhone} alt="phone" className="phone" />
        </div>
        <div className="text">
          <div className="fs-h1 line">
            <p className="sr-only">{headerTitleText}</p>
            {headerTitleText.split("").map((char, index) => (
              <pre
                aria-hidden="true"
                className="block anime-from-above"
                style={{ "--index": index } as CSSProperties}
              >
                {char}
              </pre>
            ))}
          </div>
          <p className="fs-body">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Sink page={pages.about} delay={delay} set_page={set_page}>
            <p className="button-primary light">LEARN MORE</p>
          </Sink>
        </div>
      </header>
    </SCHome>
  );
}
