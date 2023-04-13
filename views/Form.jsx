const React = require("react");

function Form() {
  return (
    <html>
      <head>
        <title>Mongoose Flights</title>
        <link rel="stylesheet" href="../styles/style.css" />
      </head>
      <body>
        <div>
          <nav>
            <a href="/">Home Page</a>
          </nav>
          <h1>New Flight Form</h1>
          <form action="/flights" method="POST">
            Airline:{" "}
            <select name="airline">
              <option value="Delta">Delta</option>
              <option value="American">American</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
            <br />
            Flight Num: <input type="number" name="flightNo" />
            <br />
            Departs:{" "}
            <input type="datetime-local" name="departs"  />
            <br />
            <input type="submit" name="" value="Add" />
          </form>
        </div>
      </body>
    </html>
  );
}

module.exports = Form;
