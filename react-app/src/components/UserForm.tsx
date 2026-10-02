import { useState, type ChangeEvent, type SubmitEvent } from "react"
import { useNavigate } from "react-router"
import type { NewUser } from "../repositories/UserRepository"
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import type { User } from "../types/types"

const STATES = ('AK, AL, AR, AS, AZ, CA, CO, CT, DC, DE, FL, GA, GU, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MP, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, PR, RI, SC, SD, TN, TX, UT, VA, VI, VT, WA, WI, WV, WY').split(', ')

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  zipcode: string
}

const EMPTY_FORM: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  zipcode: '',
}

export function convertUsertoFormValues(user: User): FormValues {
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email ?? '',
        phoneNumber: user.phoneNumber ??'',
        addressLine1: user.addressLine1 ??'',
        addressLine2: user.addressLine2 ?? '',
        city: user.city ?? '',
        state: user.state ?? '',
        zipcode: user.zipcode ?? '',
    }
}

type UserFormProps = {
    initialValues?: FormValues
    onSubmit: (data: NewUser) => Promise<void>
}


function UserForm({
    initialValues = EMPTY_FORM,
    onSubmit
}: UserFormProps) {
  const navigate = useNavigate()
  const [values, setValues] = useState<FormValues>(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value}))
  }

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload: NewUser = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim().toLocaleLowerCase() || undefined,
      phoneNumber: values.phoneNumber.trim() || undefined,
      addressLine1: values.addressLine1.trim() || undefined,
      addressLine2: values.addressLine2.trim() || undefined,
      city: values.city.trim() || undefined,
      state: values.state || undefined,
      zipcode: values.zipcode.trim() || undefined,
    }

    try {
      await onSubmit(payload)
    } catch (error) {
      console.log(error instanceof Error ? error.message : `An error occured when saving user: ${error}`)
    }
  }

  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Card className="mb-4">
          <Card.Header>Contact</Card.Header>
          <Card.Body>
            <Row className="g-3">
              <Form.Group as={Col} md={6} controlId="firstName">
                <Form.Label>First name *</Form.Label>
                <Form.Control name="firstName" value={values.firstName} onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="lastName">
                <Form.Label>Last name *</Form.Label>
                <Form.Control name="lastName" value={values.lastName} onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={values.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="phoneNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} />
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-4">
          <Card.Header>Address</Card.Header>
          <Card.Body>
            <Row className="g-3">
              <Form.Group as={Col} md={8} controlId="addressLine1">
                <Form.Label>Street address</Form.Label>
                <Form.Control name="addressLine1" value={values.addressLine1} onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col} md={4} controlId="addressLine2">
                <Form.Label>Apt / Suite</Form.Label>
                <Form.Control name="addressLine2" value={values.addressLine2} onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col} md={6} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control name="city" value={values.city} onChange={handleChange} />
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Select name="state" value={values.state} onChange={handleChange}>
                  <option value="">Select</option>
                  {STATES.map(state => <option key={state} value={state}>{state}</option>)}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md={3} controlId="zipcode">
                <Form.Label>ZIP Code</Form.Label>
                <Form.Control name="zipcode" value={values.zipcode} onChange={handleChange} inputMode="numeric"/>
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>

        <div className="gap-2 d-flex">
          <Button type="submit">
            Submit
          </Button>
          <Button variant="outline-secondary" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </div>
      </Form>
    </>
  )
}

export default UserForm