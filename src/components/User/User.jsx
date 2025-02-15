import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/FakeAuthContext"
import styles from "./User.module.css"
import Spinner from "../Spinner/Spinner"

function User() {
  const { user, logout } = useAuth()

  const navigate = useNavigate()

  if (!user) {
    return <Spinner></Spinner>
  }

  function handleClick() {
    logout()
    navigate("/")
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default User
