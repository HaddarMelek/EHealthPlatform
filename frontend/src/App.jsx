
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from "./pages/admin/Admin";
import DoctorsManagement from "./pages/admin/DoctorsManagement"; 
import PatientsManagement from "./pages/admin/PatientsManagement"; 
import Analytics from "./pages/admin/Analytics";
import { Doctors } from './pages/Doctors';
import { Login } from './pages/Login';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { MyProfile } from './pages/MyProfile';
import { MyAppointments } from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div >
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/doctors' element={ <Doctors/> } />
          <Route path='/doctors/:speciality' element={ <Doctors/> } />
          <Route path='/login' element={ <Login/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/contact' element={ <Contact/>} />
          <Route path='/my-profile' element={ <MyProfile/>} />
          <Route path='/my-appoitnments' element={ <MyAppointments/>} />
          <Route path='/appointment/:docId' element={ <Appointment/> } />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/doctors" element={<DoctorsManagement />} />
          <Route path="/admin/patients" element={<PatientsManagement />} />
          <Route path="/admin/analytics" element={<Analytics />} />
       </Routes>
    </div>
  );
};

export default App;