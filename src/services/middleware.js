import { Navigate } from "react-router-dom";
import {ethers} from "ethers";
import { useEffect, useState } from "react";


function Middleware({children}){
    if(ethers.utils.isAddress(localStorage.getItem("address"))){
        return children;
    }else{        
        return <Navigate to={"/"} />;
    }
}

export default Middleware;
