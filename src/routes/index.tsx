import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const VIDEO_URL =
  "/__l5e/assets-v1/d09279f2-3c1b-4678-8925-62ec5bef1795/brand-introduction.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baasveranda Outdoor EU - Home" },
      {
        name: "description",
        content:
          "A local Baasveranda Outdoor homepage recreation using supplied assets.",
      },
      { property: "og:title", content: "Baasveranda Outdoor EU - Home" },
      {
        property: "og:description",
        content:
          "Modern, durable and effortless outdoor living: pergolas, carports, deck boxes and accessories.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "/script.js";
    s.async = false;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="announcement">
          <button
            className="announcement-arrow"
            type="button"
            aria-label="Previous promotion"
          >
            ‹
          </button>
          <a href="#sale">Spieltag-Spezial: Rabatte auf Pergolen &amp; Zubehör</a>
          <button
            className="announcement-arrow"
            type="button"
            aria-label="Next promotion"
          >
            ›
          </button>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <button
            className="icon-button nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="mobileMenu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span className="sr-only">Menu</span>
          </button>

          <a className="brand" href="#top" aria-label="Baasveranda home">
            <img src="/assets/baasveranda-logo.webp" alt="Baasveranda" />
          </a>

          <div className="nav-links">
            <a href="#sale">Summer Sale</a>
            <a href="#pergola">Pergola</a>
            <a className="has-submenu" href="#carport">
              Carport
            </a>
            <a href="#deck-box">Deck Box</a>
            <a className="has-submenu" href="#accessories">
              Accessories
            </a>
          </div>

          <div className="nav-actions">
            <button className="language-button" type="button">
              English
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <button
              className="icon-action"
              type="button"
              data-open-search
              aria-label="Search"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m16 16 4 4" />
              </svg>
            </button>
            <button className="icon-action" type="button" aria-label="Login">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1.6-4 4.2-6 8-6s6.4 2 8 6" />
              </svg>
            </button>
            <button
              className="icon-action"
              type="button"
              data-open-cart
              aria-label="Cart"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 8h12l-1.2 11H7.2L6 8Z" />
                <path d="M9 8a3 3 0 0 1 6 0" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="mobile-menu" id="mobileMenu" hidden>
          <a href="#sale">Summer Sale</a>
          <a href="#pergola">Pergola</a>
          <a href="#carport">Carport</a>
          <a href="#deck-box">Deck Box</a>
          <a href="#accessories">Accessories</a>
          <a href="#faq">FAQ</a>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="sale" aria-label="Outdoor matchday sale">
          <img
            src="/assets/hero-matchday.webp"
            alt="Modern garden with pergola, outdoor screen, seating, and evening sunlight."
          />
          <div className="hero-content">
            <h1>Build Your Ultimate Backyard Matchday Space</h1>
            <p>Save up to €1000 on Pergolas and get extra savings on accessories.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#collections">
                Shop the Event
              </a>
            </div>
          </div>
        </section>

        <section className="category-strip" aria-label="Featured categories">
          <a href="#pergola">Pergola</a>
          <a href="#carport">Carport</a>
          <a href="#deck-box">Deck Box</a>
          <a href="#accessories">Accessories</a>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow">Baasveranda Outdoor</p>
            <h2>
              Modern, durable and effortless outdoor living for the sunshine lover
            </h2>
          </div>
          <p>
            We are dedicated to creating modern, durable and effortless outdoor
            living, built around clean aluminium structures, adjustable comfort, and
            low-maintenance details. Browse the core ranges, compare a terrace
            before and after, then explore real customer setups.
          </p>
        </section>

        <section
          className="products section"
          id="collections"
          aria-label="Product collections"
        >
          <article className="product-card" id="pergola">
            <img
              src="/assets/pergola.webp"
              alt="Freestanding aluminium pergola over an outdoor dining set."
            />
            <h3>Pergola</h3>
          </article>

          <article className="product-card" id="carport">
            <img
              src="/assets/carport.webp"
              alt="White SUV parked beneath a modern black carport."
            />
            <h3>Carport</h3>
          </article>

          <article className="product-card" id="deck-box">
            <img
              src="/assets/deck-box.webp"
              alt="Close view of a grey outdoor deck box handle."
            />
            <h3>Deck Box</h3>
          </article>

          <article className="product-card" id="accessories">
            <img
              src="/assets/accessory-door.webp"
              alt="Sliding glass door accessory attached to a pergola."
            />
            <h3>Accessories</h3>
          </article>
        </section>

        <section className="brand-intro section">
          <div className="brand-intro-copy">
            <h2>BAASVERANDA OUTDOOR BRAND INTRODUCTION</h2>
            <p>
              Baasveranda is dedicated to creating Modern, Durable and Effortless
              outdoor living for the sunshine lover. We are driven by the same
              desire to do the right thing at every step of the way, by designing
              collections that are more environmentally friendly, by working with
              partners who share our human and social values, and by communicating
              with you in a transparent way about what we are doing and what we
              have left to do.
            </p>
          </div>
          <video
            className="brand-intro-video"
            src={VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          ></video>
        </section>

        <section className="comparison section" id="comparison">
          <div className="comparison-copy">
            <h2>EXPERIENCE THE EPITOME OF MODERN OUTDOOR LIVING</h2>
            <p>
              Crafted from premium aluminium, it boasts an adjustable louvered roof
              that allows you to control the amount of sunlight or shade you
              desire.
            </p>
            <a href="#collections">More to enjoy</a>
          </div>
          <div
            className="compare"
            style={{ ["--position" as any]: "54%" }}
          >
            <img
              className="compare-before"
              src="/assets/before-terrace.webp"
              alt="Open terrace before a pergola is installed."
            />
            <div className="compare-after">
              <img
                src="/assets/after-pergola.webp"
                alt="Terrace after a charcoal pergola and furniture are installed."
              />
            </div>
            <span className="label before-label">Before</span>
            <span className="label after-label">After</span>
            <div className="compare-handle" aria-hidden="true"></div>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="54"
              aria-label="Reveal before or after image"
              data-compare
            />
          </div>
        </section>

        <section className="gallery section" aria-label="Customer galleries">
          <div className="section-heading">
            <h2>CUSTOMER GALLERIES</h2>
            <p>
              Discover honest and insightful pergola projects from real people for
              Baasveranda pergola. Get the useful information about products and
              services before you buy and make an informed decision.
            </p>
          </div>

          <div className="gallery-track" tabIndex={0}>
            <article>
              <img
                src="/assets/gallery-sarah.webp"
                alt="Pergola at sunset with a hanging chair."
              />
            </article>
            <article>
              <img
                src="/assets/gallery-samantha.webp"
                alt="White pergola louvers seen from below with garden flowers."
              />
            </article>
            <article>
              <img
                src="/assets/gallery-firepit.jpg"
                alt="Pergola lit by string lights with chairs around a fire pit."
              />
            </article>
            <article>
              <img
                src="/assets/gallery-dinner.webp"
                alt="Family dinner under a pergola with string lights."
              />
            </article>
            <article>
              <img
                src="/assets/gallery-lucas.webp"
                alt="Pergola over an outdoor lounge beside a house."
              />
            </article>
            <article>
              <img
                src="/assets/gallery-latz.webp"
                alt="Large pergola with black louvers over a dining table."
              />
            </article>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="faq-intro">
            <h2>FAQ</h2>
            <h3>Have a question ? We are here to help.</h3>
            <p>
              Contact our customer support with Email :{" "}
              <a href="mailto:info@baasveranda.nl">info@baasveranda.nl</a>.
            </p>
          </div>
          <div className="faq-list">
            <details>
              <summary>How long does delivery take?</summary>
              <p>
                Orders to Germany, France, and the Netherlands typically arrive
                within 3-4 weeks, depending on stock and configuration.
              </p>
            </details>
            <details>
              <summary>
                How does the drainage system work, and is the roof waterproof?
              </summary>
              <p>
                When closed, the roof is designed to guide water into internal
                drainage channels and down through the posts, so the space stays
                dry. Severe weather still calls for sensible furniture protection.
              </p>
            </details>
            <details>
              <summary>Do I need a foundation for the pergola?</summary>
              <p>
                A stable base is recommended, such as concrete, point foundations,
                or a suitable timber deck prepared for the structure.
              </p>
            </details>
            <details>
              <summary>
                How many person and hours are required for the pergola
                installation?
              </summary>
              <p>
                Most pergola installations take two people roughly 4-6 hours. Larger
                configurations may need more time or professional fitting.
              </p>
            </details>
          </div>
        </section>

        <section className="newsletter section" aria-label="Newsletter signup">
          <h2>Newsletter</h2>
          <p>Sign up for news and updates — Stay in the know.</p>
          <form className="signup-form" data-newsletter>
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />
              <button type="submit">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 7h16v10H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                Subscribe
              </button>
            </div>
            <p className="form-message" role="status"></p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <h3>Featured Collections</h3>
          <a href="#pergola">Pergola</a>
          <a href="#carport">Carport</a>
          <a href="#deck-box">Deck Box</a>
          <a href="#accessories">Accessories</a>
        </div>
        <div>
          <h3>Help Center</h3>
          <a href="#">Warranty</a>
          <a href="#faq">FAQ</a>
          <a href="#">Payment</a>
          <a href="#">Installation Manuals</a>
          <a href="#">Pergola Comparison</a>
        </div>
        <div>
          <h3>Policies</h3>
          <a href="#">Impressum</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Return Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div>
          <h3>Baasveranda Outdoor</h3>
          <a href="#">About Baasveranda</a>
          <a href="#">Baasveranda Blogs</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Email: info@baasveranda.nl
            <br />
            Call: +31 20 782 1846
            <br />
            Address: De Tongelreep 1-7, 5684 PZ Best, Nederland
          </p>
          <a className="shop-follow" href="#">
            ♡ Follow on shop
          </a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="#" aria-label="Facebook">
            f
          </a>
          <a href="#" aria-label="Instagram">
            ◎
          </a>
          <a href="#" aria-label="YouTube">
            ▶
          </a>
          <a href="#" aria-label="TikTok">
            ♪
          </a>
        </div>
        <div className="footer-language">
          <span>English</span>
          <span>⌄</span>
        </div>
        <div className="payment-icons" aria-label="Payment methods">
          <span>AMEX</span>
          <span>Apple Pay</span>
          <span>G Pay</span>
          <span>iDEAL</span>
          <span>Klarna</span>
          <span>Maestro</span>
          <span>Mastercard</span>
          <span>PayPal</span>
          <span>Shop</span>
          <span>UnionPay</span>
          <span>VISA</span>
        </div>
      </footer>

      <div className="overlay" data-overlay hidden></div>

      <aside className="drawer" data-cart hidden aria-label="Cart drawer">
        <div className="drawer-header">
          <h2>Your cart</h2>
          <button className="text-button" type="button" data-close-cart>
            Close
          </button>
        </div>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <a
            className="primary-button dark"
            href="#collections"
            data-close-cart
          >
            Continue shopping
          </a>
        </div>
      </aside>

      <div
        className="search-modal"
        data-search
        hidden
        role="dialog"
        aria-modal="true"
        aria-label="Search products"
      >
        <div className="search-box">
          <div className="drawer-header">
            <h2>Search</h2>
            <button className="text-button" type="button" data-close-search>
              Close
            </button>
          </div>
          <label htmlFor="siteSearch">Find a collection</label>
          <input
            id="siteSearch"
            type="search"
            placeholder="Pergola, carport, deck box"
          />
          <div className="quick-links">
            <a href="#pergola" data-close-search>
              Pergola
            </a>
            <a href="#carport" data-close-search>
              Carport
            </a>
            <a href="#deck-box" data-close-search>
              Deck Box
            </a>
            <a href="#accessories" data-close-search>
              Accessories
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
