import { useState } from 'react';
import '../styles/Formas.css';
import axios from 'axios';

export const Formas = () => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        department: "",
        startDate: "",
        location: "",
        email: "",
        phone: "",
        skills: "",
        experience: "",
        education: "",
        linkedin: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Validate the form before submission
    const validateForm = () => {

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            return "Invalid email format.";
        }

        if (!/^\d{10,15}$/.test(formData.phone)) {
            return "Invalid phone number. Must contain only digits.";
        }

        if (new Date(formData.startDate) > new Date()) {
            return "Start date cannot be in the future.";
        }

        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        const newEmployee = { ...formData };

        axios
            .post(`http://localhost:3002/persons`, newEmployee)
            .then((res) => {
                console.log("Form submitted successfully:", res.data);
                setSuccess("Employee added successfully!");
                setFormData({
                    name: "", role: "", department: "", startDate: "", location: "",
                    email: "", phone: "", skills: "", experience: "", education: "", linkedin: ""
                });
            })
            .catch((err) => {
                console.error("Error submitting form:", err);
                setError("An error occurred while submitting. Please try again.");
            });
    };

    return (
        <div className='whole-page'>
            <div className='headerr'>
                <h2>Submit Employee Information</h2>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-item">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter full name" />
                </div>

                <div className="form-item">
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" value={formData.role} onChange={handleInputChange}>
                        <option value="">Select a role</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Game Developer">Game Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Team Lead">Team Lead</option>
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="department">Department:</label>
                    <select id="department" name="department" value={formData.department} onChange={handleInputChange}>
                        <option value="">Select a department</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Creative">Creative</option>
                        <option value="Operations">Operations</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Administration">Administration</option>
                        <option value="IT">IT</option>
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} />
                </div>

                <div className="form-item">
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter city name" />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email address" />
                </div>

                <div className="form-item">
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter phone number (digits only)" />
                </div>

                <div className="form-item">
                    <label htmlFor="skills">Skills:</label>
                    <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleInputChange} placeholder="Enter skills (comma-separated)" />
                </div>

                <div className="form-item">
                    <label htmlFor="experience">Experience (years):</label>
                    <input type="number" id="experience" name="experience" value={formData.experience} onChange={handleInputChange} min="0" placeholder="Enter experience in years" />
                </div>

                <div className="form-item">
                    <label htmlFor="education">Education:</label>
                    <input type="text" id="education" name="education" value={formData.education} onChange={handleInputChange} placeholder="Enter highest qualification" />
                </div>

                <div className="form-item">
                    <label htmlFor="linkedin">LinkedIn:</label>
                    <input type="text" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="Enter LinkedIn profile URL" />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </form>
        </div>
    );
};
