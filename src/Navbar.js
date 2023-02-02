import {Navigate, useNavigate , useLocation} from "react-router-dom"
import { useState } from "react"

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [a, setA] = useState(true)
    function ToSignUp() {  navigate("/signup") }
    if(location.pathname != "/") 
    if(a === true) {
        setA(false)
    }

    return (
        <div className="nav">
        <h2 style={{ color: "#02B589" , fontSize: "20px" , marginRight: "19px"}}>Хэрхэн ажилладаж вэ?</h2>
        <button className="to-sign" style={{ display : a ? "fixed" : "none"}} onClick={ToSignUp}>Нэвтрэх</button>
        </div>
    )


}