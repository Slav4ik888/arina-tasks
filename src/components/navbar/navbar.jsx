import React from 'react';
import { Link } from 'react-router-dom';
// Readux Stuff
import { connect } from 'react-redux';
// MUI Stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
// Functions
import route from '../../routes';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButon: {
    marginRight: theme.spacing(2),
  },
  logo: {
    // flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(8),
  },
}));

const Navbar = ({ navbar }) => {

  const classes = useStyles();
  if (!navbar) return null;


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <MenuIcon className={classes.menuButon} />
          <Link to={route.ROOT} >
            <Typography variant="h6" className={classes.logo}>
                Задачкин
            </Typography>
          </Link>

          <Link to={route.CREATE_TASKS} >
            <Button color="inherit" className={classes.button}>Создать примеры</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  navbar: state.navbar,
});

const mapActionsToProps = {
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
