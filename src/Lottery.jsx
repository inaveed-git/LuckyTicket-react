import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket, sum } from "./Helper";
import './Lottery.css'
function Lottery({ n, winningSum }) {
 let  [ticket, setTicket] = useState(genTicket(n));

  let isWinning = sum(ticket) == winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="lottery-container">
      <h3 className="lottery-header">Buy A ticket</h3>
      <div>
          <Ticket Tickets={ticket} />
      <button className="buy-ticket-button" onClick={buyTicket}>Click me </button>
      <h4 className="congrats-message">{isWinning && "congrates you won"}</h4>
      </div>
    
    </div>

  );
}

export default Lottery;
