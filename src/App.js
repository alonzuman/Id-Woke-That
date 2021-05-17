import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import theme from './theme';
import { QueryClient, QueryClientProvider } from 'react-query'
import Main from './components/Main';

const queryClient = new QueryClient()
const customTheme = createMuiTheme(theme)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <Main />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
