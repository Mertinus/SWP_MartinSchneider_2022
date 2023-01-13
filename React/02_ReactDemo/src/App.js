import logo from './logo.svg';
import './App.css';
import Button from "./components/Button.js";
import ButtonRow from './components/ButtonRow';
import List from './components/List';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <header className='header'>Liste</header>
      <List/>
      <header className='header'>Button</header>
      <Button/>
      <header className='header'>Card</header>
      <Card/>
      <ButtonRow/>
    </div>
  );
}

export default App;
