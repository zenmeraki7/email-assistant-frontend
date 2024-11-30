import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Nav/Footer';
import Header from './components/Nav/Header';
import Home from './Pages/Home';
import 'font-awesome/css/font-awesome.min.css';
import AboutUs from './Pages/AboutUs';
import ContactsUs from './Pages/ContactsUs';
import WorkeithUs from './Pages/WorkeithUs';
import Head from './components/Nav/Head.jsx';
// import Login from './Pages/Login.Jsx';
// import Register from './Pages/Register.jsx';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Head />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactsUs />} />
        <Route path="/workwith-us" element={<WorkeithUs />} />
        {/* <Route path="/log-in" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
