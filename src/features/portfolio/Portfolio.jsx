import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import ProjectItem from "./components/ProjectItem";
import "./portfolio.scss";

export default function Portfolio() {
  const theme = useSelector((state) => state.controlColor.theme);
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`portfolio portfolio-${theme}`}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header title="Portfolio" theme={theme}></Header>
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={12}>
              <h3>My Projects:</h3>
            </Grid>
            <Grid item xs={4}>
              <div className="project-item">
                <ProjectItem
                  link="#"
                  srcImg="https://shots.codepen.io/leducuet/pen/poebveb-512.webp?version=1621074366"
                  title="abc"
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="project-item">
                <ProjectItem
                  link="#"
                  srcImg="https://shots.codepen.io/leducuet/pen/poebveb-512.webp?version=1621074366"
                  title="abc"
                />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="project-item">
                <ProjectItem
                  link="#"
                  srcImg="https://shots.codepen.io/leducuet/pen/poebveb-512.webp?version=1621074366"
                  title="abc"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
