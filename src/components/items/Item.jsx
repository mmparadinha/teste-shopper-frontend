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
        <Tooltip disableFocusListener title={product.name}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              height: 128,
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
            ? (
              <Typography color="text.secondary">
                <span>{`R$ ${product.price}`}</span>
                <br />
                <span style={{ color: '#ff0000' }}>Fora de estoque!</span>
              </Typography>
            )
            : (
              <Typography color="text.secondary">
                <span style={{ color: '#1a8604', fontWeight: 700 }}>{`R$ ${product.price}`}</span>
                <br />
                <span>{`Em estoque: ${product.qty_stock}`}</span>
              </Typography>
            )}

          <AddButton variant="contained" aria-label="add"><AddIcon /></AddButton>
        </DescriptionBox>

      </CardContentNoPadding>
    </Card>
  );
}
