import React from 'react'
import Rooms from './component/rooms';
import Contact from './component/contact/Contact'
import SignIn from './component/login';
import SignUp from './component/signup';

const App = () => {
  return (
    <div>
      {/* <h1>Hopewell's Garden</h1> */}
      <SignIn/>
      <SignUp/>
      <Rooms/>
      
      <Contact/>
    </div>
  )
}

export default App
