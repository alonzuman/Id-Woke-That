import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import theme from './theme';
import { QueryClient, QueryClientProvider } from 'react-query'
import EditorProvider from './providers/EditorProvider';
import Router from './Router';
import useCustomTheme from './hooks/useCustomTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

const queryClient = new QueryClient()

function App() {
  const { theme } = useCustomTheme()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <EditorProvider>
          <Router />
        </EditorProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
