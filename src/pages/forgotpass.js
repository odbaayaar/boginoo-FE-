import { useState } from "react"
import { auth } from "../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate , Link } from "react-router-dom" 
import "../app.modules.css"
import Logo from "../img/link.png"

export const Forgotpass = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
    <div className="S-Cont">
        
    <img src={Logo} style={{height: "40px" , width: "74px", marginTop: "30px"}}></img>
    <h5 className="Lobster">Boginoo</h5>

    <h2 style={{color: "#02B589" , fontSize: "32px"}}>Нууц үг сэргээх</h2>

    <div style={{height: "50px" , width: "250px", display: "flex", flexDirection: "column" , justifyContent: "center"}}>
    <h5>Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</h5>
    </div>

    <div>
    <h5 style={{marginBottom: "5px"}}>Цахим хаяг</h5>
    <input
    className="Signup-Email" 
    type="email"
    label="Email address"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="Email address"
    />
    </div>

    <button className="sign-up">Илгээх</button>

    </div>
    )
}