import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'app/providers/router';
// Readux Stuff
import { useSelector } from 'react-redux';
// MUI Stuff
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { selectNavbarStatus } from 'features/navbar';


const useStyles = () => ({
  menuButon: {
    mr: 2
  },
  logo: {
    // flexGrow: 1,
  },
  button: {
    ml: 8
  }
});

const Navbar:FC = memo(() => {
  const
    sx = useStyles(),
    navbar = useSelector(selectNavbarStatus);
  
  if (!navbar) return null;


  return (
    <AppBar position="static">
      <Toolbar>
        <MenuIcon sx={sx.menuButon} />
        <Link to={RoutePath.ROOT} >
          <Typography variant="h6" sx={sx.logo}>
            Задачкин
          </Typography>
        </Link>

        <Link to={RoutePath.CREATE_TASKS} >
          <Button color="inherit" sx={sx.button}>Примеры</Button>
        </Link>

        <Link to={RoutePath.CREATE_SCHEDULE} >
          <Button color="inherit" sx={sx.button}>Расписание</Button>
        </Link>

      </Toolbar>
    </AppBar>
  );
});

export default Navbar;
