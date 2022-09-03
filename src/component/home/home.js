// import SignIn from './component/logSignIn/login.js';
// import SignUp from './component/logSignIn/signup.js';
import Rooms from '../rooms/rooms';
import Contact from '../contact/Contact'
import Services from '../services/services'

function Home(props){
    return(
        <div className="Container">

            <Rooms/>
            <Services/>
      
            <Contact/>

        </div>
    )
}
export default Home;