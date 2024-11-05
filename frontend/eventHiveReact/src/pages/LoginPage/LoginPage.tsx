import { useNavigate } from "react-router-dom";
import logo from "../../assets/EventHive.svg";
import { useAuth0 } from "@auth0/auth0-react";



export default function LoginPage() {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0()
  return (
    <div>
        <button onClick={() => navigate("/")}>Back</button>
        <img src={logo} alt="Event Hive Logo" />
        <h1>Sign In</h1>
        <p>To get access to Event Hive</p>
        <button onClick={() => loginWithRedirect()}>Continue with Google</button>
    </div>
  )
}
