import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import DescriptionBox from './DescriptionBox';
import AddButton from './AddButton';
import CardContentNoPadding from './CardContentNoPadding';

export default function Item({ data }) {
  return (
    <Card sx={{ width: 200, height: 200, p: 1 }}>
      <CardContentNoPadding>
        <Tooltip disableFocusListener disableTouchListener title={data.name}>
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
            {data.name}
          </Typography>
        </Tooltip>

        <DescriptionBox>
          <Typography color="text.secondary">
            <p>
              {`R$ ${data.price}`}
            </p>
            <p>
              Em estoque
            </p>
          </Typography>

          <AddButton variant="contained"><AddIcon /></AddButton>
        </DescriptionBox>

      </CardContentNoPadding>
    </Card>
  );
}
