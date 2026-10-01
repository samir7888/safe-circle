import DownloadButton from "@/components/DownloadButton";
import SosDemo from "@/components/SosDemo";
import { siteConfig, features, steps, faqs } from "@/lib/config";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap header-row">
          <a href="#top" className="brand" aria-label={`${siteConfig.name} home`}>
            <span className="brand-dot" aria-hidden="true" />
            {siteConfig.name}
          </a>
          <nav aria-label="Main">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
            <a href="#download" className="nav-cta">
              Download
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1>
                Stay safe. Stay connected to the people who matter.
              </h1>
              <p className="lead">
                {siteConfig.name} is a safety app for the moments when every
                second counts. Send an SOS, share your location, and let your
                family know if you are safe or if you need help.
              </p>
              <div className="cta-row">
                <DownloadButton />
                <a className="btn btn-ghost" href="#how-it-works">
                  See how it works
                </a>
              </div>
              <p className="fine">Free download. Opens the app file on Google Drive.</p>
            </div>
            <div className="hero-demo">
              <SosDemo />
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section className="section" aria-labelledby="about-h">
          <div className="wrap narrow">
            <h2 id="about-h">A simple idea: reach your people fast</h2>
            <p className="big-p">
              {siteConfig.name} helps you stay connected with your trusted
              people. You can trigger an SOS, share your location, and notify
              your family when you are safe or when you need help. If a help
              notification comes in for you, the app rings an alert so you
              never miss it.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section band" id="how-it-works" aria-labelledby="how-h">
          <div className="wrap">
            <h2 id="how-h">How it works</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-n" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features" aria-labelledby="feat-h">
          <div className="wrap">
            <h2 id="feat-h">Everything you need in an emergency</h2>
            <div className="feature-list">
              {features.map((f) => (
                <article key={f.title} className="feature">
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ALERT RING */}
        <section className="section dark" aria-labelledby="ring-h">
          <div className="wrap narrow">
            <h2 id="ring-h">Never miss a call for help</h2>
            <p className="big-p">
              A quiet notification is easy to overlook. When someone in your
              circle sends a help alert, {siteConfig.name} rings an alert on
              your phone so you notice right away and can act.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq" aria-labelledby="faq-h">
          <div className="wrap narrow">
            <h2 id="faq-h">Frequently asked questions</h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section className="section download" id="download" aria-labelledby="dl-h">
          <div className="wrap narrow center">
            <h2 id="dl-h">Download {siteConfig.name}</h2>
            <p className="big-p">
              Get the app on your phone before you need it. It takes a minute
              to set up your trusted circle.
            </p>
            <DownloadButton variant="light" label={`Download ${siteConfig.name}`} />
            <p className="fine light">
              The button opens Google Drive. From there, tap Download, then open
              the file to install.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-row">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          {siteConfig.contactEmail && (
            <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          )}
        </div>
      </footer>
    </>
  );
}
