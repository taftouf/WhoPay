import { ethers } from "ethers";

export const connectToWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: null,
          status: err.message,
        };
      }
    } else {
      return {
        address: null,
        status: "",
        }; 
    } 
};


export const getAccounts = async()=>{
  if(window.ethereum){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();
    console.log(accounts[0]);
    localStorage.setItem("address", accounts[0]);
    localStorage.setItem("wallet", "");
  }
}
