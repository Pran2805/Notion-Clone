import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI"',
      'system-ui',
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
