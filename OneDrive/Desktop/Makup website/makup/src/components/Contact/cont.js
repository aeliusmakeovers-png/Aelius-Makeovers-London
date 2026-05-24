import React from "react";
import "./foot.css";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="container footer-grid">

        {/* BRAND */}

        <div>

          <div className="footer-brand">

            <span className="footer-dot" />

            <div>

              <div className="footer-title">
                Aelius Hair &amp; Makeup
              </div>

              <div className="footer-sub">
                Luxury beauty treatments • London
              </div>

            </div>

          </div>

          <p className="footer-text">
            Bridal makeup, luxury facials, hair styling,
            soft glam and premium beauty treatments
            tailored to your perfect look.
          </p>

        </div>

        {/* LOCATION */}

        <div>

          <div className="footer-head">
            Location
          </div>

          <p className="footer-text">
            12 Swindow Close,
            <br />
            Seven Kings, Ilford,
            <br />
            IG3 8BQ,
            <br />
            London, UK
          </p>

        </div>

        {/* CONTACT */}

        <div>

          <div className="footer-head">
            Contact
          </div>

          <p className="footer-text">
            447577578102
          </p>

          <p className="footer-text">
            @aeliusmakeovers_london
          </p>

          <p className="footer-text">
            aeliusmakeovers@gmail.com
          </p>

        </div>

        {/* BOOKING */}

        <div>

          <div className="footer-head">
            Booking
          </div>

          <a
            className="footer-link"
            href="https://www.treatwell.co.uk/place/aelius-makeovers-london/"
            target="_blank"
            rel="noreferrer"
          >
            Treatwell →
          </a>

          <a
            className="footer-link"
            href="https://api.whatsapp.com/send?phone=447577578102"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp →
          </a>

          <a
            className="footer-link"
            href="https://instagram.com/aeliusmakeovers_london"
            target="_blank"
            rel="noreferrer"
          >
            Instagram →
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="container footer-bottom">

        © {new Date().getFullYear()}
        {" "}
        Aelius Hair &amp; Makeup.
        All rights reserved.

      </div>

    </footer>
  );
}