import { useState, useEffect } from 'react'
import { Link, Container, Table, Box, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { fetchCivilizations } from "../fetchers/CivilizationFetcher";

const Home = () => {
    const [civilizations, setCivilizations] = useState([]);

    useEffect (()=> {
        document.title = 'Home'
        fetchData()
    }, []);

    const fetchData = async () => {
            const data = await fetchCivilizations()
            setCivilizations(data)
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
                        {civilizations.map((row) => (
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
}
 
export default Home;