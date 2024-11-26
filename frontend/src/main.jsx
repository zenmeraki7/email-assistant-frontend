
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>


)
