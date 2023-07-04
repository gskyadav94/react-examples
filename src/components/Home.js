import React from 'react';
import Table from './Table';

const Home =(props)=> {
    console.log(props);
    return (
        <div className='container'>
            <div className='py-4'>
                <h1>Users List</h1>
                <Table users={props.users} headers={props.headers} userTab={true}/>
            </div>
        </div>
    )
}

export default Home;
