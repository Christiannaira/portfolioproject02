import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './page/home/Home';
import About from './page/about/About';
import Portfolio from './page/portfolio/Portfolio';
import Contact from './page/contact/Contact';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route index element={<Home />} />
          <Route path='about' element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
