import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ Import Counter

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Counter /> {/* ✅ Display Counter */}
      <Footer />
    </>
  );
}

export default App;
