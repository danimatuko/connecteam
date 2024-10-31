import './App.css';

// Importing components
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import ContentSectionSpecial from './components/ContentSectionSpecial';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Hero />
      <Nav />
      <ContentSection dataName="repudiandae" />
      <ContentSection dataName="sit-at-enim" />
      <ContentSectionSpecial dataName="dolore-ipsum" />
      <ContentSection dataName="praesentium-aspernatur" />
      <Footer dataName="footer" />
    </>
  );
};

export default App;
