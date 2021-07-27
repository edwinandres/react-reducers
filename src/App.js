import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';
import ShoppingCart from './components/ShoppingCart';
import CrudApi from './components/CrudApi';

function App() {
  return (
    <div className="App">
      <h1>Use Reducer</h1>
      <CrudApi/>
      <ShoppingCart/>
      <hr/>
      <ContadorMejorado/>
      <hr/>
      <Contador/>
    </div>
  );
}

export default App;
