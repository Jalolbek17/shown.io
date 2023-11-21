import React, { useState } from "react";
import HeaderRL from "./header";
// functions
import { vFunc } from "./vFunc";
// img
import bgI from "../assets/images/login-bg.jpg";
// icons
import svg_email from "../assets/icons/email";
import svg_lock from "../assets/icons/lock";
function Login(){
  // 

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

// 
// boolleans
// 
const [emailV,setEmailV] = useState(false);
const [passV,setPassV] = useState(false);
    const [submit,setSubmit] = useState(false);
// 
// boolleans
// 
console.log(emailV)
console.log(passV)
    //
    // 
    //  


    const [errEmail,setErrEmail] = useState('')
    const [errPass,setErrPass] = useState('')

// 
// Email Handle Change
// 
// 


function email_hChange(){
const emailCond = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  let err = '';
 const emailD = document.getElementById('email');
 emailD.value = emailD.value.replace(/ /g,'').trim();

 const emailErr = document.getElementById('err_email');
 setEmail(emailD.value);
 let evl = email.length;

 if (evl <= 11) {
  err = 'Enter your email address'
   setEmailV(false)
 }else if (!emailD.value.match(emailCond) && !vFunc.isValidEmail(emailD.value)) {
  err = 'Please ingress a valid email address';
  setEmailV(false)
}
 else{
  err = '';
  setEmailV(true)
 }
 // 
 setErrEmail(err)
}
// 
// 
//  Password Handle Change
// 
// 


function pass_hChange(){

  const cond1 = /^(?=.*[a-z]).{6,20}$/;
  const cond2 = /^(?=.*[A-Z]).{6,20}$/;
  const cond3 = /^(?=.*[0-9]).{6,20}$/;

  let err = '';

  const passD = document.getElementById('pass');
  const passErr = document.getElementById('err_pass')


  setPassword(passD.value)

  if (!password) {
   err ='password is required';
    setPassV(false)
  } else if (password.length < 6) {
   err = 'Password must be longer than 6 characters';
    setPassV(false)
  }else if (password.length > 20) {
   err = 'Password must shorter than 20 characters';
    setPassV(false)

  }else if(!cond3.test(passD.value)){
   err = 'Enter your correct password';
    setPassV(false)
  }else if (!password.match(cond1)) {
   err = 'Password must contain at least one lowercase';
    setPassV(false)
  } else if (!password.match(cond2)) {
   err = 'Password must contain at least one capital letter';
    setPassV(false)
  } else if (!password.match(cond3)) {
   err = 'Password must contain at least a number';
    setPassV(false)
  } else if(vFunc.isValidPass(password)){
   err = 'Please enter the correct password';
    setPassV(false)
  }
  else {
   err = ''
   setPassV(true)
  }
// 
setErrPass(err)
}
// 
// validate
// 

// 
// exist submitting button 
// 
function submiting(){
  if(submit){
    return(
      <button id="submitBtn" type="submit" className="block submit_btn" style={{background: "#2156FA"}}>
        Sign Up
      </button>
    )
  }
  else{
    return(
    <button id="submitBtn" type="submit" className="block submit_btn" disabled>
        Sign Up
    </button>
    )
  }
}
// 
// 
//  form verifyning function 
// 
// 
function cheking(){
    const checkBtn = document.getElementById('checkBtn')
    function crash(){
      setSubmit(false)
      checkBtn.style.opacity = '1';
    }
    if(emailV && passV){
      setSubmit(true)
      checkBtn.disabled = true;
      checkBtn.style.opacity = '0.8';
    }
     else{crash()}
}

// Changes
function changes(){
  email_hChange()
  fName_hChange()
  lName_hChange()
  tg_hChange()
  pass_hChange()
  repass_hChange()

}

function gChange(){
  changes()
}
  return (
    <div>
      <img src={bgI} alt="" className="overlay" />
      <div id="main">
        <HeaderRL />

        <form className="form_L" name="form" action="dashboard" method="#" onSubmit={() => gChange()}>
          <p className="title">Welcome Back!</p>
          <div id="errors_" className="block errors_">

            <p id="err_email">{errEmail}</p>
            <p id="err_pass">{errPass}</p>

            {/* main */}
          </div>
          <div className="block input_">
            <input type="email" id="email" onChange={()=>email_hChange()}/>
            <label htmlFor="email">Enter Your email</label>
            {/* {svg_email()} */}
            {/*  */}
          </div>
          {/*  */}
          <div className="block input_">
            <input type="password" id="pass" onChange={()=>pass_hChange()}/>
            <label htmlFor="pass">Enter Your password</label>
            {/* {svg_lock()} */}
          </div>
          {/*  */}
          <div className="block input_">
          <button id="checkBtn" type="button" className="block submit_btn" style={{background: "#2156FA"}} onClick={()=>cheking()}>
            Check
          </button>
            {submiting()}
          </div>
          <div className="block input_ query_">
            <span className="q">Don`t have an account?</span>
            <button className="sign">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
