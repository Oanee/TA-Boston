export default function ProductTile() {
  return (
    <>
      <article className="product-tile">
        <header className="product-tile-header">
          <div className="product-tile-image">
            <picture>
              <img src="/images/products/product-01a.jpg" alt="Suit"></img>
            </picture>

            <span className="badge">%</span>
          </div>

          <h1 className="product-tile-title">
            <span>Thread Affair </span>
            <span>Traveller </span>
            Suit
          </h1>
          <h2 className="product-tile-subtitle">London fit Semi-slim</h2>
        </header>

        <section className="product-tile-pricing">
          <span className="product-tile-regular">499.00</span>

          <span className="product-tile-price">
            USD <span>399.00</span>
          </span>
        </section>

        <footer className="product-tile-footer">
          <button className="button" title="Add to Cart" type="button">
            Add to Cart
          </button>
        </footer>
      </article>
    </>
  );
}
