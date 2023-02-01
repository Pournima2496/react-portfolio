import "./App.scss";
import "./darkTheme.scss";
import { useContext } from "react";
import {
  About,
  Contact,
  Home,
  Navbar,
  ProjectList,
  Footer
} from "./constants/constant";
import { DarkModeContext } from "./context/context";

function App() {
  const theme = useContext(DarkModeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar />
      <Home />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
