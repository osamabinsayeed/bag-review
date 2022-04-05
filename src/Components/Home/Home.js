import pic from './bag.jpg'
import './Home.css'
import LoadData from '../hooks/LoadData';
import { Link } from 'react-router-dom';
const Home = () => {
    const reviews = LoadData().slice(0, 3);
    const { name, review, img, id } = reviews;
    return (
        <div>
            <div className='home-comp'>
                <div>
                    <h1 className='probably'>Probably</h1>
                    <h1 className='the-best'>the best reviewing site...</h1>
                </div>
                <div className='bag-img'>
                    <img src={pic} alt="bag" />
                </div>
            </div>
            <div className='all-reviews'>
                <h1>Top Reviews</h1>
                {reviews.map(review => <div className='reviews' key={review.id}>
                    <img src={review.img} alt="" />
                    <div>
                        <h3 >{review.name}</h3>
                        <p>{review.review}</p>
                        <p>Rating:{review.rating}</p>
                    </div>
                </div>)}
                <div>
                    <Link to="/reviews" className='more-reviews'><h2>See more reviews</h2></Link>
                </div>
            </div>

        </div>
    );
};

export default Home;