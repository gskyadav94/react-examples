import React from 'react';

const PayRequestModal = (props) => {
    console.log("PayRequestModal props :"+props.payRequest);
    let modalStyle ={
        display : 'block',
        //backgroundColor: 'rgba(0,0,0,0.8)',
      }
      const makePaymentConfirmation = (flag) =>{
       // props.updatePayment(flag);
       props.payRequest.IsApproved = flag;
        props.showPayRequest(false);
        flag ? props.status("Approved") : props.status("Decliend");
      };
  return (
    <div className="modal show fade" style={modalStyle} tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centeredg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Payment Confirmation</h5>
              <button type="button" className="btn-close" onClick={() => props.showPayRequest(false)}></button>
            </div>
            <div className="modal-body">
              <p>Do you want cofirm the payment of {props.payRequest.amount} for {props.payRequest.description}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={() => makePaymentConfirmation(false)} >Decline</button>
              <button type="button" className="btn btn-success" onClick={() => makePaymentConfirmation(true)}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PayRequestModal;