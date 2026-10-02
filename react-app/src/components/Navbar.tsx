import { Container, Nav, Navbar as BSNavbar } from "react-bootstrap"
import { NavLink } from "react-router"

function Navbar() {
    return (
        <BSNavbar sticky="top">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/" end>User List</Nav.Link>
                    <Nav.Link as={NavLink} to="/users/new">Add User</Nav.Link>
                </Nav>
            </Container>
        </BSNavbar>
    )
}

export default Navbar