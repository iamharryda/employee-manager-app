import './EmployeeList.css'
import Employee from './EmployeeCard'
import { useEffect, useState } from 'react'
import employees from '../data/employeeData'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function EmployeeList() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLoggedIn = () => {
        setIsLoggedIn(!isLoggedIn)
    }


    return (

        isLoggedIn ?
            <div>
                Please log in to see the Employee DATA. IT'S confedintial.
                <button onClick={handleLoggedIn}>Log In</button>
            </div>
            :
            <div>
                <Header />
                <h2>Employee Dashboard</h2>
                <div className='list'>
                    {
                        employees.map((element) => <Employee id={element.id} name={element.name} role={element.role} department={element.department} startDate={element.startDate} location={element.location} button="promote" />
                        )}

                </div>
                <button onClick={handleLoggedIn}>Log Out</button>
                <Footer />


            </div>

    )
}