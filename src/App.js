import './App.css';
import Button from './components/button';
import Container from './components/Container';
import Input from './components/Input';
import Link from './components/link';

function App() {
  return (
      <Container>
        <Button className='register-btn' type='submit'>Register</Button>
        <Button className='login-btn' disabled="disabled" type='reset' id="loginButton">Login</Button>
        <Link className="clickme" href="http://google.com" target="_blank">click me</Link>
        <Input className="input" name="first-name" placeholder="Enter First Name" />
        <Input className="input" type="email" name="email" placeholder="Enter Email" />
      </Container>
  );
}

export default App;
