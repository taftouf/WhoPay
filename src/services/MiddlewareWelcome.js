import { Navigate } from "react-router-dom";
import {ethers} from "ethers";
import { useEffect, useState } from "react";

function MiddlewareWelcome({children}){  
    if(ethers.utils.isAddress(localStorage.getItem("address"))){
        return <Navigate to={"/dashboard"} />;
    }else{ 
        return children;
    }
}

export default MiddlewareWelcome;
