import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import ListService from "./component/service/ListService";
import CreateService from "./component/service/CreateService";
import UpdateService from "./component/service/UpdateService";
import ListCustomer from "./component/customer/ListCustomer";
import CreateCustomer from "./component/customer/CreateCustomer";
import UpdateCustomer from "./component/customer/UpdateCustomer";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
