import { Box, useTheme } from "@mui/material"
import { paths } from "../app/routes/paths"
import CardTitle from "../components/ui/card/Card"
import { RouterLink } from "../app/routes/components"
import Link from '@mui/material/Link';

const titles = [
    { name: "profesores", link: paths.teachers.root },
    { name: "estudiantes", link: paths.students.root },
    { name: "clases", link: paths.classrooms.root },
]

export const HomeView = () => {
    const theme = useTheme();
    return (
        <Box
            gap={3}
            display="grid"
            gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
            }}
        >
            {titles.map(({ name, link }) =>
                <Link key={name} component={RouterLink} href={link} sx={{ display: 'flex', alignItems: 'center', color: theme.palette.text.primary }}>
                    <CardTitle
                        title={name}
                    />
                </Link>
            )}
        </Box>
    )
}
