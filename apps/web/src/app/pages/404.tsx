import { Helmet } from 'react-helmet-async';
import NotFoundView from '../../presentation/404';


export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Página no encontrada!</title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
