import { CSSProperties, useEffect, useRef, useState } from "react";
import SCTyping from "./Typing.styled.tsx";
import useVisibility from "../../hooks/useVisibility.ts";

type Props = {
  text: string;
  delay: number;
};

export default function Typing({ text, delay }: Props) {
  const [isTyping, setIsTyping] = useState(false);
  const [ref, isVisible] = useVisibility(1, false);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const id = setTimeout(() => setIsTyping(true), 1000 * delay);

    timeRef.current = id;

    return () => clearTimeout(timeRef.current);
  }, [isVisible]);

  return (
    <SCTyping className={`typing ${isTyping && "is-typing"}`} ref={ref}>
      <p className="sr-only">{text}</p>
      {text.split(" ").map((word, wordIndex, words) => (
        <div className="word" key={wordIndex}>
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
                className={`character ${isTyping && "is-typing"}`}
                style={{ "--index": index } as CSSProperties}
                key={charIndex}
              >
                {char}
              </pre>
            );
          })}
        </div>
      ))}
    </SCTyping>
  );
}
