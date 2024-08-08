import { Container, Typography } from '@mui/material';

const Full = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Full Page Layout
      </Typography>
      <Typography variant="body1">
        This is a simple full page layout with Material-UI.
      </Typography>
    </Container>
  );
};

export default Full;
