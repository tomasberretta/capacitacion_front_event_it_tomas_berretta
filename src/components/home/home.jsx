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
    TablePagination, TableFooter, CircularProgress
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {useHome} from "./useHome";

const Home = () => {
    const {civilizations, loading, page, handleChangePage, onClick} = useHome()

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
      
    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
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
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {civilizations.slice(page * 10, page * 10 + 10).map((row) => (
                                <StyledTableRow key={row.id} onClick={() => onClick(row.id)}>
                                    <StyledTableCell component="th" scope="row" size={"small"}>
                                        {row.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="left" >
                                        {row.name}
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