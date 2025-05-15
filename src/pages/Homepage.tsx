import React, { FC } from "react";
import '../style.css';

// Placeholder images (replace with real imports or URLs)
const placeholderImg = "https://via.placeholder.com/80";

const Homepage: FC = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <h1>KidsSwap</h1>
        <button>
          Cart <span>3</span>
        </button>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <button>Home</button>
        <button>Saved</button>
        <button>Sell</button>
        <button>Profile</button>
      </nav>

      {/* Filter buttons */}
      <section className="filters">
        <button>All Items</button>
        <button>Girls</button>
        <button>Boys</button>
        <button>Babies</button>
        <button>Accessories</button>
      </section>

      {/* Featured Items */}
      <section className="featured-items">
        <h2>Featured Items</h2>

        <div className="item-list">
          <article className="item">
            <img src={placeholderImg} alt="Pink Summer Dress" />
            <h3>Pink Summer Dress</h3>
            <p>$24.99</p>
            <p>Size: 4-5y</p>
          </article>

          <article className="item">
            <img src={placeholderImg} alt="Denim Overalls" />
            <h3>Denim Overalls</h3>
            <p>$34.99</p>
            <p>Size: 3-4y</p>
          </article>
        </div>
      </section>

      {/* Sell your kids' clothes call-to-action */}
      <section className="sell-clothes">
        <h2>Sell Your Kids' Clothes</h2>
        <p>Turn outgrown clothes into cash!</p>
        <button>Start Selling</button>
      </section>
    </div>
  );
};

export default Homepage;
