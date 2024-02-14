import { PageType } from "../../types.ts";
import Sink from "../Sink/Sink.tsx";
import SCLean from "./Lean.styled.tsx";

type Props = {
  page: PageType;
  delay: number;
  set_page: (page: PageType) => void;
  images: {
    desktop: { src: string; breakPoint: number };
    tablet: { src: string; breakPoint: number };
    mobile: { src: string };
  };
  title: string;
};

export default function Lean({ page, delay, set_page, images, title }: Props) {
  return (
    <Sink page={page} delay={delay} set_page={set_page}>
      <SCLean>
        <picture className="image">
          <source
            srcSet={images.desktop.src}
            media={`(min-width: ${images.desktop.breakPoint}px)`}
          />
          <source
            srcSet={images.tablet.src}
            media={`(min-width: ${images.tablet.breakPoint}px)`}
          />
          <img src={images.mobile.src} alt={title} />
        </picture>
        <div className="text">
          <p className="fs-h2">{title}</p>
          <p className="fs-bag">VIEW PROJECTS</p>
        </div>
      </SCLean>
    </Sink>
  );
}
