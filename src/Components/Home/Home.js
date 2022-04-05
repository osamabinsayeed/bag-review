import pic from './bag.jpg'
import './Home.css'
import LoadData from '../hooks/LoadData';
const Home = () => {
    const reviews = LoadData().slice(0, 3);

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
                {reviews.map(review => <div className='reviews'>
                    <img src={review.img} alt="" />
                    <div>
                        <h3>{review.name}</h3>
                        <p className='text'>{review.review}</p>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default Home;