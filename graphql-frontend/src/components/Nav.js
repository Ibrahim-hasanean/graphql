import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { List, ListItemText, ListItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  nav: {
    position: "fixed",
    top: "0",
    left: "0",
    background: "#3e3ef1",
  },
  list: {
    display: "flex",
    justifyContent: "space-even",
  },
  listItem: {
    "&:hover": {
      background: "rgb(255 255 255 / 48%);",
    },
  },
  navLink: {
    textDecoration: "none",
    color: "white",
  },
}));

const Nav = () => {
  const classes = useStyle();
  return (
    <Grid
      className={classes.nav}
      container
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography color="secondary" variant="h5">
        EasyEvent
      </Typography>
      <Grid container item xs={8} justifyContent="space-around">
        <List className={classes.list}>
          <ListItem button className={classes.listItem}>
            <NavLink className={classes.navLink} to="/auth">
              <ListItemText color="secondary" primary="Auth" />
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink className={classes.navLink} to="/events">
              <ListItemText color="secondary" primary="Events" />
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink className={classes.navLink} to="/booking">
              <ListItemText color="secondary" primary="Booking" />
            </NavLink>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Nav;
