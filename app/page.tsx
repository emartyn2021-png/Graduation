import Envelope from "./components/Envelope";
import Gallery from "./components/Gallery";
import HeroPhoto from "./components/HeroPhoto";
import Section from "./components/Section";
import { PAYMENT_LINK, gallery, graduate, journey, milestones, navLinks, thanks } from "./content";

function Roll({ bottomFin }: { bottomFin: string }) {
  return (
    <div className="roll">
      <i className="fin" />
      <i className="band" />
      <div className="tube" />
      <i className="band" />
      <i className={`fin ${bottomFin}`} />
    </div>
  );
}

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
        <div className="kicker">SUCCESSFULLY COMPLETED</div>
        <div className="sub">A journey to graduation</div>
        <HeroPhoto src={graduate.photo} alt={`Photo of ${graduate.name}`} />
        <div className="names">{graduate.name}</div>
        <div className="degree">{graduate.degree}</div>
        <div className="when">
          {graduate.university} · {graduate.classOf}
        </div>
        <div className="meander" />
      </header>

      <main>
        <Section id="attest" index={0}>
          <div className="num">I</div>
          <h2>A degree earned</h2>

          {/* Horizontal scroll: gold-capped rolls left and right, white paper unrolls sideways */}
          <div className="scroll">
            <Roll bottomFin="r" />
            <div className="paper">
              <div className="cert">
                <div className="frame">
                  <div className="small">THIS IS TO ATTEST THAT</div>
                  <div className="who">{graduate.name}</div>
                  <div className="small">HAS SUCCESSFULLY COMPLETED THE PROGRAMME OF</div>
                  <div className="deg">{graduate.degree}</div>
                  <p>
                    at {graduate.university}, having met every requirement of coursework, research and dissertation,
                    and graduated with distinction in effort, discipline and perseverance.
                  </p>
                  <div className="small" style={{ marginTop: 14 }}>
                    {graduate.attestedOn}
                  </div>
                </div>
              </div>
            </div>
            <Roll bottomFin="b" />
          </div>
        </Section>

        <Section id="journey" index={1}>
          <div className="num">II</div>
          <h2>How I got here</h2>
          {journey.map((p) => (
            <p key={p.slice(0, 24)} className="l">
              {p}
            </p>
          ))}
          <div className="sign">{graduate.name}</div>
        </Section>

        <Section id="milestones" index={2}>
          <div className="num">III</div>
          <h2>From day one to graduation</h2>
          <ol className="steps">
            {milestones.map((m) => (
              <li key={m.title}>
                <b>{m.title}</b>
                <small>{m.detail}</small>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="gallery" index={3}>
          <div className="num">IV</div>
          <h2>Moments from the journey</h2>
          <p style={{ fontStyle: "italic", color: "var(--mute)" }}>A few memories from the road to graduation</p>
          <Gallery items={gallery} />
          <div className="hint">SWIPE TO SEE MORE</div>
        </Section>

        <Section id="thanks" index={4}>
          <div className="num">V</div>
          <h2>Thank you</h2>
          {thanks.map((p) => (
            <p key={p.slice(0, 24)} className="l">
              {p}
            </p>
          ))}
        </Section>

        <Section id="gift" index={5} className="gift">
          <div className="in-wrap">
            <div className="num">VI</div>
            <h2>Celebrate with me</h2>
            <p>Your words and your presence already mean the world to me. Thank you for being part of this milestone.</p>
            {PAYMENT_LINK ? (
              <a className="btn" href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
                SEND A GIFT
              </a>
            ) : (
              <span className="btn" aria-disabled="true">
                GIFT LINK COMING SOON
              </span>
            )}
            <div className="note">A gift is never expected, only appreciated.</div>
          </div>
        </Section>
      </main>

      <footer>
        <div className="names">{graduate.name}</div>
        {graduate.degree} · {graduate.university}
        <div className="yr" />
      </footer>
    </>
  );
}
