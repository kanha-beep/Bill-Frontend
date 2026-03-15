import { useEffect, useState } from "react";
import { Card } from "./Card.jsx";
import { RecentOrders } from "./RecentOrders.jsx";
import DashboardContent from "./DashboardContent.jsx";
import { InventoryReminder } from "./InventoryReminder.jsx";
import { FaChartBar, FaGem, FaUsers, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { api } from "../api.js";
export default function Dashboard() {
  const [phone, setPhone] = useState(null);
  const [verifyPhone, setVerifyPhone] = useState(null);
  const [otp, setOtp] = useState(null);
  const [stats, setStats] = useState({
    products: 0,
    revenue: 0,
    orders: 0,
    employees: 0,
    eachProduct: "",
    // productCount: 0,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get("/api/items-dashboard");
      setStats((p) => ({
        ...p,
        products: res?.data?.totalProducts,
        eachProduct: res?.data?.eachProduct || [],
        revenue: res?.data?.revenue?.map((r) => r?.totalRevenue)[0],
        // productCount: res?.data?.productCount,
      }));
    };
    fetchProducts();
  }, []);
  console.log(stats);
  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/generate-otp", {
        phone,
      });
      console.log("generate: ", res?.data?.otp);
      window.open(res?.data?.wa_link, "_blank");
      // alert("Otp received: ", res?.data?.otp);
      // read query params
      const params = new URLSearchParams(window.location.search);
      const verifyPhone = params.get("verifyPhone");
      const otp = params.get("otp");

      if (verifyPhone && otp) {
        console.log("verifyPhone:", verifyPhone, "otp:", otp);
      }

      // remove query params
      if (window.location.search) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }
    } catch (error) {
      console.error("error: ", error?.response);
    }
  };
  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    const res = await api.post("/verify-otp", {
      verifyPhone,
      otp,
    });
    if (res?.data?.success) alert("Got verified");
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-black">
        Jewellery Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
        <Card title="Total Products" value={stats.products} icon={<FaGem />} />
        <Card
          title="Revenue"
          value={`₹ ${stats.revenue}`}
          icon={<FaChartBar />}
        />
        <Card title="Online Orders" value={stats.orders} icon={<FaBell />} />
        <Card title="Employees" value={stats.employees} icon={<FaUsers />} />
        <div>
          {stats.eachProduct.length === 0 ? (
            <p>No category data</p>
          ) : (
            stats.eachProduct.map((p) => (
              <div key={p._id}>
                {p._id}: {p.totalStock}
              </div>
            ))
          )}
        </div>
      </div>
      <hr />
      <h3>
        <Link to="/add-product">Add Product</Link>
        <Link to="/all-products">All Products</Link>
        <form onSubmit={handleOTP}>
          <input
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
          />
          <button type="submit">Generate</button>
        </form>
        <form onSubmit={handleVerifyOTP}>
          <input
            placeholder="verifyPhone"
            value={verifyPhone}
            onChange={(e) => setVerifyPhone(e.target.value)}
            name="verifyPhone"
          />
          <input
            placeholder="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            name="otp"
          />
          <button>Verify</button>
        </form>
      </h3>
      <hr />
      <RecentOrders />
      <InventoryReminder />
      <hr />
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar
        <div className="w-64 bg-white shadow-lg p-5">
          <h1 className="text-xl font-bold mb-6">Jewellery Admin</h1>

          <ul className="space-y-4">
            <li className="flex items-center gap-2 cursor-pointer">
              <FaChartBar /> Dashboard
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaGem /> Products
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaUsers /> Employees
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <FaBell /> Notifications
            </li>
          </ul>
        </div> */}

        {/* Main Content */}
        <DashboardContent />
      </div>
    </div>
  );
}
