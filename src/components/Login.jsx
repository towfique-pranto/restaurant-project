import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = user.trim();
        if (!username || pass.length < 4) {
            setError("Enter a username and a password with at least 4 characters.");
            return;
        }

        localStorage.setItem("user", username);
        onLogin(username);
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded p-6 w-80 text-center">
                <h2 className="text-xl font-semibold mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={user}
                        onChange={(e) => {
                            setUser(e.target.value);
                            setError("");
                        }}
                        className="border w-full p-2 mb-3 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => {
                            setPass(e.target.value);
                            setError("");
                        }}
                        className="border w-full p-2 mb-3 rounded"
                    />
                    {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
                    <button
                        type="submit"
                        className="bg-green-600 text-white w-full p-2 rounded"
                    >
                        Login
                    </button>
                </form>

                <button
                    onClick={() => navigate("/")} // go back to home
                    className="mt-4 bg-gray-400 text-white w-full p-2 rounded"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Login;
