import { ReactNode, MouseEvent, useState } from "react";
import { useLocation } from "wouter";
import { PageType } from "../../types";
import SCSink from "./Sink.styled";

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
    set_page(page);

    setTimeout(() => {
      setLocation(page.href);
      setIsDisabled(false);
    }, delay * 1000);
  }

  return (
    <SCSink href={page.href} onClick={handle_click}>
      {children}
    </SCSink>
  );
}
