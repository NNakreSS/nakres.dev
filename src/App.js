import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ActiveSectionProvider } from './ActiveSectionContext';
import { Element } from 'react-scroll';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ActiveSectionProvider>
        <Header />
        <Element name="home">
          <Banner />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Footer/>
      </ActiveSectionProvider>
    </div>
  );
}

export default App;
