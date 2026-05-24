import React, { useEffect, useRef, useState } from "react";
import "./nav.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" }
];

const BOOKING = {
  treatwell: "https://www.treatwell.co.uk/place/aelius-makeovers-london/",
  whatsapp: "https://wa.me/447577578102",
  instagram: "https://instagram.com/aeliusmakeovers_london"
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const bookingRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (bookingRef.current && !bookingRef.current.contains(e.target)) {
        setBookingOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setBookingOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner container">
        {/* BRAND */}
        <a className="brand" href="#home" onClick={closeAll}>
          <span className="brand-dot" />
          <span className="brand-name">Aelius Hair &amp; Makeup</span>
          <span className="brand-tag">London</span>
        </a>

        {/* LINKS */}
        <nav className={`links ${menuOpen ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={closeAll}>
              {l.label}
            </a>
          ))}

          {/* MOBILE BOOKING */}
          <div className="booking-wrap mobile-only" ref={bookingRef}>
            <button
              type="button"
              className="booking-btn"
              onClick={() => setBookingOpen((v) => !v)}
            >
              Booking ▾
            </button>

            {bookingOpen && (
              <div className="dropdown">
                <a href={BOOKING.treatwell} target="_blank" rel="noreferrer">
                  Book on Treatwell
                </a>
                <a href={BOOKING.whatsapp} target="_blank" rel="noreferrer">
                  Book on WhatsApp
                </a>
                <a href={BOOKING.instagram} target="_blank" rel="noreferrer">
                  Book on Instagram
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT */}
        <div className="right">
          {/* DESKTOP BOOKING */}
          <div className="booking-wrap desktop-only" ref={bookingRef}>
            <button
              type="button"
              className="booking-btn primary"
              onClick={() => setBookingOpen((v) => !v)}
            >
              Booking ▾
            </button>

            {bookingOpen && (
              <div className="dropdown">
                <a href={BOOKING.treatwell} target="_blank" rel="noreferrer">
                  Book on Treatwell
                </a>
                <a href={BOOKING.whatsapp} target="_blank" rel="noreferrer">
                  Book on WhatsApp
                </a>
                <a href={BOOKING.instagram} target="_blank" rel="noreferrer">
                  Book on Instagram
                </a>
              </div>
            )}
          </div>

          {/* MENU */}
          <button
            className="menu"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
