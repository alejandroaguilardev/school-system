
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import { themeDefault } from './default-theme';

type Props = {
    children: ReactNode
}
function ThemeDefaultProver({ children }: Props) {
    return (
        <ThemeProvider theme={themeDefault}>
            <CssBaseline /> {/* This normalizes the CSS */}
            {children}
        </ThemeProvider>
    );
}

export default ThemeDefaultProver;
