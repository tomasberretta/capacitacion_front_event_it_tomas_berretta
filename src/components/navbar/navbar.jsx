import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    homeButton: {
        marginRight: theme.spacing(1),
    },
    title:{
        flexGrow: 1,
        color: theme.palette.common.white
    }
}))

function Navbar() {

    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" aria-label="home" className={classes.homeButton} >
                    <NavLink to="/" >
                        <HomeIcon color={"secondary"} fontSize={"large"}/>
                    </NavLink>
                </IconButton>
                <Typography variant="h4" color="inherit" className={classes.title}>
                    Civilizations
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;