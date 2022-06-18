import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LoginIcon from "@material-ui/icons/PeopleAltRounded";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: false
    };
  }
  toggleDrawer = () => {
    this.setState({
      drawer: !this.state.drawer
    });
  };
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography style={{ marginLeft: "auto" }}>
              <Button color="inherit" variant="outlined" style={{ margin: 3 }}>
                <LoginIcon /> Login
              </Button>
              <Button color="inherit" variant="outlined" style={{ margin: 3 }}>
                <LoginIcon /> SignUp
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          open={this.state.drawer}
          onClose={this.toggleDrawer}
          style={{ width: 300 }}
        >
          <Typography align="center">
            <List>
              <ListItem>
                <Link to="/">
                  <ListItemText>
                    <Button color="secondary" onClick={this.toggleDrawer}>
                      <HomeIcon /> Home
                    </Button>
                  </ListItemText>
                </Link>
              </ListItem>
            </List>
          </Typography>
        </Drawer>
      </div>
    );
  }
}
export default NavBar;