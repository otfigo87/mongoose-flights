const React = require("react");

function Form() {
  return (
    <div>
      <h1>New Flight Form</h1>
      <form action="/flights" method="POST">
        Airline: <input type="text" name="airline" />
        <br />
        Flight Num: <input type="number" name="flightNo" />
        <br />
        Departs: <input type="date" name="departs" />
        <br />
        <input type="submit" name="" value="Add" />
      </form>
    </div>
  );
}

module.exports = Form;
