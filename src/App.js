import './App.css';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  navItems: {
    borderBottom: '1px solid red',
    paddingBottom: '0.5rem'
  },
  navItem: {
    marginLeft: '1rem',
  },
  isSelectedTab: {
    borderBottom: '1px solid black',
    paddingBottom: '0.5rem'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={8} className={classes.navItems}>
          <span className={classes.navItem}>item 1</span>
          <span className={classes.navItem}>item 2</span>
          <span className={classes.navItem}>item 3</span>
        </Grid>
        <Grid item xs={4}>
          {/* just to produce an empty space */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
