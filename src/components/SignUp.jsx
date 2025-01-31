import React, { useEffect, useState } from 'react'
import './SignUp.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setloading] = useState(true)
  const [validPass, setvalidPass] = useState(true)
  const [SignInRes, setSignInRes] = useState('')

  useEffect(()=>{
    const dash = localStorage.getItem('UsErEmAiL010A');
    if(dash){
      navigate('/dashboard')
    }
  },[])
  

  const submithandler = async (e) => {
    e.preventDefault();

    if( name && email && password.length >= 8){
      setvalidPass(true)
      setloading(false)
      await axios.post('https://task-manager-mern-stack-zaxt.onrender.com/signup' , { name , email , password})
      .then(res =>{
      setloading(true)
      setSignInRes(res.data.msg);
      if(res.data.msg == "Successfully SignIned"){
        navigate('/login');
      }
      })
    }else{
      setvalidPass(false)
    }
  }
  return (
    <>
        <div className="sign_up_container">
            <form action="" className='signup_form px-2' onSubmit={submithandler}>
              <h4 className='fs-2 fw-bold mb-3 text-center'>SignUp</h4>
              <div class="col-12">
                <label class="form-label fs-5 fw-bold" for="inlineFormInputGroupUsername">Username</label>
                <div class="input-group">
                  <div class="input-group-text">
                    <i className="bi bi-train-freight-front"></i>
                  </div>
                  <input onChange={(e)=>{
                    setname(e.target.value)
                  }} type="text" required class="form-control form-control-lg" id="" placeholder="Enter the Username"/>
                </div>
              </div>
              <div class="col-12">
                <label class="form-label fs-5 fw-bold mt-2" for="inlineFormInputGroupUsername">Email</label>
                <div class="input-group">
                  <div class="input-group-text">
                    <i className="bi bi-train-freight-front"></i>
                  </div>
                  <input onChange={(e)=>{
                    setemail(e.target.value)
                  }} type="email" required class="form-control form-control-lg" id="" placeholder="Enter the Email"/>
                </div>
              </div>
              <div class="col-12">
                <label class="form-label fs-5 fw-bold mt-2" for="inlineFormInputGroupUsername">Password</label>
                <div class="input-group">
                  <div class="input-group-text">
                    <i className="bi bi-train-freight-front"></i>
                  </div>
                  <input onChange={(e)=>{
                    setpassword(e.target.value)
                  }} type="password" required class="form-control form-control-lg" id="" placeholder="Enter the Password"/>
                </div>
                {
                  validPass 
                  ?
                  <p className='text-danger mt-3'>{SignInRes}</p>
                  :
                  <p className='text-danger mt-3'>Password is too short, mininum 8 letter..</p>
                }
              </div>
              <div className="loading_spin d-flex align-items-center">
              <input type="submit" className='btn btn-dark btn-md fw-bold ' value="SignUp" />
              {
                loading
                ?
                <div></div>
                :
              <div className="spinner-border ms-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div> 
              }
              </div>


              <div className=" mt-2">
                <p className='fs-6 text-center  w-100'>Already have  an account ? login</p>
              </div>
              <div className="already_btn w-100 text-end">
              <button className='btn btn-dark fw-bold' onClick={()=>{
                navigate('/login');
              }}>login</button>
              </div>
            </form>
        </div>
    </>
  )
}
