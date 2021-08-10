import React from 'react'
import { Link, Container, Table, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const Home = () => {
    const [civilization, setCivilization] = React.useState([]);

    React.useEffect (()=> {
        document.title = 'Home'
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const dataJSON = await data.json()
        setCivilization(dataJSON.civilizations)
    };

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          fontSize: 18,
        },
        body: {
          fontSize: 16,
        },
    }))(TableCell);
      
    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);

    const useStyles = makeStyles({
      table: {
        minWidth: 300,
      },
    });

    const classes = useStyles();

    return ( 
        <Box mt={2}>
          <Container maxWidth="sm" >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Civilization</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {civilization.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    <Link 
                                    href={`/civilization/${row.id}`}
                                    color="inherit" >
                                      {row.id}
                                    </Link>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Link 
                                    href={`/civilization/${row.id}`}
                                    color="inherit" >
                                      {row.name}
                                    </Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
     );
};
 
export default Home;