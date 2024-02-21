import { Route, Switch, useRoute } from "wouter";
import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import WebDesign from "./pages/WebDesign/WebDesign";
import AppDesign from "./pages/AppDesign/AppDesign";
import Navbar from "./components/Navbar/Navbar";
import { pages } from "./types";
import { useEffect, useState } from "react";
import About from "./pages/About/About";
import Locations from "./pages/Locations/Locations";
import Contact from "./pages/Contact/Contact";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState(pages.home);
  const delay = 0.33;
  const [matchesContacts] = useRoute(pages.contact.href);

  useEffect(() => {
    //find the actual current page...
  }, []);

  useEffect(() => {
    //scroll to top when the page changes
  }, []);

  return (
    <SCApp>
      <Navbar delay={delay * 2} set_page={setCurrentPage} />
      <Switch>
        <Route path={pages.home.href}>
          <Home
            currentPage={currentPage}
            delay={delay * 2}
            set_page={setCurrentPage}
          />
        </Route>
        <Route path={pages.webDesign.href}>
          <WebDesign />
        </Route>
        <Route path={pages.appDesign.href}>
          <AppDesign />
        </Route>
        <Route path={pages.graphicDesign.href}>
          <GraphicDesign />
        </Route>
        <Route path={pages.about.href}>
          <About />
        </Route>
        <Route path={pages.locations.href}>
          <Locations />
        </Route>
        <Route path={pages.contact.href}>
          <Contact />
        </Route>
        <Route>
          <p>404</p>
        </Route>
      </Switch>
      <Footer
        isInContacts={matchesContacts}
        delay={delay}
        set_page={setCurrentPage}
      />
    </SCApp>
  );
}

export default App;
