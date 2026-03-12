import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

const carouselImages = [
    'IMG_3522.JPG',
    'IMG_3528.JPG',
    'IMG_3550.JPG',
    'IMG_3552 (1).JPG',
    'IMG_4916.JPG',
    'IMG_4922.JPG',
    'IMG_4938.JPG',
    'IMG_4941.JPG',
    'IMG_4946.JPG',
    'IMG33 (1).jpeg'
];

function Home() {
    const { scrollYProgress } = useScroll();
    const navBgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 0.8]);
    const navBackdropBlur = useTransform(scrollYProgress, [0, 0.05], ['blur(0px)', 'blur(12px)']);
    const navBorderOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 0.3]);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Auto-scrolling carousel logic
    const carouselRef = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen text-white font-sans selection:bg-neonGreen selection:text-black bg-black">

            {/* Nav */}
            <motion.nav
                className="fixed w-full top-0 z-50 py-4 px-6 flex justify-between items-center transition-all duration-300"
                style={{
                    backgroundColor: useTransform(navBgOpacity, v => `rgba(0, 0, 0, ${v})`),
                    backdropFilter: navBackdropBlur,
                    borderBottom: useTransform(navBorderOpacity, v => `1px solid rgba(204, 255, 0, ${v})`)
                }}
            >
                {/* Logo parte superior izquierda */}
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img 
                            src="/images/Roboragepal.png" 
                            alt="ROBORAGE" 
                            className="h-16 md:h-20 w-auto object-contain cursor-pointer
                            transition-transform duration-300 hover:scale-110" 
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider text-gray-300">
                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-neonGreen transition-colors cursor-pointer">ACERCA DE</a>
                    <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-neonGreen transition-colors cursor-pointer">PREGUNTAS</a>
                    <Link to="/version-1.1" className="hover:text-neonGreen transition-colors cursor-pointer">VERSIÓN 1.1</Link>
                    <a href="#" className="bg-neonGreen text-black px-4 py-1 font-bold rounded-sm hover:brightness-110 transition-all cursor-not-allowed">REGISTRO</a>
                </div>
            </motion.nav>

            {/* Hero / About */}
            <section id="about" className="pt-32 pb-16 px-6 max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
                <img src="/images/img5.png" alt="Wolf Logo" className="w-40 md:w-56 h-auto object-contain mb-10 drop-shadow-[0_0_15px_rgba(204,255,0,0.4)]" />
                <h2 className="text-3xl md:text-4xl font-road-rage text-neonGreen mb-8 tracking-widest">¿Qué es ROBORAGE?</h2>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-mono tracking-wide">
                    RoboRage es un concurso de robótica organizado por la División de Robótica del capítulo estudiantil <span className="text-neonGreen font-bold">AAAIMX</span>, diseñado para impulsar el talento, la innovación y la competencia tecnológica entre estudiantes universitarios y de medio superior.
                </p>
            </section>

            {/* Last versions (Carousel) */}
            <section className="py-12 px-6 w-full relative z-10 text-center overflow-hidden">
                <h2 className="text-3xl md:text-4xl font-road-rage text-neonGreen mb-10 tracking-widest">Last versions</h2>
                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto pb-8 justify-start px-4 md:px-20 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {carouselImages.map((imgName, index) => (
                        <div key={index} className="min-w-[80vw] md:min-w-[400px] h-[250px] md:h-[300px] bg-white/5 border border-neonGreen/30 rounded-lg flex items-center justify-center snap-center flex-shrink-0 relative overflow-hidden group">
                            <img
                                src={`/images/carousel/${imgName}`}
                                alt={`Versión anterior ${index + 1}`}
                                className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-neonGreen font-mono text-sm px-4">Imagen no encontrada: ' + imgName + '</span>'; }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Categorías con Fondo Verde */}
            <section className="py-20 px-6 w-full relative z-10 flex flex-col items-center bg-neonGreen text-black transform -skew-y-2 my-10 border-y-4 border-vibrantPurple">
                <div className="transform skew-y-2 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-road-rage text-black mb-12 tracking-widest">Categorías</h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 w-full mb-12">
                        {/* Batalla de Robots */}
                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.25 4.5l7.5 7.5-1.5 1.5m-6-1.5l-4.5 4.5 4.5 4.5m4.5-4.5l-4.5 4.5m-4.5-4.5l-4.5-4.5 4.5-4.5m4.5-4.5L11.25 4.5z" />
                                    <path fillRule="evenodd" d="M3.75 3.75a1.5 1.5 0 012.121 0L19.5 17.379v3.029a1.5 1.5 0 01-2.121.5zm16.5 0a1.5 1.5 0 010 2.121l-10.5 10.5h-3.029a1.5 1.5 0 01.5-2.121L17.72 4.19a1.5 1.5 0 012.121-.44zM4.19 17.72l10.5-10.5m-10.5 10.5l-1.06 1.06a1.5 1.5 0 000 2.121 1.5 1.5 0 002.121 0l1.06-1.06m-5.181 3.06a1.5 1.5 0 002.12.5m-2.12-.5a1.5 1.5 0 01.5-2.12m0 0l2.12 2.12" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-mono font-bold text-black tracking-widest text-center">Batalla de<br />Robots</h3>
                        </div>

                        {/* Minisumo Máster */}
                        <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-black">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 8.766a1.25 1.25 0 011.838.318l1.615 2.5a1.25 1.25 0 01-2.102 1.356l-1.615-2.5a1.25 1.25 0 01.264-1.674zm5.176.318a1.25 1.25 0 011.838-.318l.264 1.674-1.615 2.5a1.25 1.25 0 01-2.102-1.356l1.615-2.5zM7.5 15.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    <path d="M4.5 10.5a3 3 0 110-6 3 3 0 010 6zm15 0a3 3 0 110-6 3 3 0 010 6z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-mono font-bold text-black tracking-widest text-center">Minisumo<br />Máster</h3>
                        </div>
                    </div>

                    <div className="mt-8 inline-block">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block relative group overflow-hidden px-10 py-4 
                            bg-black text-neonGreen font-road-rage text-2xl tracking-widest 
                            shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] 
                            border-2 border-black transition-all duration-300 backdrop-blur-sm 
                            w-full md:w-auto text-center"
                        >
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300 drop-shadow-md">
                                MUY PRONTO...
                            </span>

                            <div className="absolute inset-0 bg-neonGreen transform scale-x-0 
                            group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Live Streaming */}
            <section className="py-20 px-6 max-w-3xl mx-auto relative z-10 text-center flex flex-col items-center">
                <div className="flex items-center justify-center mb-6">
                    <span className="text-3xl md:text-5xl font-road-rage text-neonGreen tracking-widest italic mr-2">LIVE</span>
                    <svg className="w-10 h-10 text-neonGreen" viewBox="0 0 24 24" fill="currentColor">
                        <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                        <path d="M15.4137 11.1348C16.1954 11.5862 16.1954 12.4138 15.4137 12.8652L10.6698 15.5866C9.88812 16.038 9.38812 15.6241 9.38812 14.7214L9.38812 9.27865C9.38812 8.37596 9.88812 7.96198 10.6698 8.41341L15.4137 11.1348Z" />
                    </svg>
                </div>
                <div className="bg-vibrantPurple text-white px-6 py-1 mb-8 transform -skew-x-12 inline-block">
                    <span className="text-xl md:text-2xl font-road-rage tracking-widest italic transform skew-x-12 block">STREAMING</span>
                </div>
                <p className="text-sm md:text-base text-gray-300 font-mono leading-relaxed mt-4 max-w-xl">
                    Al participar en nuestra competencia nos brindas el permiso para el uso de tu imagen, todas nuestras competencias son transmitidas <span className="text-neonGreen font-bold">EN VIVO</span>, mediante FacebookLive.
                </p>
            </section>

            {/* Preguntas Frecuentes */}
            <section id="faq" className="py-20 px-6 max-w-4xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-road-rage text-neonGreen mb-12 tracking-widest text-center">Preguntas Frecuentes</h2>

                <div className="space-y-6">
                    <div className="border border-neonGreen bg-black/50 p-6">
                        <h3 className="text-neonGreen font-mono font-bold md:text-lg mb-4">¿La competencia es anual?</h3>
                        <p className="text-gray-300 font-mono text-sm md:text-base">
                            RoboRage es una competencia "semestral", es decir, tiene dos versiones al año. La primera de Ene-Jun y la segunda de Jul-Dic.
                        </p>
                    </div>

                    <div className="border border-neonGreen bg-black/50 p-6">
                        <h3 className="text-neonGreen font-mono font-bold md:text-lg mb-4">¿El costo de inscripción es por integrante?</h3>
                        <p className="text-gray-300 font-mono text-sm md:text-base">
                            No, el precio de inscripción es por robot. Si tienes 2 robots, deberás pagar la inscripción de cada robot en su respectiva categoría.
                        </p>
                    </div>

                    <div className="border border-neonGreen bg-black/50 p-6">
                        <h3 className="text-neonGreen font-mono font-bold md:text-lg mb-4">¿Qué medios oficiales de comunicación existen?</h3>
                        <p className="text-gray-300 font-mono text-sm md:text-base">
                            Contamos con un correo oficial: <a href="mailto:robotica@aaaimx.org" className="text-vibrantPurple underline">robotica@aaaimx.org</a>, así como redes oficiales en Facebook e Instagram.
                        </p>
                    </div>
                </div>
            </section>

            {/* Socials */}
            <section className="py-16 px-6 text-center relative z-10">
                <h2 className="text-2xl font-road-rage text-neonGreen mb-10 tracking-widest">
                    Síguenos
                </h2>
                <SocialLinks />
            </section>

            {/* Footer */}
            <footer className="border-t border-vibrantPurple/30 bg-black pt-12 pb-12 px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="flex justify-center flex-wrap items-center gap-12 opacity-80 pt-4 w-full">
                        <div className="flex flex-col items-center group cursor-pointer">
                            <img src="/images/img4.png" alt="ACM Logo" className="h-10 w-auto object-contain transition-opacity duration-300 hover:brightness-125" />
                        </div>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <img src="/images/img2.png" alt="Dragon Icon" className="h-12 w-auto object-contain transition-opacity duration-300 grayscale hover:grayscale-0 hover:brightness-125 saturate-200" style={{ filter: 'drop-shadow(0px 0px 5px rgba(255,255,255,0.2)) grayscale(100%) brightness(150%)' }} />
                        </div>
                        <div className="flex flex-col items-center group cursor-pointer">
                            <img src="/images/img3.png" alt="AAAIMX Logo" className="h-12 w-auto object-contain transition-opacity duration-300 hover:brightness-125" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
