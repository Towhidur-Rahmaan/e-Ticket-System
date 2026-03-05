const TicketList = ({ ticket }) => {
  const { no, title, status, description, priority, customer } = ticket;

  const statusColors = {
    Open: "bg-green-500",
    "In-Progress": "bg-yellow-500",
  };

  const priorityColors = {
    "HIGH PRIORITY": "text-red-500",
    "MEDIUM PRIORITY": "text-yellow-500",
    "LOW PRIORITY": "text-green-500",
  };

  return (
    <div className="bg-white p-4 text-gray-600 rounded-xl ">
      <div className="flex justify-between">
        <h3>{title}</h3>

        <button
          className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}
        >
          {status}
        </button>
      </div>

      <p>{description.slice(0, 40)}...</p>

      <div className="flex justify-between">
        <p>{no}</p>

        <p className={`px-3 py-1 text-sm ${priorityColors[priority]}`}>
          {priority}
        </p>

        <p>{customer}</p>
      </div>
    </div>
  );
};

export default TicketList;
