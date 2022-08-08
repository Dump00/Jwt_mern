import {useState} from 'react'
import './App.css';


const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registerUser = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = response.json()
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        </div>
        <div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" /> 
        </div>
        <div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </div>
        <button type="button">Register</button>
      </form>
    </div>
  );
}

export default App;
