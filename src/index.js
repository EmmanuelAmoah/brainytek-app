import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './header'
import Home from './home'
import Footer from './footer'
import Contact from './contact'
import About from './about'
import Services from './services'
import BookAppointment from './book_appointment';
import Privacy from './privacy_policy'
import TermsAndConditions from './terms_n_conditions';
  

function App(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/book_Appointment" element={<BookAppointment/>}/>
                <Route path='/privacy-policy' element={<Privacy/>}/>
                <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

