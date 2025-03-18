import './App.css';

import BookSlider from './components/book-slider/BookSlider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeadingTitle from './components/heading-title/HeadingTitle';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';

import { BOOKS } from './data/books';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <HeadingTitle title="Most Gifted" />
      <BookSlider data={BOOKS} />
      <HeadingTitle title="Best Seller" />
      <BookSlider data={BOOKS} />
      <HeadingTitle title="Most Wished FOr" />
      <BookSlider data={BOOKS} />
      <Footer />
    </div>
  );
}

export default App;
