import React, { useContext } from 'react';
import { ShopContext } from '../App';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';

import LocalMall from '@material-ui/icons/LocalMall';
import Search from '@material-ui/icons/Search';

const Navigation = () => {
    const { openCart } = useContext(ShopContext);

    return (
       <React.Fragment>
           <AppBar position="static" elevation={0} color="transparent">
               <Toolbar style={{minHeight:"80px"}}>
                    <div style={{flexGrow: 1, textAlign: "center"}}>
                        
                    </div>
                    <IconButton color="inherit">
                        <Badge color="secondary">
                            <Search />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" onClick={() => openCart()}>
                        <Badge color="secondary">
                            <LocalMall />
                        </Badge>
                    </IconButton>
               </Toolbar>
           </AppBar>
           <Divider />
       </React.Fragment>
    );
};

export default Navigation;