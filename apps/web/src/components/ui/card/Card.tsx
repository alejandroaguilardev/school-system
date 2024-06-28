import { Card, Stack, Avatar, ListItemText } from '@mui/material';

type Props = {
    title: string;
};

export default function CardTitle({ title }: Props) {

    return (
        <Card sx={{ minHeight: 250, width: "100%", display: "flex", justifyContent: "center" }}>
            <Stack p={3} pb={2} direction="row" alignItems="center" spacing={2} >
                <Avatar
                    variant="rounded"
                    alt={title}
                    sx={{ width: 48, height: 48, mb: 2 }}
                />
                <ListItemText
                    sx={{ mb: 1 }}
                    primary={title.toUpperCase()} primaryTypographyProps={{
                        typography: 'subtitle1',
                    }}
                    secondary="Acceda a la funcionalidad"
                    secondaryTypographyProps={{
                        component: 'span',
                        typography: 'caption',
                        color: 'text.disabled',
                    }}
                />
            </Stack>
        </Card >
    );
}
