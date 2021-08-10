import '@fontsource/roboto';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import {SvgIcon, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';

import Home from './components/Home';
import Civilization from './components/Civilization';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" aria-label="menu">
              <NavLink to="/">
                <SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
              </NavLink>
            </IconButton>
            <Typography variant="h6" color="inherit">
              Civilizations
            </Typography>
          </Toolbar>
      </AppBar>
        
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/civilization/:id" >
          <Civilization/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
