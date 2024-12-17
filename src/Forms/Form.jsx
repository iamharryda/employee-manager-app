/* import { useState } from "react";

const Form = ({ toggleFormEdit, role, department, location }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        role: "",
        department: "",
        location: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="role">Role: </label>
                    <input type="text" name="role" id="role" value={formData.role} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="department">Department: </label>
                    <input type="text" name="department" id="department" value={formData.department} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
};

export default Form; */