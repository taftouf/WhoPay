import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Main = () =>{

    const navigate = useNavigate();
    const address = useSelector((state)=>state.user.address);

    const logout= async()=>{
        console.log("logout");
        localStorage.setItem("address", null);
        localStorage.setItem("auth", false);
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div> {address} </div>
        </div>
    );
  }
  
  export default Main;