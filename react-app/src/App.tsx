import { Container } from "react-bootstrap"
import { Routes, Route } from 'react-router'

import Navbar from "./components/Navbar"
import AddUser from "./pages/AddUser"
import UserList from "./pages/UserList"
import UserProfile from "./pages/UserProfile"
import EditUser from "./pages/EditUser"

function App() {

  return (
    <>
      <Navbar/>
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="/users/new" element={<AddUser/>} />
          <Route path="/users/:id/profile" element={<UserProfile/>} />
          <Route path="/users/:id/edit" element={<EditUser/>} />
        </Routes>
      </Container>
    </>
  )
}

export default App
