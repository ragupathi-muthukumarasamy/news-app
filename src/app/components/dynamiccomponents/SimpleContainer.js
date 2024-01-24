import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function SimpleContainer(props) {
  const {data} = props
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      {data.data}
      </Container>
    </React.Fragment>
  );
}