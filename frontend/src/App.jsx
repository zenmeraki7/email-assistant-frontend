
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/Nav/Footer';
import Header from './components/Nav/Header';
import Home from './Pages/Home'
import 'font-awesome/css/font-awesome.min.css';
import AboutUs from './Pages/AboutUs';
import ContactsUs from './Pages/ContactsUs';
import WorkeithUs from './Pages/WorkeithUs';


function App() {


  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactsUs/>}/>
        <Route path='/workwith-us' element={<WorkeithUs/>}/>
      </Routes>
      <Footer/>


    </>
  )
}

export default App
