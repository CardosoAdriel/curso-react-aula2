import { useState, Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Styles from './App.module.css' // forma de trabalhar com CSS modules
import Card from './components/Card/Card'
import Image from './components/Image/Image'
import Text from './components/Text/Text'
import ContentCard from './components/ContentCard/ContentCard'

//Exemplo de componentes com Classes css, depreciados por conta da utilização dos hooks que so funcionam com componentes funcionais.
// class Greeting extends Component {
//   constructor(props) {
//     super(props)
//     this.children = props.children
//   }

//   render() {
//     return <h1>{this.children}</h1>
//   }
// }

function App() {

  return (
    <div className='main'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <svg dataTestid="AddReactionIcon"></svg>
      </div>

      {/* {
        Aqui abaixo vemos uma estrutura de elementos componentizados, a forma ideal de se utilizar com o react
        Acessar o componente Text para ver explicações de propriedades e componentes.
      } */}
      <Card>
        <Image />
        <ContentCard>
          <Text
            elemento="h3"
            estilo="title"
            conteudo='Smart TV Samsung 75" Crystal UHD 4K UN75BU8000GXZD 2022 Dynamic Crystal Color Design Air Slim'
          />
          <Text elemento="h1" estilo="price" conteudo="R$ 4.999,00" />
          <Text elemento="p" estilo="paragraph" conteudo="Tive uma philips com menos de 2 ..." />

          <button className='button_card'> saiba mais</button>
        </ContentCard>
      </Card>
    </div>
  )
}

export default App
