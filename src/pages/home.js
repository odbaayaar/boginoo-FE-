import Logo from "../img/link.png"
import "../app.modules.css"
import axios from "axios"
import { signOut, onAuthStateChanged } from "firebase/auth"
import { useState, useEffect } from "react"
import { auth } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"

const baseUrl = "http://localhost:4321/"

export const Home = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  const [urls, setUrl] = useState("")
  const [values, setValues] = useState("")
  const [page , setPage] = useState(1)

  const onSubmit = async (e) => {
    auth.signOut().then(() => {
      navigate("/login")
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user, uid) => {
      if (user) {
        setUser(user);
        console.log(user.uid);
      } else {
        console.log("user is logged out");
      }
    })
  }, []);


  useEffect(() => {
    if(user){

      axios.get(baseUrl + `urls?userId=${user && user.uid}` + "&pages" + page).then((response) => {
        setUrl(response.data)
        console.log(response.data)
      });
    }
  }, [user])


  function createUser() {
    console.log(values.longUrl)
    axios.post(baseUrl + "urls", {
      longUrl: values.longUrl,
      user: user.uid,
    }).then((response) => {
      console.log(response.data)
    })
  }

  const Url = ({ element }) => {
    return (
      <>
        <div style={{marginTop: "20px"}}>
          {element.longUrl}
          <h5>original Url^</h5>
        </div>
        <div style={{marginTop: "20px"}}>
          {element.shortUrl}
          <h5>shortened Url^</h5>
          </div>
      </>
    )
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  return (
    <div className="H-Cont">
      <img src={Logo} style={{ marginTop: "233px" }}></img>
      <h5 className="Lobster">Boginoo</h5>
      <div>
        <input
          onChange={handleInputChange}
          name="longUrl"
          value={values.longUrl}
          className="shortener"
          placeholder="https://youtube.com"
        />
        <button className="shortener-confirm" onClick={createUser}>Богиносгох</button>

        <button onClick={onAuthStateChanged}>Log Out</button>
      </div>
      {
        urls &&

        urls.map((url) => {
          return (
            <Url element={url} />
          )
        })

      }

    </div>
  )
}