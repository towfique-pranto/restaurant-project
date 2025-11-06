import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === "admin" && pass === "1234") {
            localStorage.setItem("user", user);
            onLogin(user);      // update App state
            navigate("/");      // redirect to homepage
        } else {
            alert("Invalid username or password");
        }
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
                        onChange={(e) => setUser(e.target.value)}
                        className="border w-full p-2 mb-3 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className="border w-full p-2 mb-3 rounded"
                    />
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
