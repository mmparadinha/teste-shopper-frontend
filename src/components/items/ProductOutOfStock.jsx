import { Typography } from '@mui/material';

export default function ProductOutOfStock({ product }) {
  return (
    <Typography color="text.secondary">
      <span>{`R$ ${product.price}`}</span>
      <br />
      <span style={{ color: '#ff0000' }}>Fora de estoque!</span>
    </Typography>
  );
}
