import React, { useEffect }  from 'react';
import { Routes, Route } from "react-router-dom";
import Welcome from './pages/public/welcome';
import Dashboard from './pages/private/dashboard';
import Page404 from './pages/public/page404';
import { useSelector } from 'react-redux';
import Middleware from './services/middleware';
import MiddlewareWelcome from './services/MiddlewareWelcome';
import { getAccounts } from './authentication/auth';

const App = () =>{
  const {isLoading} = useSelector((state)=>state.user);
  
  useEffect(async()=>{
      await getAccounts();
      localStorage.setItem("message", "");
    });
  return (
    
      <Routes>
        <Route path="/" element={<MiddlewareWelcome><Welcome  isLoading = {isLoading}/> </MiddlewareWelcome>} />
        <Route path="/dashboard" element={<Middleware><Dashboard children={"Content From App"}/>{" "}</Middleware>  } />
        <Route path="*" element={ <Page404 /> } />
      </Routes>
     

  );
}

export default App;
