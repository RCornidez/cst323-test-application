import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import type { User } from "../types/types"
import { userRepository } from "../repositories/UserRepository"
import { Alert, Col, Row } from "react-bootstrap"
import ProfileCard from "../components/ProfileCard"
import InfoCard from "../components/InfoCard"
import InfoField from "../components/InfoField"

function UserProfile() {
  const {id} = useParams<{ id: string }>()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    userRepository.getById(Number(id)).then(u => setUser(u ?? null)).finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading user</p>

  if (!user) {
    return (
      <Alert variant="warning">
        No user found with the id {id}. <Link to="/">Back to user list</Link>
      </Alert>
    )
  }

  return (
    <>
        <h1>User Profile</h1>
        <ProfileCard id={user.id} firstName={user.firstName} lastName={user.lastName}/>
        <Row className="g-4">
          <Col md={6}>
            <InfoCard title="Contact">
              <InfoField label="Email" value={user.email}/>
              <InfoField label="Phone" value={user.phoneNumber}/>
            </InfoCard>
          </Col>
          <Col md={6}>
            <InfoCard title="Address">
              <InfoField label="Street" value={user.addressLine1}/>
              <InfoField label="Unit" value={user.addressLine2}/>
              <InfoField label="City / State" value={`${user.city ?? "-"}, ${user.state ?? "-"} ${user.zipcode ?? "-"}`}/>
            </InfoCard>
          </Col>
        </Row>
    </>
  )
}

export default UserProfile