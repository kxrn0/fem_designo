import Balls from "../../image_components/Balls.tsx";
import { PageType, pages } from "../../types.ts";
import Sink from "../Sink/Sink.tsx";
import SCFooter from "./Footer.styled.tsx";
import logoImage from "../../assets/images/shared/desktop/logo-light.png";
import IconFacebook from "../../image_components/IconFacebook.tsx";
import IconYoutube from "../../image_components/IconYoutube.tsx";
import IconTwitter from "../../image_components/IconTwitter.tsx";
import IconPin from "../../image_components/IconPin.tsx";
import IconInst from "../../image_components/IconInst.tsx";
import useVisibility from "../../hooks/useVisibility.ts";

type Props = {
  isInContacts: boolean;
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Footer({ isInContacts, delay, set_page }: Props) {
  const [pseudoRef, isPseudoVisible] = useVisibility(1, false);

  return (
    <SCFooter className={isInContacts ? "in-contacts" : ""}>
      {!isInContacts && (
        <div
          className={`pseudofooter invisible ${
            isPseudoVisible && "anime-appear"
          }`}
          ref={pseudoRef}
        >
          <Balls />
          <div className="content">
            <p className="fs-h2">Let’s talk about your project</p>
            <p className="fs-body">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
            <Sink page={pages.contact} delay={delay * 2} set_page={set_page}>
              <p className="button-primary light">GET IN TOUCH</p>
            </Sink>
          </div>
        </div>
      )}
      <div className="top">
        <Sink page={pages.home} delay={delay} set_page={set_page}>
          <img src={logoImage} alt="company logo" className="image" />
        </Sink>
        <div className="fs-link links">
          <Sink page={pages.about} delay={delay} set_page={set_page}>
            <p>OUR COMPANY</p>
          </Sink>
          <Sink page={pages.locations} delay={delay} set_page={set_page}>
            <p>LOCATIONS</p>
          </Sink>
          <Sink page={pages.contact} delay={delay} set_page={set_page}>
            <p>CONTACT</p>
          </Sink>
        </div>
      </div>
      <div className="bottom">
        <div className="location fs-body">
          <p className="bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="contact fs-body">
          <p className="bold">Contact Us (Central Office)</p>
          <p className="unbold">P : +1 253-863-8967</p>
          <p className="unbold">M : contact@designo.co</p>
        </div>
        <div className="socials">
          <a
            href="https://youtu.be/MEQMkzjcLEA?si=no"
            target="_blank"
            aria-label="facebook"
          >
            <IconFacebook />
          </a>
          <a
            href="https://youtu.be/q9Zn1FFaFEk?si=no"
            target="_blank"
            aria-label="youtube"
          >
            <IconYoutube />
          </a>
          <a
            href="https://youtu.be/C2xvePQ3ejo?si=no"
            target="_blank"
            aria-label="xhitter"
          >
            <IconTwitter />
          </a>
          <a
            href="https://youtu.be/tyneiz9FRMw?si=no"
            target="_blank"
            aria-label="pinterest"
          >
            <IconPin />
          </a>
          <a
            href="https://youtu.be/UnIhRpIT7nc?si=no"
            target="_blank"
            aria-label="instagram"
          >
            <IconInst />
          </a>
        </div>
      </div>
    </SCFooter>
  );
}
