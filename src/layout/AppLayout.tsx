import { Outlet, useLocation } from 'react-router';

import BottomNavigationBar from '@components/bottomNavigationBar/BottomNavigationBar';
import Footer from '@components/footer/Footer';
import GlobalNavigationBar from '@components/globalNavigationBar/GlobalNavigationBar';
import { useScrollToTop } from '@hooks/useScrollToTop';

import * as styles from './AppLayout.css';

const AppLayout = () => {
  useScrollToTop();
  const { pathname } = useLocation();

  const isMentoPage = pathname === '/mento';

  return (
    <div className={styles.layout}>
      <GlobalNavigationBar isSticky={isMentoPage} />
      <main className={styles.main}>
        <Outlet />
        <Footer />
      </main>

      <BottomNavigationBar />
    </div>
  );
};

export default AppLayout;
