
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import ViewUserDetails from './ViewUserDetails';
import PayRequests from './PayRequests';

function App() { 

  const [users, setUsers] = useState([]);
    const headers = ["Id", "First Name", "Last Name", "Email", "Actions"];
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        //const result = await axios.get("https://localhost:8080/users");
        const result = [{ name: "test", id: "123", email: "test@gmail.com" }, { name: "test1", id: 12, email: "test1@gmail.com" }];
        console.log(result);
        setUsers(result);
    };

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home users={users} headers={headers}/>}/>
          <Route path='/:id' element={<ViewUserDetails users={users}/>}/>
          <Route path='/:id/payRequests' element={<PayRequests/>}/>
          <Route path='*' element={ <Navigate to='/'/>}/>           
        </Routes>
      </Router>     
    </div>
  );
}

export default App;
