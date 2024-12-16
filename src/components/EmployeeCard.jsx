import './EmployeeCard.css'
import { useState } from 'react'
import star from '/Users/s2400057/Documents/my_studies/employee-manager-app/src/components/star.png'
import employees from '../data/employeeData'
import Button from './Button'
import Form from '../Forms/Form'


export default function Employee({ name, role, department, startDate, location, button }) {

    const [isPromoted, setIsPromoted] = useState(false)
    const [buttonText, setButtonText] = useState(button)
    const [toggleFormEdit, setToggleFormEdit] = useState(false)




    employees.forEach((employee) => {
        const dateString = employee.startDate;
        const startDate = new Date(dateString);
        const currentYear = new Date().getFullYear();
        const yearDiff = currentYear - startDate.getFullYear();

        const currentMonth = new Date().getMonth() + 1;
        const monthDiff = currentMonth - (startDate.getMonth() + 1);

        /* // yearDiff and monthDiff 
        console.log(`Employee: ${employee.name}, Year Difference: ${yearDiff}, Month Difference: ${monthDiff}`); */
    });





    const clickHandler = () => {
        setIsPromoted(!isPromoted)
        setButtonText(isPromoted ? "promote" : "demote")
    }

    const buttonRole = isPromoted ? "primary" : "secondary"


    return (
        <div className='card'>
            <img src={`https://robohash.org/${name}?set=set5`} alt="" />
            <h2>Name: {name}</h2>
            {toggleFormEdit ?
                <Form role={role} department={department} location={location}>

                </Form>
                :
                <div>
                    <p>role: {role}</p>
                    <p>department: {department}</p>
                    <p>location: {location}</p>
                </div>

            }
            <p>Start Date: {startDate}</p>
            {isPromoted ?

                <p><img className='star' src={star} alt="star icon" /></p>
                :
                <p></p>
            }
            <Button onClick={() => setToggleFormEdit(!toggleFormEdit)} text={toggleFormEdit ? "save" : "edit"}></Button>

            <Button onClick={clickHandler} text={buttonText} role={buttonRole}></Button>


        </div >
    )
}