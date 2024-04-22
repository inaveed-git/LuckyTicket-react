import TicketNum from "./TicketNum";
import './Ticket.css'
function Ticket({ Tickets }) {
  return (
    <div>
      {Tickets.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}

export default Ticket;
