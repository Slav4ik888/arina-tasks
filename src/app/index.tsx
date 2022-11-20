import { FC } from 'react';
import { AppRouter } from './providers/router';
// Components
import { Navbar, Footer } from '../features/navbar';
// Styles
import s from './index.module.scss';



const App: FC = () => {

  return (
    <div className={s.mainPage}>
      <div className={s.body}>
        <Navbar />
        <AppRouter />
      </div>

      <Footer />
    </div>
  );
}

export default App;
//  git add . && git commit -m "fix webpack" && git push origin master
