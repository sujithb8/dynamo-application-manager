import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import {CssBaseline,ThemeProvider} from '@mui/material'
import {theme} from './theme'
import {ToastContainer} from 'react-toastify'
import {ProSidebarProvider} from 'react-pro-sidebar'
import {  useSelector } from 'react-redux';
import Auth from './pages/Auth'
import { Documents } from './pages/Documents';
import Profile from './pages/Profile';
import Shortlist from './pages/Shortlist';
import Universities from './pages/Universities';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const isLoggedIn = useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <>
        <ToastContainer/>
        <ProSidebarProvider>
        <ThemeProvider theme={theme}>
        <CssBaseline/>   <BrowserRouter>
        <Navbar/>
        <div style={{minHeight:'550px',backgroundColor:'#f0f0f0'}}>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/universities' element={<Universities/>}/>
        <Route path='/shortlist' element={<Shortlist/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/documents' element={<Documents/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      </div>
            <Footer />
      </BrowserRouter>
      </ThemeProvider>
        </ProSidebarProvider>

    
   
    </>
  );
}

export default App;
