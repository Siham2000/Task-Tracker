import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Tasck Tracker",
};

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
// };

//css style in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
