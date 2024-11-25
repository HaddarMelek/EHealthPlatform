import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Admin from "./pages/admin/Admin";
import DoctorsManagement from "./pages/admin/DoctorsManagement";
import Analytics from "./pages/admin/Analytics";
import AddDoctor from "./pages/admin/addDoctor";

import { Doctors } from "./pages/Doctors";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MyProfile } from "./pages/MyProfile";
import { MyAppointments } from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import ViewDoctor from "./pages/admin/ViewDoctor.jsx";
import Appointments from "./pages/admin/Appointments.jsx";
import PatientsList from "./pages/admin/PatientsList.jsx";
import RevenuesPage from "./pages/admin/RevenuesPage.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appoitnments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/doctors" element={<DoctorsManagement />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/addDoctor" element={<AddDoctor />} />
        <Route path="/admin/viewDoctor/:docId" element={<ViewDoctor />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/PatientsList" element={<PatientsList />} />
        <Route path="/admin/revenues" element={<RevenuesPage />} />
      </Routes>
    </div>
  );
};

export default App;
