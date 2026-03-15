import { useEffect, useState } from "react";
import { api } from "../api.js";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await api.get("/api/items");
      console.log("got: ", res?.data);
      setProducts(res?.data?.products || []);
    };
    loadProducts();
  }, []);

  const deleteProduct = async (id) => {
    await api.delete(`/api/products/${id}`);
    setProducts(products.filter((p) => p._id !== id));
  };

  const editProduct = (product) => {
    console.log("edit", product);
  };

  return (
    <div className="p-4 space-y-3">
      {products.length === 0 ? (
        <p>No products</p>
      ) : (
        products.map((p) => (
          <div
            key={p._id}
            className="flex flex-col md:flex-row items-center justify-between gap-4 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 w-full md:w-auto">
              <img src={p.image} className="w-16 h-16 object-cover rounded" />

              <div>
                <h2 className="font-semibold">{p.name}</h2>
                <p className="text-sm text-gray-500">{p.category}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
              <span>Weight: {p.weight}</span>
              <span>Karat: {p.karat}</span>
              <span>Price: ₹{p.price}</span>
              <span>Stock: {p.stock}</span>
              <span>Gem: {p.gemstone}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => editProduct(p)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(p._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
