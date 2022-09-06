// import SignIn from './component/logSignIn/login.js';
// import SignUp from './component/logSignIn/signup.js';
import Rooms from '../rooms/rooms';
import Contact from '../contact/Contact'
import Services from '../services/services'
import About from '../about/About';
import SignIn from './login';
// import Homepage from '../homepage/home'


function Home(){
    return(
        <div className="Container">
            <SignIn/>
            <Rooms/>
            <About/>
            <Services/>
            <Contact/>

        </div>
    )
}
export default Home;