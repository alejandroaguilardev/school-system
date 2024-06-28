import { SnackbarProvider } from 'notistack';
import Router from './app/routes/sections';
import ThemeDefaultProvider from './theme/ThemeDefaultProver';


export default function App() {

  return (
    <ThemeDefaultProvider>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </ThemeDefaultProvider>
  );
}
