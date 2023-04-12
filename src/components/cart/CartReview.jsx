import { Button, TextField, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import CartContext from '../../contexts/CartContext';
import { postOrder } from '../../services/service';

export default function CartReview() {
  const { cart, setCart } = useContext(CartContext);
  const disabled = (cart.length === 0
    || cart.some((product) => product.amount > product.qty_stock));
  const totalCost = Number(cart.filter((product) => product.amount <= product.qty_stock)
    .reduce((sum, record) => sum + (record.amount * record.price), 0).toFixed(2));
  const [order, setOrder] = useState({
    name: '',
    deliveryDate: ''
  });

  function updateInput(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  function resetForm() {
    setOrder({
      name: '',
      deliveryDate: ''
    });
  }

  async function sendOrder(e) {
    e.preventDefault();

    const orderInfo = {
      customerName: order.name,
      deliveryDate: new Date(order.deliveryDate),
      totalCost,
      products: cart
    };

    if (orderInfo.deliveryDate <= new Date()) {
      alert('A data de entrega deve ser maior que hoje');
      return;
    }

    try {
      await postOrder(orderInfo);
      resetForm();
      setCart([]);
      localStorage.removeItem('shopper-cart');
      alert('Seu pedido foi registrado, obrigado');
    } catch (error) {
      resetForm();
      alert('Não foi possível, tente novamente');
      console.error(error);
    }
  }

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: 'right', fontWeight: 700 }}>
        {`Custo total: R$ ${totalCost}`}
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
