import logo from './logo.svg';
import './App.css';
import Blog from "./component/Blog";
import {Route, Routes} from "react-router-dom";
import CreateBlog from "./component/CreateBlog";
import EditBlog from "./component/EditBlog";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div >
        <Routes>
            <Route path="/" element={<Blog/>} />
            <Route path="/create" element={<CreateBlog/>}/>
            <Route path="/edit/:id" element={<EditBlog/>}/>
            <Route path="/edit" element={<EditBlog/>} />
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
