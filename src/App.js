import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import theme from './theme';
import { QueryClient, QueryClientProvider } from 'react-query'
import EditorProvider from './providers/EditorProvider';
import Router from './Router';

const queryClient = new QueryClient()
const customTheme = createMuiTheme(theme)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <EditorProvider>
          <Router />
        </EditorProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
