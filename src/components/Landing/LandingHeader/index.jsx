import { Link } from "react-router-dom";
export const LandingHeader = () => {
  return (
    <header
      style={{
        padding: "31px 6vw",
        backgroundColor: "#19201D",
        marginBottom: 152
      }}
      className="flex justify-between align-center"
    >
      <div>
        <img src="/images/logo-white.svg" />
      </div>
      <div>
        <Link to="/about" style={{ marginRight: "12vw", color: "#fff" }}>
          About us
        </Link>
        <Link to="/login" style={{ marginRight: "5vw", color: "#fff" }}>
          Login
        </Link>
        <Link
          to="/login"
          style={{
            padding: "15px 25px",
            border: "1px solid #fff",
            borderradius: 8,
            height: "fit-content",
            color: "white",
            borderRadius: 8
          }}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};
