import React,{ useState } from 'react';
import { Link} from 'react-router-dom';
import PayRequestModal from './PayRequestModal';

const Table = (props) => {
    console.log(props);
    const [showModal, setShowModal] = useState(false);
    const [modalRequest,setModalRequest] = useState();
    const [status,setStatus] = useState("Pending");
    const setModal = (data) => {
        console.log("setModal data :"+data);
        setModalRequest(data);
        setShowModal(true);
    }
    const setPaymentStatus =(data) => {
        console.log("setPaymentStatus"+data);
    };
  return (
    <>
    <table className="table border shadow table-striped">
                    <thead>
                        <tr>
                            {props.headers.map((header) => (
                                <th scope='col'> {header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {props.userTab ? 
                        (props.users.map((user, index) => (
                            <tr>
                                <th scope='row' key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`${user.id}`} className='btn btn-primary mx-2'>View</Link>
                                    <Link to={`${user.id}/payRequests`} className='btn btn-primary mx-2'>PayRequests</Link>
                                </td>
                            </tr>
                        ))) : 
                        (props.payRequests.map((payRequest, index) => (
                                <tr>
                                    <th scope='row' key={index}>{index + 1}</th>
                                    <td>{payRequest.description}</td>
                                    <td>{payRequest.amount}</td>
                                    <td>{status}</td>                                     
                                    <td>
                                       {status === "Pending" ?
                                        <button className='btn btn-primary mx-2' onClick={() => setModal(payRequest)}>View</button>
                                    : status}                                     
                                    </td>                                    
                                </tr>
                        )))
}
                    </tbody>
                </table>
                {showModal && <PayRequestModal payRequest={modalRequest} showPayRequest={setShowModal} updatePayment={setPaymentStatus()} status={setStatus}/>}
                </>
  )
}

export default Table