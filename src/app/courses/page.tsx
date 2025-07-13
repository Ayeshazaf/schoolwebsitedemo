"use client";
import { useState, useEffect } from "react";

export default function CoursesPage() {
  const [products, setProducts] = useState([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/get-courses");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  const handleEnroll = async (product: { id: string; name: string; description?: string; default_price?: { unit_amount?: number; currency?: string; } | null; }) => {
    setLoadingId(product.id);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseName: product.name,
          price: product.default_price?.unit_amount,
          currency: product.default_price?.currency,
          productId: product.id,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Error creating checkout session");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <p className="text-gray-700 mb-4">
        Explore our wide range of courses designed to help you learn and grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: { id: string; name: string; description?: string; default_price?: { unit_amount?: number; currency?: string; } | null; }) => (
          <div key={product.id} className="bg-white shadow rounded-lg p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description || "No description available."}</p>
            <p className="text-gray-800 font-semibold mb-4">
              Price: {typeof product.default_price === "object" && product.default_price !== null
                ? `${(product.default_price.unit_amount ?? 0) / 100} ${product.default_price.currency?.toUpperCase() ?? ""}`
                : "N/A"}
            </p>
            <button
              type="button"
              disabled={loadingId === product.id}
              onClick={() => handleEnroll(product)}
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 transition"
            >
              {loadingId === product.id ? "Processing..." : "Enroll Now"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}