import { CSSProperties } from "react";
import SCTyping from "./Typing.styled.tsx";

type Props = {
  text: string;
  visible: boolean;
};

export default function Typing({ text, visible }: Props) {
  return (
    <SCTyping>
      <p className="sr-only">{text}</p>
      {text.split(" ").map((word, wordIndex, words) => (
        <p className="word">
          {word.split("").map((char, charIndex) => {
            const sum = words.reduce(
              (sum, current, currentIndex) =>
                sum + (currentIndex < wordIndex ? current.length : 0),
              0
            );
            const index = charIndex + sum;

            return (
              <pre
                aria-hidden="true"
                className={`character ${visible && "visible"}`}
                style={{ "--index": index } as CSSProperties}
              >
                {char}
              </pre>
            );
          })}
        </p>
      ))}
    </SCTyping>
  );
}
