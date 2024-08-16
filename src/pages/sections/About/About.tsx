import { Box, Card, CardContent, Container, Grid, Paper, Stack, styled, Typography } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import { t } from "i18next";

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            h1: {
                fontSize: "65px"
            },
            h2: {
                fontSize: "30px"
            }
        },
        [theme.breakpoints.up("md")]: {
            height: "100vh",
            h1: {
                fontSize: "80px"
            },
            h2: {
                fontSize: "30px"
            }
        }
    }))

    const StyledPaper = styled(Paper)(({ theme }) => ({
        width: 150,
        height: 50,
        textAlign: "center",
        backgroundColor: theme.palette.secondary.main,
        transition: "border-color 0.5s, background-color 0.5s",
        '&:hover': {
            // backgroundColor: theme.palette.info.main,
            border: `1px solid ${theme.palette.info.main}`,
            color: theme.palette.info.main
            
        }
    }))

    return (
        <>
            <StyledAbout>
                <Container maxWidth="lg">

                    <Grid container spacing={2}>
                    
                        <Grid item xs={12}>
                            <Typography color="primary.main" variant="h1" textAlign="center">
                                {t("about")}
                            </Typography>
                        </Grid>
                        <Grid container pt={5} display="flex" justifyContent="center" spacing={3}>

                            <Grid item>
                                <Card sx={{
                                            width: 300,
                                            height: 180,
                                            backgroundColor: "#F2F2F2",
                                            transition: "border-color 0.5s, background-color 0.5s",
                                            '&:hover': {
                                                border: "1px solid #4527A0",
                                                color: "#4527A0"
                                            }
                                        }} variant="outlined">
                                    <CardContent>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <WorkspacePremiumIcon />
                                        </Box>
                                        <Typography textAlign="center" pt={2}><b>{t("experience")}</b></Typography>
                                        <Typography textAlign="center">{t("howLong")}</Typography>
                                        <Typography textAlign="center">{t("role")}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card sx={{
                                    width: 300,
                                    height: 180,
                                    backgroundColor: "#F2F2F2",
                                    transition: "border-color 0.5s, background-color 0.5s",
                                    '&:hover': {
                                        border: "1px solid #4527A0",
                                        color: "#4527A0"
                                    }
                                }} variant="outlined">
                                    <CardContent>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <SchoolIcon />
                                        </Box>
                                        <Typography textAlign="center" pt={2}><b>{t("education")}</b></Typography>
                                        <Typography textAlign="center">{t("degree")}</Typography>
                                        <Typography textAlign="center">{t("computerScience")}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        
                        </Grid>

                        <Grid container spacing={2}>
                            <Typography textAlign="justify" pt={5} pl={4}>
                                Mussum Ipsum, cacilds vidis litro abertis.  Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                                Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Morbi viverra placerat justo, vel pharetra turpis.
                                Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                                Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis.
                                Cevadis im ampola pa arma uma pindureta. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                            </Typography>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h1" textAlign="center" pt={5}>Skills</Typography>
                            </Grid>

                            <Grid item md={12} xs={4} display="flex" justifyContent="center">
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <StyledPaper variant="outlined">
                                        <Typography pt={2}>Python</Typography>
                                    </StyledPaper>
                                    <StyledPaper variant="outlined">
                                        <Typography pt={2}>Django</Typography>
                                    </StyledPaper><StyledPaper variant="outlined">
                                        <Typography pt={2}>Flask</Typography>
                                    </StyledPaper><StyledPaper variant="outlined">
                                        <Typography pt={2}>Go</Typography>
                                    </StyledPaper><StyledPaper variant="outlined">
                                        <Typography pt={2}>Web Scrapping</Typography>
                                    </StyledPaper>
                                </Stack>
                            </Grid>
                            <Grid item md={12} xs={4} display="flex" justifyContent="center">
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={2}
                                    alignItems="center"
                                >
                                <StyledPaper variant="outlined">
                                        <Typography pt={2}>Postgres</Typography>
                                    </StyledPaper><StyledPaper variant="outlined">
                                        <Typography pt={2}>ElasticSearch</Typography>
                                    </StyledPaper><StyledPaper variant="outlined">
                                        <Typography pt={2}>Git</Typography>
                                    </StyledPaper><StyledPaper variant="outlined">
                                        <Typography pt={2}>Docker</Typography>
                                    </StyledPaper><StyledPaper variant="outlined">
                                        <Typography pt={2}>AWS</Typography>
                                    </StyledPaper>
                                </Stack>
                            </Grid>
                            
                        </Grid>

                    </Grid>

                </Container>
            </StyledAbout>
        </>
    )
}

export default About