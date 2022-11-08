import { Box, Grid, ThemeProvider, Typography, Link, Container } from "@mui/material";
import styled from "styled-components";
import { linkSx } from "../../../constants/sxConstants";
import theme from "../../../hooks/themes";
import MyHeading from "../myHeading";
import {skillList} from './data';
import myImage from "../../../images/me.jpg"
// interface Props {
//   id: string;
// } prop:Props

const StyledImg = styled.img`
    width: 100%;
    opacity: 1;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);

    &:hover,
    &:focus {
      filter: none;
        mix-blend-mode: normal;
      };
`;

function About() {
  console.log(myImage)
  return (
    <ThemeProvider theme={theme}>
    <Container id="About" sx={{ marginY: "6rem"}}>
        <MyHeading index="01." myHeading="About Me" />
        <Grid item container  sx={{display: "flex", direction:{xs:"column", md:"row"}}} >
          <Grid item container xs={12} md={7} flexGrow={1} marginY={2}>
            <Typography variant="body1" component="p" marginBottom={2} >
              Hello! My name is Rahul and I enjoy exploring new technologies. My
              interest in web development started in 2021 when I decided to try creating web backend-APIs.
              Since then I have tried FastAPI, Django with multiple cloud services.
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2} >
              Fast-forward to today, and I’ve had the privilege of working
               at <Link href="#" onClick={() => window.open("https://junkielabs.in/", '_blank', 'noopener,noreferrer')} underline="none" sx={linkSx}>{' Junkielabs '}</Link>
              , an Open Source Initiative. My main focus these days is building accessible, inclusive products and digital
              experiences at <Link href="#" onClick={() => window.open("https://junkielabs.in/", '_blank', 'noopener,noreferrer')} underline="none" sx={linkSx}>{' Junkielabs '} </Link> for an in-house application.
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2} >
              I also recently ventured into digital art & design.
              &amp; React.
            </Typography>
            <Typography variant="body1" component="p" marginBottom={2}>
              Here are a few <Typography sx={{...linkSx, fontSize: "1.2rem", fontWeight: "bold"}}> technologies </Typography>  I’ve been working with recently:
            </Typography>
            <Grid container component={"ul"} sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginLeft: "20px"
            }}>
              {skillList.map((item) => (
                <Grid item xs = {5} >
                <Typography component="li" sx={{fontFamily: "monospace", fontSize: "1rem", color: "#b98a6f", margin: "0px 20px 5px 0px",}}> {item.skill} </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item container xs={12} md={5}  flexGrow={1} 
            sx={{
              p: {xs: 6, md: 3} , 
              border: '1px dashed grey',
              justifyContent: "center",
            }} 
          >
            <Box sx={{objectFit: "contain", justifyContent: "center", maxWidth: { xs: "60%", md: "300px" }}}>
              {/* <StyledImg src="https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif" /> */}
              <StyledImg src={myImage} />
            </Box>
          </Grid>
        </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default About;