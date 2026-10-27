import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./component/TicketForm";
import ticketReducer from "./reducer/ticketReducer";
import TicketList from "./component/TicketList";
import { sortTickets } from "./utilities/sortingUtilities";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPrefernce: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTicket = sortTickets(state.tickets, state.sortPrefernce);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>
        {state.tickets.length > 0 && (
          <div className="result">
            <h2>All Tickets</h2>
            <select
              value={state.sortPrefernce}
              onChange={(e) =>
                dispatch({
                  type: "SET_SORTING",
                  payload: e.target.value,
                })
              }
            >
              <option value="High to Low">High to Low</option>
              <option value="Low to High">Low to High</option>
            </select>
            <TicketList tickets={sortedTicket} dispatch={dispatch}></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
