import React from 'react'
import { Link } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Home = () => {

    const [civilization, setCivilization] = React.useState([])

    React.useEffect (()=> {
        document.title = 'Home'
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        setCivilization(users.civilizations)
    }

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
                                    color="inherit" >{row.id}
                                    </Link>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Link 
                                    href={`/civilization/${row.id}`}
                                    color="inherit" >{row.name}
                                    </Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        
     );
}
 
export default Home;