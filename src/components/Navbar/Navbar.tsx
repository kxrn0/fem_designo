import SCNavbar from "./Navbar.styled.tsx";
import logoImage from "../../assets/images/shared/desktop/logo-dark.png";
import { PageType } from "../../types.ts";
import Sink from "../Sink/Sink.tsx";
import { pages } from "../../types.ts";

type Props = {
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Navbar({ delay, set_page }: Props) {
  return (
    <SCNavbar>
      <Sink page={pages.home} delay={delay} set_page={set_page}>
        <img src={logoImage} alt="company logo" className="logo" />
      </Sink>
      <ul className="links">
        <li>
          <Sink page={pages.about} delay={delay} set_page={set_page}>
            <p>our company</p>
          </Sink>
        </li>
        <li>
          <Sink page={pages.locations} delay={delay} set_page={set_page}>
            <p>locations</p>
          </Sink>
        </li>
        <li>
          <Sink page={pages.contact} delay={delay} set_page={set_page}>
            <p>contact</p>
          </Sink>
        </li>
      </ul>
    </SCNavbar>
  );
}
