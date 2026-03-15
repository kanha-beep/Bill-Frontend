import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    category: "",
    weight: "",
    karat: "",
    price: "",
    stock: "",
    makingCharge: "",
    gemstone: "",
    image: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };
  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("category", form.category);
  formData.append("weight", form.weight);
  formData.append("karat", form.karat);
  formData.append("price", form.price);
  formData.append("stock", form.stock);
  formData.append("makingCharge", form.makingCharge);
  formData.append("gemstone", form.gemstone);
  formData.append("image", form.image);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/api/product", formData);
    console.log("done: ", res?.data);
    if (res?.data?.success) return navigate("/");
    alert("Product Added");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-xl shadow space-y-4"
    >
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="category"
        placeholder="Category"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="weight"
        placeholder="Weight"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="karat"
        placeholder="Karat"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="price"
        placeholder="Price"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="stock"
        placeholder="Stock"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="makingCharge"
        placeholder="Making Charge"
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="gemstone"
        placeholder="Gemstone"
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
      type="file"
        name="image"
        placeholder="Select Image"
        onChange={handleImage}
        className="border p-2 w-full"
      />

      <button className="bg-yellow-500 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
}
