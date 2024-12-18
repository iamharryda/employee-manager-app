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
    });

    const [error, setError] = useState(""); // To show form validation errors
    const [success, setSuccess] = useState(""); // To confirm successful submission

    // Update formData state when inputs change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Reset errors
        setSuccess(""); // Reset success message

        // Validate that all fields are filled
        if (!formData.name || !formData.role || !formData.department || !formData.startDate || !formData.location) {
            setError("Please fill in all fields before submitting.");
            return;
        }

        // Send form data to backend (without 'id')
        const newEmployee = {
            name: formData.name,
            role: formData.role,
            department: formData.department,
            startDate: formData.startDate,
            location: formData.location,
        };

        axios
            .post(`http://localhost:3002/persons`, newEmployee)
            .then((res) => {
                console.log("Form submitted successfully:", res.data);
                setSuccess("Employee added successfully!");
                setFormData({ name: "", role: "", department: "", startDate: "", location: "" }); // Reset form
            })
            .catch((err) => {
                console.error("Error submitting form:", err);
                setError("An error occurred while submitting. Please try again.");
            });
    };

    return (
        <div>
            <h2>Could you submit this form :)</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>

                {/* Error message */}
                {error && <p style={{ color: "red" }}>{error}</p>}

                {/* Success message */}
                {success && <p style={{ color: "green" }}>{success}</p>}
            </form>
        </div>
    );
};
