import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { LanguageProvider } from "./components/context/languageContext";

function App() {
  return (
    <LanguageProvider>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </LanguageProvider>
  );
}

export default App;
