import {createTheme} from '@material-ui/core/styles'
import {deepPurple, indigo} from "@material-ui/core/colors";

const theme = createTheme({
    palette : {
        primary: {
            main: deepPurple[900]
        },
        secondary:{
            main: indigo[100]
        }
    }
})

export default theme;