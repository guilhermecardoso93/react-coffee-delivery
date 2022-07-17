import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'



export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffe Delivery </h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

