import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/create' element={<CreatePost />} />
        <Route path='/posts/edit/:id' element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
