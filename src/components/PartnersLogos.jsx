import React from "react";

const partners = [
  {
    src: "/images/img3.png",
    alt: "AAAIMX Logo",
    className: "h-8",
  },
  {
    src: "/images/Division_Logo.png",
    alt: "Dragon Icon",
    className: "h-12",
  },
  {
    src: "/images/maikronBlanco.png",
    alt: "Maikron Logo",
    className: "h-12",
  },
  {
    src: "/images/Logo_TecNM.png",
    alt: "TecNM Logo",
    className: "h-10 filter brightness-0 invert opacity-80",
  },
  {
    src: "/images/ITMBlanco.png",
    alt: "ITM Logo",
    className: "h-12",
  },
  {
    src: "/images/LabDatos.png",
    alt: "Lab Datos Logo",
    className: "h-14",
  },
  {
    src: "/images/ACM-ITM.png",
    alt: "ACM ITM LOGO",
    className: "h-10",
  },
  {
    src: "/images/aaai.png",
    alt: "AAAI Logo",
    className: "h-12 grayscale hover:grayscale-0 saturate-200",
    style: {
      filter: "drop-shadow(0px 0px 5px rgba(255,255,255,0.2)) grayscale(100%) brightness(150%)",
    },
  },
  {
    src: "/images/img4.png",
    alt: "ACM Logo",
    className: "h-12",
  },
];

function PartnersLogos() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <div className="flex justify-center flex-wrap items-center gap-12 opacity-80 pt-4 w-full">
        {partners.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`w-auto object-contain transition-opacity duration-300  ${logo.className}`}
              style={logo.style}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnersLogos;