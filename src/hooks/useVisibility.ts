import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function useVisibility(
  threshold = 0,
  toggle = false
): [MutableRefObject<null>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];

        if (target.isIntersecting) setIsVisible(true);

        if (toggle && !target.isIntersecting) setIsVisible(false);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, toggle]);

  return [ref, isVisible];
}
