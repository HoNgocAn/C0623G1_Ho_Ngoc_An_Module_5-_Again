import logo from './logo.svg';
import './App.css';
import Blog from "./component/Blog";
import {Route, Routes} from "react-router-dom";
import CreateBlog from "./component/CreateBlog";
import EditBlog from "./component/EditBlog";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import BlogSaga from "./component/BlogSaga";
import CreateBlogSaga from "./component/CreateBlogSaga";
import Error from "./component/Error";

function App() {
  return (
    <div >
        <Routes>
            <Route path="/" element={<BlogSaga/>} />
            <Route path="/post" element={<Blog/>} />
            <Route path="/create" element={<CreateBlog/>}/>
            <Route path="/create-saga" element={<CreateBlogSaga/>}/>
            <Route path="/edit/:id" element={<EditBlog/>}/>
            <Route path="/edit" element={<EditBlog/>} />
            <Route path="/error" element={<Error/>} />
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
