import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(true);
  const [loginRes, setloginRes] = useState('');
  const [passeye, setpasseye] = useState("bi bi-eye fw-bold fs-4 text-dark");
  const [passchange, setpasschange] = useState(true)

  const navigate = useNavigate();
  
  useEffect(()=>{
    let dash = localStorage.getItem("UsErEmAiL010A")
      if(dash){
        navigate('/dashboard');
      }
  },[])

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(false)
      await axios.post('https://task-manager-mern-stack-zaxt.onrender.com/login' , { email , password })
      .then(res =>{
        setloading(true)
        setloginRes(res.data.msg);
        if(res.data.msg == 'Login Successfull'){
          localStorage.setItem("UsErEmAiL010A",email);
          
        }
      })

      let istrue = localStorage.getItem("UsErEmAiL010A")
      if(istrue){
        navigate('/dashboard');
      }
  }

  return (
    <>
        <div className="sign_up_container">
            <form action="" className='signup_form' onSubmit={submitHandler}>
              <h4 className='fs-2 fw-bold mb-3 text-center'>Login</h4>
              <div class="col-12 p-2">
                <label class="form-label fs-5 fw-bold mt-2" for="inlineFormInputGroupUsername">Email</label>
                <div class="input-group">
                  <div class="input-group-text">
                    <i className="bi bi-train-freight-front"></i>
                  </div>
                  <input type="email" onChange={(e)=>{
                    setemail(e.target.value)
                  }} required class="form-control form-control-lg" id="" placeholder="Enter the Email"/>
                </div>
              </div>
              <div class="col-12 p-2">
                <label class="form-label fs-5 fw-bold mt-2" for="inlineFormInputGroupUsername">Password</label>
                <div class="input-group">
                  <div class="input-group-text">
                    <i className="bi bi-train-freight-front"></i>
                  </div>
                  <input type="password" onChange={(e)=>{
                    setpassword(e.target.value)
                  }} required class="form-control form-control-lg" id="" placeholder="Enter the Password"/>
                </div>
                {loginRes ? <p className='fs-5 text-danger   p-1 LoginRes'>{loginRes}</p> : <p></p>}
              </div>
              <div className="loading_spin d-flex align-items-center p-2">
              <input type="submit" className='btn btn-dark btn-md fw-bold ' value="Login" />
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

              <div className=" mt-2 px-2">
                <p className='fs-6 w-100 text-center'>Don't have an account ? SignUp</p>
              </div>
              <div className="already_btn w-100 text-end pe-2">
              <button className='btn btn-dark fw-bold'onClick={()=>{
                navigate('/');
              }}>SignUp</button>
              </div>
            </form>
        </div>
    </>
  )
}
