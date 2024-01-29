import {Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import {Toaster} from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminLayout from './pages/admin/AdminLayout';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/blog/:slug" element={<ArticleDetailPage/>}/>
        <Route index path="/register" element={<RegisterPage/>}/>
        <Route index path="/login" element={<LoginPage/>}/>
        <Route index path="/profile" element={<ProfilePage/>}/>
        <Route index path="/admin" element={<AdminLayout/>}/>
      </Routes>
      <Toaster/>
      </div>
  );
}

export default App;
