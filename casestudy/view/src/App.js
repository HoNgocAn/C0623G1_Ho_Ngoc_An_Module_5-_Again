
import './App.css';
import ListService from "./component/service/ListService";
import CreateService from "./component/service/CreateService";
import UpdateService from "./component/service/UpdateService";
import ListCustomer from "./component/customer/ListCustomer";
import CreateCustomer from "./component/customer/CreateCustomer";
import UpdateCustomer from "./component/customer/UpdateCustomer";
import Home from "./component/Home";
import ListContract from "./component/contract/ListContract";
import CreateContract from "./component/contract/CreateContract";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/customer" element={<ListCustomer/>} />
            <Route path="/service" element={<ListService/>} />
            <Route path="/contract" element={<ListContract />} />
            <Route path="/customer-create" element={<CreateCustomer/>} />
            <Route path="/customer-update" element={<UpdateCustomer/>} />
            <Route path="/service-create" element={<CreateService/>} />
            <Route path="/contract-create" element={<CreateContract/>} />
            <Route path="/customer-update/:id" element={<UpdateCustomer/>}/>
            <Route path="/service-update/:id" element={<UpdateService/>}/>
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
