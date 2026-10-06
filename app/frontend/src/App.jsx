import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BuyData from './pages/BuyData'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import DeleteAccount from './pages/DeleteAccount'
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy-data" element={<BuyData />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
