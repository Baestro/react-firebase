import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ManuIcon from '@material-ui/icons/Menu';

const styles = {
    root:{
        flexGrow:1,
    },
    menuButton:{
        marginRight: 'auto'
    }
}

class AppShell extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toggle: false
        };
    }
    handlerDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    handlerCloseDrawerToggle = (bToggle) => this.setState({toggle: bToggle})

    render(){
        const {classes } = this.props;
        return(
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handlerDrawerToggle}>
                            <ManuIcon/>
                        </IconButton>
                    </AppBar>
                    <Drawer open={this.state.toggle}> 
                        <MenuItem onClick={this.handlerDrawerToggle}>
                            <Link component={RouterLink} to="/">Home</Link>
                        </MenuItem>
                        <MenuItem onClick={this.handlerDrawerToggle}>
                            <Link component={RouterLink} to="/texts">Texts</Link>
                        </MenuItem>
                        <MenuItem onClick={this.handlerDrawerToggle}>
                            <Link component={RouterLink} to="/words">Words</Link>
                        </MenuItem>
                    </Drawer>
                </div>
                <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(AppShell);