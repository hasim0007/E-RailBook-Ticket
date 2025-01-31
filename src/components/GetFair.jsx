import React from 'react'
import { useEffect, useState , useContext } from 'react'
import { stationContext } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GetFair = () => {

    useEffect(()=>{
        const getEmail = localStorage.getItem('UsErEmAiL010A');
        if(!getEmail){
          navigate('/login')
        }
      })

    const navigate = useNavigate();

    const { FromData , ToData , getDate  } = useContext(stationContext);

    const getemail = localStorage.getItem('UsErEmAiL010A');
    const [loading, setloading] = useState(true)

    const [Adult, setAdult] = useState(1)
    const [child, setchild] = useState('')
    const [ticketType, setticketType] = useState('')
    const [trainType, settrainType] = useState(1.5)
    const [firstClass, setfirstClass] = useState('')
    const [paymentType, setpaymentType] = useState('')

    const [name, setname] = useState(getDate);
    const [trainName, settrainName] = useState(FromData[0]+'-'+ToData[0]);
    const [email, setemail] = useState(getemail);
    const [amount, setamount] = useState();
    const [trainNo, settrainNo] = useState();
    const [result, setresult] = useState('');

    const [paymentId, setpaymentId] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();

        const options = {
            key : 'rzp_test_C4cSa9ROmGpmvE',
            key_secret : 'GSYXhu1CzjNO1TKqjGhlf95p',
            amount : amount *100,
            currency : 'INR',
            name : "Ticket Online Booking " ,
            description : 'for testing purpose' ,
            handler : function(res){
            if(res.razorpay_payment_id){
                setloading(false)
                axios.post('https://task-manager-mern-stack-zaxt.onrender.com/bookticket' , { name , trainName , email : getemail , amount , trainNo})
                .then(res =>{
                    if(res.data.msg === "Successfully Added !!"){
                        setloading(true)
                        navigate('/showticket')
                    }
                } )
            }else{
                alert('something error on your payment !!!')
            }
            },
            prefill : {
              name : "MOHAMED HAISM M" ,
              email : "arifin224728@gmail.com" ,
              contact : "9944165517"
            },
            notes : {
              address : "thiruppalaikudi"
            },
            theme : {
              color : 'black'
            }
          };
    
          var pay =  await new window.Razorpay(options);
    
          pay.open()
          
        
    }
    
  return (
    <>
     <div className='getfare_page'>
        <div className='ml-4 fw-bold  fs-2 d-flex align-items-center '>
            <p className='mt-2 ps-4'> Book Ticket</p>
        </div>
        <div className="container">
        <div className="row mt-0 mt-md-4">
            <div className="col-6">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fs-5 fw-bold">Adult</label>
                    <select className="form-select form-control-lg fs-6 mb-3 bg-secondary text-light" aria-label=".form-select-lg example" 
                    onChange={(e)=>{
                    setAdult(e.target.value)
                    }}>
                    <option value={1}>ONE(1)</option>
                    <option value={2}>TWO(2)</option>
                    <option value={3}>THREE(3)</option>
                    <option value={4}>FOUR(4)</option>
                </select>                </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fs-5 fw-bold">Child</label>
                    <select className="form-select form-control-lg mb-3 bg-secondary text-light " aria-label=".form-select-lg example" 
                    onChange={()=>{
                     setchild(e.target.value)
                    }} >
                    <option value={0}>ZERO(0)</option>
                    <option value={1}>ONE(1)</option>
                    <option value={2}>TWO(2)</option>
                    <option value={3}>THREE(3)</option>
                    <option value={4}>FOUR(4)</option>
           
           ++         </select>                
                </div>
            </div>
        </div>
        <div className="row mt-0 mt-md-4">
            <div className="col-12 col-md-6">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fs-5 fw-bold">Ticket Type</label>
                    <select className="form-select form-control-lg mb-3 bg-secondary text-light fw-bold" aria-label=".form-select-lg example" 
                    onChange={()=>{
                     setticketType(e.target.value)
                    }}>
                    <option value={1}>JOURNEY(J)</option>
                </select>                
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fs-5 fw-bold">Train Type</label>
                    <select className="form-select form-control-md-lg mb-3 bg-secondary text-light fw-bold" aria-label=".form-select-lg example" 
                    onChange={(e)=>{
                        settrainType(e.target.value)
                    }}>
                    <option value={1.5}>MAIL/EXP(M/E)</option>
                    <option value={2}>SUPERFAST(S)</option>
                    <option value={1}>ORDINARY(O)</option>
                    </select>                
                </div>
            </div>
        </div>
        <div className="row mt-0 mt-md-4">
            <div className="col-12 col-md-6">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fs-5 fw-bold">Class</label>
                    <select className="form-select form-control-lg mb-3 bg-secondary text-light fw-bold"
                    onChange={(e)=>{
                     setfirstClass(e.target.value)
                    }} >
                    <option value={0}>FIRST(I)</option>
                </select>              
                </div> 
            </div>
            
        </div>
        <button className=" amount btn btn-warning btn-lg fw-bold" >
            Rs-{Math.floor(69*Adult*trainType)}.00
        </button>
        <button type="button" className="btn btn-primary btn-lg  fw-bold ms-4 ms-md-5" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{
            setamount(Math.floor(69*Adult*trainType))
        }}>Book Ticket</button>

            <div className="modal fade bg-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog bg-dark">
                <div className="modal-content bg-info   ">
                <div className="modal-header">
                    <h5 className="modal-title fw-bold fs-4 " id="exampleModalLabel">Ticket Details</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="" onSubmit={submitHandler}>
                        
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label fw-bold fs-5">Train Name</label>
                    <input type="text" className="form-control "  value={FromData[0]+'-'+ToData[0]} id="exampleFormControlInput1"  readOnly />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label fw-bold fs-5"  >Email </label>
                <input type="email" value={getemail} className="form-control" id="exampleFormControlInput2"  readOnly />
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label fw-bold fs-5">Phone No</label>
                <input type="text" className="form-control" maxLength={'10'} id="exampleFormControlInput3" placeholder="Enter your Phone Number" required onChange={(e)=>{
                    settrainNo(e.target.value)
                }}/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput4" className="form-label fw-bold fs-5" >Amount Rs </label>
                <div className="form-control" id="exampleFormControlInput2"  >{Math.floor(69*Adult*trainType)}</div>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput5" className="form-label fw-bold fs-5" >Date</label>
                <input type="text" value={getDate} className="form-control" id="exampleFormControlInput3"  readOnly />
                </div>  
                <div className="modal-footer m-0 p-0">
                    <button type="submit" className="btn btn-dark" >
                        <button type="button" className="btn btn-dark fw-bold" data-bs-dismiss="modal" onClick={()=>{
                            
                        }}>Get Fare</button>
                    </button>
                </div>
                </form>
                </div>
                
                </div>
            </div>
            </div>
        </div>
        {
            loading
            ?
            <div></div>
            :
            <div class="spinner_fade">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        }
    </div>
    </>
  )
}
