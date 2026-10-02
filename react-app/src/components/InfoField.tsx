import type { ReactNode } from "react"
import { Col, Row } from "react-bootstrap"

type InfoFieldProps = {
    label: string
    value?: ReactNode
}

function InfoField({
    label,
    value
}: InfoFieldProps) {
    return (
        <Row className="mb-2">
            <Col sm={4} className="text-muted">{label}</Col>
            <Col sm={8}>{value || '-'}</Col>
        </Row>
    )
}

export default InfoField