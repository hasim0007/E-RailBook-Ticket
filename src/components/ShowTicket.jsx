import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ShowTicket = () => {
  const navigate = useNavigate();
  const [result, setresult] = useState([])
  const [loading, setloading] = useState(false);

  const getEmail = localStorage.getItem('UsErEmAiL010A')
  
  useEffect(()=>{
    const getTicket = async () => {
      setloading(false)
      await axios.get(`https://task-manager-mern-stack-zaxt.onrender.com/bookticket/?email=${getEmail}`)
      .then(res => {
      setloading(true)
        setresult(res.data.ticket);
    })
    }
    getTicket()
  },[])
  return (
    <>
    <div className="show_tickets">
        <div className="show_tickets_title  w-100">
          <h3 className='pt-4 ps-1 w-25 '>SHOW TICKET</h3>
          <button className="btn btn-outline-danger btn-lg me-1 fw-bold" onClick={()=>{
            navigate('/dashboard')
          }}> <i class="bi bi-house-door-fill"></i> Home</button>
        </div>
        <div className="ticket_list m-0 mt-3 px-1 ">
          {
                loading
                ?
                <div></div>
                :
                <div className="row d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> 
                </div>
              }
          <div className="row m-0">
            {
              result.length !== 0
              ?
                result.map((value,index)=>(
                  <div className="col-12 col-md-6 mt-3   d-flex align-items-center justify-content-center" key={index}>
                    <div className="ticket_card">
                      <div className="ticket_side">
                        <div className="ticket_left">
                        <span>E</span>
                        <span>T</span>
                        <span>I</span>
                        <span>C</span>
                        <span>K</span>
                        <span>E</span>
                        <span>T</span>
                        </div>
                      </div>
                      <div className="ticket_side_right">
                        <div className="ticket_header">
                          <p>JOURNEY E(TICKET)</p>
                          <p className="ticket_fare">
                            FARE ₹ {value.amount}.00
                          </p>
                        </div>
                        <div className="train_name">
                          <p>F-D : {value.trainName}</p>
                        </div>
                        <div className="ticket_date">
                          <p><strong>BOOKING DATE</strong> : {value.name}</p>
                          <p><strong>TICKET ID</strong> : ETK{`${Math.floor(Math.random()*9)+1}${Math.floor(Math.random()*9)+1}${Math.floor(Math.random()*9)+1}${Math.floor(Math.random()*9)+1}${Math.floor(Math.random()*9)+1}${Math.floor(Math.random()*9)+1}`}</p>
                        </div>
                        <div className="ticket_email pb-2">
                          <strong>PhNo</strong> : {value.trainNo}
                        </div>
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                      </div>
                    </div>
                  </div>
                ))
              :
              <div className='row p-2 text-center'>
                <h2 className='text-secondary'>No Ticket Found</h2>
              </div>
            }
          </div>  
        </div>
    </div>
    </>
  )
}
