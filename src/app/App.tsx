import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppProviders } from './providers'
import { Home } from '../features/home/components/home'
import { AboutUs } from '../features/about_us/components/about_us'
import { Services } from '../features/services/components/services'
import { Contact } from '../features/contact/components/contact'
import { ThemeProvider } from 'styled-components'
import { theme } from '../features/shared/domain_logic/theme'

/**
 * All navigation pages
 */
export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutUs /> },
  { path: 'services', element: <Services /> },
  { path: '/contact', element: <Contact /> },
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
