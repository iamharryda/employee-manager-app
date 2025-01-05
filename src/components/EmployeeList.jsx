import './EmployeeList.css';
import Employee from './EmployeeCard';
import { useEffect, useState } from 'react';
import Button from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EmployeeList() {
    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

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
            .finally(() => {
                setIsLoading(false);
            });
    }, []);


    // Update a specific employee in the state after editing
    const handleUpdateEmployee = (id, updatedEmployee) => {
        setPersons((prevPersons) =>
            prevPersons.map((person) => (person.id === id ? { ...person, ...updatedEmployee } : person))
        );
    };

    return (
        <div>
            <div>
                <div className='headder'>
                    <h2>Employee Dashboard</h2>
                </div>
                <div className="list">
                    {isLoading ? (
                        <p>Loading......</p>
                    ) : (
                        persons.map((employee) => (
                            <Employee
                                key={employee.id}
                                id={employee.id}
                                name={employee.name}
                                role={employee.role}
                                department={employee.department}
                                startDate={employee.startDate}
                                location={employee.location}
                                button="promote"
                                onUpdate={handleUpdateEmployee} // Pass callback to update employee
                            />
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}
