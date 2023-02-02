import { useState } from "react"
import { auth } from "../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate , Link } from "react-router-dom" 
import "../app.modules.css"
import Logo from "../img/link.png"

export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.errorMessage
                console.log(errorCode, errorMessage);
            })
    }

    return(
    <div className="S-Cont">
        
    <img src={Logo} style={{height: "40px" , width: "74px", marginTop: "30px"}}></img>
    <h5 className="Lobster">Boginoo</h5>

    <h2 style={{color: "#02B589" , fontSize: "32px"}}>Нэвтрэх</h2>

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
        
    <div style={{display: "flex" , flexDirection: "column"}}>
    <h5 style={{marginBottom: "5px"}}>Нууц үг</h5>
    <input
    className="Signup-Password" 
    type="password"
    label="Create password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    placeholder="Password"
    />
    </div>
    
    <div style={{display: "flex" , flexDirection: "row" , alignItems: "center" , width: "400px" , height: "30px"}}>
    <input type="checkbox" className="rember"></input>
    <h6 style={{color: "#02B589"}}>Намайг сана</h6>
    <Link to="/getpass"style={{marginLeft: "180px" , fontSize: "11px"}}>Нууц үгээ мартсан</Link>
    </div>

    <button className="sign-up" type="submit" onClick={onSubmit}>Бүртгүүлэх</button>

    <Link to="/signup" style={{marginTop: "30px" , color: "#02B589"}}>Шинэ хэрэглэгч бол энд дарна уу?</Link>

    </div>
    )
}