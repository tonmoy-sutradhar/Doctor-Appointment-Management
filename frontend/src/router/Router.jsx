import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/doctors" element={<Doctors></Doctors>}></Route>
        <Route
          path="/doctors/:id"
          element={<DoctorDetails></DoctorDetails>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
    </>
  );
}

export default Router;
