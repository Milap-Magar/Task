import { Container, Box, styled } from "@mui/material";
import { Navbar } from "../components";
import Footer from "../components/Footer/Footer";

const WrapperContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  background:
    "radial-gradient(ellipse, hsl(0, 0%, 64%) 0%, hsl(0, 1%, 16%) 100%, hsl(0, 0%, 41%) 50%)",
});

const About = () => {
  return (
    <WrapperContainer maxWidth="xl" disableGutters>
      <Box>
        <Navbar />
        <Footer />
      </Box>
    </WrapperContainer>
  );
};

export default About;
