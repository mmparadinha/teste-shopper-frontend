import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartButton from './CartButton';
import CartOverview from './CartOverview';
import CartReview from './CartReview';

export default function CartDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && event.key !== 'Escape') {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', minWidth: 350 }}
      p={2}
      gap={2}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CartOverview />
      <Divider />
      <CartReview />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <Fragment key={anchor}>
          <CartButton onClick={toggleDrawer(anchor, true)} variant="contained" aria-label="cart"><ShoppingCartIcon /></CartButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
