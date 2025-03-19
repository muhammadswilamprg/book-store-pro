import BookSlider from '../../components/book-slider/BookSlider.jsx';
import HeadingTitle from '../../components/heading-title/HeadingTitle.jsx';
import Services from '../../components/services/Services.jsx';
import Slider from '../../components/slider/Slider.jsx';

import { BOOKS } from '../../data/books.js';

const HomePage = () => {
    return (
        <div className="home">
            <Slider />
            <Services />
            <HeadingTitle title="Most Gifted" />
            <BookSlider data={BOOKS} />
            <HeadingTitle title="Best Seller" />
            <BookSlider data={BOOKS} />
            <HeadingTitle title="Most Wished FOr" />
            <BookSlider data={BOOKS} />
        </div>
    );
}
 
export default HomePage;