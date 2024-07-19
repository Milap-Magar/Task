import { Box, Typography, Link, styled } from "@mui/material";

const FooterContainer = styled(Box)({
  backgroundColor: "hsl(0, 0%, 25%)",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
  position: "relative",
  bottom: 0,
  width: "100%",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" color="inherit">
        © {new Date().getFullYear()} Milap Magar. All rights reserved.
      </Typography>
      <Box mt={2}>
        <Link href="/" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="/about" color="inherit" underline="hover" sx={{ mx: 1 }}>
          About
        </Link>
        <Link href="/contact" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Contact
        </Link>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
