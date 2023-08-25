import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
}

const Titulo = ({ children }: Props) => <TituloEstilo>{children}</TituloEstilo>

export default Titulo
