// import SignIn from './component/logSignIn/login.js';
// import SignUp from './component/logSignIn/signup.js';
import Rooms from '../rooms/rooms';
import Contact from '../contact/Contact'
import Services from '../services/services'
import About from '../about/About';
import SignIn from './login';
import image2 from '../images/Tennis Court.jpg'
// import Homepage from '../homepage/home'
import {Link} from 'react-router-dom'
import twitter from '../images/Rooms/twitter.png'
import facebook from '../images/Rooms/facebook.png'

function Home(){
    return(
        <div className="Container">

            <div className="top-part">
            <h1 className="logo">Hopewell's Garden</h1>
                <div className='menu-part '>
                <a className="menu"><Link to="/">Home</Link></a>
                    <a className="menu"><Link to="/About">About Us</Link></a>
                    <a className="menu"><Link to="/Rooms">Rooms</Link></a>
                    <a className="menu"><Link to="/Contacts">Reviews</Link></a>
                    <a className="menu"><Link to="/Services">Services</Link></a>
                   

                </div>
            </div>

            <div >
                        <img src={image2} style={{width: '100%'}}></img>
                        
            </div>

            <div className="col-md-12 text-center">
                <h3 className="main-heading" style={{font: 'calibri', textTransform: 'uppercase'}}>About Us</h3>
                <div className="underline mx-auto"></div>
                <p className="info" style={{font: 'calibri', lineHeight: '20px', letterSpacing: '2px', padding: '10px'}}>Looking for a place to stay in Durban that is both contemporary and reasonably priced? In that case, Hopewell's Garden is a great option for you. We offer practical short-term lodging in the bustling city center of KwaZulu-Natal.Make sure to reserve a room at our Award-Winning Express Hotel whether you are visiting Durban for business or pleasure.
                    Since 2005, the hotel has established itself as a market niche and a top choice for international tourists, NGOs, corporate travelers, and government officials.
                    After a day spent taking advantage of all that Durban has to offer, our hotel is the perfect place to return to for a restful night's sleep, a delicious breakfast, and a peaceful evening as well as taking advantage of our jacuzzi, swimming pool and our ocean view.
                </p>
          </div>

          <div className="footer">
                <div className="social">
                <div className="border" style={{display: "inline"}}></div>
                  <div className="twitter-part"><img src={twitter} className="twitter" />Twitter : @Hopewell_s_Garden</div>
                  <div className="facebook-part"><img src={facebook} className="twitter" />facebook : Hopewell's Garden</div>
                  {/* <div className="facebook-part"><FontAwesomeIcon icon={faEnvelope} className="email" /><span>Email-Address : Hopewell's Garden</span></div>
                  <div className="facebook-part"><FontAwesomeIcon icon={faPhone} className="phone" /><span>Phone :0672722080 / 0656683604</span></div> */}
                </div>
                <a className="menu"><Link to="/">Login</Link></a>
                <a className="menu"><Link to="/">Register</Link></a>

            </div>
            

        </div>




        
    )
}
export default Home;