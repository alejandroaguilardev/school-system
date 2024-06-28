import { Container } from "@mui/material";
import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const MainDefault: FC<Props> = ({ children }) => {
    return (
        <Container sx={{ padding: 2 }}>
            {children}
        </Container>
    )
}
