import { Card } from "react-bootstrap"
import type { ReactNode } from "react"

type InfoCardProps = {
    title: string
    children: ReactNode
    className?: string
}

function InfoCard({
    title,
    children,
    className = 'h-100'
}: InfoCardProps) {
    return (
        <Card className={className}>
            <Card.Header>{title}</Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    )
}

export default InfoCard