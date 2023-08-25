import { Vaga as VagaEmprego, TituloVaga, LinkVaga } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const InformacoesVaga = (props: Props) => (
  <>
    <TituloVaga>{props.titulo}</TituloVaga>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
  </>
)

const Vaga = (props: Props) => (
  <VagaEmprego>
    <InformacoesVaga
      titulo={props.titulo}
      localizacao={props.localizacao}
      nivel={props.nivel}
      modalidade={props.modalidade}
      salarioMin={props.salarioMin}
      salarioMax={props.salarioMax}
      requisitos={props.requisitos}
    />
    <LinkVaga href="#">Ver detalhes e candidatar-se</LinkVaga>
  </VagaEmprego>
)

export default Vaga
