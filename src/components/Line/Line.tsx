import { CSSProperties } from "react";
import SCLine from "./Line.styled.tsx";
import useVisibility from "../../hooks/useVisibility.ts";

type Props = {
  text: string;
  timeScale?: number;
};

export default function Line({ text, timeScale = 1 }: Props) {
  const [ref, isVisible] = useVisibility(1, false);

  return (
    <SCLine ref={ref}>
      <p className="sr-only">{text}</p>
      {text.split(" ").map((word, wordIndex, wordArray) => (
        <div className="word" key={wordIndex}>
          {word.split("").map((char, charIndex) => {
            const prevSum = wordArray.reduce(
              (sum, curr, currIndex) =>
                sum + (currIndex < wordIndex ? curr.length : 0),
              0
            );
            const index = charIndex + prevSum;

            return (
              <pre
                aria-hidden="true"
                className={`block ${isVisible && "anime-enter"}`}
                style={
                  {
                    "--index": index,
                    "--time-scale": timeScale,
                  } as CSSProperties
                }
                key={charIndex}
              >
                {char}
              </pre>
            );
          })}
        </div>
      ))}
    </SCLine>
  );
}
