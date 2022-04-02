import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
