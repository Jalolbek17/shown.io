import React, { useState } from "react";
import HeaderRL from "./header";
// functions
import { vFunc } from "./vFunc";
// img
import bgI from "../assets/images/login-bg.jpg";
// icons
import svg_email from "../assets/icons/email";
import svg_lock from "../assets/icons/lock";
import svg_tg from "../assets/icons/tg";

function Register() {


const [errFname,setErrFname] = useState('')
const [errLname,setErrLname] = useState('')
const [errTg,setErrTg] = useState('')

const [errEmail,setErrEmail] = useState('')
const [errPass,setErrPass] = useState('')
const [errRepass,setErrRepass] = useState('')






 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

// 
// boolleans
// 
const [emailV,setEmailV] = useState(false);
const [fNameV,setFnameV] =useState(false);
const [lNameV,setLnameV] =useState(false);
const [tgV,setTgV] = useState(false);
const [passV,setPassV] = useState(false);

console.log(emailV)
console.log(fNameV)
console.log(lNameV)
console.log(tgV)
console.log(passV)

const [submit,setSubmit] = useState(false);

// 
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
// First Name & Last Name changes
// 
// 

function fName_hChange(){
  const fnameD = document.getElementById('fname');
  let v = fnameD.value;
  if(v < 2){
    setErrFname('The firts name must contain at least 3 letters')
  }else{
    setErrFname('')
    setFnameV(true)
  }
}
// 
function lName_hChange(){

  const lnameD = document.getElementById('lname');
  let v = lnameD.value;
  if(v < 2){
    setErrLname('The last name must contain at least 3 letters')
  }else{
    setErrLname('')
    setLnameV(true)
  }

}
// 
// 
// Telegram verify change
// 
// 
function tg_hChange(){
  const regex = /^(?:|(https?:\/\/)?(|www)[.]?((t|telegram)\.me)\/)[a-zA-Z0-9_]{5,32}$/gm

  const tgD = document.getElementById('tg');
  let v = tgD.value;
  if(v.length < 3){
    setErrTg('Your telegram link must contain at least 3 letters')
  }
  else if(regex.test(v)){
    setErrTg('Enter the correct telegram profile link');
  }else{
    setErrTg('')
    setTgV(true)
  }

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
     }
// 
setErrPass(err)
}


   function repass_hChange(){
    let err = '';

    const repass = document.getElementById('repass');
    const repassErr = document.getElementById('err_repass')
    const vall = repass.value
    
    if (password.length < 6) {
      err = 'Password must be longer than 6 characters';
      setPassV(false)
    }else if(password != vall){
      err = 'Confirm the password'
      setPassV(false)
    }else if (password == vall){
      setPassV(true)
      err = ''
    }
    setErrRepass(err)
}


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
      <main>
        <HeaderRL />

        <form className="form_R" action="#" onChange={()=>gChange()}>
          <p className="title">Welcome !</p>
          <p className="sub_title">
            Are you ready to create your first advertisement account
          </p>
          <div id="errors_" className="block errors_">

            <p id="err_email">{errEmail}</p>
            <p id="err_fname">{errFname}</p>
            <p id="err_lname">{errLname}</p>
            <p id="err_tg">{errTg}</p>
            <p id="err_pass">{errPass}</p>
            <p id="err_repass">{errRepass}</p>


            {/* main */}
          </div>
          <div className="block input_">
            <input name="email" type="text" id="email"/>
            <label htmlFor="email">Enter Your email</label>
            {svg_email()}
          </div>
          {/*  */}
          <div className="block input_ double_ names_">
            <div className="col">
              <input name="fname" type="text" id="fname" />
              <label htmlFor="fname">First name</label>
            </div>
            <div className="col">
              <input name="lname" type="text" id="lname" />
              <label htmlFor="lname">Last name</label>
            </div>
          </div>
          {/*  */}
          <div className="block input_">
            <input name="telegram" type="text" id="tg" />
            <label htmlFor="tg">Telegram</label>
            {svg_tg()}
          </div>
          {/*  */}
          <div className="block input_ double_">
            <div className="col">
              <input type="password" id="pass"/>
              <label htmlFor="pass">Enter Your password</label>
              {svg_lock()}
            </div>
            <div className="col">
              <input type="password" id="repass"/>
              <label htmlFor="repass">Re-enter Your password</label>
              {svg_lock()}
            </div>
          </div>
          {/*  */}
          <div className="block input_">
          <button id="checkBtn" type="button" className="block submit_btn" style={{background: "#2156FA"}} onClick={()=>cheking()}>
            Check
          </button>
          {submiting()}
          </div>
          <div className="block input_ query_">
            <span className="q">Already have an account</span>
            <button className="sign">Sign Up</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Register;
