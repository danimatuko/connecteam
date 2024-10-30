import './App.css';

// Importing components
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import ContentSectionSpecial from './components/ContentSectionSpecial';
import Nav from './components/Nav';

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
    </>
  );
};

export default App;
