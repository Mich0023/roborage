import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import PartnersLogos from '../components/PartnersLogos';
import Navbar from '../components/Navbar';

const EVENT_DATE = new Date('2026-04-29T00:00:00');

function Version11() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

    const [particles, setParticles] = useState([]);
    useEffect(() => {
        const newParticles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }));
        setParticles(newParticles);
    }, []);

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
    
    const versionLinks = [
        { label: "EDICIÓN", type: "scroll", target: "edition" },
        { label: "CATEGORÍAS", type: "scroll", target: "categories" },
        { label: "CONVOCATORIA", type: "scroll", target: "convocatoria" },
        { label: "REGISTRO", type: "button" }
    ];

    return (
        <div className="min-h-screen text-white font-sans selection:bg-neonGreen selection:text-black bg-black">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute bg-neonGreen rounded-full opacity-30 shadow-[0_0_8px_#CCFF00]"
                        style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
                        animate={{ y: [0, -100, 0], opacity: [0.1, 0.5, 0.1] }}
                        transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
                    />
                ))}
            </div>

            {/* Nav */}
            <motion.nav
                className="fixed w-full top-0 z-50 py-4 px-6 flex justify-between items-center transition-all duration-300"
                style={{
                    backgroundColor: useTransform(navBgOpacity, v => `rgba(0, 0, 0, ${v})`),
                    backdropFilter: navBackdropBlur,
                    borderBottom: useTransform(navBorderOpacity, v => `1px solid rgba(204, 255, 0, ${v})`)
                }}
            >
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
            </motion.nav>

            <Navbar
                    links={versionLinks}
                    scrollToSection={scrollToSection}
                    navBgOpacity={useTransform(navBgOpacity, v => `rgba(0,0,0,${v})`)}
                    navBackdropBlur={navBackdropBlur}
                    navBorderOpacity={useTransform(navBorderOpacity, v => `1px solid rgba(204,255,0,${v})`)}
            />

            {/* Hero */}
            <section className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0"></div>
                <div className="absolute -left-[20%] top-[20%] w-[50%] h-[50%] bg-[#9600FF] rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse z-0 pointer-events-none"></div>
                <div className="absolute -right-[20%] bottom-[10%] w-[50%] h-[50%] bg-[#9600FF] rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse z-0 pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center mt-[-10vh]"
                >
                    <motion.img
                        initial={{ y: 0 }}
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        src="/images/img5.png" alt="ROBORAGE 2026" className="w-[80%] max-w-md md:max-w-lg mb-8 drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                    />
                    <h2 className="text-5xl md:text-7xl mb-8 tracking-widest font-road-rage text-vibrantPurple drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" style={{ WebkitTextStroke: '2px #CCFF00' }}>
                        COMIENZA EN
                    </h2>

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
                </motion.div>
            </section>


            {/* Convocatoria */}
            <section id="convocatoria" className="scroll-mt-24 pt-32 pb-16 px-6 max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
                <motion.a
                    href={`${import.meta.env.BASE_URL}docs/convocatoria.pdf`}
                    download="Convocatoria_RoboRage_2026.pdf"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block relative group overflow-hidden px-10 py-4 bg-neonGreen/10 text-neonGreen font-road-rage text-2xl tracking-widest shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.8)] border-2 border-neonGreen transition-all duration-300 backdrop-blur-sm w-full md:w-auto text-center"
                >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 drop-shadow-md">
                        DESCARGAR CONVOCATORIA
                    </span>
                    <div className="absolute inset-0 bg-neonGreen transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                </motion.a>
            </section>   

            {/* Hero / About */}
            <section id="about" className="pt-32 pb-16 px-6 max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
                <h2 className="text-3xl md:text-4xl font-road-rage text-neonGreen mb-8 tracking-widest">¿Qué es ROBORAGE?</h2>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-mono tracking-wide">
                    RoboRage es un evento enfocado en enfrentamientos y combates controlados entre robots, dirigido a estudiantes de nivel superior y medio superior.
                </p>
            </section>

            {/* Sobre esta edición */}
            <motion.section
                id="edition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="scroll-mt-24 py-20 px-6 max-w-4xl mx-auto relative z-10 text-center"
            >
                <h2 className="text-3xl md:text-4xl font-road-rage text-neonGreen mb-8 tracking-widest">
                    SOBRE ESTA EDICIÓN
                </h2>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-mono tracking-wide mb-6">
                    La v.1.1 se llevará a cabo en el Instituto Tecnológico de Mérida, Campus Poniente, el 29 de abril de 2026. <br /><br />
                    Para esta versión presentamos nuevas modalidades dentro de las categorías RC, incluyendo Minisumo Máster y Batallas de Robots de 12 libras, ampliando las oportunidades de participación y elevando el nivel de desafío dentro del evento.
                </p>

                <p className="text-base md:text-lg text-neonGreen font-bold font-mono tracking-wide mb-12">
                    ¡Te esperamos para ser parte del inicio de RoboRage!
                </p>

                {/* Logos institucionales */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 opacity-80">

                    <img
                        src="/images/Logo_TecNM.png"
                        alt="Tecnológico Nacional de México"
                        className="h-20 md:h-24 object-contain filter brightness-0 invert transition-opacity duration-300 hover:opacity-100"
                    />

                    <img
                        src="/images/ITMBlanco.png"
                        alt="Instituto Tecnológico de Mérida"
                        className="h-24 md:h-28 object-contain"
                    />

                </div>

            </motion.section>

            {/* Location */}
            <motion.section
                id="location"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="py-20 px-6 max-w-4xl mx-auto relative z-10 flex flex-col items-center"
            >
                <div className="w-full text-left mb-12">
                    <h2 className="text-2xl md:text-3xl font-road-rage text-neonGreen mb-6 tracking-widest">FECHA</h2>
                    <div className="text-center font-mono">
                        <p className="text-gray-400 mb-4 text-sm tracking-widest">RoboRage v.1.1 te espera el:</p>
                        <p className="text-3xl md:text-4xl font-bold text-neonGreen tracking-widest">29 DE ABRIL DE 2026</p>
                        <p className="text-lg md:text-xl font-bold text-white tracking-widest mt-2">8:00 AM - 8:00 PM</p>
                    </div>
                </div>
                <div className="w-full text-left">
                    <h2 className="text-2xl md:text-3xl font-road-rage text-neonGreen mb-6 tracking-widest">LUGAR</h2>
                    <p className="text-m font-bold text-white text-center mb-8 tracking-widest">Biblioteca del Campus Poniente del Instituto Tecnológico de Mérida</p>

                    <div className="relative w-full max-w-2xl mx-auto">
                        <div className="absolute -inset-4 bg-white/10 filter blur-2xl rounded-full z-0 pointer-events-none"></div>
                        <div className="relative z-10 w-full aspect-[4/3] max-h-[400px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.4322198510386!2d-89.66642074372368!3d21.01270119024873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5674891d01315f%3A0xcb8ba96b39a6031c!2sInstituto%20Tecnol%C3%B3gico%20de%20M%C3%A9rida%2C%20Campus%20Poniente!5e0!3m2!1ses!2smx!4v1772686903439!5m2!1ses!2smx"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-sm opacity-90 transition-opacity hover:opacity-100"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Categories Section */}
            <section id="categories" className="scroll-mt-24 py-20 px-6 max-w-5xl mx-auto relative z-10 flex flex-col items-center">
                <motion.h2 className="text-3xl md:text-4xl font-road-rage text-neonGreen mb-16">CATEGORÍAS</motion.h2>

                <div className="w-full mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-road-rage text-white text-center mb-8 tracking-widest"
                    >
                        MINISUMO <span className="text-neonGreen">MÁSTER</span>
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(150,0,255,0.4)', borderColor: '#CCFF00' }}
                            transition={{ duration: 0.3 }}
                            className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full group"
                        >
                            <div>
                                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">AUTÓNOMO</h4>
                                <p className="text-sm font-mono text-gray-300 mb-6 text-center h-16">
                                    Robots completamente autónomos diseñados para detectar y empujar a su oponente fuera del dohyō.
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
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(150,0,255,0.4)', borderColor: '#CCFF00' }}
                            transition={{ duration: 0.3 }}
                            className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full group"
                        >
                            <div>
                                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">RC</h4>
                                <p className="text-sm font-mono text-gray-300 mb-6 text-center h-16">
                                    Robots controlados en tiempo real mediante sistemas inalámbricos.
                                </p>
                                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                                    <li>• Medidas iniciales: 10 x 10 cm</li>
                                    <li>• Altura: Libre</li>
                                    <li>• Peso máximo: 500 g</li>
                                    <li>• Operación completamente inalámbrica</li>
                                    <li>• Prohibidos mecanismos de adhesión o succión</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$200.00</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <h3 className="text-2xl font-road-rage text-white text-center tracking-widest">BATALLA DE <span className="text-neonGreen">ROBOTS</span></h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
                        <motion.div
                            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(150,0,255,0.4)', borderColor: '#CCFF00' }}
                            transition={{ duration: 0.3 }}
                            className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full group"
                        >
                            <div>
                                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">1LB</h4>
                                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                                    <li>• Peso Máximo: 500 gramos</li>
                                    <li>• 3 Integrantes</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$200.00</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(150,0,255,0.4)', borderColor: '#CCFF00' }}
                            transition={{ duration: 0.3 }}
                            className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full group"
                        >
                            <div>
                                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">3LB</h4>
                                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                                    <li>• Peso Máximo: 1500 gramos</li>
                                    <li>• 4 Integrantes</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$300.00</span>
                            </div>
                        </motion.div>
                    </div>

                    <div className="max-w-xs mx-auto">
                        <motion.div
                            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(150,0,255,0.4)', borderColor: '#CCFF00' }}
                            transition={{ duration: 0.3 }}
                            className="border border-vibrantPurple bg-black/40 p-6 md:p-8 rounded flex flex-col justify-between h-full group"
                        >
                            <div>
                                <h4 className="text-xl font-road-rage text-vibrantPurple text-center mb-6 tracking-widest">12LB</h4>
                                <ul className="text-xs md:text-sm font-mono text-neonGreen space-y-2 mb-8 list-none">
                                    <li>• Peso máximo: 5000 gramos</li>
                                    <li>• 4 integrantes</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <span className="text-2xl font-bold font-mono text-vibrantPurple drop-shadow-[0_0_8px_rgba(150,0,255,0.6)]">$400.00</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reglas y Registro Section */}
            <section id="rules" className="scroll-mt-24 py-20 px-6 max-w-4xl mx-auto z-10 relative flex flex-col md:flex-row items-center justify-center gap-8">
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block relative group overflow-hidden px-10 py-4 bg-vibrantPurple/20 text-white font-road-rage text-2xl tracking-widest shadow-[0_0_20px_rgba(150,0,255,0.3)] hover:shadow-[0_0_40px_rgba(150,0,255,0.8)] border-2 border-vibrantPurple transition-all duration-300 backdrop-blur-sm w-full md:w-auto text-center"
                >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 drop-shadow-md">REGISTRO: MUY PRONTO</span>
                    <div className="absolute inset-0 bg-vibrantPurple transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                </motion.a>
            </section>

            {/* Footer */}
            <footer className="border-t border-vibrantPurple/30 bg-black pt-16 pb-12 px-6 text-center relative z-10">
                <PartnersLogos />
            </footer>
        </div>
    );
}

export default Version11;
