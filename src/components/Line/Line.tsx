import { CSSProperties } from "react";
import SCLine from "./Line.styled.tsx";

type Props = {
  text: string;
  isAnimated: boolean;
};

export default function Line({ text, isAnimated }: Props) {
  return (
    <SCLine>
      <p className="sr-only">{text}</p>
      {text.split(" ").map((word, wordIndex, wordArray) => (
        <p className="word">
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
                className={`block ${isAnimated && "anime-from-above"}`}
                style={{ "--index": index } as CSSProperties}
              >
                {char}
              </pre>
            );
          })}
        </p>
      ))}
    </SCLine>
  );
}
