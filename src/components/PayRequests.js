import React from 'react';
import Table from './Table';

const PayRequests = () => {
  const headers = ["Id", "Description", "Amount","Status", "Actions"];
  const payRequests = [{ Id: "1", description: "test", amount: "150" ,IsApproved : false}];

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Current Payment Requests</h1>
        <Table payRequests={payRequests} headers={headers} userTab={false} />        
      </div>
    </div>
  )
}

export default PayRequests