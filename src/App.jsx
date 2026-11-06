import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Nav />
        <Routes><Route path="/" element={<Home />} /><Route path="*" element={<NotFound />} /></Routes>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </MotionConfig>
  )
}
