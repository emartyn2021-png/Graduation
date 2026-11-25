import Envelope from "./components/Envelope";
import Gallery from "./components/Gallery";
import HeroPhoto from "./components/HeroPhoto";
import { PAYMENT_LINK, gallery, graduate, journey, milestones, navLinks, thanks } from "./content";

export default function Home() {
  return (
    <>
      <Envelope />

      <nav>
        <span className="mono">Master’s Graduate</span>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <header className="hero">
        <div className="kicker">Successfully Completed</div>
        <div className="sub">A journey to graduation</div>
        <HeroPhoto src={graduate.photo} alt={`Photo of ${graduate.name}`} />
        <div className="names">{graduate.name}</div>
        <div className="degree">{graduate.degree}</div>
        <div className="when">
          {graduate.university} · {graduate.classOf}
        </div>
      </header>

      <main>
        <section id="attest">
          <div className="label">Attestation</div>
          <h2>A degree earned</h2>
          <div className="cert">
            <div className="small">This is to attest that</div>
            <div className="who">{graduate.name}</div>
            <div className="small">has successfully completed the programme of</div>
            <div className="deg">{graduate.degree}</div>
            <p>
              at {graduate.university}, having met every requirement of coursework, research and dissertation, and
              graduated with distinction in effort, discipline and perseverance.
            </p>
            <div className="small" style={{ marginTop: 20 }}>
              {graduate.conferredOn}
            </div>
          </div>
          <svg className="cap" viewBox="0 0 70 46" aria-hidden="true">
            <path d="M35 3 3 17l32 14 32-14z" fill="#10213f" />
            <path d="M17 26v10c0 4 8 7 18 7s18-3 18-7V26L35 33z" fill="#1b3566" />
            <path d="M63 19v16" stroke="#c9a45c" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="63" cy="37" r="2.5" fill="#c9a45c" />
          </svg>
        </section>

        <section id="journey">
          <div className="label">The journey</div>
          <h2>How I got here</h2>
          {journey.map((p) => (
            <p key={p.slice(0, 24)} className="l">
              {p}
            </p>
          ))}
          <div className="sign">{graduate.name}</div>
        </section>

        <section id="milestones">
          <div className="label">Milestones</div>
          <h2>From day one to graduation</h2>
          <ol className="steps">
            {milestones.map((m) => (
              <li key={m.title}>
                <b>{m.title}</b>
                <small>{m.detail}</small>
              </li>
            ))}
          </ol>
        </section>

        <section id="gallery">
          <div className="label">Gallery</div>
          <h2>Moments from the journey</h2>
          <p className="muted">A few memories from the road to graduation</p>
          <Gallery items={gallery} />
          <div className="hint">Swipe to see more</div>
        </section>

        <section id="thanks">
          <div className="label">Gratitude</div>
          <h2>Thank you</h2>
          {thanks.map((p) => (
            <p key={p.slice(0, 24)} className="l">
              {p}
            </p>
          ))}
        </section>

        <section id="gift" className="gift">
          <div>
            <div className="label">Send a gift</div>
            <h2>Celebrate with me</h2>
            <p>
              Your words and your presence already mean the world to me. If you would like to mark this milestone with
              a gift, you can do so securely using the link below. Thank you for your generosity.
            </p>
            {PAYMENT_LINK ? (
              <a className="btn" href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                Send a gift
              </a>
            ) : (
              <span className="btn" aria-disabled="true">
                Gift link coming soon
              </span>
            )}
            <div className="note">A gift is never expected, only appreciated.</div>
          </div>
        </section>
      </main>

      <footer>
        <div className="names">{graduate.name}</div>
        {graduate.degree} · {graduate.university}
      </footer>
    </>
  );
}
