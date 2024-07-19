import { Link } from "react-router-dom";
import { Box, List, styled } from "@mui/material";

const NavContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
  [theme.breakpoints.between("sm", "md")]: {
    padding: "15px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "25px",
  },
}));

const ListItems = styled(List)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  listStyle: "none",
  gap: "10px",
});

const Item = styled(Link)({
  color: "hsl(0, 0%, 97%)",
  padding: "10px",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  borderRadius: "10px",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: "hsl(0, 0%, 45%)",
  },
});

const NavMenu = () => {
  return (
    <NavContainer component="nav">
      <ListItems>
        <Item to="/">Home</Item>
        <Item to="/about">About</Item>
        <Item to="/projects">Projects</Item>
        <Item to="/contact">Contact</Item>
      </ListItems>
    </NavContainer>
  );
};

export default NavMenu;
