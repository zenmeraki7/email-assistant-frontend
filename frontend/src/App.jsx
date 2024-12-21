import { Route, Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Nav/Footer';
import Home from './Pages/Home';
import 'font-awesome/css/font-awesome.min.css';
import AboutUs from './Pages/AboutUs';
import ContactsUs from './Pages/ContactsUs';
import WorkeithUs from './Pages/WorkeithUs';
import Head from './components/Nav/Head.jsx';
import Register from './Pages/Register.jsx';
import LoginPage from './Pages/LoginPage.jsx';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Head />}
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactsUs />} />
        <Route path="/workwith-us" element={<WorkeithUs />} />
        <Route path="/log-in" element={<LoginPage/>} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
