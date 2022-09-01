import React from 'react'
import Rooms from './component/rooms/rooms.js';
import Contact from './component/contact/Contact'
import SignIn from './component/logSignIn/login.js';
import SignUp from './component/logSignIn/signup.js';

const App = () => {
  return (
    <div>
      <h1>Hopewell's Garden</h1> 
      <SignIn/>
       <SignUp/>
      <Rooms/>
      
      <Contact/>
    </div>
  )
}

export default App
