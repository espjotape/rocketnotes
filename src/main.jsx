import React  from 'react'
import ReactDOM  from 'react-dom/client'

import { Details } from './pages/Details/index.jsx'
import { Home } from './pages/Home/index.jsx'
import { SignIn } from './pages/SignIn/index.jsx'
import { SignUp } from './pages/SingUp/index.jsx'
import { Profile } from './pages/Profile/index.jsx'
import { New } from './pages/New/index.jsx'

import GlobalStyles from "./styles/global.js"

import { ThemeProvider } from 'styled-components' 
import theme from './styles/theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New/> 
    </ThemeProvider>
  </React.StrictMode>,
)
