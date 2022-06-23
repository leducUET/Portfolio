import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import "./services.scss";
import { motion } from "framer-motion";

export default function Services() {
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
      className={`services services-${theme}`}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header title="Services" theme={theme}></Header>
          </Grid>
          <Grid item container xs={12} spacing={5}>
            <Grid item xs={4}>
              <div className="service-item">
                <i className="fas fa-laptop-code"></i>
                <h3 className="service-title">Web Developer</h3>
                <p className="service-discription">
                  I am responsible for creating a website or web page design and
                  layout. I can work on a brand new website or update an already
                  existing site
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
