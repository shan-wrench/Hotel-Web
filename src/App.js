import React, { useState } from "react";
import Login from "./pages/login";  
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 


    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <>
            <div>
                <Router>                    
                        <>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/" element={<Home />} />
                                <Route path="/booking" element={<Booking />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/testimonial" element={<Testimonial />} />
                                <Route path="/about" element={<AboutUs />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/*" element={<PageNotFound />} />
                                <Route path="/rooms" element={<Room />} />
                                <Route path="/services" element={<Services />} />
                            </Routes>
                            <Footer />
                        </>                    
                </Router>
            </div>
        </>
    );
}
