import { Button } from "react-bootstrap"
import type { Column } from "../components/CustomTable"
import type { User } from "../types/types"
import { Link } from "react-router"
import CustomTable from "../components/CustomTable"
import { useEffect, useState } from "react"
import { userRepository } from "../repositories/UserRepository"

function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)


const columns: Column<User>[] = [
  {
    key: 'name',
    header: 'Name',
    render: user => `${user.firstName} ${user.lastName}`
  },
  {
    key: 'email',
    header: 'Email',
    field: 'email'
  },
  {
    key: 'phone',
    header: 'Phone',
    field: 'phoneNumber'
  },
  {
    key: 'location',
    header: 'Location',
    render: user => `${user.city ?? '-'}, ${user.state ?? '-'} ${user.zipcode ?? '-'}`

  },
  {
    key: 'actions',
    header: 'Actions',
    render: user => (
      <div className="gap-2 d-flex">
        <Button as={Link as any} to={`/users/${user.id}/profile`} size="sm" variant="outline-primary">
          View Profile
        </Button>
        <Button as={Link as any} to={`/users/${user.id}/edit`} size="sm" variant="outline-secondary">
          Edit
        </Button>
        <Button onClick={async () => {
          await userRepository.delete(user.id)
          setUsers(prevUsers => prevUsers.filter(u => u.id !== user.id))
        }} type="button" size="sm" variant="outline-danger">
          Delete
        </Button>
      </div>
    )
  }
]

  useEffect(() => {
    userRepository.getAll().then(setUsers).finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading users</p>

  return (
    <>
        <h1>User List</h1>
        <CustomTable columns={columns} rows={users} rowKey={user => user.id}/>
    </>
  )
}

export default UserList