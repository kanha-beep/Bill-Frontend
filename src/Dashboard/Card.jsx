export const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex items-center justify-between">
      
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
      </div>

      <div className="text-3xl text-yellow-500">
        {icon}
      </div>

    </div>
  );
};