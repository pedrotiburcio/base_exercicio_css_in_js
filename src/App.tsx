import { ThemeProvider } from 'styled-components'
import Titulo from './components/Cabecalho'
import EstiloGlobal, { Container } from './styled'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import temaLight from './themes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Titulo>EBAC Jobs</Titulo>
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
