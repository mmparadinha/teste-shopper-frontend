import { Button, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import CartContext from '../../contexts/CartContext';

export default function CartReview() {
  const { cart } = useContext(CartContext);
  const disabled = cart.some((product) => product.amount > product.qty_stock);
  const [order, setOrder] = useState({
    name: '',
    deliveryDate: '',
    products: cart
  });

  function updateInput(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  function resetForm() {
    setOrder({
      name: '',
      deliveryDate: '',
      products: []
    });
  }

  async function sendOrder(e) {
    e.preventDefault();
    console.log('mandei pedido', order);

    try {
      // const response = await postLogin(login);
    } catch (error) {
      resetForm();
      alert('Não foi possível logar, tente novamente');
      console.error(error);
    }
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: 'right', fontWeight: 700 }}>
        {`Custo total: R$ ${cart.filter((product) => product.amount <= product.qty_stock)
          .reduce((sum, record) => sum + (record.amount * record.price), 0).toFixed(2)}`}
      </Typography>

      <form style={{ display: 'flex', flexDirection: 'column', gap: 15 }} onSubmit={sendOrder}>
        <TextField
          disabled={disabled}
          required
          label="Nome"
          type="text"
          name="name"
          onChange={(e) => updateInput(e)}
          value={order.name}
          variant="filled"
        />
        <TextField
          disabled={disabled}
          required
          type="date"
          name="deliveryDate"
          onChange={(e) => updateInput(e)}
          value={order.deliveryDate}
          variant="filled"
          helperText="Data de entrega*"
        />
        <Button
          disabled={disabled}
          variant="contained"
          aria-label="Finalizar pedido"
          type="submit"
        >
          Finalizar pedido
        </Button>
      </form>
    </>
  );
}
