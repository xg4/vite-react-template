import { QueryClient, QueryClientProvider } from 'react-query'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './hooks/theme/provider'

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
