import { Container, Box, styled } from "@mui/material";
import { Main, Navbar } from "../components";

const WrapperContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  background:
    "radial-gradient(ellipse, hsl(0, 0%, 64%) 0%, hsl(0, 1%, 16%) 100%, hsl(0, 0%, 41%) 50%)",
});

const Home = () => {
  const heading = ", I'm Milap Magar!";
  const paragraph =
    "I'm a passionate developer pursuing BCA. I work with web-stack of  Java, React, and more. Welcome to my portfolio! Feel free to explore my projects and get to know more about my work and experience.";
  return (
    <WrapperContainer maxWidth="xl" disableGutters>
      <Box>
        <Navbar />
        <Main heading={heading} paragraph={paragraph} />
      </Box>
    </WrapperContainer>
  );
};

export default Home;
