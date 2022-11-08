import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from 'shared/ui/page-wrapper';
import { routeConfig } from '../config';



export const AppRouter: FC = () => (
  <Routes>
    {
      Object
        .values(routeConfig)
        .map(({ path, element }) => (
          <Route
            key     = {path}
            path    = {path}
            element = {
              <PageWrapper>
                {element}
              </PageWrapper>
            }
          />
        ))
    }
  </Routes>
);
