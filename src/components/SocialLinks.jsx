function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-10 text-white">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/17rvQc6BCw/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-neonGreen transition-colors hover:scale-110 transform duration-300"
        aria-label="Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@aaaimx"
        target="_blank"
        rel="noreferrer"
        className="hover:text-neonGreen transition-colors hover:scale-110 transform duration-300"
        aria-label="YouTube"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.087 0 12 0 12s0 3.913.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.913 24 12 24 12s0-3.913-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/roborage/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-neonGreen transition-colors hover:scale-110 transform duration-300"
        aria-label="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

    </div>
  );
}

export default SocialLinks;