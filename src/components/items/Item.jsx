import { useContext } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import DescriptionBox from './DescriptionBox';
import AddButton from './AddButton';
import CardContentNoPadding from './CardContentNoPadding';
import ProductOutOfStock from './ProductOutOfStock';
import ProductInStock from './ProductInStock';
import CartContext from '../../contexts/CartContext';

export default function Item({ product }) {
  const { cart, setCart } = useContext(CartContext);

  function addItem() {
    let products = [];
    const productIndex = cart.findIndex((obj) => obj.name === product.name);

    if (productIndex !== -1) {
      cart[productIndex].amount += 1;
      products = cart;
    } else {
      products = [...cart, {
        ...product,
        amount: 1
      }];
    }

    setCart(products);
    localStorage.setItem('shopper-cart', JSON.stringify(products));
  }

  return (
    <Card sx={{ width: 200, height: 200, p: 1 }}>
      <CardContentNoPadding>
        <Tooltip disableFocusListener title={product.name} placement="top">
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '4',
              WebkitBoxOrient: 'vertical'
            }}
          >
            {product.name}
          </Typography>
        </Tooltip>

        <DescriptionBox>
          {product.qty_stock === 0
            ? <ProductOutOfStock product={product} /> : <ProductInStock product={product} />}

          <AddButton
            variant="contained"
            aria-label="add"
            onClick={() => addItem()}
            disabled={product.qty_stock === 0}
          >
            <AddIcon />
          </AddButton>
        </DescriptionBox>

      </CardContentNoPadding>
    </Card>
  );
}
