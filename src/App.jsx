import "./App.css";
import NavBar from "./Components/NavBar";
import TicketCard from "./Components/TicketCard";

function App() {
  // const [tickets, setTickets] = useState(ticketsData);

  return (
    <>
      <NavBar></NavBar>

      <TicketCard></TicketCard>
    </>
  );
}

export default App;
