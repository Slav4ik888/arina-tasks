import { FC } from 'react';
import { AppRouter } from './providers/router';
// Components
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// Styles
import s from './index.module.scss';



const App: FC = () => {

  return (
    <div className={s.mainPage}>
      <div className={s.body}>
        <Navbar />
        <AppRouter />
      </div>

      <Footer>
        {`© ${new Date().getFullYear()} Created by Slav4ik888`}
      </Footer>
    </div>
  );
}

export default App;
//  git add . && git commit -m "end big refact" && git push origin refact
