export const InventoryReminder = () => {
  return (
    <div className="mt-8 bg-white p-5 rounded-xl shadow text-black">
      <h2 className="font-bold mb-3">Low Stock Reminder</h2>
      <ul>
        <li className="text-red-500">Gold Necklace - 2 left</li>
        <li className="text-red-500">Diamond Ring - 1 left</li>
      </ul>
    </div>
  );
};
