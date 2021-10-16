import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("hi");
  };
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <Button color="green" onClick={onClick} />
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
