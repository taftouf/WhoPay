import { useNavigate } from "react-router-dom";

const Main = ({children}) =>{
    const navigate = useNavigate();
    const logout= async()=>{
        console.log("logout");
        localStorage.setItem("address", null);
        localStorage.setItem("auth", false);
        
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div> {localStorage.getItem("address")}</div>
        </div>
    );
  }
  
  export default Main;