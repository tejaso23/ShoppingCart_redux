import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home"
import "./styles/App.scss"
import { Toast, Toaster } from "react-hot-toast";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      

      <Router>
        <Header></Header>
       <Routes>
        <Route element={<Home></Home> } path="/"></Route>
        <Route element={<Cart></Cart> } path="/cart"></Route>
        <Route element={<Home></Home> } path="/"></Route>
       </Routes>
<Toaster></Toaster>
      </Router>


      
    </div>
  );
}

export default App;
