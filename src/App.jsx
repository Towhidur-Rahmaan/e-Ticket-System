import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import TicketCard from "./Components/TicketCard";

function App() {
  // const [tickets, setTickets] = useState(ticketsData);

  return (
    <>
      <NavBar></NavBar>

      <TicketCard></TicketCard>
      <Footer></Footer>
    </>
  );
}

export default App;
