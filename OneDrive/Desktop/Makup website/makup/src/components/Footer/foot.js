import React from "react";
import "./foot.css";

const BOOK_TREATWELL = "https://www.treatwell.co.uk/place/aelius-makeovers-london/";
const BOOK_WHATSAPP = "https://wa.me/447577578102";
const BOOK_INSTAGRAM = "https://instagram.com/aeliusmakeovers_london";
const EMAIL = "mailto:aeliusmakeovers@gmail.com";

const MAP_EMBED =
  "https://www.google.com/maps?q=40%20Stanley%20Rd,%20IG11%201RJ&output=embed";

const MAP_OPEN =
  "https://www.google.com/maps/search/?api=1&query=40+Stanley+Rd+IG11+1RJ";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        {/* Brand / About */}
        <div className="f-col">
          <div className="f-brand">
            <span className="f-dot" />
            <div>
              <div className="f-title">Aelius Hair &amp; Makeup</div>
              <div className="f-sub">Luxury beauty treatments • London</div>
            </div>
          </div>

          <p className="f-text">
            Bridal makeup, soft glam, skincare and professional hair styling tailored to your look.
          </p>

          {/* Icon row */}
          <div className="f-icons" aria-label="Social links">
            <a className="iconBtn" href={BOOK_INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-2.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"/>
              </svg>
            </a>

            <a className="iconBtn" href={BOOK_WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20zm4.6-5.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.6.7-.7.8-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1.1-.6-.6-1.1-1.4-1.2-1.6-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3.1-.1.1-.2 0-.4-.1-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.3c.1.2 1.6 2.4 3.9 3.4.5.2.9.3 1.2.4.5.2 1 .1 1.3.1.4-.1 1.2-.5 1.3-.9.2-.4.2-.8.1-.9-.1-.1-.2-.1-.4-.2z"/>
              </svg>
            </a>

            <a className="iconBtn" href={EMAIL} aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

            <a className="iconBtn" href={MAP_OPEN} target="_blank" rel="noreferrer" aria-label="Open in Google Maps">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Booking */}
        <div className="f-col">
          <div className="f-head">Booking</div>

          <a className="f-book" href={BOOK_TREATWELL} target="_blank" rel="noreferrer">
            Book on Treatwell <span aria-hidden="true">→</span>
          </a>

          <p className="f-text small">
            Live availability, prices and timings on Treatwell.
          </p>

          <div className="f-miniLinks">
            <a href="#services">Services</a>
            <span className="sep">•</span>
            <a href="#gallery">Gallery</a>
            <span className="sep">•</span>
            <a href="#location">Location</a>
            <span className="sep">•</span>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Opening times */}
        <div className="f-col">
          <div className="f-head">Opening Times</div>

          <ul className="hours">
            <li><span>Mon</span><span>10:00 – 19:00</span></li>
            <li><span>Tue</span><span>10:00 – 19:00</span></li>
            <li><span>Wed</span><span>10:00 – 19:00</span></li>
            <li><span>Thu</span><span>10:00 – 19:00</span></li>
            <li><span>Fri</span><span>10:00 – 19:00</span></li>
            <li><span>Sat</span><span>09:00 – 20:00</span></li>
            <li><span>Sun</span><span>Closed</span></li>
          </ul>
        </div>

        {/* Location + Map */}
        <div className="f-col">
          <div className="f-head">Location</div>

          <div className="locRow">
            <span className="locIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
              </svg>
            </span>

            <div>
              <div className="locTitle">40 Stanley Rd</div>
              <div className="locSub">IG11 1RJ • London, UK</div>
            </div>
          </div>

          <a className="mapLink" href={MAP_OPEN} target="_blank" rel="noreferrer">
            Open Map →
          </a>

          <div className="footerMap">
            <iframe
              title="Aelius Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={MAP_EMBED}
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aelius Hair &amp; Makeup. All rights reserved.
      </div>
    </footer>
  );
}
