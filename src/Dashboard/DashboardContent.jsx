import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", sales: 20000 },
  { day: "Tue", sales: 30000 },
  { day: "Wed", sales: 25000 },
  { day: "Thu", sales: 42000 },
  { day: "Fri", sales: 38000 },
];

export default function DashboardContent() {
  return (
    <div className="flex-1 p-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 text-black">
        <Stat title="Total Items" value="245" />
        <Stat title="Revenue" value="₹3,45,000" />
        <Stat title="Orders" value="42" />
        <Stat title="Employees" value="6" />
      </div>

      {/* Chart */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-bold mb-4">Weekly Revenue</h2>

        <BarChart width={500} height={250} data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" />
        </BarChart>
      </div>

      {/* Notifications */}
      <div className="mt-8 bg-gray-100 p-5 rounded-xl shadow text-gray-900">
        <h2 className="font-bold mb-3">Notifications</h2>

        <ul className="space-y-2">
          <li>🔔 New online order received</li>
          <li>⚠ Diamond Ring stock low</li>
          <li>💰 Revenue crossed ₹3L today</li>
        </ul>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
