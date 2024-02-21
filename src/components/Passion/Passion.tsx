import { FunctionComponent } from "react";
import SCPassion from "./Passion.styled.tsx";
import useVisibility from "../../hooks/useVisibility.ts";
import SmallCircle from "../../image_components/SmallCircle.tsx";

type Props = {
  Illustration: FunctionComponent;
  title: string;
  description: string;
  isOut: boolean;
};

export default function Passion({
  Illustration,
  title,
  description,
  isOut,
}: Props) {
  const [ref, isVisible] = useVisibility(1, false);

  return (
    <SCPassion ref={ref}>
      <div
        className={`content invisible ${isVisible && "anime-enter"} ${
          isOut && "anime-exit"
        }`}
      >
        <div className="image">
          <SmallCircle />
          <Illustration />
        </div>
        <p className="fs-h3">{title}</p>
        <p className="fs-body">{description}</p>
      </div>
    </SCPassion>
  );
}
