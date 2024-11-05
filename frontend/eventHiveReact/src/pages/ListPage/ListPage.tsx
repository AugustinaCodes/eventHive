import { useAuth0 } from "@auth0/auth0-react";
import ListPlace from "../../components/ListPlace/ListPlace";

export default function ListPage() {
  const { logout } = useAuth0();

  return (
    <div>
      <button onClick={() => logout({ logoutParams: { returnTo: "http://localhost:5173/" } })}>logout</button>
      <ListPlace />
    </div>
  )
}
