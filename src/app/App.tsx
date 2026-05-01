import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppProviders } from './providers'
import { Home } from '../features/home/components/home'
import { AboutUs } from '../features/about_us/components/about_us'
import { Services } from '../features/services/components/services'
import { Contact } from '../features/contact/components/contact'

/**
 * All navigation pages
 */
export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutUs /> },
  { path: 'services', element: <Services /> },
  { path: '/contact', element: <Contact /> },
]

const App = () => {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </AppProviders>
  )
}

export default App
