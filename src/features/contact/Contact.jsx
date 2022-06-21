import { Button, Container, Grid, TextField } from "@mui/material";
import "./contact.scss";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
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
      className={`contact contact-${theme}`}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header title="Contact Me"></Header>
          </Grid>
          <Grid item container xs={12} spacing={4}>
            <Grid item xs={12}>
              <div className="contact-subheader">
                <h2>Have you any questions ?</h2>
                <h4>I'm at your service</h4>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="contact-item">
                <i class="fas fa-phone"></i>
                <h5>Call Me On</h5>
                <p className="contact-discription">+84 363 522 974</p>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="contact-item">
                <i class="fas fa-university"></i>
                <h5>University</h5>
                <p className="contact-discription">VNU Hanoi-UET</p>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="contact-item">
                <i class="fas fa-envelope"></i>
                <h5>Email</h5>
                <p className="contact-discription">levanduc262001@gmail.com</p>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="contact-item">
                <i class="fab fa-facebook"></i>
                <h5>Facebook</h5>
                <p className="contact-discription">@levanduc0206</p>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="contact-subheader">
                <h2>Send Me An Email</h2>
                <h4>I'm Very Responsive To Messages</h4>
              </div>
            </Grid>
            <Grid item container spacing={4} xs={12}>
              <Grid item xs={6}>
                <TextField
                  className="input"
                  type="text"
                  name="name"
                  label="Name"
                  size="medium"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="input"
                  type="email"
                  name="email"
                  label="Email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="input"
                  type="text"
                  name="subject"
                  label="Subject"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="input"
                  type="text"
                  name="message"
                  label="Message"
                  multiline
                  rows={8}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Link to="../contact">
                  <Button variant="contained" style={{ textTransform: "none" }}>
                    Send
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}
