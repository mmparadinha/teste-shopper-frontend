import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProductsContainer from './ProductsContainer';
import Item from '../items/Item';
import { getAllProducts } from '../../services/service';
import TemporaryDrawer from '../cart/cartDrawer';

function Homepage() {
  const [products, setProducts] = useState(null);

  async function listProducts() {
    try {
      const res = await getAllProducts();
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <TemporaryDrawer />

      <Typography variant="h1" mt={5}>
        Shopper
      </Typography>
      <Typography variant="subtitle1" mb={5}>
        Compras inteligentes. Vida inteligente.
      </Typography>

      <ProductsContainer>
        {products && products.map((product) => <Item key={product.id} product={product} />)}
      </ProductsContainer>

    </Container>
  );
}

export default Homepage;
