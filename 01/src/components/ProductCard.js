function ProductCard({ name, price }) {
    return (
      <div style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
  
  export default ProductCard;