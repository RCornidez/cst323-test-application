import { Badge, Card } from "react-bootstrap"

type ProfileCardProps = {
    id: number
    firstName: string
    lastName: string
}

function ProfileCard({
    id,
    firstName,
    lastName
}: ProfileCardProps) {
    return (
        <Card className="mb-4">
            <Card.Body className="d-flex gap-2 align-items-center">
                <div 
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style={{ height: 60, width: 60}}    
                >
                    {`${firstName[0]}${lastName[0]}`.toUpperCase()}
                </div>
                <div>
                    <h1 className="h3 mb-1">{firstName} {lastName}</h1>
                    <Badge bg="secondary">ID {id}</Badge>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard