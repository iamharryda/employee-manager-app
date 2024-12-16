import './EmployeeList.css'
import Employee from './EmployeeCard'
import { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'




export default function EmployeeList() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [persons, setPersons] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get('http://localhost:3002/persons')
            .then(response => {
                setPersons(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            })
            .finally(
                setIsLoading(false)
            )
    }, []);

    const handleLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }




    return (

        isLoggedIn ?
            <div>
                <div>Please log in to see the Employee DATA. IT'S confedintial.</div>
                <div><Button onClick={handleLoggedIn} text="log In"></Button></div>
            </div>
            :
            <div>
                <h2>Employee Dashboard</h2>
                <div className='list'>
                    {
                        isLoading ? (
                            <p>Loading......</p>
                        ) : (

                            persons.map((element) => <Employee key={element.id} name={element.name} role={element.role} department={element.department} startDate={element.startDate} location={element.location} button="promote" />
                            )

                        )
                    }

                </div>
                <Button onClick={handleLoggedIn} text="log out"> </Button>


            </div>

    )
}