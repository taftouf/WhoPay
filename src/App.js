import React, { useEffect }  from 'react';
import { Routes, Route } from "react-router-dom";
import Welcome from './pages/public/welcome';
import Dashboard from './pages/private/dashboard';
import Page404 from './pages/public/page404';
import { useDispatch, useSelector } from 'react-redux';
import Middleware from './services/middleware';
import MiddlewareWelcome from './services/MiddlewareWelcome';
import { getAccounts } from './authentication/auth';
import { changeAddress, initStatus } from './store/userSlice';

const App = () =>{
  const address = useSelector((state)=>state.user.address);
  const dispatch = useDispatch();
  useEffect(async()=>{
    window.ethereum.on('accountsChanged', async () => {
      const address = await getAccounts();
      await dispatch(changeAddress(address))
      
    });
    await dispatch(initStatus())
  });
  return (
    
      <Routes>
        <Route path="/" element={<MiddlewareWelcome><Welcome/> </MiddlewareWelcome>} />
        <Route path="/dashboard" element={<Middleware><Dashboard/></Middleware>  } />
        <Route path="*" element={ <Page404 /> } />
      </Routes>
     

  );
}

export default App;
