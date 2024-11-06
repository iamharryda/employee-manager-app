import './EmployeeList.css'
import Employee from './EmployeeCard'
import { useEffect, useState } from 'react'

export default function EmployeeList() {



    return (

        <div>
            <h2>Employee List</h2>
            <div className='list'>
                <Employee name="Sayeed" initRole="Teacher" department="ICT" location="Helsinki" salary="6000€" StartDate="15-01-2020" />

            </div>
        </div>

    )
}