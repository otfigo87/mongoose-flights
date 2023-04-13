const React = require('react');

const Home = () => {
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
                  <a href="/flights">Flights</a>
                </li>
                <li>
                  <a href="/flights/new">New Flight</a>
                </li>
              </ul>
            </nav>
            <h3>HOME PAGE</h3>
          </div>
        </body>
      </html>
    );
}

module.exports = Home;