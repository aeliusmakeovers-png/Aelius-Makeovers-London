import "./about.css";

export default function About() {
  return (
    <section className="page">
      <h2 className="page-title">About</h2>

      <div className="about-card">
        <p>
          Hi, I’m <strong>HemaSri</strong> — a freelance Hair & Makeup Artist based in London.
          I specialise in <strong>Asian Bridal</strong>, <strong>Soft Glam</strong>, and <strong>Classical looks</strong>.
        </p>

        <p>
          I focus on clean skin finish, long-lasting makeup, and hair styles that match your outfit and event.
          Book early for wedding season dates.
        </p>

        <ul className="about-list">
          <li>✔ Bridal & Wedding Guest Makeup</li>
          <li>✔ Hair Styling (bun, curls, braids)</li>
          <li>✔ Engagement / Reception Looks</li>
        </ul>
      </div>
    </section>
  );
}
