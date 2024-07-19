import { Box, Container, Typography, styled } from "@mui/material";

interface MainProps {
  heading: string;
  paragraph: string;
}

const Main: React.FC<MainProps> = ({ heading, paragraph }) => {
  const SemiContainer = styled(Box)({
    padding: "20px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(154, 151, 151, 0.1)",
    margin: "20px auto",
    maxWidth: "800px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  });

  return (
    <Container>
      <SemiContainer>
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "1.2em",
              sm: "1.5em",
              md: "2em",
            },
            fontWeight: {
              xs: 700,
              sm: 800,
              md: 900,
              lg: 1000,
            },
            lineHeight: "42px",
            fontFamily: "Cedarville Cursive, cursive",
            paddingBottom: "15px",
          }}
        >
          Hello
          <span id="main_span">{heading}</span>
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1em",
              sm: "1.2em",
              md: "1.5em",
            },
            fontFamily: "Quicksand, sans-serif",
            fontWeight: {
              xs: 100,
              sm: 200,
              md: 300,
            },
            color: "hsl(4, 55%, 99%)",
            lineHeight: "24px",
          }}
        >
          {paragraph}
        </Typography>
      </SemiContainer>
    </Container>
  );
};

export default Main;
