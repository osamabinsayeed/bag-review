import pic from './bag.jpg'
import './Home.css'
const Home = () => {


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
            <div>
                <h1>Top Reviews</h1>
            </div>

        </div>
    );
};

export default Home;