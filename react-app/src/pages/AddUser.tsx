import { useNavigate } from "react-router"
import UserForm from "../components/UserForm"
import { userRepository } from "../repositories/UserRepository"

function AddUser() {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="h3 mb-4">Add User</h1>
      <UserForm onSubmit={async data => {
        await userRepository.create(data)
        navigate('/')
      }}/>
    </>
  )
}

export default AddUser