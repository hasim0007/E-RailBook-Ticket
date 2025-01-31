import React, { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const [time, settime] = useState('XXX YYY 00 0000 | 00 : 00 : 00');
  const navigate = useNavigate();

  const localEmail = localStorage.getItem('UsErEmAiL010A')

  useEffect(()=>{
    setInterval(()=>{
      const date = new Date();
      const day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      const fullDate = `${day[date.getDay()]} ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()} | ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
      settime(fullDate)
    },1000)
  },[])
  return (
    <>
        <div className="header bg-dark">
              <div className="header_logo ">
                <i className="bi bi-train-freight-front"></i>
                <p className="header_title fs-15" >
                𝔼-ℝ𝕒𝕚𝕝 𝔹𝕠𝕠𝕜𝕚𝕟𝕘
                </p>
              </div>
              <div className="header_btns w-50 ">
                <div class="btn-group dropstart d-block d-md-none">
                  <i class="bi bi-list fs-1 me-3" data-bs-toggle="dropdown"></i>
                  <ul class="dropdown-menu">
                    <li className="dropdown-item">
                      <div className="btn btn-primary fw-bold">
                        { time }
                      </div>
                    </li>
                    <li className="dropdown-item">
                    {
                                  localEmail
                                  ?
                                  <button className="btn btn-danger me-2 fw-bold" onClick={()=>{
                                    const logout = confirm('Sure To LogOut This Website');
                                    if(logout){
                                      localStorage.clear();
                                      navigate('/login')
                                    }
                                  }}>LogOut</button>              
                                  :
                                  <div></div>
                                }
                    </li>
                  </ul>
                </div>
                <div className="btn btn-primary fw-bold me-3 d-none d-md-block">
                        { time }
                      </div>
                      {
                                  localEmail
                                  ?
                                  <button className="btn btn-danger me-2 fw-bold d-none d-md-block" onClick={()=>{
                                    const logout = confirm('Sure To LogOut This Website');
                                    if(logout){
                                      localStorage.clear();
                                      navigate('/login')
                                    }
                                  }}>LogOut</button>              
                                  :
                                  <div></div>
                                }
              </div>
        </div>
    </>
  )
}
