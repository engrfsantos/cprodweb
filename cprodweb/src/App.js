import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Hello World!</h1>
      </header> 
      
      <body>
         <div>
            <h1>Controle de Produção</h1>
            <h2>Menu Principal</h2>
             <a href="./lancamento.html">Lançamento</a><br></br>
             <a href="./producoes.html">Producoes</a><br></br>
             <a href="./login.html">Login </a><br></br>
             <a href="./altsenha.html">Alterar Senha </a><br></br>
             <a href="./usuarios.html">Gerenciar Usuários </a><br></br>
             <a href="./cadprodutos.html">Cad. Produtos </a><br></br>
        </div>
      </body>
      
    </div> 
     
      
  );
}

export default App;
