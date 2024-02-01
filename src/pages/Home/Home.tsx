import { PageType } from "../../types.ts";
import SCHome from "./Home.styled.tsx";

type Props = {
  currentPage: PageType;
};

export default function Home({ currentPage }: Props) {
  return (
    <SCHome>
      <h1>Home</h1>
    </SCHome>
  );
}
