import SCNavbar from "./Navbar.styled.tsx";
import logoImage from "../../assets/images/shared/desktop/logo-dark.png";
import { PageType } from "../../types.ts";
import Sink from "../Sink/Sink.tsx";
import { pages } from "../../types.ts";
import { ChangeEvent, useState } from "react";
import useVisibility from "../../hooks/useVisibility.ts";

type Props = {
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Navbar({ delay, set_page }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ref, isVisible] = useVisibility(0, true);

  function handle_change(event: ChangeEvent<HTMLInputElement>) {
    setIsMounted(true);
    setIsOpen(event.target.checked);
  }

  return (
    <SCNavbar>
      <div className="placeholder" ref={ref}></div>
      <p className="scaron">{isVisible ? "visible" : "not visible"}</p>
      <div
        className={`overlay ${isOpen && "open"}`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className={`content ${!isVisible && "scrolled"}`}>
        <div className="head">
          <Sink page={pages.home} delay={delay} set_page={set_page}>
            <img src={logoImage} alt="company logo" className="logo" />
          </Sink>
          <label className="toggle">
            <input type="checkbox" checked={isOpen} onChange={handle_change} />
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </div>
        <ul
          className={`links ${isOpen ? "open" : "closed"} ${
            isMounted && "mounted"
          }`}
        >
          <li>
            <Sink page={pages.about} delay={delay} set_page={set_page}>
              <p>OUR COMPANY</p>
            </Sink>
          </li>
          <li>
            <Sink page={pages.locations} delay={delay} set_page={set_page}>
              <p>LOCATIONS</p>
            </Sink>
          </li>
          <li>
            <Sink page={pages.contact} delay={delay} set_page={set_page}>
              <p>CONTACT</p>
            </Sink>
          </li>
        </ul>
      </div>
    </SCNavbar>
  );
}
