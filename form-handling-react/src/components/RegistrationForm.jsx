import { useState } from "react"

function RegistrationForm() {

  // STEP 1: Create state for form fields
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // STEP 2: Create state for errors
  const [errors, setErrors] = useState({})

  // STEP 3: Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault()

    const newErrors = {}

    // validation
    if (!username) newErrors.username = "Username is required"
    if (!email) newErrors.email = "Email is required"
    if (!password) newErrors.password = "Password is required"

    // if errors exist
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // simulate API request
    const userData = {
      username,
      email,
      password
    }

    console.log("User registered:", userData)

    alert("Registration successful!")

    // clear form
    setUsername("")
    setEmail("")
    setPassword("")
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Controlled Registration Form</h2>

      <div>
        <label>Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>

    </form>
  )
}

export default RegistrationForm
