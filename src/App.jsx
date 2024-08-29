import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; 
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Generator from './pages/Generator';
import Results from './pages/Results';


function App() {
  return (
    <BrowserRouter>
      <Header>
        <Body>
          <Routes>
            <Route path="/" element={<Homepage />} /> 
          </Routes>
        </Body>
        <Routes>
          <Route path="/generator" element={<Generator />}/> 

          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </Header>
    </BrowserRouter>
  );
}

export default App;
