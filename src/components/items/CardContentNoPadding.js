import styled from '@emotion/styled';
import { CardContent } from '@mui/material';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;

  &:last-child {
    padding-bottom: 0;
  }
`);

export default CardContentNoPadding;
