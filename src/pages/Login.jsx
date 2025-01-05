import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showCredentials, setShowCredentials] = useState(false); // New state for hover effect
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "sayeed" && password === "1234") {
            navigate("/list");
        } else {
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
                {error && <p className="error">{error}</p>}

                {/* Hover div to show login credentials */}
                <div
                    className="hover-container"
                    onMouseEnter={() => setShowCredentials(true)}
                    onMouseLeave={() => setShowCredentials(false)}
                >
                    <p className="hover-text">Want to login?</p>
                    {showCredentials && (
                        <div className="credentials-box">
                            <p><strong>Username:</strong> sayeed</p>
                            <p><strong>Password:</strong> 1234</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
