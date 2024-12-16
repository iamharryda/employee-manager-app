import { useState } from 'react'
import '../styles/Formas.css'
import axios from 'axios'

export const Formas = () => {

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        role: "",
        department: "",
        startdate: "",
        location: "",
    })

    const handleChange = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:3002/persons`, formData)
            .then((res) => {
                const { name, value } = e.target;
                setFormData((prev) => ({ ...prev, [name]: value }))
                console.log(formData);
            })
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
        console.log(formData);
    }


    return (
        <div>
            <h2>Could you submit this form :)</h2>
            <form onSubmit={handleChange} >
                <div className='form-item'>
                    <label htmlFor="id">ID:</label>
                    <input type="number" id="id" name="id" value={formData.id} onChange={(e) => setFormData((prev) => ({ ...prev, [name]: value }))} />
                </div>

                <div className='form-item'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, [name]: value }))}></input>
                </div>

                <div className='form-item'>
                    <label htmlFor="role">Role:</label>
                    <input type="text" id="role" name="role" value={formData.role} onChange={(e) => setFormData((prev) => ({ ...prev, [name]: value }))}></input>
                </div>

                <div className='form-item'>
                    <label htmlFor="department">Department</label>
                    <input type="text" id="department" name="department" value={formData.department} onChange={handleChange}></input>
                </div>

                <div className='form-item'>
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" name="startDate" value={formData.startdate} onChange={handleChange}></input>
                </div>

                <div className='form-item'>
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange}></input>
                </div>

                <div>
                    <button>submit</button>
                </div>




            </form>
        </div>
    )
}