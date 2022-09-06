
import React,{useState} from "react";
// import {Link} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
// import {auth} from '../config/firebase'
// import {signInWithEmailAndPassword} from 'firebase/auth';

import '../css/login.css'

function SignIn(){

    const [email, setEmail] = useState ('');
    const [Password, setPassword] = useState ('');

    const btn = {
        marginTop:'3px',
         background:" #f76c2f",
         borderradius:"3px solid orange",
         height:"30px",
         width:"100px",
         height:'5vh'
     }
 
    //  let history= useNavigate ();
 
    //  const login =(() => {
    //     signInWithEmailAndPassword(auth,email,Password).then (() => {
    //          history("/home");
    //      }).catch ((error) => {
    //          console.log(error);
    //      })
 
    //  });
    return(
        <div className="main-container">

            <div id="main-form">
                
                    <h1>LOGIN</h1>
                    <div id="input-fields">
                        <input text="emmail" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
                        
                        <input text="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}/>
                        <div className="link">
                            <span>Don't Have Account</span>{""}
                            <span>
                                <a to="/signup">Create Account</a>
                            </span>
                            <br></br>
                            
                            <span>Forgot Password</span>{""}
                            <span>
                                <a to="/forgetpassword">Reset Password</a>
                            </span>
                            <br></br>
                            <br></br>
                            <br></br>
                            <button id='lgnButton'>LogIn</button>
                        </div>
                
                    </div>
                
            </div>
            
            
        </div>
    )
}

export default SignIn;