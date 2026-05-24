import React, { useState } from "react";
import "./services.css";

const WHATSAPP = "https://wa.me/44757578102";

const PLACEHOLDER =
  "https://images.squarespace-cdn.com/content/v1/5366a336e4b0d727dcd0c9d2/1571850319104-ZPXJVGAEVT3YKJQW4RKB/ke17ZwdGBToddI8pDm48kKaCGyJkFXRmxRE7GyBPsxIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcdMQSebvaVoIiVoMvTKRRFVd-hEHjms_FAXw-VPCphwiIay8beCdfImv-2EE0K3To/How-To-Become-a-Successful-Makeup-Artist-nina-mua.jpg";

const services = [

  {
    category: "THREADINGS",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200",
    items: [
      { name: "Upper Lip", price: "£3" },
      { name: "Chin", price: "£3" },
      { name: "Forehead", price: "£4" },
      { name: "Eyebrows", price: "£5" },
      { name: "Eyelash Tint", price: "£7" },
      { name: "Eyebrow Tint", price: "£7" },
      { name: "Side Locks", price: "£8" },
      { name: "Full Face", price: "£18" },
    ],
  },

  {
    category: "WAXINGS",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200",
    items: [
      { name: "Eyebrows", price: "£5" },
      { name: "Forehead", price: "£5" },
      { name: "Upper Lip", price: "£6" },
      { name: "Chin & Neck", price: "£7" },
      { name: "Side Locks", price: "£8" },
      { name: "Underarms", price: "£10" },
      { name: "Half Arms", price: "£10" },
      { name: "Full Arms", price: "£15" },
      { name: "Half Legs", price: "£15" },
      { name: "Bikini", price: "£20" },
      { name: "Full Legs", price: "£20" },
      { name: "Full Face", price: "£25" },
      { name: "Front & Back", price: "£30" },
      { name: "Hollywood / Brazilian", price: "£30" },
      { name: "Standard Full Body", price: "£45" },
      { name: "Premium Full Body", price: "£60" },
      { name: "Extreme Full Body", price: "£80" },
    ],
  },

  {
    category: "FACIALS",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200",
    items: [
      { name: "Classic Facial", price: "£20" },
      { name: "Deep Cleansing", price: "£25" },
      { name: "Brightening Facial", price: "£30" },
      { name: "Balancing Facial", price: "£40" },
      { name: "Relaxation Facial", price: "£40" },
      { name: "Anti-Aging Facial", price: "£45" },
      { name: "Collagen Facial", price: "£50" },
      { name: "Botanical Face Revival", price: "£70" },
    ],
  },

  {
    category: "NAILS",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200",
    items: [
      { name: "Clean Up Manicure", price: "£15" },
      { name: "Natural Manicure", price: "£18" },
      { name: "Spa Manicure", price: "£30" },
      { name: "Classic Manicure", price: "£22" },
      { name: "Gel Manicure", price: "£30" },
      { name: "Clean Up Pedicure", price: "£17" },
      { name: "Natural Pedicure", price: "£20" },
      { name: "Classic Pedicure", price: "£25" },
      { name: "Gel Pedicure", price: "£30" },
      { name: "Botanical Spa Pedicure", price: "£39" },
    ],
  },

  {
    category: "HAIR SERVICES",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200",
    items: [
      { name: "Hair Trim", price: "£10" },
      { name: "Classic Cuts", price: "£12" },
      { name: "Premium Cuts", price: "£15" },
      { name: "Advance Cuts", price: "£25" },
      { name: "Express Wash & Blow Dry", price: "£15" },
      { name: "Wash and Blow Out", price: "£25" },
      { name: "Luxury Wash & Style", price: "£35" },
      { name: "Color Boost", price: "£25" },
      { name: "Hot Oil Treatment", price: "£35" },
      { name: "Hair Scalp Treatment", price: "£40" },
      { name: "All-Over Color", price: "£45" },
      { name: "Anti-Fungal Treatment", price: "£40" },
      { name: "Half Head Glow Highlights", price: "£55" },
      { name: "Complete Glow Highlights", price: "£80" },
      { name: "Frizz-Free Finish Treatment", price: "£120" },
      { name: "Botanical Hair Revival", price: "£120" },
      { name: "Hair Smoothening", price: "£150" },
      { name: "Hair Rebounding", price: "£150" },
    ],
  },

  {
    category: "MASSAGES",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200",
    items: [
      { name: "Indian Head Massage", price: "£30" },
      { name: "Back Neck & Shoulder", price: "£35" },
      { name: "Swedish Massage", price: "£55" },
      { name: "Light Pressure Massage", price: "£55" },
      { name: "Aroma Oil Massage", price: "£60" },
      { name: "Deep Tissue Massage", price: "£70" },
      { name: "Luxury Organic Massage", price: "£90" },
    ],
  },

  {
    category: "MAKEOVERS",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200",
    items: [
      { name: "Saree Styling", price: "From £40" },
      { name: "Soft Glam Look", price: "From £45" },
      { name: "Classic Hair Style", price: "From £50" },
      { name: "Classic Charm Look", price: "From £50" },
      { name: "Bridesmaid Radiance", price: "From £60" },
      { name: "Dream Bride Hair Style", price: "From £120" },
      { name: "Bride's Luxe Look", price: "From £150" },
    ],
  },
];

export default function Services() {

  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {

    if (!selected || !date || !time) {
      alert("Please select date & time");
      return;
    }

    const message = `
✨ Aelius Makeovers Booking

Service: ${selected.name}
Price: ${selected.price}

Date: ${date}
Time: ${time}

Please confirm my appointment.
`;

    window.open(
      `${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (

    <div className="services-page">

      <div className="services-hero">
        <div className="overlay">
          <h1>Our Luxury Services</h1>
          <p>
            Professional beauty treatments with premium care
          </p>
        </div>
      </div>

      <div className="container">

        {services.map((section) => (

          <div
            className="service-section"
            key={section.category}
          >

            <h2>{section.category}</h2>

            <div className="service-grid">

              {section.items.map((item) => (

                <div
                  className="service-card"
                  key={item.name}
                >

                  <div className="service-image-wrap">

                    <img
                      src={section.image || PLACEHOLDER}
                      alt={item.name}
                      className="service-image"
                    />

                  </div>

                  <div className="service-content">

                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                    </div>

                    <button
                      className="book-btn"
                      onClick={() => setSelected(item)}
                    >
                      Book Now
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>
        ))}

        {selected && (

          <div className="booking-box">

            <h2>Book Appointment</h2>

            <div className="selected-service">
              <strong>{selected.name}</strong>
              <span>{selected.price}</span>
            </div>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button
              className="confirm-btn"
              onClick={handleBooking}
            >
              Continue Booking
            </button>

          </div>
        )}

      </div>

    </div>
  );
}