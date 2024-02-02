import { PageType } from "../../types.ts";
import SCHome from "./Home.styled.tsx";

type Props = {
  currentPage: PageType;
  delay: number;
  set_page: (page: PageType) => void;
};

export default function Home({ currentPage, delay, set_page }: Props) {
  const pageName = "home";
  const isCurrent = pageName === currentPage.name;

  return (
    <SCHome className={isCurrent ? "current" : ""}>
      <h1>Home</h1>
    </SCHome>
  );
}
