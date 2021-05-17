import { Container, ThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import Editor from './components/Editor';
import theme from './theme';

const customTheme = createMuiTheme(theme)

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Container
        maxWidth='lg'
        style={{
          minHeight: window.innerHeight,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <Editor />
      </Container>
    </ThemeProvider>
  );
}

export default App;
