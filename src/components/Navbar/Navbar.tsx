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
  const LogoImage = styled("img")({
    width: "70px",
    height: "auto",
  });
  
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
