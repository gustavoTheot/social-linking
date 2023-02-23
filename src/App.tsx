import { ThemeProvider } from 'styled-components'
import { AppStyled } from './AppStyled'
import { Profile } from './components/Profile'
import { SocialLink } from './components/SocialLink'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppStyled>
        <GlobalStyle />
        <Profile />
        <SocialLink />
      </AppStyled>
    </ThemeProvider>
  )
}

export default App
