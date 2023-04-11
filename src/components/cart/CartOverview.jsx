import { useContext } from 'react';
import { Card, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../contexts/CartContext';

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
      <Card key={product.id} sx={{ p: 1 }}>
        {product.amount > product.qty_stock
          ? (
            <Typography sx={{ color: 'red' }}>
              {`Sem estoque, apenas ${product.qty_stock} disponíveis`}
            </Typography>
          )
          : ''}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
        </div>

      </Card>
    ))
  );
}
