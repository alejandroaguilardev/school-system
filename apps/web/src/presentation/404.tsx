import { Box, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RouterLink } from '../app/routes/components';
import { paths } from '../app/routes/paths';

export default function NotFoundView() {

  return (
    <>
      <Typography variant="h3" sx={{ mb: 2, textAlign: 'center', mt: 10 }}>
        ¡Lo siento, página no encontrada!
      </Typography>

      <Typography sx={{ textAlign: 'center', color: 'text.secondary', mb: 5 }}>
        Lo sentimos, no pudimos encontrar la página que estás buscando. ¿Quizás has escrito mal la URL? Asegúrate de revisar la ortografía.
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="center">
        <Button component={RouterLink}
          href={paths.root}

          size="large" variant="contained" sx={{ textAlign: 'center', mt: 2 }}>
          Ir a la página de inicio
        </Button>
      </Box>
    </>
  );
}
