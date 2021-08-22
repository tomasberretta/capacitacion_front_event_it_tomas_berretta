import '@fontsource/roboto';
import {ThemeProvider} from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/home/home';
import Civilization from './components/civilization/civilization';

import Navbar from "./components/navbar/navbar";
import theme from './theme'
import {withTheme} from "@material-ui/core";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Navbar/>
              <Switch>
                  <Route path="/" exact>
                      <Home/>
                  </Route>
                  <Route path="/civilization/:id" >
                      <Civilization/>
                  </Route>
              </Switch>
          </Router>
      </ThemeProvider>
  );
}

export default withTheme(App) ;
