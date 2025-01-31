import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { trainsche } from '../trainsche';
import { stationContext } from '../App';
import { useNavigate } from 'react-router-dom';


export const BookTicket = () => {

    useEffect(()=>{
        const getEmail = localStorage.getItem('UsErEmAiL010A');
        if(!getEmail){
          navigate('/login')
        }
      })

    const navigate = useNavigate()
    const { FromData , ToData , settrainNo } = useContext(stationContext);
    // const [stationData, setstationData] = useState('')

//     useEffect(async ()=>{
//       const api_key = 'e0aea57eac7bff6f9a6eb9868d46cc06';
//       let api_url = `http://indianrailapi.com/api/v2/AllTrainOnStation/${api_key}/TPJ/
//   `;
//     //   const fetchh = await fetch(api_url)
//       await axios.get(api_url)
//       .then(res => res.json())
//       .then(res => )
//     },[])

  return (
    <>
        <div className="bookticket_page">
        <div className="row  m-0 mt-2 ">  
          <div className="frombtn col-4 text-center" >
              <h2>{FromData[1]}</h2>
              <h6>{FromData[0]}</h6>
          </div>
          <div className="col-4 text-center pt-4"><i className="bi bi-arrow-right fs-1" ></i></div>
          <div className="frombtn col-4 text-center">
              <h2>{ToData[1]}</h2>
              <h6>{ToData[0]}</h6>
          </div>
        </div>
        <div className="container">
            
            {
                trainsche.map((value , index)=>(
                <div className="w-100 border border-dark border-3 rounded m-0 mb-2">
                <div className="row w-100  m-0 p-2" key={index}>
                                {/* <div className='ps-2 py-2 w-70'>
                                    <h3 className="train_no">
                                        <button className="btn btn-dark btn-lg">{value.TrainNo}</button>
                                    </h3>
                                    <div className="train_body py-2 fw-bold">
                                        <h5>{`${FromData[0]}-${ToData[0]} ${value.TrainName}`}</h5>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="train_item_body fw-bold">
                                        <h5>{value.day}</h5>
                                    </div>
                                </div>
                                <div className='fs-5 fw-bold '>
                                    {value.DepartureTime}
                                </div>
                                <div>
                                    <button className="btn btn-warning fw-bold btn-lg" onClick={()=>{
                                        settrainNo(value.TrainName)
                                        navigate('/getfair')
                                    }}>Book Ticket</button>
                                </div> */}
                                <div className="col-12 mb-2 col-md-4">
                                    <button className="btn btn-dark fw-bold btn-lg">
                                    {value.TrainNo} 
                                    </button>
                                </div>
                                <div className="col-12 text-start col-sm-6 col-md-4">
                                    <h5 className=" fw-bold">
                                    {value.day} 
                                    </h5>
                                </div>
                                <div className="col-12 text-start col-sm-6 col-md-4">
                                    <p className="fw-bold fs-5">
                                        {value.DepartureTime}
                                    </p>
                                </div>
                                <div className="col-12 mt-2 fw-bold fs-4 col-md-6">
                                    <p>{`${FromData[0]}-${ToData[0]} ${value.TrainName}`}</p>
                                </div>
                                <div className="col-12 text-start text-sm-end col-md-6">
                                    <button className="btn btn-warning btn-lg fw-bold" onClick={()=>{
                                        settrainNo(value.TrainName)
                                        navigate('/getfair')
                                    }}>
                                    Book Ticket
                                    </button>
                                </div>

                </div>
                </div>
                ))
            }
        </div>
        </div>
    </>
  )
}
