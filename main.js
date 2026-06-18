function Main() {
  return (
    <div className="header-container">
      <h2 className="logo">F8-zoom-day-34</h2>
      <nav className="nav">
        <ul>
          <li>
            <a href="./counter/index.html">Counter App</a>
          </li>
          <li>
            <a href="./todolist/index.html">Todo List App</a>
          </li>
          <li>
            <a href="./profile/index.html">Profile Card</a>
          </li>
          <li>
            <a href="./product/index.html">Product List</a>
          </li>
          <li>
            <a href="./comment/index.html">Comment System</a>
          </li>
          <li>
            <a href="./weather/index.html">Weather App</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
