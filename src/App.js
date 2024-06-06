import './App.css'
import Cabecalho from './componentes/Cabecalho';
import Entrar from './componentes/Entrar';
import Menu from './componentes/Menu';
import Login from './componentes/Login';

function App() {
  return (
    <div className="App"> 
       <Cabecalho></Cabecalho> 
       <Entrar></Entrar>
       <Menu></Menu>
       <Login></Login>
    </div>
  );  //as letras verdes indicam componente react
}

export default App;
