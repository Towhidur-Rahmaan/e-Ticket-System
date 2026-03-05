import { useEffect, useState } from "react";
import Banner from "./Banner";
import TicketList from "./TicketList";

const TicketCard = () => {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleAdd = (ticket) => {
    if (inProgress.find((t) => t.id === ticket.id)) return;
    setInProgress([...inProgress, ticket]);
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticket.id));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <div className="flex gap-8 mt-8 ">
        <div className="w-3/4 grid md:grid-cols-2 gap-6 ">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleAdd(ticket)}
              className="cursor-pointer"
            >
              <TicketList ticket={ticket} />
            </div>
          ))}
        </div>

        <div className="w-1/3 p-4 ">
          <h2 className="font-bold text-2xl mb-4">Task Status</h2>

          {inProgress.map((task) => (
            <div
              key={task.id}
              className="bg-white p-3  shadow mb-2 text-black rounded-xl"
            >
              <p className="font-semibold">{task.title}</p>
              <button
                onClick={() => handleComplete(task)}
                className="mt-2 w-full bg-green-600 text-white px-3 py-1 rounded font-bold"
              >
                Complete
              </button>
            </div>
          ))}

          <h2 className="font-bold mt-6 mb-2 text-2xl ">Resolved Task</h2>

          {resolved.map((task) => (
            <div
              key={task.id}
              className="bg-blue-200 p-4 rounded  text-black font-semibold mb-2"
            >
              {task.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
