import React, { useState } from "react";
import "./home.css";

const BOOK_WHATSAPP =
  "https://api.whatsapp.com/send?phone=447577578102";

const BOOK_INSTAGRAM =
  "https://instagram.com/aeliusmakeovers_london";

const EMAIL =
  "mailto:aeliusmakeovers@gmail.com";

const CONTACT_NUMBER =
  "+44 7577 578102";

const ADDRESS_LINE_1 =
  "40, Stanley Road, ILFORD";

const ADDRESS_LINE_2 =
  "IG1 1RJ, London, UK";

const MAP_QUERY =
  "40 Stanley Road ILFORD IG1 1RJ";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1400";

const services = [

  {
    title: "Threadings",
    from: "From £3",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200",

    subservices: [
      { name: "Upper Lip", price: "£3" },
      { name: "Chin", price: "£3" },
      { name: "Eyebrows", price: "£5" },
      { name: "Full Face", price: "£18" },
    ],
  },

  {
    title: "Waxings",
    from: "From £5",
    img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200",

    subservices: [
      { name: "Underarms", price: "£10" },
      { name: "Full Arms", price: "£15" },
      { name: "Bikini", price: "£20" },
      { name: "Full Body", price: "£45" },
    ],
  },

  {
    title: "Facials",
    from: "From £20",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200",

    subservices: [
      { name: "Classic Facial", price: "£20" },
      { name: "Brightening Facial", price: "£30" },
      { name: "Anti Aging Facial", price: "£45" },
      { name: "Collagen Facial", price: "£50" },
    ],
  },

  {
    title: "Hair Services",
    from: "From £10",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200",

    subservices: [
      { name: "Hair Trim", price: "£10" },
      { name: "Hair Spa", price: "£35" },
      { name: "Hair Smoothening", price: "£150" },
      { name: "Hair Coloring", price: "£45" },
    ],
  },

  {
    title: "Massages",
    from: "From £30",
    img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200",

    subservices: [
      { name: "Head Massage", price: "£30" },
      { name: "Swedish Massage", price: "£55" },
      { name: "Deep Tissue", price: "£70" },
      { name: "Luxury Organic", price: "£90" },
    ],
  },

  {
    title: "Makeovers",
    from: "From £40",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200",

    subservices: [
      { name: "Soft Glam", price: "£45" },
      { name: "Party Makeup", price: "£60" },
      { name: "Bridal Hair", price: "£120" },
      { name: "Bride Luxe", price: "£150" },
    ],
  },
];

function Icon({ name }) {

  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6L13 5z"
        />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2z"
        />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
        />
      </svg>
    );
  }

  return null;
}

export default function Home() {

  const [activeService, setActiveService] =
    useState(null);

  const mapEmbed =
    `https://www.google.com/maps?q=${encodeURIComponent(
      MAP_QUERY
    )}&output=embed`;

  const openMap =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      MAP_QUERY
    )}`;

  return (

    <div className="container">

      {/* HERO */}

      <section className="hero card">

        <div className="hero-left">

          <span className="badge">
            Aelius Hair & Makeup
          </span>

          <h1 className="hero-title">
            Where Beauty
            <br />
            Meets Excellence
          </h1>

          <p className="hero-sub">
            Luxury beauty, bridal makeup and
            professional hair styling in London.
          </p>

          <div className="hero-actions">

            <a
              className="btn btn-primary"
              href="#services"
            >
              Explore Services
            </a>

          </div>

          <div className="hero-icons">

            <a
              className="iconPill"
              href={BOOK_WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" />
            </a>

            <a
              className="iconPill"
              href={BOOK_INSTAGRAM}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="instagram" />
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-media">

            <img
              className="hero-photo"
              src={HERO_IMAGE}
              alt="Beauty Services"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="section"
      >

        <h2 className="section-title">
          Our Luxury Services
        </h2>

        <div className="grid service-grid">

          {services.map((s) => (

            <article
              key={s.title}
              className="card service-card"
            >

              <div className="service-media">

                <img
                  className="service-img"
                  src={s.img}
                  alt={s.title}
                />

              </div>

              <div className="service-body">

                <h3 className="service-title">
                  {s.title}
                </h3>

                <div className="service-bottom">

                  <span className="pill">
                    {s.from}
                  </span>

                  <button
                    className="service-book"
                    onClick={() =>
                      setActiveService(
                        activeService === s.title
                          ? null
                          : s.title
                      )
                    }
                  >
                    {activeService === s.title
                      ? "Hide"
                      : "View"}
                  </button>

                </div>

                {activeService === s.title && (

                  <div className="service-dropdown">

                    {s.subservices.map((item) => (

                      <div
                        className="dropdown-item"
                        key={item.name}
                      >

                        <div>

                          <h4>
                            {item.name}
                          </h4>

                          <p>
                            {item.price}
                          </p>

                        </div>

                        <a
                          href={`https://api.whatsapp.com/send?phone=447577578102&text=${encodeURIComponent(
                            `Hello, I would like to book ${item.name} (${item.price})`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mini-book-btn"
                        >
                          Book
                        </a>

                      </div>
                    ))}

                  </div>
                )}

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section className="section">

        <div className="card contactCard">

          <h2 className="section-title">
            Contact
          </h2>

          <div className="contactSimple">

            <a
              className="contactItem"
              href={BOOK_WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              className="contactItem"
              href={BOOK_INSTAGRAM}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              className="contactItem"
              href={EMAIL}
            >
              Email
            </a>

            <div className="contactItem">
              {CONTACT_NUMBER}
            </div>

            <div className="contactItem">
              {ADDRESS_LINE_1},
              <br />
              {ADDRESS_LINE_2}
            </div>

          </div>

        </div>

      </section>

      {/* LOCATION */}

      <section className="section">

        <div className="card locationSingle">

          <div className="locationTop">

            <h2 className="section-title">
              Location
            </h2>

            <a
              className="btn btn-primary"
              href={openMap}
              target="_blank"
              rel="noreferrer"
            >
              Open Map
              <Icon name="arrow" />
            </a>

          </div>

          <div className="map-frame">

            <iframe
              title="Map"
              loading="lazy"
              allowFullScreen
              src={mapEmbed}
            />

          </div>

        </div>

      </section>

    </div>
  );
}