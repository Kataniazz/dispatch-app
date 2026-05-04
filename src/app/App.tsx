import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppProviders } from './providers'
import { Home } from '../features/home/components/home'
import { ThemeProvider } from 'styled-components'
import { theme } from '../features/shared/domain_logic/theme'

export const routes = [
    { path: '/', element: <Home /> }
]

const mode = "light";

const App = () => {
  return (
    <ThemeProvider theme={{ ...theme, mode }}>
      <AppProviders>
        <BrowserRouter>
          <Routes>
                {routes.map((route) => (
                    <Route key={route.path} {...route} />
                ))}
          </Routes>
        </BrowserRouter>
      </AppProviders>
    </ThemeProvider>
  )
}

export default App
