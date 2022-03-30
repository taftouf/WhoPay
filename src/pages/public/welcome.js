import React, { useEffect,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from '../../store/userSlice';
import {ethers} from "ethers";
import { getAccounts } from '../../authentication/auth';

const Welcome = ({isLoading}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(async()=>{
      await getAccounts();
      if(ethers.utils.isAddress(localStorage.getItem("address"))){
        navigate("/dashboard");
      }
    }, [])

    const connectWallet = async()=>{
      await dispatch(connect());
      getAccounts();
      if(ethers.utils.isAddress(localStorage.getItem('address'))){
        navigate("/dashboard");
      }
    }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="w-80 rounded-2xl border shadow py-12 px-8 hover:-translate-y-1 hover:shadow-2xl delay-75 duration-100">
        <p className="text-3xl text-gray-700 font-semibold"> Logo </p>
          
          {!window.ethereum
          ?
            <a target="_blank" href={`https://metamask.io/download.html`}>
              <button 
                className="mt-10 w-full py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-gray-50">
                Install Metamask
              </button>
            </a>
          :
            (isLoading 
              ?
                <button 
                  className="mt-10 w-full py-3 rounded-xl border border-purple-600 text-purple-600 cursor-not-allowed">
                    Loading ...
                </button>
                : (
                <button 
                  className="mt-10 w-full py-3 rounded-xl border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-gray-50"
                  onClick={connectWallet}
                  >
                    Connect To Wallet
                </button>
                )
            )
          }
          <p className="text-sm font-light mt-5 leading-7 text-purple-600"> {localStorage.getItem("message")}</p>
        </div>
      </div>
    </div>
    
  );
}

export default Welcome;
