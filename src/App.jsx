import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import route from './routes';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
// Pages
import Home from './pages/home';
import CreateTasks from './pages/create-tasks';
// Components
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


const useStyle = makeStyles((theme) => ({
  body: {
    display: `flex`,
    flexDirection: `column`,
    minHeight: `500px`,
    // height: `80vh`,
  },
}));


const App = () => {

  const classes = useStyle();

  return (
    <Router>
      <div className={classes.body}>
        <Navbar />

        <Switch>
          <Route exact path={route.HOME} component={Home} />
          <Route exact path={route.CREATE_TASKS} component={CreateTasks} />
          <Route exact path={route.ROOT} />

          <Route
            render={() => (
              <>
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <Redirect to={route.ROOT} />
              </>
            )}
          />
        </Switch>
      </div>

      <Footer> © 2021 Created by Slav4ik888</Footer>

    </Router>

  );
}

export default App;
//  git add . && git commit -m "fix Navbar" && git push origin master
