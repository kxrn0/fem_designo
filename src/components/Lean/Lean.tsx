import useVisibility from "../../hooks/useVisibility.ts";
import { PageType } from "../../types.ts";
import IconArrowRight from "../IconArrowRight/IconArrowRight.tsx";
import Sink from "../Sink/Sink.tsx";
import SCLean from "./Lean.styled.tsx";

type Props = {
  page: PageType;
  delay: number;
  set_page: (page: PageType) => void;
  title: string;
  images: {
    desktop: { src: string; breakPoint: number };
    tablet: { src: string; breakPoint: number };
    mobile: { src: string };
  };
};

export default function Lean({ page, delay, set_page, title, images }: Props) {
  const [ref, isVisible] = useVisibility(1, false);

  return (
    <Sink page={page} delay={delay} set_page={set_page}>
      <SCLean ref={ref}>
        <div className={`content invisible ${isVisible && "anime-enter"}`}>
          <picture className="picture">
            <source
              srcSet={images.desktop.src}
              media={`(min-width: ${images.desktop.breakPoint}px)`}
            />
            <source
              srcSet={images.tablet.src}
              media={`(min-width: ${images.tablet.breakPoint}px)`}
            />
            <img className="image" src={images.mobile.src} alt={title} />
          </picture>
          <div className="text">
            <p className="fs-h2">{title}</p>
            <div className="fs-bag">
              <span>VIEW PROJECTS</span>
              <IconArrowRight />
            </div>
          </div>
        </div>
      </SCLean>
    </Sink>
  );
}
