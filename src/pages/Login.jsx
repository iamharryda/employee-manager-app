import { useState } from 'react';
import Button from '../components/Button';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Hardcoded credentials check
        if (username === 'sayeed' && password === '1234') {
            onLogin(); // Call the login callback passed as a prop
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login</h2>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </label>
            </div>
            <div style={{ marginTop: '10px' }}>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </label>
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button onClick={handleLogin} text="Login" />
            </div>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
    );
}
