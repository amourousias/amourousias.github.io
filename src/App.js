import Profile from './components/Profile.js'
import Header from './components/Header.js';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.scss';

function App() {
  return (
    <Container>
      <Header />
      <Profile />
    </Container>
  );
}

export default App;
