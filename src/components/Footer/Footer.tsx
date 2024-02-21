import Balls from "../../image_components/Balls.tsx";
import { PageType, pages } from "../../types.ts";
import Sink from "../Sink/Sink.tsx";
import SCFooter from "./Footer.styled.tsx";

type Props = {
  isInContacts: boolean;
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Footer({ isInContacts, delay, set_page }: Props) {
  return (
    <SCFooter>
      {!isInContacts && (
        <div className="pseudofooter">
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
    </SCFooter>
  );
}
