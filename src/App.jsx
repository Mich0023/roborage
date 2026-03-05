import React, { useState, useEffect } from 'react';
import './index.css';

const EVENT_DATE = new Date('2026-04-29T00:00:00');

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = EVENT_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen text-white font-sans selection:bg-neonGreen selection:text-black">

      {/* Navbar / Header Placeholder */}
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neonGreen/30 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/images/img5.png" alt="ROBORAGE" className="h-8 md:h-10 w-auto object-contain" />
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold tracking-wider text-gray-300">
          <a href="#about" className="hover:text-neonGreen transition-colors">ABOUT</a>
          <a href="#categories" className="hover:text-neonGreen transition-colors">CATEGORÍAS</a>
          <a href="#location" className="hover:text-neonGreen transition-colors">UBICACIÓN</a>
        </div>
      </nav>

      {/* Hero Section with Countdown */}
      <section className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative Grid Overlay / Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>
        {/* Purple Glowing Orbs for the atmospheric sweeps */}
        <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-[#9600FF] rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse z-0 pointer-events-none"></div>
        <div className="absolute -right-[20%] bottom-[10%] w-[50%] h-[50%] bg-[#9600FF] rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse z-0 pointer-events-none"></div>

        <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center mt-[-10vh]">
          <img src="/images/img5.png" alt="ROBORAGE 2026" className="w-[80%] max-w-md md:max-w-lg mb-8 drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]" />
          <h1 className="sr-only">ROBORAGE 2026</h1>

          <h2 className="text-5xl md:text-7xl mb-8 tracking-widest font-road-rage text-vibrantPurple drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" style={{ WebkitTextStroke: '2px #CCFF00' }}>
            COMIENZA EN
          </h2>

          {/* Horizontal Countdown */}
          <div className="flex justify-center items-center font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-widest">

            <div className="flex flex-col items-center">
              <span>{formatNumber(timeLeft.days)}</span>
              <span className="text-xs md:text-sm text-gray-400 mt-2 font-sans tracking-normal font-normal lowercase">días</span>
            </div>

            <span className="mx-2 md:mx-4 -mt-6 animate-pulse">:</span>

            <div className="flex flex-col items-center">
              <span>{formatNumber(timeLeft.hours)}</span>
              <span className="text-xs md:text-sm text-gray-400 mt-2 font-sans tracking-normal font-normal lowercase">horas</span>
            </div>

            <span className="mx-2 md:mx-4 -mt-6 animate-pulse">:</span>

            <div className="flex flex-col items-center">
              <span>{formatNumber(timeLeft.minutes)}</span>
              <span className="text-xs md:text-sm text-gray-400 mt-2 font-sans tracking-normal font-normal lowercase">minutos</span>
            </div>

            <span className="mx-2 md:mx-4 -mt-6 animate-pulse text-gray-500">:</span>

            <div className="flex flex-col items-center">
              <span className="text-gray-300">{formatNumber(timeLeft.seconds)}</span>
              <span className="text-xs md:text-sm text-gray-400 mt-2 font-sans tracking-normal font-normal lowercase">segundos</span>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-road-rage text-neonGreen mb-8 tracking-widest">ABOUT US</h2>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed font-mono tracking-wide">
          RoboRage es un concurso de robótica organizado por la división de robótica del capítulo estudiantil AAAIMX, diseñado para impulsar el talento, la innovación y la competencia tecnológica entre estudiantes universitarios y de nivel superior.
        </p>
      </section>

      {/* Date & Location Section */}
      <section id="location" className="py-20 px-6 max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full text-left mb-12">
          <h2 className="text-2xl md:text-3xl font-road-rage text-neonGreen mb-6 tracking-widest">FECHA</h2>
          <div className="text-center font-mono">
            <p className="text-gray-400 mb-4 text-sm tracking-widest">RoboRage v.1.1 te espera el:</p>
            <p className="text-3xl md:text-4xl font-bold text-neonGreen tracking-widest">29 DE ABRIL DE 2026</p>
          </div>
        </div>

        <div className="w-full text-left">
          <h2 className="text-2xl md:text-3xl font-road-rage text-neonGreen mb-6 tracking-widest">LUGAR</h2>
          <p className="text-center font-mono text-gray-400 mb-8 text-sm tracking-widest">en:</p>

          {/* Subtle glow behind map */}
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute -inset-4 bg-white/10 filter blur-2xl rounded-full z-0 pointer-events-none"></div>
            <div className="relative z-10 w-full aspect-[4/3] max-h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.4322198510386!2d-89.66642074372368!3d21.01270119024873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5674891d01315f%3A0xcb8ba96b39a6031c!2sInstituto%20Tecnol%C3%B3gico%20de%20M%C3%A9rida%2C%20Campus%20Poniente!5e0!3m2!1ses!2smx!4v1772686903439!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm opacity-90 transition-opacity hover:opacity-100"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-6 max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-road-rage text-neonGreen tracking-widest mb-16">
          CATEGORÍAS
        </h2>

        {/* Minisumo Container */}
        <div className="w-full mb-16">
          <h3 className="text-2xl font-road-rage text-white text-center mb-8 tracking-widest">MINISUMO SENIOR</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Autónomo */}
            <div className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">AUTÓNOMO</h4>
                <p className="text-sm font-mono text-gray-300 mb-6 text-center">
                  Robot completamente autónomo diseñado para detectar y empujar a su oponente fuera del dohyo.
                </p>
                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                  <li>• Medidas iniciales: 10 x 10 cm</li>
                  <li>• Altura: Libre</li>
                  <li>• Peso máximo: 500 g</li>
                  <li>• Inicio con módulo de arranque</li>
                  <li>• Activación inmediata</li>
                </ul>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$200.00</span>
              </div>
            </div>

            {/* RC */}
            <div className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">RC</h4>
                <p className="text-sm font-mono text-gray-300 mb-6 text-center">
                  Robot controlado en tiempo real mediante sistemas inalámbricos.
                </p>
                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                  <li>• Medidas iniciales: 10 x 10 cm</li>
                  <li>• Altura: Libre</li>
                  <li>• Peso máximo: 500 g</li>
                  <li>• Operador oculta antena inalámbrica</li>
                  <li>• Prohibidos mecanismos de adhesión o succión</li>
                </ul>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$200.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="w-full max-w-3xl h-[2px] bg-neonGreen/80 shadow-[0_0_10px_rgba(204,255,0,0.5)] mb-16"></div>

        {/* Batalla de Robots Container */}
        <div className="w-full">
          <h3 className="text-2xl font-road-rage text-white text-center mb-8 tracking-widest">BATALLA DE ROBOTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
            {/* 1LB */}
            <div className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">1LB</h4>
                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                  <li>• Peso máximo: 500 gramos</li>
                  <li>• 3 integrantes</li>
                </ul>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$200.00</span>
              </div>
            </div>

            {/* 3LB */}
            <div className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">3LB</h4>
                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                  <li>• Peso máximo: 1360 gramos</li>
                  <li>• 4 integrantes</li>
                </ul>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$300.00</span>
              </div>
            </div>
          </div>

          {/* 12LB centered */}
          <div className="max-w-xs mx-auto">
            <div className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">12LB</h4>
                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                  <li>• Peso máximo: 5440 gramos</li>
                  <li>• 5 integrantes</li>
                </ul>
              </div>
              <div className="text-center">
                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$400.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer & CTA */}
      <footer className="mt-20 border-t border-vibrantPurple/30 bg-black pt-16 pb-8 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          <button className="relative group overflow-hidden px-10 py-3 mb-20 bg-neonGreen text-black font-road-rage text-2xl tracking-widest shadow-[0_0_15px_rgba(204,255,0,0.6)] hover:bg-black hover:text-neonGreen border border-neonGreen transition-all duration-300">
            <span className="relative z-10">DESCARGAR REGLAMENTO</span>
          </button>

          <div className="flex justify-center flex-wrap items-center gap-12 opacity-80 mb-8 border-t border-gray-800 pt-8 w-full">
            <div className="flex flex-col items-center group cursor-pointer">
              <img src="/images/img4.png" alt="ACM Logo" className="w-16 h-auto object-contain transition-opacity duration-300 hover:brightness-125" />
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <img src="/images/img2.png" alt="Dragon Icon" className="w-20 h-auto object-contain transition-opacity duration-300 grayscale hover:grayscale-0 object-contain hover:brightness-125 saturate-200" style={{ filter: 'drop-shadow(0px 0px 5px rgba(255,255,255,0.2)) grayscale(100%) brightness(150%)' }} />
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <img src="/images/img3.png" alt="AAAIMX Logo" className="w-24 h-auto object-contain transition-opacity duration-300 hover:brightness-125" />
            </div>
            {/* Using a placeholder for the fourth A-like logo shown in image if we don't have it, or reusing AAAIMX as there are 3 distinct ones in the prompt but 4 in image */}
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;
