import {
  Container,
  Box,
  styled,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import { Main, Navbar } from "../components";

import project1Image from "../assets/project1.png";
import Footer from "../components/Footer/Footer";
import DataDisplay from "../components/DataDisplay/Display";

const WrapperContainer = styled(Container)({
  width: "100%",
  minHeight: "100vh",
  background:
    "radial-gradient(ellipse, hsl(0, 0%, 64%) 0%, hsl(0, 1%, 16%) 100%, hsl(0, 0%, 41%) 50%)",
  display: "flex",
  flexDirection: "column",
});

const ContentBox = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: 4,
});

const Project = () => {
  const heading = "This is my Project Section";
  const paragraph = "Here are the projects along with github codes and website";

  return (
    <WrapperContainer maxWidth="xl" disableGutters>
      <Navbar />
      <Main heading={heading} paragraph={paragraph} />
      <ContentBox>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Quicksand, sans-serif",
            textDecoration: "underline",
            marginBottom: "20px",
          }}
          gutterBottom
        >
          My Projects
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: "20px",
          }}
        >
          <DataDisplay />
        </Grid>
      </ContentBox>
      <Footer />
    </WrapperContainer>
  );
};

export default Project;
