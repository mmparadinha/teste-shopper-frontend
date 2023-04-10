import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import DescriptionBox from './DescriptionBox';
import AddButton from './AddButton';
import CardContentNoPadding from './CardContentNoPadding';

export default function Item({ product }) {
  return (
    <Card sx={{ width: 200, height: 200, p: 1 }}>
      <CardContentNoPadding>
        <Tooltip disableFocusListener disableTouchListener title={product.name}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              height: 129,
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
          <Typography color="text.secondary">
            <p>
              {`R$ ${product.price}`}
            </p>
            <p>
              {`Em estoque: ${product.qty_stock}`}
            </p>
          </Typography>

          <AddButton variant="contained"><AddIcon /></AddButton>
        </DescriptionBox>

      </CardContentNoPadding>
    </Card>
  );
}
