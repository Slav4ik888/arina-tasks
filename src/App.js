import React, {Component, lazy, Suspense} from 'react';
import s from './App.module.css';

// import Tasks from './pages/Tasks/tasks.jsx';

import {Layout} from 'antd';

// import {ReactComponent as ReactLogoSvg} from './logo.svg';
// import {ReactComponent as wordsList} from './components/Cards/wordsList.js';

const Tasks = lazy(() => import('./pages/Tasks/tasks.jsx'));
const {Content, Footer} = Layout;


class App extends Component {

  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={s.container}>
            <div className={s.header}>
              <Layout>
                <Content>
                  <Tasks />
                </Content>
                <Footer style={{ textAlign: 'center' }}> © 2020 Created by Slav4ik888</Footer>
              </Layout>
            </div>
          </div>
        </Suspense>
      </>
    );
  }
}

export default App;
