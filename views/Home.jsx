const React = require('react');

const Home = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/flights">Flights</a>
            </li>
            <li>
              <a href="/flights/new">New Flight</a>
            </li>
          </ul>
        </nav>
        <h3>HOME PAGE</h3>
      </div>
    );
}

module.exports = Home;