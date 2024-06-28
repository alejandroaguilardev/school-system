import { Helmet } from 'react-helmet-async';
import { HomeView } from '../../presentation/Home';


export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Inicio</title>
            </Helmet>

            <HomeView />
        </>
    );
}
