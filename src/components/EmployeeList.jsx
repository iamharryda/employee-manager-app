import './EmployeeList.css';
import Employee from './EmployeeCard';
import { useEffect, useState } from 'react';
import Button from './Button';
import axios from 'axios';

export default function EmployeeList() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [persons, setPersons] = useState([]); // Employees list
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data from the backend
    useEffect(() => {
        axios
            .get('http://localhost:3002/persons')
            .then((response) => {
                setPersons(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data', error);
            })
            .finally(() => setIsLoading(false));
    }, []);

    // Handle login toggle
    const handleLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    // Update a specific employee in the state after editing
    const handleUpdateEmployee = (id, updatedEmployee) => {
        setPersons((prevPersons) =>
            prevPersons.map((person) => (person.id === id ? { ...person, ...updatedEmployee } : person))
        );
    };

    return (
        isLoggedIn ? (
            <div>
                <div>Please log in to see the Employee DATA. IT'S confidential.</div>
                <div>
                    <Button onClick={handleLoggedIn} text="Log In" />
                </div>
            </div>
        ) : (
            <div>
                <h2>Employee Dashboard</h2>
                <div className="list">
                    {isLoading ? (
                        <p>Loading......</p>
                    ) : (
                        persons.map((element) => (
                            <Employee
                                key={element.id}
                                id={element.id}
                                name={element.name}
                                role={element.role}
                                department={element.department}
                                startDate={element.startDate}
                                location={element.location}
                                button="promote"
                                onUpdate={handleUpdateEmployee} // Pass callback to Employee
                            />
                        ))
                    )}
                </div>
                <Button onClick={handleLoggedIn} text="Log Out" />
            </div>
        )
    );
}
