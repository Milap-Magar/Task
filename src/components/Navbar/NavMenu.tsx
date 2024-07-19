import { Link, useLocation } from "react-router-dom";
import { Box, List, styled } from "@mui/material";
import { LinkProps } from "react-router-dom";

interface StyledLinkProps extends LinkProps {
  isActive?: boolean;
}

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

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<StyledLinkProps>(({ isActive }) => ({
  color: isActive ? "hsl(0, 0%, 0%)" : "hsl(4, 55%, 99%)",
  padding: "10px",
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  borderRadius: "10px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "color 0.3s ease, text-decoration 0.3s ease, transform 0.3s ease",
  transform: isActive ? "scale(1.05)" : "scale(1)",
  "&:hover": {
    color: "hsl(0, 0%, 45%)",
    transform: "scale(1.05)",
  },
}));

const NavMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavContainer component="nav">
      <ListItems>
        <StyledLink to="/" isActive={currentPath === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/about" isActive={currentPath === "/about"}>
          About
        </StyledLink>
        <StyledLink to="/project" isActive={currentPath === "/project"}>
          Projects
        </StyledLink>
        <StyledLink to="/contact" isActive={currentPath === "/contact"}>
          Contact
        </StyledLink>
      </ListItems>
    </NavContainer>
  );
};

export default NavMenu;
