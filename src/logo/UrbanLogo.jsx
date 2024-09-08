import logo from "../assets/blackLogo.png";

export const UrbanLogo = ({
  className = "h-16 w-auto",
  onClick = () => {},
}) => {
  return (
    <img
      src={logo}
      alt="Urban Clothing Store Logo"
      className={className}
      onClick={onClick}
    />
  );
};
