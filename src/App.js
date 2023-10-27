// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/services/Services";

import Tracking from "./dashboard/Tracking/Tracking";
import TrackDetails from "./dashboard/TrackDetails/TrackDetails";
import Login from "./dashboard/Login/Login";

import { useAuthContext } from "./context/useAuthContext";
import TrackOrder from "./pages/TrackOrder";
import ContactList from "./dashboard/Contact/ContactList";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking/:id" element={<TrackOrder />} />
          <Route
            path="/admin-login"
            element={user ? <Tracking /> : <Login />}
          />
          <Route
            path="/admin-tracking"
            element={user ? <Tracking /> : <Login />}
          />
          <Route
            path="/admin-tracking-details/:id"
            element={user ? <TrackDetails /> : <Login />}
          />
          <Route
            path="/admin-contacts"
            element={user ? <ContactList /> : <Login />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
