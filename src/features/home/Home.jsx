import { Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./home.scss";
import author_img from "../../common/asset/author.jpg";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
export default function Home() {
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
      className={`home home-${theme}`}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <div className="home-info">
              <h3>
                Hello, my name is <span className="name">Le Van Duc</span>
              </h3>
              <div className="typing">
                <h3>
                  <span>
                    <Typewriter
                      options={{
                        pauseFor: 2000,
                        cursor: "_",
                        strings: [
                          "I'm an student",
                          "I wana become a web developer",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h3>
              </div>
              <div className="discription">
                <p>
                  I am a 3rd-year student at the University of Technology -
                  Vietnam National University, Hanoi. I am looking for an
                  internship in web development. I can apply for a backend
                  Intern or frontend Intern...
                </p>
              </div>
              <Link to="../contact">
                <Button variant="contained" style={{ textTransform: "none" }}>
                  More about me
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="author-img">
              <div className="box-img">
                <img src={author_img} alt="Author" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
