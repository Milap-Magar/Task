import { Container, Box, styled, Button } from "@mui/material";

import { Dialog, Navbar } from "../components";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

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
      <Box>
        <Navbar />
        <Button variant="contained" color="success" onClick={openForm}>
          Contact Me
        </Button>
        <Dialog open={open} closeForm={closeForm} />
        <Footer />
      </Box>
    </WrapperContainer>
  );
};

export default Contact;
