import {
    Container,
    Table,
    Box,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination, TableFooter, Button, CircularProgress
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {useHome} from "./useHome";
import {NavLink} from "react-router-dom";

const Home = () => {
    const {civilizations, loading, page, handleChangePage} = useHome()

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white,
          fontSize: 24,
        },
        body: {
          fontSize: 22,
        },
    }))(TableCell);
      
    const StyledTableRow = withStyles(() => ({
        root: {
            '&:nth-of-type(odd)': {
                background: 'linear-gradient(45deg, #b39ddb 30%, #9fa8da 90%)',
            },
            '&:nth-of-type(even)': {
                background: 'linear-gradient(45deg, #9fa8da 30%, #b39ddb 90%)',
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
      table: {
        minWidth: 240,
      },
    });

    const classes = useStyles();

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

    return (
        <Box mt={2}
             display={"flex"}
             alignItems={"center"}
             justifyContent={"center"}
        >
            <Container maxWidth="md" >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell size={"small"} >ID</StyledTableCell>
                                <StyledTableCell align="left">Civilization</StyledTableCell>
                                <StyledTableCell align="left" size={"small"} padding={"none"}/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {civilizations.slice(page * 10, page * 10 + 10).map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row" size={"small"}>
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="left" >
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right" size={"small"} >
                                        <NavLink
                                            to={`/civilization/${row.id}`}
                                            color="inherit" >
                                            <Button color="primary" variant="contained">
                                                View
                                            </Button>
                                        </NavLink>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <StyledTableRow>
                                <TablePagination
                                    rowsPerPageOptions={[10]}
                                    count={civilizations.length}
                                    rowsPerPage={10}
                                    page={page}
                                    onPageChange={handleChangePage}
                                />
                            </StyledTableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
     );
}
 
export default Home;