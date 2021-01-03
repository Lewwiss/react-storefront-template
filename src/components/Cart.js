import React, { useContext } from 'react';
import { ShopContext } from '../App';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import Close from '@material-ui/icons/Close';

const Cart = () => {

    const { isCartOpen, closeCart, checkout } = useContext(ShopContext);

    return (
        <React.Fragment>
            <Drawer variant="temporary" anchor="right" open={isCartOpen}>
                <AppBar position="static" elevation={0} color="transparent">
                    <Toolbar style={{minHeight:"80px"}}>
                        <IconButton color="inherit" onClick={() => closeCart()}>
                            <Close />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Divider />
                {checkout.lineItems && checkout.lineItems.map(item => (
                    <p>{item.title}</p>
                ))}
                <Button href={checkout.webUrl}>Checkout</Button>
            </Drawer>
        </React.Fragment>
    );
};

export default Cart;