import { Navigate } from "react-router-dom";
import {ethers} from "ethers";
import { useSelector } from "react-redux";


function Middleware({children}){
    const address = useSelector((state)=>state.user.address);

    if(ethers.utils.isAddress(address)){
        return children;
    }else{        
        return <Navigate to={"/"} />;
    }
}

export default Middleware;
