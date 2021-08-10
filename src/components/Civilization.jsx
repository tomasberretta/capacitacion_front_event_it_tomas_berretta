import React from 'react';
import { useParams } from 'react-router-dom'
import { Container, Box, Card, CardContent, Typography } from '@material-ui/core';

function Civilization() {
    const {id} = useParams();

    const [civilization, setCivilization] = React.useState([]);

    React.useEffect (()=> {
        document.title = 'Civilization'
        const fetchData = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const dataJSON = await data.json()
            setCivilization(dataJSON)
        }
        fetchData()
    }, [id]);

    return (
        <Box mt={2}>
            <Container maxWidth="md">
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Civilization: {civilization.name}
                        </Typography>
                        <Typography color="textSecondary">
                            Expansion: {civilization.expansion}
                        </Typography>
                        <Typography color="textSecondary">
                            Army Type: {civilization.army_type}
                        </Typography>
                        <Typography color="textSecondary">
                            Team Bonus: {civilization.team_bonus}
                        </Typography>
                        <Typography color="textSecondary">
                            Civilization Bonus: {civilization.civilization_bonus?.join(", ")}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default Civilization;