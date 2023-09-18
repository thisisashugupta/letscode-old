import React, { useState } from "react";

function SignupPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect or display a success message
      } else {
        // Handle errors, e.g., display an error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupPage;
