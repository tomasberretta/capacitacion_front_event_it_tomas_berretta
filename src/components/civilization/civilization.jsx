import { Container, Box, Card, CardContent, Typography } from '@material-ui/core';
import {useCivilization} from "./useCivilization";

function Civilization() {
    const {civilization, loading} = useCivilization()
    const {name, expansion, army_type, team_bonus, civilization_bonus} = civilization

    if (loading) return (
        <Box mt={2}>
            <Container maxWidth="md">
                <Typography variant="h5" component="h2">
                    Loading...
                </Typography>
            </Container>
        </Box>
    )

    return (
        <Box mt={2}>
            <Container maxWidth="md">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Civilization: {name}
                        </Typography>
                        <Typography color="textSecondary">
                            Expansion: {expansion}
                        </Typography>
                        <Typography color="textSecondary">
                            Army Type: {army_type}
                        </Typography>
                        <Typography color="textSecondary">
                            Team Bonus: {team_bonus}
                        </Typography>
                        <Typography color="textSecondary">
                            Civilization Bonus: {civilization_bonus?.join(", ")}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}

export default Civilization;