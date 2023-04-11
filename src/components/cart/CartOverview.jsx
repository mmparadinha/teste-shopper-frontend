import { useContext } from 'react';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../contexts/CartContext';
import CartItemCard from './CartItemCard';

export default function CartOverview() {
  const { cart, setCart } = useContext(CartContext);

  function removeItem(product) {
    const productIndex = cart.findIndex((obj) => obj.name === product.name);

    if (productIndex !== -1) {
      cart.splice(productIndex, 1);
    }

    setCart(cart);
    localStorage.setItem('shopper-cart', JSON.stringify(cart));
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
          <IconButton aria-label="delete" onClick={() => removeItem(product)}>
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
