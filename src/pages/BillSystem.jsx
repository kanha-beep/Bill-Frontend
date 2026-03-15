import { useState } from "react";
import { api } from "../api.js";
import Bill from "./Bill.jsx";
export default function BillSystem() {
  const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [items, setItems] = useState([]);
  const [showBill, setShowBill] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !qty) return;

    const item = {
      id: Date.now(),
      name,
      // price: Number(price),
      qty: Number(qty),
      // total: Number(price) * Number(qty),
    };
    setItems([...items, item]);

    setName("");
    // setPrice("");
    setQty("");
  };

  // const grandTotal = items.reduce((sum, i) => sum + i.total, 0);
  const handleCreateBill = async () => {
    console.log("send: ", items);
    try {
      const res = await api.post("/api/items", { items });
      console.log("items added: ", res?.data);
      setShowBill(res?.data?.success);
    } catch (error) {
      console.log("error bill: ", error?.response);
      setShowBill(false);
    }
  };
  return (
    <div
      style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}
    >
      <h2>Billing System</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /> */}
        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <hr />

      <table width="100%" border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>Price</th> */}
            <th>Qty</th>
            {/* <th>Total</th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              {/* <td>{i.price}</td> */}
              <td>{i.qty}</td>
              {/* <td>{i.total}</td> */}
            </tr>
          ))}
        </tbody>
      </table>

      {/* <h3>Grand Total: ₹{grandTotal}</h3> */}
      <button type="submit" onClick={handleCreateBill}>
        Create
      </button>
      {showBill && <Bill/>}
    </div>
  );
}
