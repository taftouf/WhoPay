import { Navigate } from "react-router-dom";
import {ethers} from "ethers";
import { useEffect, useState } from "react";
import { useSelector
 } from "react-redux";
function MiddlewareWelcome({children}){  
    const address = useSelector((state)=>state.user.address);
    console.log(address);
    if(ethers.utils.isAddress(address)){
        return <Navigate to={"/dashboard"} />;
    }else{ 
        return children;
    }
}

export default MiddlewareWelcome;
