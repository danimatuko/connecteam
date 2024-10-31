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
      <ContentSection dataName="dolore-ipsum" />
      <ContentSection dataName="praesentium-aspernatur" />
      <ContentSectionSpecial dataName="dolore-ipsum" />
      <Footer dataName="footer" />
    </>
  );
};

export default App;
