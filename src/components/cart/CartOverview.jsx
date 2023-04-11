import { useContext } from 'react';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../contexts/CartContext';
import CartItemCard from './CartItemCard';

export default function CartOverview() {
  const { cart } = useContext(CartContext);

  function removeItem() {

  }

  return (
    cart.map((product) => (
      <CartItemCard key={product.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ textAlign: 'left', width: 210 }}>
          <Typography style={{ fontWeight: 700 }}>
            {product.name}
          </Typography>
          <Typography>
            {`R$ ${product.price}`}
          </Typography>
        </div>

        <div style={{ textAlign: 'right', width: 78 }}>
          <IconButton aria-label="delete" onClick={() => removeItem()}>
            <DeleteIcon />
          </IconButton>

          <Typography style={{ fontWeight: 700 }}>
            {`x${product.amount}`}
          </Typography>
          <Typography>
            {`R$ ${(product.price * product.amount).toFixed(2)}`}
          </Typography>
        </div>
      </CartItemCard>
    ))
  );
}
