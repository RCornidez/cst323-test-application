import { useNavigate, useParams } from "react-router"
import UserForm, { convertUsertoFormValues } from "../components/UserForm"
import { userRepository } from "../repositories/UserRepository"
import { useEffect, useState } from "react"
import type { User } from "../types/types"

function EditUser() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    userRepository.getById(Number(id))
      .then(setUser)
  }, [id])

  if (!user) return <p>User not found.</p>

  return (
    <>
      <h1 className="h3 mb-4">Edit User</h1>
      <UserForm
        initialValues={convertUsertoFormValues(user)}
        onSubmit={async data => {
          await userRepository.update(user.id, { ...data, id: user.id })
          navigate(`/users/${user.id}/profile`)
        }}
      />
    </>
  )
}

export default EditUser