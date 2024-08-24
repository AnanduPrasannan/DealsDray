import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient,QueryClientProvider} from 'react-query'
import { AppContextProvider } from './context/AppContext.jsx'

const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
<AppContextProvider>

    <App />
</AppContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
