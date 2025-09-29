import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    // Mock role logic (replace with API call)
    if (email === 'admin@site.com' && password === 'admin') {
      navigate('/admin');
    } else if (email === 'trainee@site.com' && password === 'trainee') {
      navigate('/trainee');
    } else if (email === 'trainer@site.com' && password === 'trainer') {
      navigate('/trainer');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form  className='form' onSubmit={handleLogin}>
      <h2>Login</h2>
      <label htmlFor=""placeholder="Email">Email:</label>
      <input className='input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="" placeholder="Password">Password:</label>
      <input  className='input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button  className='button' type="submit">Login</button>
    </form>
  );
}

export default Login;