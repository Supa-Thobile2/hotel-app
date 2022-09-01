import React from 'react'
import { Navigate, useHistory, Link } from 'react-router-dom';
import family from '../images/Rooms/FamilyQuad.jpg'
import single from '../images/Rooms/single.jpg'
import presidential from '../images/Rooms/Presidential-Guest.jpg'
import '../components/rooms.css'
import twitter from '../images/Rooms/twitter.png'
import facebook from '../images/Rooms/facebook.png'
import phone from '../images/Rooms/email.png'
import email from '../images/Rooms/phone.png'

const Rooms
    = () => {
        return (
            <div className="container">
                <section className="topPart">
                    <div className="title"><h1>Hopewell's Gardens</h1></div>
                    <div className='navigation'>
                        <a className="one">Home</a>
                        <a className="one">About Us</a>
                        <a className="one">Rooms</a>
                        <a className="one">Contacts</a>
                    </div>
                </section>

                <div className="sub-title"><h2>Rooms</h2>

                </div>

                <br></br>
                <p><i>You've found the ideal spot if you're looking for useful and inexpensive hotel lodging in Durban.
                    The Hopewell's Gardens provides guests with contemporary, practical, and comfortable lodging at a great bargain.

                    We provide our customers with the ideal amenities to accompany a business, stopover, or short stay vacation in each of our modestly sized rooms.
                    Our accommodations have been specifically created so that we can host both business and leisure guests, including singles, couples, and families.
                    There are 125 spacious rooms available. You may reserve a room online or by speaking with one of our incredibly helpful experts right away. </i> </p>






                <div className="images">


                    <div className="fam" >
                        <img src={family} alt="" />
                        <br></br>
                        FamilyQuad R1200.00
                    </div>

                    <div className="Pres" >
                        <img src={presidential} alt="" />
                        <br></br>
                        Presidential Suite R2500.00
                    </div>

                    <div className="sing" >
                        <img src={single} alt="" />
                        <br></br>
                        Single R1500.00</div>
                </div>
                <hr></hr>

                <div className='rooms-specs'>

                    <h3>Family Quad</h3>
                    <p>There is no better place to hunt for the ideal short-term lodging for your family.
                        Compared to our other hotel rooms, our family hotel rooms are a little bit larger.
                        ese accommodations, which sleep up to four people, have a double bed and a full-size bunk bed. </p>
                    <br></br>
                    <h3>Presidential</h3>
                    <p>
                        The Presidential Suites, which are in a class of their own, are prominently located on the 18th, 19th, and 20th floors and provide the most luxurious amenities, deep bathrooms with city views, and the highest degree of individualized service.
                    </p>
                    <br></br>
                    <h3>Single</h3>
                    <p>We offer standard double rooms, which are suitable for up to two guests per room.
                        These rooms are ideal for brief stays and offer complete comfort and privacy for both leisure and business guests.</p>
                    <h3><i><u>Facilites in our rooms are:</u></i></h3>
                


                    <div className='facilites'>
                        <li>Air Conditioning</li>
                        <li>En-suite bathroom</li>
                        <li>Small flat screen TV with FREE NETFLIX</li>
                        <li>Tea and Coffee Station</li>
                        <li>Vanity counter with mirror</li>
                        <li>Landline telephone</li>
                        <li>Electronic safe</li>
                        <li>Free Wi-Fi</li>
                    </div>
                </div>

                <div className="footer">
                    <div className="social">
                        <div className="border"></div>
                        <div className="twitter-part"> <img src={twitter} className="twitter" />Twitter</div>
                        <div className="facebook-part"><img src={facebook} className="twitter" />Facebook</div>
                        <div className="email-part"><img src={email} className="twitter" />Phone</div>
                        <div className="phone-part"><img src={phone} className="twitter" />Email</div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>

                </div>
            </div>




        )
    }

export default Rooms
