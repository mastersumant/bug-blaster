import React from "react";
import TicketItem from "./TicketItems";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem
          key={ticket.id}
          dispacth={dispatch}
          ticket={ticket}
        ></TicketItem>
      ))}
    </div>
  );
}
