import { Link } from "react-router-dom";

export default function Bill() {
  const items = [
    { id: 1, name: "dfgh", price: 8563, qty: 785 },
  ];

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = subtotal * 0.18;
  const grand = subtotal + gst;

  const fmt = (n) =>
    `₹${n.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-[800px] bg-white text-gray-900 p-10 shadow-lg rounded-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Kanha Store</h1>
          <p className="mt-2">Lalghati Bhopal</p>
          <p>GST : 123456789</p>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* Bill Info */}
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">Bill To:</p>
            <p>qwsd</p>
            <p>Phone: 7452</p>
            <p>qwsed</p>
          </div>

          <div className="text-right">
            <p><span className="font-semibold">Bill No:</span> KS202603100006</p>
            <p><span className="font-semibold">Date:</span> 10 Mar 2026</p>
            <p><span className="font-semibold">Time:</span> 08:25 AM</p>
          </div>
        </div>

        {/* Table */}
        <table className="w-full mt-10">
          <thead>
            <tr className="border-b-2 border-gray-500 text-left">
              <th className="py-2 w-10">#</th>
              <th>Product</th>
              <th className="w-28">Price</th>
              <th className="w-20">Qty</th>
              <th className="w-40 text-right">Total</th>
            </tr>
          </thead>

          <tbody>
            {items.map((i, idx) => {
              const total = i.price * i.qty;
              return (
                <tr key={i.id} className="border-b border-gray-300">
                  <td className="py-3">{idx + 1}</td>
                  <td>{i.name}</td>
                  <td>{fmt(i.price)}</td>
                  <td>{i.qty}</td>
                  <td className="text-right">{fmt(total)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mt-10">
          <div className="w-80 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{fmt(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%):</span>
              <span>{fmt(gst)}</span>
            </div>
            <hr className="border-gray-500 my-2" />
            <div className="flex justify-between text-2xl font-bold">
              <span>Grand Total:</span>
              <span>{fmt(grand)}</span>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-gray-300" />

        <p className="text-center mt-6 text-gray-600">
          Thank you for your business!
        </p>
        <div><Link to="/">Dashboard</Link></div>
      </div>
    </div>
  );
}