 <h1>Pizza Shop Application</h1>
  <p>This is a simulation of a pizza restaurant behavior application that allows users to place pizza orders, track the progress of their orders, and manage the overall pizza-making process. The application consists of two main sections: "Pizza Stages" and "Main Section."</p>

  <h2>Features</h2>

  <h3>Placing a Pizza Order:</h3>
  <ul>
    <li>Users can place a pizza order through a form.</li>
    <li>Options for configuring the pizza include:
      <ul>
        <li>Types: Veg, Non-Veg</li>
        <li>Size: Large, Medium, Small</li>
        <li>Base: Thin, Thick</li>
      </ul>
    </li>
  </ul>

  <h3>Order Limit:</h3>
  <ul>
    <li>The restaurant can handle a maximum of 10 orders at a time.</li>
    <li>If the limit is reached, the system displays a message: "Not taking any order for now."</li>
  </ul>

  <h3>Stages of Pizza:</h3>
  <ul>
    <li>Orders go through the following stages:
      <ol type="a">
        <li>Order Placed</li>
        <li>Order in Making</li>
        <li>Order Ready</li>
        <li>Order Picked</li>
      </ol>
    </li>
  </ul>

  <h3>Highlighting Delays:</h3>
  <ul>
    <li>If a pizza remains in the same stage for more than 3 minutes, it is highlighted in red.</li>
  </ul>

  <h3>Time Tracking:</h3>
  <ul>
    <li>The application displays the time spent in each stage for each pizza card.</li>
  </ul>

  <h3>Display Format:</h3>
  <ul>
    <li>Pizza cards are displayed in different columns for each stage.</li>
  </ul>

  <h3>Main Display:</h3>
  <ul>
    <li>Shows all pizzas in progress with their remaining time and order ID.</li>
    <li>Displays the total number of pizzas delivered today.</li>
  </ul>

  <h3>Order Cancellation:</h3>
  <ul>
    <li>Users can cancel an order at any time before it reaches the "Order Ready" stage from the main section.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>React.js</li>
    <li>Redux</li>
    <li>HTML/CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>Setup Instructions</h2>
  <ol>
    <li>Clone the repository.</li>
    <li>Install dependencies using <b>npm install</b>.</li>
    <li>Start the application using <b>npm start</b>.</li>
  </ol>

  <h2>Usage</h2>
  <ul>
    <li>Visit the application in your local web browser <a href="http://localhost:3001">http://localhost:3000</a>.</li>
    <li>Place pizza orders, track their progress, and manage the pizza-making process.</li>
  </ul>
