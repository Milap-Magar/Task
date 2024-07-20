import { Container, Box, styled, Button, Typography } from "@mui/material";
import { Dialog, Main, Navbar } from "../components";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

const WrapperContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  background:
    "radial-gradient(ellipse, hsl(0, 0%, 64%) 0%, hsl(0, 1%, 16%) 100%, hsl(0, 0%, 41%) 50%)",
});
const Contact = () => {
  const [open, setOpen] = useState(false);

  const openForm = () => {
    setOpen(true);
  };

  const closeForm = () => {
    setOpen(false);
  };

  return (
    <WrapperContainer maxWidth="xl" disableGutters>
      <Navbar />
      <Container>
        <Box
          textAlign="center"
          width="100%"
          sx={{
            heigh: "100vh",
            border: "2px solid #fff",
            backgroundColor: "transparent",
            paddingBottom: "10px",
            marginBottom: "5px",
            gap: "10px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              paddingBottom: "10px",
            }}
          >
            Contact Me
          </Typography>
          <Main
            heading="This is Milap"
            paragraph=" You can contact me via sending the message via Contact"
          />
          <Button variant="contained" color="success" onClick={openForm}>
            Contact Me
          </Button>
        </Box>
      </Container>
      <Dialog open={open} closeForm={closeForm} />
      <Footer />
    </WrapperContainer>
  );
};

export default Contact;
