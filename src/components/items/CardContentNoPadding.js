import styled from '@emotion/styled';
import { CardContent } from '@mui/material';

const CardContentNoPadding = styled(CardContent)(`
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:last-child {
    padding-bottom: 0;
  }
`);

export default CardContentNoPadding;
