import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const productImages = [
  {
    src: "/assets/carport-product-front.png",
    alt: "Baasveranda carport with a white car parked underneath.",
    label: "Show carport front image",
  },
  {
    src: "/assets/carport-product-angle.png",
    alt: "Charcoal Baasveranda carport shown from an angle beside a wooden fence.",
    label: "Show carport angled image",
  },
  {
    src: "/assets/carport.webp",
    alt: "White SUV parked beneath a modern black carport.",
    label: "Show carport with vehicle image",
  },
];

export const Route = createFileRoute("/carport")({
  head: () => ({
    meta: [
      { title: "Baasveranda 111S 3x5m Carport" },
      {
        name: "description",
        content:
          "Baasveranda 111S 3x5m Carport product page with charcoal finish and delivery details.",
      },
      { property: "og:title", content: "Baasveranda 111S 3x5m Carport" },
      {
        property: "og:description",
        content:
          "Protect your vehicle with a durable charcoal 3x5m Baasveranda carport.",
      },
    ],
  }),
  component: CarportProduct,
});

function CarportProduct() {
  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="product-page">
      <a className="product-back" href="/#carport">
        Back to home
      </a>

      <section
        className="product-detail"
        aria-label="Baasveranda 111S 3x5m Carport"
      >
        <div className="product-gallery">
          <div className="product-main-image">
            <img src={activeImage.src} alt={activeImage.alt} />
            <button
              className="product-zoom"
              type="button"
              aria-label="Zoom product image"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="6" />
                <path d="m16 16 4 4" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </button>
          </div>

          <div className="product-thumbs" aria-label="Product image carousel">
            {productImages.map((image) => (
              <button
                className={`product-thumb ${
                  activeImage.src === image.src ? "is-active" : ""
                }`}
                type="button"
                key={image.src}
                onClick={() => setActiveImage(image)}
                aria-label={image.label}
              >
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <p className="product-vendor">BAASVERANDA EU</p>
          <h1>Baasveranda 111S 3x5m Carport</h1>
          <span className="product-badge">BFT 12</span>

          <div className="product-price-row">
            <span className="product-price">€1.399,00 EUR</span>
            <span className="product-compare">€1.999,00 EUR</span>
            <span className="product-save">Save €600,00</span>
          </div>

          <hr />

          <p className="product-description">
            Maximize your viewing experience with our 111S Carport. The charcoal
            color adds a sleek touch to any room. Discover a smarter way to
            protect your vehicle with this durable, season-ready carport.
          </p>

          <div className="shipping-note">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 7h11v9H3z" />
              <path d="M14 10h4l3 3v3h-7z" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
            </svg>
            <div>
              <strong>Shipping</strong>
              <p>Estimated delivery within 10 working days.</p>
            </div>
          </div>

          <div className="product-option">
            <span>Color:</span>
            <strong>Charcoal</strong>
            <button
              className="color-swatch"
              type="button"
              aria-label="Charcoal selected"
            ></button>
          </div>

          <div className="product-option">
            <span>Size:</span>
            <strong>3x5m</strong>
            <button className="size-pill" type="button">
              3x5m
            </button>
          </div>

          <div className="quantity-block">
            <span>Quantity:</span>
            <div className="quantity-control">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <output>{quantity}</output>
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button className="add-cart-button" type="button">
              Add to cart
            </button>
            <button className="paypal-button" type="button">
              Pay with <strong>PayPal</strong>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
