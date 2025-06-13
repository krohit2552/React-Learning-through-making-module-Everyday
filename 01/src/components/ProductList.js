import ProductCard from './ProductCard';

function ProductList() {
  const products = [
    { id: 1, name: "iPhone 15", price: 79999 },
    { id: 2, name: "Pixel 8", price: 69999 },
    { id: 3, name: "Nothing Phone 2", price: 44999 },
    { id: 4, name: "iPhone 15", price: 79999 },
    { id: 5, name: "Pixel 8", price: 69999 },
    { id: 6, name: "Nothing Phone 2", price: 44999 },
    { id: 7, name: "iPhone 15", price: 79999 },
    { id: 8, name: "Pixel 8", price: 69999 },
    { id: 9, name: "Nothing Phone 2", price: 44999 }
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default ProductList;