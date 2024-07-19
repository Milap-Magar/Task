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

  const projects = [
    {
      title: "Complain Management System",
      description:
        "This system was my first full stack project which includes frontend, backend, database and deployment too.",
      link: "https://github.com/Milap-Magar/Project1",
      image: project1Image,
    },
    {
      title: "E-commerce Store",
      description: "Description for project 2.",
      link: "https://github.com/Milap-Magar/Project2",
      image: project1Image,
    },
    {
      title: "Travel Page",
      description: "Description for project 2.",
      link: "https://github.com/Milap-Magar/Project2",
      image: project1Image,
    },
    {
      title: "Basic Calculator",
      description: "My first self made calculator using DOM maniplutaion",
      link: "https://github.com/Milap-Magar/Project2",
      image: project1Image,
    },
    {
      title: "Nike Store",
      description:
        "I created this website watching youtube video, which is also my first project",
      link: "https://github.com/Milap-Magar/Project2",
      image: project1Image,
    },
  ];

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
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  background: "trasparent",
                }}
              >
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.image}
                />
                <CardContent
                  sx={{
                    background: "trasparent",
                    margin: "10px",
                  }}
                >
                  <Typography variant="h6" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      View on GitHub
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ContentBox>
    </WrapperContainer>
  );
};

export default Project;
