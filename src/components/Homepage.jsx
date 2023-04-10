import { useEffect, useState } from 'react';
import MainContainer from './MainContainer';
import Item from './items/Item';
import { getAllProducts } from '../services/service';

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
    <MainContainer>
      {products && products.map((product) => <Item key={product.id} product={product} />)}
    </MainContainer>
  );
}

export default Homepage;
