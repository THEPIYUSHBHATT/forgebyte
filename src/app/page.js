import Image from "next/image";
// import { Routes, Route } from 'react-router-dom'
// import { Suspense, lazy } from 'react'
import Header from "@/components/Header2";
import Footer from '@/components/Footer';
import LandingPage from "@/components/Landing_page";

// Lazy loading the pages
// const Home = lazy(() => import('./pages/Home'));
// const Collection = lazy(() => import('./pages/Collection'));
// const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));
// const Product = lazy(() => import('./pages/Product'));
// const Cart = lazy(() => import('./pages/Cart'));
// const Login = lazy(() => import('./pages/Login'));
// const PlaceOrder = lazy(() => import('./pages/PlaceOrder'));
// const Orders = lazy(() => import('./pages/Orders'));
// const Verify = lazy(() => import('./pages/Verify'));

export default function Home() {
  return (
    <>
      <Header />

      <LandingPage />
      {/* Suspense with a fallback */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path='/orders' element={<Orders />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
      </Suspense> */}
      {/* <main className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main> */}

      <Footer />

    </>
  );
}
