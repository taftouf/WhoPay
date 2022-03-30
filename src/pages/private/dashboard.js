import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../../components/main/main";
import { getAccounts } from "../../authentication/auth";
import { ethers } from "ethers";
const Dashboard = ({children})=>{
    const navigate = useNavigate();
    
    useEffect(async()=>{
        await getAccounts();
        if(!ethers.utils.isAddress(localStorage.getItem("address"))){
            navigate("/");
        }
    })
    
    return (   
            <Main children={children}></Main>
        );
}

export default Dashboard;
