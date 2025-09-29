import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



import Adminpage from "./components/Adminpage";
import Dashboard from "./components/Dashboard";
import Programs from "./components/Programs";
import Batches from "./components/Batches";
import Progress from "./components/Progress";
import Users from "./components/User";
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Login/>}></Route>
        <Route path="/admin" element={<Adminpage />}>
          <Route index element={<Dashboard />} />
          <Route path="programs" element={<Programs />} />
          <Route path="batches" element={<Batches />} />
          <Route path="progress" element={<Progress />} />
          <Route path="users" element={<Users />} />

  
          </Route>
      </Routes>
    </Router>
  );
}

export default App;


