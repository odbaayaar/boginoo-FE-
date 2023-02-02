import { useState } from "react"
import { auth } from "../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate , Link } from "react-router-dom" 
import "../app.modules.css"
import Logo from "../img/link.png"

export const Signup = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmp, setConfirmp] = useState("")

    const onSubmit = async (e) => {
            e.preventDefault();
          await createUserWithEmailAndPassword(auth, email, password, confirmp)
            .then((userCredential) => {
                const user = userCredential.user;
                const uid = userCredential.uid;
                console.log(user);
                navigate("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.errorMessage
                console.log(errorCode, errorMessage);
            })
    }

    return (
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

        <div style={{display: "flex" , flexDirection: "column"}}>
        <h5 style={{marginBottom: "5px"}}>Нууц үгээ давтна уу?</h5>
        <input
        className="Signup-Password2" 
        type="password"
        label="Re-enter password"
        value={confirmp}
        onChange={(e) => setConfirmp(e.target.value)}
        required
        placeholder="Password"
        />
        </div>

        <button className="sign-up" onClick={onSubmit}>Бүртгүүлэх</button>

        <Link to="/login" style={{marginTop: "15px"}}>Already Have An Account?</Link>

    </div>
    )
}