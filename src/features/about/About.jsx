import { Button, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";
import "./about.scss";

export default function About() {
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
      className={`about about-${theme}`}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header title="About Me" theme={theme}></Header>
          </Grid>
          <Grid item xs={12}>
            <div className="discription">
              <h3>
                I'm Le Van Duc and <span>Web Developer</span>
              </h3>
              <p>
                I am a 3rd-year student at the University of Technology -
                Vietnam National University, Hanoi. I am looking for an
                internship in web development.
              </p>
            </div>
          </Grid>
          <Grid container item xs={12} spacing={5}>
            <Grid item xs={5}>
              <div className="info-item">
                <p>
                  <span>Birthday:</span> 2 June 2001
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span>Age:</span> 21
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span>Email:</span> levanduc262001@gmail.com
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span>Phone:</span> +84 363 522 974
                </p>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div className="info-item">
                <p>
                  <span>City:</span> Ha Noi
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span>Fulltime, Partime:</span> Available
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Link to="#">
              <Button variant="contained" style={{ textTransform: "none" }}>
                Download CV
              </Button>
            </Link>
          </Grid>
          <Grid container item xs={12} spacing={4}>
            <Grid item xs={6}>
              <div className="education">
                <h3>Education</h3>
                <div className="detail">
                  <div className="detail-item">
                    <div className="circle-dot"></div>
                    <div className="time">
                      <i className="fas fa-box" /> 08/2019 - Present
                    </div>
                    <h6 className="title">Study at University</h6>
                    <p className="discription">
                      Computer Networks and Data Communications
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="experience">
                <h3>Experience</h3>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
