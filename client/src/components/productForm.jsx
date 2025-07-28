import React, { useEffect, useState } from "react";
import api from "../services/api";

const initialForm = {
  name: "",
  price: "",
  image: "",
  description: "",
  category: "",
  stock: "",
};

const ProductForm = ({ fetchProducts, selectedProduct, setSelectedProduct }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (selectedProduct) {
      setForm(selectedProduct);
    } else {
      setForm(initialForm);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedProduct) {
        // 🔄 Update existing
        await api.put(`/admin/products/${selectedProduct._id}`, form);
      } else {
        // ➕ Create new
        await api.post("/admin/products", form);
      }

      fetchProducts(); // 🔄 Refresh product list
      setForm(initialForm); // 🧼 Reset form
      setSelectedProduct(null); // ✖️ Clear edit mode
    } catch (err) {
      console.error("❌ Product save failed:", err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded mb-6 grid grid-cols-1 gap-3 max-w-xl"
    >
      <h2 className="text-xl font-semibold mb-2">
        {selectedProduct ? "Edit Product" : "Add New Product"}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />

      <input
        type="text"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        className="p-2 border rounded"
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        className="p-2 border rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="p-2 border rounded"
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="p-2 border rounded"
      />

      <input
        type="number"
        name="stock"
        placeholder="Stock Quantity"
        value={form.stock}
        onChange={handleChange}
        className="p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {selectedProduct ? "Update Product" : "Create Product"}
      </button>
    </form>
  );
};

export default ProductForm;
