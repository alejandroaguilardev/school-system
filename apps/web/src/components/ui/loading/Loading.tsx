import { Box, CircularProgress, Typography } from '@mui/material';

export const Loading = ({ message = 'Loading...', size = 40 }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <CircularProgress size={size} />
            <Typography variant="body1" mt={2}>
                {message}
            </Typography>
        </Box>
    );
};