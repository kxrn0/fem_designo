import { Route, Switch } from "wouter";
import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import WebDesign from "./pages/WebDesign/WebDesign";
import AppDesign from "./pages/AppDesign/AppDesign";

function App() {
  return (
    <SCApp>
      <Switch>
        <Route path="/fem_designo/">
          <Home />
        </Route>
        <Route path="/fem_designo/web_design">
          <WebDesign />
        </Route>
        <Route path="/fem_designo/app_design">
          <AppDesign />
        </Route>
      </Switch>
    </SCApp>
  );
}

export default App;
