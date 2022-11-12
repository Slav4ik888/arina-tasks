import { StoreProvider } from 'app/providers/store';
import { ThemeProvider } from 'app/providers/theme';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const
  container = document.getElementById('root'),
  root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
);
