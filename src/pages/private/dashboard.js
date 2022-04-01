import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../../components/main/main";
import { getAccounts } from "../../authentication/auth";
import { ethers } from "ethers";
import { useSelector } from "react-redux";


const Dashboard = ({children})=>{
    const navigate = useNavigate();
    const address = useSelector((state)=>state.user.address);

    useEffect(async()=>{
        await getAccounts();
        if(!ethers.utils.isAddress(address)){
            navigate("/");
        }
        console.log(address, "dashboard");
    })
    
    return (   
            <Main></Main>
        );
}

export default Dashboard;
