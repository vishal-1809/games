import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Myinfo from "./MyComponents/Myinfo";
import Calculator from "./MyComponents/Calculator";
import Convertor from "./MyComponents/Convertor";
import Tictactoe from "./MyComponents/Tictactoe";
import Memory from "./MyComponents/Memory";
import Footer from "./MyComponents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    <>
      <Router>
        <Header />
        <Switch>
          <Route
            exact path="/"
            render={()=>{
              return (
                <>
                  <Myinfo />
                </>
              )
            }}
          
          >
          </Route>
          <Route exact path="/calculator">
            <Calculator />
          </Route>
          <Route exact path="/convertor">
            <Convertor />
          </Route>
          <Route exact path="/tic">
            <Tictactoe />
          </Route>
          <Route exact path="/memory">
            <Memory />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>





  );
}

export default App;
