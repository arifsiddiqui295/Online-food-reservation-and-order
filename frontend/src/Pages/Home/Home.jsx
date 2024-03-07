import React, { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection';
import About from '../../components/About';
import Qualities from '../../components/Qualities';
import Menu from '../../components/Menu';
import WhoAreWe from '../../components/WhoAreWe';
import Team from '../../components/Team';
import Login from '../../components/Login';
import Reservation from '../../components/Reservation';
import '/Users/lenovo/OneDrive/Desktop/mern/Restaurant_reservation/frontend/src/index.css'
const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
      const timeout = setTimeout(() => {
          setShowModal(true);
          console.log("Login form rendered!");
      }, 1000);

      return () => clearTimeout(timeout);
  }, [setShowModal]);

  const handleLoginClose = () => {
      setShowModal(false);
  };

  return (
    <div className='relative h-screen w-screen items-center justify-center'>
      {showModal && (
            <Login onClose={handleLoginClose} />
      )}
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
    </div>
  );
};
export default Home;
