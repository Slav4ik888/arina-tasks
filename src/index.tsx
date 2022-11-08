import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from 'app/providers/theme';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';


render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
