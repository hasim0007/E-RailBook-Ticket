import React, { useContext, useEffect, useState } from 'react';
import { tnStation } from '../tnStation';
import { useNavigate } from "react-router-dom";

import { stationContext } from '../App';

export const Dashboard = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    const getEmail = localStorage.getItem('UsErEmAiL010A');
    if(!getEmail){
      navigate('/login')
    }
  })

  const { setFromData , setToData , setgetDate } = useContext(stationContext)

  const [fromSearchInput, setfromSearchInput] = useState('');
  const [toSearchInput, settoSearchInput] = useState('');
  const [selectFromStation, setselectFromStation] = useState(["STATION","CODE"]);
  const [selectToStation, setselectToStation] = useState(["STATION","CODE"]);
  const [trainDate, settrainDate] = useState();
  return (
    <>
      <div className="dashboard_page m-0 ">
            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog  modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel"> FROM STATION LIST</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg fw-bold" value={fromSearchInput} onChange={(e)=>{
                      setfromSearchInput(e.target.value)
                    }} />
                    <button className="btn btn-dark text-light" type="button"onClick={()=>{
                      setfromSearchInput('')
                      setselectFromStation(["STATION","CODE"])
                    }}>
                      <i class="bi bi-x-circle fs-4"></i>                  
                      </button>
                  </div>
                  <ul className="list-group">
                    {
                      tnStation
                      .filter((item) => {
                        return fromSearchInput === "" ? item : item.s_name.toLowerCase().includes(fromSearchInput.toLowerCase())
                      })
                      .map((value,index) => (
                        <button className=" btn btn-outline-secondary text-dark fw-bold text-start" key={value.id} onClick={()=>{
                          setfromSearchInput(value.s_name+"-"+value.s_code);
                          setselectFromStation([value.s_name,value.s_code]);
                          setFromData([value.s_name,value.s_code])
                        }}>
                          {value.s_name}-
                          <button className='btn btn-secondary' >
                            {value.s_code}
                          </button>
                        </button>
                      )
                      )
                    }
                  </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss={fromSearchInput === "" ? "" : "modal" }>Select Station</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal fade z-3" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog  modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel"> STATION LIST</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control form-control-lg fw-bold" value={toSearchInput} onChange={(e)=>{
                      settoSearchInput(e.target.value)
                    }} />
                    <button className="btn btn-dark" type="button" onClick={()=>{
                      settoSearchInput('')
                      setselectToStation(["STATION","CODE"])
                    }}><i class="bi bi-x-lg"></i></button>
                  </div>
                  <ul className="list-group">
                    {
                      tnStation
                      .filter((item) => {
                        return toSearchInput === "" ? item : item.s_name.toLowerCase().includes(toSearchInput.toLowerCase())
                      })
                      .map((value,index) => (
                        <button className=" btn btn-outline-secondary text-dark fw-bold text-start" key={value.id} onClick={()=>{
                          settoSearchInput(value.s_name+"-"+value.s_code);
                          setselectToStation([value.s_name,value.s_code]);
                          setToData([value.s_name,value.s_code])
                        }}>
                          {value.s_name}-
                          <button className='btn btn-secondary' >
                            {value.s_code}
                          </button>
                        </button>
                      )
                      )
                    }
                  </ul>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss={toSearchInput === "" ? "" : "modal" }>Select Station</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard_title w-100 m-0">
              <h3 className='p-2 pt-4 ps-4  text-dark fw-bolder '>TICKET BOOKING</h3>
            </div>
            <div className="row  m-0 my-5  ">  
            <div className="frombtn col-4 text-center" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                <h5>From</h5>
                <h2>{selectFromStation[1]}</h2>
                <h4 className='pb-2 border-secondary border-bottom border-5'>{selectFromStation[0]}</h4>
            </div>
            <div className="col-4 text-center pt-2"><i class="bi bi-arrow-left-right fs-1" ></i></div>
            <div className="frombtn col-4 text-center" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                <h5>To</h5>
                <h2>{selectToStation[1]}</h2>
                <h4 className='pb-2 border-secondary border-bottom border-5'>{selectToStation[0]}</h4>
            </div>
            </div>
            <div className="row m-0 ">

              <div className="col-12 col-md-6 text-center mt-2">
                <input type="date" name="" id="" className='btn btn-info btn-lg fs-4 fw-bold w-100' onChange={(e)=>{
                  settrainDate(e.target.value)
                  setgetDate(e.target.value)
                }}/>
              </div>

              <div className="col-12 col-md-6 text-center mt-2">
                <button className="btn btn-dark btn-lg fs-4 fw-bold w-100" disabled={fromSearchInput && toSearchInput && trainDate? "" : "true"} onClick={()=>{
                  navigate('/bookticket')
                }} >Search Train</button>
              </div>

              <div className="col-12 text-center mt-3">
                <button className="btn btn-warning btn-lg fs-4 fw-bold " onClick={()=>{
                  navigate('/showticket')
                }} >Show Ticket</button>
              </div>

            </div>
            {/* <div className="dashboard_footer w-100 text-center fw-bold">
              <p className="w-100 pt-2 ">G.16.63 (15.1.41)</p>
              <h6>TamilNadu For Railway Information Systems (TNRIS)</h6>
            </div> */}
        </div>
    </>
  )
}

