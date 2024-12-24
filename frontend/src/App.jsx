import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Nav/Footer';
import Head from './components/Nav/Head';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ContactsUs from './Pages/ContactsUs';
import WorkWithUs from './Pages/WorkWithUs'; // Corrected name
import Register from './Pages/Register';
import LoginPage from './Pages/LoginPage';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Render Head for all routes except Home */}
      {location.pathname !== '/' && <Head />}
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactsUs />} />
          <Route path="/workwith-us" element={<WorkWithUs />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
