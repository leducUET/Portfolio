import { Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import ProjectItem from "./components/ProjectItem";
import "./portfolio.scss";

import healthyFirstImg from "../../common/asset/healthy_first.png";
import calculatorImg from "../../common/asset/calculator.png";
import movieAppImg from "../../common/asset/movie_app.png";

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

    const projects = [
        {
            title: "Herthy First",
            link: "https://github.com/leducUET/INT3306-1",
            srcImg: healthyFirstImg,
        },
        {
            title: "Movie App",
            link: "https://leducuet.github.io/Movie-App/",
            srcImg: movieAppImg,
        },
        {
            title: "Calculator",
            link: "https://codepen.io/leducuet/pen/poebveb",
            srcImg: calculatorImg,
        },
    ];
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
                        {projects.map((project) => {
                            return (
                                <Grid item xs={4}>
                                    <div className="project-item">
                                        <ProjectItem
                                            link={project.link}
                                            srcImg={project.srcImg}
                                            title={project.title}
                                        />
                                    </div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </motion.div>
    );
}
