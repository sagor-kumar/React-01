import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Intro from "./components/Intro";
import Project from "./components/Projects";
import Feature from "./components/feature";

function App() {

  return (
    <>
      <Header />
      <main>
        <Person />
        <Intro />
        <Project />
        <Feature />
      </main>
      <Footer />
    </>
  );
}

export default App
