import { Typography } from '@mui/material';

export default function ProductInStock({ product }) {
  return (
    <Typography color="text.secondary">
      <span style={{ color: '#1a8604', fontWeight: 700 }}>{`R$ ${product.price}`}</span>
      <br />
      <span>{`Em estoque: ${product.qty_stock}`}</span>
    </Typography>
  );
}
