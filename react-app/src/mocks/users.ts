import type { User } from "../types/types"

export const mockUsers: User[] = [
    {id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@gcu.edu', phoneNumber: '+12345678', addressLine1: '123 Maple Drive', city: 'Phoenix', state: 'AZ', zipcode: '85701'},
    {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@gcu.edu', phoneNumber: '+12345678', addressLine1: '123 Elm Steet', city: 'Phoenix', state: 'AZ', zipcode: '85701'},
    {id: 3, firstName: 'James', lastName: 'Doe', email: 'james.doe@gcu.edu', phoneNumber: '+12345678', addressLine1: '123 Pine Road', city: 'Phoenix', state: 'AZ', zipcode: '85701'}
]