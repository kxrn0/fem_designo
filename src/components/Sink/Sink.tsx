import { ReactNode, MouseEvent, useState } from "react";
import { Link, useLocation } from "wouter";
import { PageType } from "../../types";

type Props = {
  children: ReactNode;
  page: PageType;
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Sink({ children, page, delay, set_page }: Props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [, setLocation] = useLocation();

  function handle_click(event: MouseEvent) {
    event.preventDefault();

    if (isDisabled) return;

    setIsDisabled(true);

    setTimeout(() => {
      setLocation(page.href);
      set_page(page);
      setIsDisabled(false);
    }, delay * 1000);
  }

  return (
    <Link to={page.href} onClick={handle_click}>
      {children}
    </Link>
  );
}
