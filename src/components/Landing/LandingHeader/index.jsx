import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Index.module.css";
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
      <Link to="/">
        <img src="/images/logo-white.svg" />
      </Link>
      {/* harmburger menu
       */}
      <Stack flex-col spacing={"6px"} className="pointer">
        {[1, 2, 3].map((item, idx) => (
          <Box
            key={idx}
            sx={{ height: "2px", backgroundColor: "#fff", width: "25px" }}
          />
        ))}
      </Stack>
      <div className={styles.mobileHide}>
        <Link to="/contact-us" style={{ marginRight: "12vw", color: "#fff" }}>
          Contact us
        </Link>
        <Link to="/sign-in" style={{ marginRight: "5vw", color: "#fff" }}>
          Login
        </Link>
        <Link
          to="/sign-up-biz-types"
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
