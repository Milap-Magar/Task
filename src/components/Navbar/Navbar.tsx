import NavMenu from "./NavMenu";
import Logo from "../../assets/logo1.svg";
import { Container, styled } from "@mui/material";

// import "./Nav.css";

const Navbar = () => {
  const StyledContainer = styled("figure")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "6px",
  });
  
  const LogoImage = styled("img")(({ theme }) => ({
    width: "70px",
    height: "auto",

    [theme.breakpoints.up("sm")]: {
      width: "90px",
    },
    [theme.breakpoints.up("md")]: {
      width: "110px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "150px",
    },
  }));

  return (
    <Container>
      <StyledContainer>
        <LogoImage src={Logo} alt="Logo image" />
      </StyledContainer>
      <NavMenu />
    </Container>
  );
};

export default Navbar;
