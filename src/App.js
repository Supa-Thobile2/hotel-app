import React from 'react'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from '../src/component/home/home'
 import LeftSection from '../src/component/admin/leftSection'
//  import MiddleSection from '../src/component/admin/middleSection'
//  import RightSection from '../src/component/admin/rightSection'
import About from './component/about/About'
// import Book from './component/booking/Booking'
import Contact from './component/contact/Contact'
import Rooms from './component/rooms/rooms'
import Services from './component/services/services'
import {useState} from 'react'

function App () {


// const [review, setReview] = useState([]);//defining a use state 
const [review, setReview] = useState([])

const AddReview = ((email, FullName, ContactNumber, message)=>{

  setReview((email)=>[...email,{
      email:email,
      FullName:FullName,
      ContactNumber:ContactNumber,
      message:message
  }])

  // console.log(review)
})

//addReview function
// variable AddReview is passed a method that adds and set transaction for the use state defined above

  return (
    <div>
  
      
      <Router>
      <Routes>
        <Route exact path='/' element= {<Home/>}/>
        <Route path="/About" element={<About/>} />

        <Route path="/Contacts" element={ <Contact AddReview={AddReview}/>}  />
        <Route path="/Rooms" element={<Rooms/>} />
        <Route path="/Services" element={<Services/>} />
      </Routes>
    
     </Router> 

 
    
      
    </div>
  );
}

export default App
