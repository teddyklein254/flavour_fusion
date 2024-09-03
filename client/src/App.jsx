import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import CategoriesBar from './components/CategoriesBar/CategoriesBar';
import Posts from './components/posts/Posts';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesBar />
      <Posts />
    </>
  )
}

export default App
