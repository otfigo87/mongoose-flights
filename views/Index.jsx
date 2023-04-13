const React = require('react');

const Index = ({flights}) => {
    return (
      <html>
        <head>
          <title>Mongoose Flights</title>
          <link rel="stylesheet" href="../styles/style.css" />
        </head>
        <body>
          <div>
            <nav>
              <ul>
                <li>
                  <a href="/">Home page</a>
                </li>
                <li>
                  <a href="/flights/new">Add New Flight</a>
                </li>
              </ul>
            </nav>
            <h2>Flights Index Page</h2>
            {flights.map((flight) => (
              <div key={flight._id}>
                <h3>Airline: {flight.airline}</h3>
                <h3>Flight Number: {flight.flightNo}</h3>
                <h4>Departs: {new Date(flight.departs).toString()}</h4>
                <hr />
              </div>
            ))}
          </div>
        </body>
      </html>
    );
}

module.exports = Index