export const RecentOrders = () => {
  return (
    <div className="mt-8 bg-white p-5 rounded-xl shadow text-black">
      <h2 className="font-bold mb-3">Online Bookings</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Customer</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ravi</td>
            <td>Gold Ring</td>
            <td>₹24000</td>
            <td className="text-green-600">Booked</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
