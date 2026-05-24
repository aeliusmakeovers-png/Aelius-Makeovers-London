import React from "react";
import "./gallery.css";

const photos = [
  {
    title: "Soft Glam",
    src: "https://source.unsplash.com/1200x900/?makeup,portrait,glam",
    alt: "Soft glam makeup look"
  },
  {
    title: "Bridal Makeup",
    src: "https://source.unsplash.com/1200x900/?bridal,makeup,wedding",
    alt: "Bridal makeup look"
  },
  {
    title: "Hair Styling",
    src: "https://source.unsplash.com/1200x900/?hairstyle,bridal,hair",
    alt: "Hair styling"
  },
  {
    title: "Skincare Treatment",
    src: "https://source.unsplash.com/1200x900/?facial,skincare,spa",
    alt: "Skincare and facial treatment"
  },
  {
    title: "Classic Beauty",
    src: "https://source.unsplash.com/1200x900/?beauty,model,makeup",
    alt: "Classic beauty makeup"
  },
  {
    title: "Natural Look",
    src: "https://source.unsplash.com/1200x900/?natural,makeup,beauty",
    alt: "Natural makeup look"
  },
  {
    title: "Party Glam",
    src: "https://source.unsplash.com/1200x900/?party,makeup,glamour",
    alt: "Party glam makeup"
  },
  {
    title: "Bridal Hair",
    src: "https://source.unsplash.com/1200x900/?wedding,hair,braid",
    alt: "Bridal hair styling"
  },
  {
    title: "Spa Vibes",
    src: "https://source.unsplash.com/1200x900/?spa,relax,beauty",
    alt: "Spa and wellness"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="container">
      <div className="galleryHead">
        <h2 className="section-title">Gallery</h2>
        <p className="section-sub">
          A glimpse of our work — makeup, hair styling, bridal looks and skincare.
        </p>
      </div>

      <div className="galleryGrid">
        {photos.map((p, i) => (
          <figure className="gCard" key={i}>
            <img
              className="gImg"
              src={p.src}
              alt={p.alt}
              loading="lazy"
            />
            <figcaption className="gCap">
              <div className="gTitle">{p.title}</div>
              <div className="gTag">Aelius Makeovers London</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
