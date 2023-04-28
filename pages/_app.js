import MainLayout from '../src/components/layouts/main-layout';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../styles/globals.css';
import '../styles/general.sass';
import { AnimatePresence } from 'framer-motion';


// import NavbarT from '../src/Navbar'
//import { AppProvider } from '../src/context';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
        <AnimatePresence mode="wait" initial="false">
            <MainLayout>       
              <Component key={router.pathname} {...pageProps} />    
            </MainLayout>
        </AnimatePresence>

    </>
    );
}

export default MyApp;
