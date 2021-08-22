import {
    Container,
    Box,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Divider,
    Grid,
    AccordionSummary, AccordionDetails, Accordion
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useCivilization} from "./useCivilization";

function Civilization() {
    const {civilization, loading, expanded, handleChange} = useCivilization()
    const {name, expansion, army_type, team_bonus, civilization_bonus} = civilization

    if (loading) return (
        <Box
            mt={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <CircularProgress size={75} />
        </Box>
    )
    else return (
        <Box mt={2} >
            <Container maxWidth="lg">
                <Card>
                    <CardContent>
                        <Box mt={1} mx={2}>
                            <Box mb={1} fontWeight='fontWeightBold'>
                                <Typography variant="h4" color={"primary"} >
                                    {name}
                                </Typography>
                            </Box>
                            <Divider/>
                        </Box>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box mt={1} mx={2}>
                                    <Typography component='div' variant="h5" color="textSecondary">
                                        <Box fontWeight='fontWeightMedium' display='inline'>Expansion: </Box> {expansion}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box mt={1} mx={2}>
                                    <Typography component='div' variant="h5" color="textSecondary">
                                        <Box fontWeight='fontWeightMedium' display='inline'>Army Type: </Box> {army_type}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} m={1} >
                                <Box mt={1} mx={2}>
                                    <Typography component='div' variant="h5" color="textSecondary">
                                        <Box fontWeight='fontWeightMedium' display='inline'>Team Bonus: </Box> {team_bonus}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} m={1} >
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={0}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon color={"primary"} />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography component='div' variant="h5" color="textSecondary" >
                                            <Box fontWeight='fontWeightMedium' display='inline'>Civilization Bonuses</Box>
                                        </Typography>
                                    </AccordionSummary>
                                    <Box mx={2}><Divider/></Box>
                                    <AccordionDetails>
                                        <Grid container>
                                            {civilization_bonus?.map((bonus) =>(
                                                <Grid item xs={12}>
                                                    <Box key ={bonus}>
                                                        <Typography variant="h5" color="textSecondary">
                                                            {"· "+ bonus }
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}

export default Civilization;