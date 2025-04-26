//Componentes reutilizables para la estructura de la aplicación

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
