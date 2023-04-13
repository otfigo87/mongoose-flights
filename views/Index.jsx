const React = require('react');

const Index = ({flights}) => {
    return (
      <div>
        <nav>
          <a href="/flights/new">Add New Flight</a>
        </nav>
        <h1>Flight Index Page</h1>
        <ul>
          {flights.map((flight) => (
            <li key={flight._id}>
              <div>
                <h3>{flight.airline}</h3>
                <h3>{flight.flightNo}</h3>
                <h3>{flight.departs}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

module.exports = Index